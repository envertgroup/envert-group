#!/usr/bin/env python3
"""
EnVERT Group — Recursive Site & Image Scraper
==============================================
Recursively crawls a website (default: https://www.envertgroup.com),
extracts all <img> tags across all discovered internal pages,
downloads the authentic images, organizes them into folders by page/section,
and produces a comprehensive manifest.json metadata file.

Usage:
    python3 scripts/scrape_all_images.py
    python3 scripts/scrape_all_images.py --url https://www.envertgroup.com --output ./public/assets/scraped_images
    python3 scripts/scrape_all_images.py --help
"""

import os
import re
import sys
import json
import time
import ssl
import hashlib
import argparse
import urllib.parse
import urllib.request
from typing import Set, List, Dict, Optional, Tuple

# Ignore SSL verification errors for local scraper runs
SSL_CONTEXT = ssl.create_default_context()
SSL_CONTEXT.check_hostname = False
SSL_CONTEXT.verify_mode = ssl.CERT_NONE

DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Referer": "https://www.envertgroup.com/",
}

VALID_IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".ico"}


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Recursively crawl a website and download all images from <img> tags."
    )
    parser.add_argument(
        "--url",
        default="https://www.envertgroup.com",
        help="Root target website URL to crawl recursively (default: https://www.envertgroup.com)",
    )
    parser.add_argument(
        "--output",
        default=os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            "public",
            "assets",
            "scraped_images",
        ),
        help="Destination directory to save downloaded images (default: public/assets/scraped_images/)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.3,
        help="Polite request delay in seconds between page crawls (default: 0.3s)",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=100,
        help="Maximum number of pages to crawl (default: 100)",
    )
    return parser.parse_args()


def normalize_url(url: str, base_url: str) -> str:
    """Normalize and resolve relative URLs, stripping fragments and query parameters."""
    resolved = urllib.parse.urljoin(base_url, url.strip())
    parsed = urllib.parse.urlparse(resolved)
    # Strip query parameters and anchors for canonical crawling
    return urllib.parse.urlunparse((parsed.scheme, parsed.netloc, parsed.path.rstrip("/") or "/", "", "", ""))


def is_internal_url(url: str, root_domain: str) -> bool:
    """Verify if the URL belongs to the target domain."""
    parsed = urllib.parse.urlparse(url)
    netloc = parsed.netloc.lower()
    return root_domain in netloc or netloc.endswith("google.com/viewer")


def sanitize_folder_name(path: str) -> str:
    """Convert page URL path into a safe directory name."""
    clean = path.strip("/").replace("/", "_")
    clean = re.sub(r"[^a-zA-Z0-9_\-]", "_", clean)
    return clean or "home"


def fetch_html(url: str) -> Optional[str]:
    """Fetch HTML content from a URL."""
    try:
        req = urllib.request.Request(url, headers=DEFAULT_HEADERS)
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=15) as resp:
            content_type = resp.headers.get("Content-Type", "")
            if "text/html" in content_type:
                return resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"  [!] Failed to fetch {url}: {e}")
    return None


def extract_links_and_images(html: str, page_url: str, root_domain: str) -> Tuple[Set[str], List[Dict[str, str]]]:
    """
    Finds:
      1. All <a> href links to recursively discover next pages.
      2. All <img> tags and extracts their src, alt, data-src, and srcset.
    """
    discovered_links: Set[str] = set()
    found_images: List[Dict[str, str]] = []

    # 1. Recursive internal links
    href_pattern = re.compile(r'<a[^>]+href=[\"\']([^\"\']+)[\"\']', re.IGNORECASE)
    for match in href_pattern.findall(html):
        if match.startswith(("mailto:", "tel:", "javascript:", "#")):
            continue
        normalized = normalize_url(match, page_url)
        if is_internal_url(normalized, root_domain):
            discovered_links.add(normalized)

    # 2. Extract <img> tags
    img_tag_pattern = re.compile(r'<img\b([^>]*)>', re.IGNORECASE)
    for tag_match in img_tag_pattern.finditer(html):
        attrs_str = tag_match.group(1)

        src_match = re.search(r'src=[\"\']([^\"\']+)[\"\']', attrs_str, re.IGNORECASE)
        alt_match = re.search(r'alt=[\"\']([^\"\']*)[\"\']', attrs_str, re.IGNORECASE)
        data_src_match = re.search(r'data-src=[\"\']([^\"\']+)[\"\']', attrs_str, re.IGNORECASE)

        # Primary src
        raw_src = (src_match.group(1) if src_match else None) or (data_src_match.group(1) if data_src_match else None)
        if not raw_src or raw_src.startswith("data:"):
            continue

        resolved_src = urllib.parse.urljoin(page_url, raw_src.strip())
        alt_text = alt_match.group(1).strip() if alt_match else ""

        found_images.append({
            "src": resolved_src,
            "alt": alt_text,
            "page_url": page_url,
        })

    # Also detect background-image: url(...) styles that contain assets
    bg_pattern = re.compile(r'url\([\"\']?([^\"\'\)]+)[\"\']?\)', re.IGNORECASE)
    for bg_url in bg_pattern.findall(html):
        if bg_url.startswith(("data:", "about:")):
            continue
        resolved_bg = urllib.parse.urljoin(page_url, bg_url.strip())
        parsed_bg = urllib.parse.urlparse(resolved_bg)
        ext = os.path.splitext(parsed_bg.path)[1].lower()
        if ext in VALID_IMAGE_EXTENSIONS or "googleusercontent.com" in parsed_bg.netloc:
            found_images.append({
                "src": resolved_bg,
                "alt": "Background asset",
                "page_url": page_url,
            })

    return discovered_links, found_images


def download_single_image(img_url: str, output_folder: str, page_slug: str, index: int) -> Optional[str]:
    """Download an image and save it into the target folder."""
    parsed = urllib.parse.urlparse(img_url)
    ext = os.path.splitext(parsed.path)[1].lower()
    if not ext or ext not in VALID_IMAGE_EXTENSIONS:
        ext = ".png"

    os.makedirs(output_folder, exist_ok=True)

    url_hash = hashlib.md5(img_url.encode("utf-8")).hexdigest()[:8]
    filename = f"{page_slug}_img_{index}_{url_hash}{ext}"
    local_path = os.path.join(output_folder, filename)

    # Skip re-downloading if already saved and valid
    if os.path.exists(local_path) and os.path.getsize(local_path) > 500:
        return local_path

    try:
        req = urllib.request.Request(
            img_url,
            headers={
                **DEFAULT_HEADERS,
                "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            },
        )
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=12) as resp:
            data = resp.read()
            # Verify body is not an error HTML document
            if data.startswith((b"<!DOCTYPE", b"<html", b"<?xml")) and b"<svg" not in data[:200]:
                return None
            if len(data) < 250:
                return None

            with open(local_path, "wb") as f:
                f.write(data)
            return local_path
    except Exception:
        return None


def run_crawler(root_url: str, output_dir: str, polite_delay: float, max_pages: int):
    root_parsed = urllib.parse.urlparse(root_url)
    root_domain = root_parsed.netloc.lower().replace("www.", "")

    print("\n" + "=" * 70)
    print(" ENVERT GROUP — RECURSIVE IMAGE SCRAPER")
    print(f" Target URL       : {root_url}")
    print(f" Output Directory : {output_dir}")
    print(f" Polite Delay     : {polite_delay}s")
    print("=" * 70)

    os.makedirs(output_dir, exist_ok=True)

    to_visit: List[str] = [root_url]
    visited: Set[str] = set()
    saved_manifest: List[Dict] = []
    seen_image_hashes: Set[str] = set()

    # Pre-populate known section endpoints for thoroughness
    seeds = [
        "/energy",
        "/transport-electric",
        "/corporate-training",
        "/icst",
        "/pen-ink",
        "/pen-ink/about-us",
        "/pen-ink/publication",
        "/pen-ink/curiosity-writing-awards",
        "/pen-ink/winners-2021",
        "/envert-foundation",
        "/career",
        "/fashion-lifestyle",
        "/afield-gallery",
        "/startup-idea-envert-wellness",
        "/publication",
        "/publication/career",
    ]
    for s in seeds:
        seed_url = urllib.parse.urljoin(root_url, s)
        if seed_url not in to_visit:
            to_visit.append(seed_url)

    page_counter = 0

    while to_visit and page_counter < max_pages:
        current_page = to_visit.pop(0)
        if current_page in visited:
            continue

        visited.add(current_page)
        page_counter += 1
        parsed_page = urllib.parse.urlparse(current_page)
        page_slug = sanitize_folder_name(parsed_page.path)
        page_output_dir = os.path.join(output_dir, page_slug)

        print(f"\n[{page_counter}] Crawling: {current_page}")

        html = fetch_html(current_page)
        if not html:
            continue

        links, images = extract_links_and_images(html, current_page, root_domain)
        print(f"    Discovered: {len(images)} <img> tags, {len(links)} internal links")

        # Queue discovered internal links
        for link in links:
            if link not in visited and link not in to_visit:
                to_visit.append(link)

        # Download images
        for idx, img_data in enumerate(images, start=1):
            src_url = img_data["src"]
            url_hash = hashlib.md5(src_url.encode("utf-8")).hexdigest()

            local_file = download_single_image(src_url, page_output_dir, page_slug, idx)
            if local_file and os.path.exists(local_file):
                size_kb = round(os.path.getsize(local_file) / 1024, 1)
                filename = os.path.basename(local_file)
                print(f"    ✓ Saved: {page_slug}/{filename} ({size_kb} KB)")

                saved_manifest.append({
                    "folder": page_slug,
                    "filename": filename,
                    "local_path": os.path.relpath(local_file, os.path.dirname(output_dir)),
                    "original_url": src_url,
                    "alt_text": img_data.get("alt", ""),
                    "page_url": current_page,
                    "size_kb": size_kb,
                })

        time.sleep(polite_delay)

    # Save manifest.json
    manifest_path = os.path.join(output_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as mf:
        json.dump(saved_manifest, mf, indent=2)

    print("\n" + "=" * 70)
    print(" SCRAPING SUMMARY")
    print(f" Total Pages Visited   : {len(visited)}")
    print(f" Total Images Downloaded: {len(saved_manifest)}")
    print(f" Output Location        : {output_dir}")
    print(f" Manifest Generated     : {manifest_path}")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    args = parse_arguments()
    run_crawler(
        root_url=args.url,
        output_dir=args.output,
        polite_delay=args.delay,
        max_pages=args.max_pages,
    )
