#!/usr/bin/env python3
"""Fill blank Shopify product image alt text.

Follows Moon Ridge SEO skill + WCAG 1.1.1 / WebAIM / Shopify product-alt guidance:
- Describe the specific product and brand
- Lead with brand + product, then type, material, and color when known
- No "image of" / "photo of"
- No keyword stuffing, no Rafter M
- Do not invent scene details we cannot see
- Keep under 125 characters
- Skip images that already have alt
"""

from __future__ import annotations

import csv
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

STORE = "raftermhatco.myshopify.com"
API = f"https://{STORE}/admin/api/2024-10/graphql.json"
OUT_CSV = Path(__file__).with_name("product-image-alts.csv")

VENDOR_DISPLAY = {
    "STETSON": "Stetson",
    "RESISTOL": "Resistol",
    "CHARLE 1 HORSE": "Charlie 1 Horse",
    "LUCCHESE": "Lucchese",
    "BIGALLI": "Bigalli",
    "Bigalli Hats USA": "Bigalli",
    "ARIAT": "Ariat",
    "CUTTER & BUCK": "Cutter & Buck",
    "DOBBS": "Dobbs",
    "Goorin Bros": "Goorin Bros.",
    "Pendleton": "Pendleton",
    "Moon Ridge Hats and Heritage": "Moon Ridge",
    "My Store": "Moon Ridge",
    "BLAZIN BREEZE": "Blazin Breeze",
    "TWISTER": "Twister",
    "AUSTIN ACCENT": "Austin Accent",
    "MASON JAR LABEL": "Mason Jar Label",
    "LYON Luminaries Candle Co.": "Lyon Luminaries",
    "Alan Pendergrass Robes": "Alan Pendergrass",
    "The Hat Harness": "Hat Harness",
    "Kalkedon Towels": "Kalkedon",
    "Levine Hat Company": "Levine",
    "Vibes Hat Company": "Vibes",
    "API Plastics": None,
    "SHY Designs, LLC": "SHY Designs",
    "Ellison+Young": "Ellison + Young",
    "Weddingstar Inc.": "Weddingstar",
    "Wonderfully Made": "Wonderfully Made",
    "BeWicked": "BeWicked",
    "Sixton London": "Sixton London",
    "Cthru Purses": "Cthru",
    "Timber Tinkers": "Timber Tinkers",
    "Comfy Cubs": "Comfy Cubs",
    "ACCITY": "Accity",
    "Tavi": "Tavi",
    "Northstar": "Northstar",
    "Stable Style": "Stable Style",
    "Clique": "Clique",
    "Crave by FW": "Crave",
    "Bread": "Bread",
    "Ayras World": "Ayra's World",
    "Avadir and Co": "Avadir",
    "Threaded Pear": "Threaded Pear",
}

CROWN_SHORT = {
    "Cattleman's": "cattleman's",
    "Gambler/Telescope/Buckaroo": "gambler",
    "Gambler/Telescope": "gambler",
    "Pinch Front/Teardrop/Diamond": "pinch-front",
    "CHL (Cool Hand Luke)": "Cool Hand Luke",
    "Gus/Tom Mix": "Gus",
    "Brick/Rounded Brick/Minnick": "brick",
    "Texas Punch": "Texas Punch",
    "Cutter": "cutter",
    "The Walker": "Walker",
    "Mule Kick/Horseshoe": "mule kick",
    "Open Crown": "open-crown",
}

TYPE_WORDS = (
    "hat",
    "cap",
    "fedora",
    "trilby",
    "panama",
    "open road",
    "trucker",
    "beanie",
    "visor",
    "bucket",
    "boot",
    "polo",
    "hoodie",
    "shirt",
    "tee",
    "sweatshirt",
    "towel",
    "candle",
    "necklace",
    "bracelet",
    "bandana",
    "scarf",
    "twilly",
    "robe",
    "bag",
    "tote",
    "wallet",
    "pouch",
    "band",
    "chain",
    "socks",
    "laces",
    "shoelace",
    "blanket",
    "throw",
    "gift card",
    "bolo",
)

SKIP_TOKENS = {
    "image",
    "img",
    "jpg",
    "png",
    "webp",
    "upload",
    "serve",
    "product",
    "shot",
    "screenshot2025",
    "untitleddesign",
    "fullsizerender",
    "newsize",
    "updated",
    "copy",
    "alt1",
    "alt2",
    "alt3",
    "alt4",
    "a1b2c3",
    "a1b2c3d4",
    "rafter",
    "moon",
    "ridge",
    "heritage",
    "company",
    "hats",
    "hat",
    "and",
    "the",
    "with",
    "for",
}

COLORS = {
    "black",
    "white",
    "navy",
    "tan",
    "natural",
    "khaki",
    "chocolate",
    "cream",
    "brown",
    "olive",
    "saddle",
    "red",
    "blue",
    "grey",
    "gray",
    "mushroom",
    "steel",
    "loden",
    "charcoal",
    "peach",
    "ivory",
    "silver",
    "gold",
    "pink",
    "green",
    "bone",
    "sand",
    "rust",
    "burgundy",
    "silverbelly",
    "mist",
    "oat",
    "camel",
    "cognac",
    "whiskey",
    "tobacco",
    "walnut",
    "espresso",
    "beige",
    "stone",
    "denim",
    "caribou",
    "sahara",
    "granite",
    "alabaster",
    "eucalyptus",
    "stonewash",
    "phantom",
}

VIEWS = {
    "top": "top view",
    "side": "side view",
    "back": "back view",
    "front": "front view",
    "detail": "detail",
    "interior": "interior",
    "label": "label",
}


def gql(query: str, variables: dict | None = None) -> dict:
    token = os.environ["SHOPIFY_ADMIN_API_TOKEN"]
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        API,
        data=body,
        headers={
            "X-Shopify-Access-Token": token,
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.load(resp)
    if data.get("errors"):
        raise RuntimeError(data["errors"])
    return data


def fetch_products() -> list[dict]:
    query = """
    query Products($cursor: String) {
      products(first: 80, after: $cursor) {
        pageInfo { hasNextPage endCursor }
        edges {
          node {
            id
            title
            vendor
            productType
            handle
            status
            options { name values }
            material: metafield(namespace: "custom", key: "material") { value }
            crown: metafield(namespace: "custom", key: "crown_shape") { value }
            media(first: 30) {
              edges {
                node {
                  ... on MediaImage {
                    id
                    alt
                    image { url }
                  }
                }
              }
            }
          }
        }
      }
    }
    """
    products: list[dict] = []
    cursor = None
    while True:
        data = gql(query, {"cursor": cursor})
        conn = data["data"]["products"]
        products.extend(edge["node"] for edge in conn["edges"])
        if not conn["pageInfo"]["hasNextPage"]:
            break
        cursor = conn["pageInfo"]["endCursor"]
        time.sleep(0.15)
    return products


def metafield_first(raw: dict | None) -> str:
    if not raw or not raw.get("value"):
        return ""
    value = raw["value"]
    try:
        parsed = json.loads(value)
        if isinstance(parsed, list) and parsed:
            return str(parsed[0])
        if isinstance(parsed, str):
            return parsed
    except json.JSONDecodeError:
        return str(value)
    return str(value)


def vendor_label(vendor: str) -> str | None:
    if vendor in VENDOR_DISPLAY:
        return VENDOR_DISPLAY[vendor]
    if vendor.isupper() and len(vendor) <= 24:
        return vendor.title()
    return vendor


def clean_material(raw: str) -> str:
    if not raw:
        return ""
    text = raw.strip()
    text = re.sub(r"^High Quality\s+", "", text, flags=re.I)
    text = re.sub(r"^Grade \d+\s+", "", text, flags=re.I)
    text = re.sub(r"Quality\s+", "", text, flags=re.I)
    return text.lower()


def clean_crown(raw: str) -> str:
    if not raw:
        return ""
    return CROWN_SHORT.get(raw, raw.split("/")[0].strip().lower())


def option_colors(product: dict) -> list[str]:
    for option in product.get("options") or []:
        if option["name"].lower() in {"color", "colour"}:
            return [value for value in option.get("values") or [] if value]
    return []


def filename_tokens(url: str) -> list[str]:
    fname = url.split("/")[-1].split("?")[0]
    stem = re.sub(r"\.[A-Za-z0-9]+$", "", fname)
    stem = re.sub(
        r"_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.*",
        "",
        stem,
        flags=re.I,
    )
    out = []
    for part in re.split(r"[-_]+", stem):
        token = part.lower()
        if not token or token.isdigit() or token in SKIP_TOKENS:
            continue
        if re.fullmatch(r"[a-f0-9]{8,}", token):
            continue
        out.append(token)
    return out


def filename_color(url: str) -> str:
    for token in filename_tokens(url):
        if token in COLORS:
            return token
    return ""


def filename_view(url: str) -> str:
    for token in filename_tokens(url):
        if token in VIEWS:
            return VIEWS[token]
    return ""


def type_noun(product: dict, crown: str, material: str) -> str:
    title = product["title"].lower()
    if any(word in title for word in TYPE_WORDS):
        return ""
    ptype = (product.get("productType") or "").lower()
    if ptype in {"headwear"}:
        if "open road" in title:
            return "cowboy hat"
        if "cattleman" in crown:
            return "cowboy hat"
        if "gambler" in crown:
            return "gambler hat"
        if "pinch" in crown and material and "felt" in material:
            return "fedora"
        return "hat"
    if ptype == "boots":
        return "boots"
    if ptype == "elastic shoelace":
        return "stretch shoelaces"
    if ptype == "gift cards":
        return "gift card"
    if title == "bolo":
        return "tie"
    return ""


def clip(text: str, limit: int = 125) -> str:
    text = re.sub(r"\s+", " ", text).strip(" ,")
    text = text.replace(" ,", ",")
    if len(text) <= limit:
        return text
    return text[: limit - 1].rsplit(" ", 1)[0] + "…"


def core_alt(product: dict) -> str:
    title = re.sub(r"\s+", " ", product["title"]).strip()
    title = title.replace(" - ", " ").replace("–", " ")
    brand = vendor_label(product.get("vendor") or "")
    material = clean_material(metafield_first(product.get("material")))
    crown = clean_crown(metafield_first(product.get("crown")))
    noun = type_noun(product, crown, material)

    parts = []
    if brand and brand.lower() not in title.lower():
        parts.append(brand)
    parts.append(title)

    extras = []
    if material and material not in title.lower():
        extras.append(material)
    if noun and noun not in title.lower() and noun not in " ".join(extras):
        extras.append(noun)
    elif crown and "cattleman" in crown and "cowboy" not in " ".join(parts + extras).lower():
        extras.append("cattleman's crease")

    text = " ".join(parts)
    if extras:
        text = f"{text}, {' '.join(extras)}"
    return clip(text)


def image_alt(product: dict, url: str, used: set[str], is_first_blank: bool) -> str:
    base = core_alt(product)
    color = filename_color(url)
    view = filename_view(url)
    colors = [value.lower() for value in option_colors(product)]

    bits = []
    if color and color not in base.lower():
        bits.append(f"in {color}")
    elif not color and len(colors) == 1 and colors[0] not in base.lower():
        bits.append(f"in {colors[0]}")
    if view:
        bits.append(view)

    alt = f"{base} {(' '.join(bits))}".strip() if bits else base
    alt = clip(alt)

    if alt.lower() in used and not is_first_blank:
        angled = clip(f"{base}, another angle")
        if angled.lower() not in used:
            alt = angled
    return alt


def planned_updates(products: list[dict]) -> list[dict]:
    rows = []
    for product in products:
        if product["status"] != "ACTIVE":
            continue
        used: set[str] = set()
        media = [edge["node"] for edge in product["media"]["edges"] if edge["node"].get("id")]
        first_blank = True
        for media_item in media:
            current = (media_item.get("alt") or "").strip()
            if current:
                used.add(current.lower())
                continue
            url = (media_item.get("image") or {}).get("url") or ""
            alt = image_alt(product, url, used, first_blank)
            first_blank = False
            used.add(alt.lower())
            rows.append(
                {
                    "handle": product["handle"],
                    "title": product["title"],
                    "vendor": product["vendor"],
                    "media_id": media_item["id"],
                    "old_alt": current,
                    "new_alt": alt,
                    "image_url": url,
                }
            )
    return rows


def apply_updates(rows: list[dict], batch_size: int = 20) -> tuple[int, list[str]]:
    mutation = """
    mutation fileUpdate($files: [FileUpdateInput!]!) {
      fileUpdate(files: $files) {
        files { id alt }
        userErrors { field message }
      }
    }
    """
    updated = 0
    errors: list[str] = []
    for i in range(0, len(rows), batch_size):
        batch = rows[i : i + batch_size]
        files = [{"id": row["media_id"], "alt": row["new_alt"]} for row in batch]
        try:
            data = gql(mutation, {"files": files})
        except urllib.error.HTTPError as exc:
            errors.append(f"HTTP {exc.code} at batch {i}: {exc.read()[:200]!r}")
            time.sleep(2)
            continue
        payload = data["data"]["fileUpdate"]
        for err in payload.get("userErrors") or []:
            errors.append(f"{err.get('field')}: {err.get('message')}")
        updated += len(payload.get("files") or [])
        time.sleep(0.35)
    return updated, errors


def write_csv(rows: list[dict]) -> None:
    with OUT_CSV.open("w", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["handle", "title", "vendor", "media_id", "old_alt", "new_alt", "image_url"],
        )
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    apply = "--apply" in sys.argv
    products = fetch_products()
    rows = planned_updates(products)
    write_csv(rows)
    print(f"planned {len(rows)} alt updates -> {OUT_CSV}")
    for row in rows[:12]:
        print(f"  {row['handle']}: {row['new_alt']}")
    if not apply:
        print("dry run only. pass --apply to write to Shopify.")
        return
    updated, errors = apply_updates(rows)
    print(f"updated {updated}")
    if errors:
        print("errors", len(errors))
        for err in errors[:20]:
            print(" ", err)


if __name__ == "__main__":
    main()
