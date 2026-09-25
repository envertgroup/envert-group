import urllib.request
import ssl
import re
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}

for u in [
    "https://www.envertgroup.com/energy",
    "https://www.envertgroup.com/publication",
    "https://www.envertgroup.com/icst",
    "https://www.envertgroup.com/fashion-lifestyle",
    "https://www.envertgroup.com/afield-gallery",
    "https://www.envertgroup.com/envert-foundation",
    "https://www.envertgroup.com/transport-electric"
]:
    req = urllib.request.Request(u, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as r:
        html = r.read().decode("utf-8", errors="ignore")
        print("\n" + "="*70)
        print("URL:", u)
        
        # Look for intermediate iframe src or data
        iframes = re.findall(r'<iframe[^>]+>', html)
        for ifr in iframes:
            print("  IFRAME:", ifr)
            
        # Search for any embedded JSON data or site model
        js_data = re.findall(r'window\.WIZ_global_data\s*=\s*(\{.*?\});', html, re.DOTALL)
        if js_data:
            print("  WIZ_global_data keys:", list(json.loads(js_data[0]).keys()) if js_data else [])

        # Search for external URLs, Google Drive links, docs, etc.
        external_urls = set(re.findall(r'https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/[^\s"\'<>]*', html))
        relevant = [x for x in external_urls if not any(skip in x for skip in ['gstatic.com', 'google.com/search', 'fonts.googleapis.com', 'apis.google.com', 'accounts.google.com'])]
        print("  External links:", relevant[:10])

        # Find any text inside paragraphs, spans, headers in the main content container
        # Google sites wraps content in role="main"
        main_match = re.search(r'<div[^>]+role="main"[^>]*>(.*?)</div>\s*</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
        if main_match:
            # strip tags
            raw = re.sub(r'<[^>]+>', '\n', main_match.group(1))
            lines = [l.strip() for l in raw.split('\n') if l.strip()]
            print("  Main lines:", lines[:15])
