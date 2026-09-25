#!/usr/bin/env python3
import urllib.request
import urllib.parse
import ssl
import json
import re
import os
from html.parser import HTMLParser

urls = [
    "https://www.envertgroup.com",
    "https://www.envertgroup.com/energy",
    "https://www.envertgroup.com/publication",
    "https://www.envertgroup.com/transport-electric",
    "https://www.envertgroup.com/icst",
    "https://www.envertgroup.com/pen-ink",
    "https://www.envertgroup.com/fashion-lifestyle",
    "https://www.envertgroup.com/career",
    "https://www.envertgroup.com/afield-gallery",
    "https://www.envertgroup.com/envert-foundation",
    "https://www.envertgroup.com/startup-idea-envert-wellness"
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
}

class HTMLTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_parts = []
        self.images = []
        self.headings = []
        self.links = []
        self.in_script = False
        self.curr_tag = None

    def handle_starttag(self, tag, attrs):
        self.curr_tag = tag
        if tag in ["script", "style", "noscript"]:
            self.in_script = True
        elif tag == "img":
            attr_dict = dict(attrs)
            if "src" in attr_dict:
                self.images.append(attr_dict)
        elif tag == "a":
            attr_dict = dict(attrs)
            if "href" in attr_dict:
                self.links.append(attr_dict["href"])

    def handle_endtag(self, tag):
        if tag in ["script", "style", "noscript"]:
            self.in_script = False
        self.curr_tag = None

    def handle_data(self, data):
        if not self.in_script:
            cleaned = data.strip()
            if cleaned:
                if self.curr_tag in ["h1", "h2", "h3", "h4", "h5", "h6"]:
                    self.headings.append((self.curr_tag, cleaned))
                self.text_parts.append(cleaned)

results = {}
for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as r:
            html = r.read().decode("utf-8", errors="ignore")
            parser = HTMLTextExtractor()
            parser.feed(html)
            results[u] = {
                "headings": parser.headings,
                "text": "\n".join(parser.text_parts),
                "images": parser.images,
                "links": parser.links,
                "raw_html_length": len(html)
            }
            print(f"[OK] {u} -> text items: {len(parser.text_parts)}, headings: {len(parser.headings)}, images: {len(parser.images)}")
    except Exception as e:
        print(f"[ERR] {u} -> {e}")

output_path = os.path.join(os.path.dirname(__file__), "scraped_site_content.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print(f"Scraped content saved to {output_path}")
