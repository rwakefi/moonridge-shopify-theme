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
    "Cattleman's": "Cattleman's crease",
    "Gambler/Telescope/Buckaroo": "gambler crown",
    "Gambler/Telescope": "gambler crown",
    "Pinch Front/Teardrop/Diamond": "pinch-front crown",
    "CHL (Cool Hand Luke)": "CHL (Cool Hand Luke)",
    "Gus/Tom Mix": "Gus crease",
    "Brick/Rounded Brick/Minnick": "brick crease",
    "Texas Punch": "Texas Punch",
    "Cutter": "cutter crease",
    "The Walker": "Walker crease",
    "Mule Kick/Horseshoe": "mule kick",
    "Open Crown": "open crown",
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


def product_name(product: dict) -> str:
    title = re.sub(r"\s+", " ", product["title"]).strip()
    title = title.replace(" - ", " ").replace("–", " ")
    brand = vendor_label(product.get("vendor") or "")
    if brand and brand.lower() not in title.lower():
        return f"{brand} {title}"
    return title


def image_alt(product: dict, url: str, variant_color: str = "") -> str:
    """One concrete visual: color, then material, then crown. No catalog piles."""
    name = product_name(product)
    material = clean_material(metafield_first(product.get("material")))
    crown = clean_crown(metafield_first(product.get("crown")))
    noun = type_noun(product, crown, material)
    color = (variant_color or filename_color(url) or "").strip()
    if color.lower() == "sliver grey":
        color = "silver grey"
    if not color:
        colors = option_colors(product)
        if len(colors) == 1:
            color = colors[0]

    name_l = name.lower()
    if color and color.lower() not in name_l:
        return clip(f"{name} in {color.lower()}")
    if material and material not in name_l:
        return clip(f"{name} in {material}")
    if crown and crown.lower() not in name_l:
        return clip(f"{name}, {crown}")
    if noun and noun not in name_l:
        return clip(f"{name} {noun}")
    return clip(name)


def planned_updates(products: list[dict], rewrite_ids: set[str] | None = None, color_by_media: dict[str, str] | None = None) -> list[dict]:
    rows = []
    color_by_media = color_by_media or {}
    for product in products:
        if product["status"] != "ACTIVE":
            continue
        media = [edge["node"] for edge in product["media"]["edges"] if edge["node"].get("id")]
        for media_item in media:
            current = (media_item.get("alt") or "").strip()
            media_id = media_item["id"]
            if rewrite_ids is None:
                if current:
                    continue
            elif media_id not in rewrite_ids:
                continue
            url = (media_item.get("image") or {}).get("url") or ""
            alt = image_alt(product, url, color_by_media.get(media_id, ""))
            if alt == current:
                continue
            rows.append(
                {
                    "handle": product["handle"],
                    "title": product["title"],
                    "vendor": product["vendor"],
                    "media_id": media_id,
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


def filename_of(url: str) -> str:
    return url.split("/")[-1].split("?")[0]


def fetch_colors_by_handle_file() -> dict[tuple[str, str], str]:
    token = os.environ["SHOPIFY_ADMIN_API_TOKEN"]
    rest = f"https://{STORE}/admin/api/2024-10"
    colors: dict[tuple[str, str], str] = {}
    since = 0
    while True:
        req = urllib.request.Request(
            f"{rest}/products.json?limit=250&since_id={since}&status=active&fields=id,handle,images,variants,options",
            headers={"X-Shopify-Access-Token": token, "Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=60) as resp:
            batch = json.load(resp).get("products") or []
        if not batch:
            break
        for product in batch:
            color_pos = None
            for option in product.get("options") or []:
                if option["name"].lower() in {"color", "colour"}:
                    color_pos = option["position"]
                    break
            if not color_pos:
                continue
            variants = product.get("variants") or []
            for image in product.get("images") or []:
                vids = image.get("variant_ids") or []
                found = {
                    variant.get(f"option{color_pos}")
                    for variant in variants
                    if variant["id"] in vids and variant.get(f"option{color_pos}")
                }
                if len(found) == 1:
                    colors[(product["handle"], filename_of(image.get("src") or ""))] = found.pop()
        since = batch[-1]["id"]
        time.sleep(0.2)
    return colors


def main() -> None:
    apply = "--apply" in sys.argv
    rewrite = "--rewrite" in sys.argv
    products = fetch_products()
    rewrite_ids = None
    if rewrite and OUT_CSV.exists():
        rewrite_ids = {row["media_id"] for row in csv.DictReader(OUT_CSV.open())}
    color_by_file = fetch_colors_by_handle_file()
    color_by_media: dict[str, str] = {}
    for product in products:
        for edge in product["media"]["edges"]:
            node = edge["node"]
            if not node.get("id"):
                continue
            url = (node.get("image") or {}).get("url") or ""
            color = color_by_file.get((product["handle"], filename_of(url)))
            if color:
                color_by_media[node["id"]] = color
    rows = planned_updates(products, rewrite_ids=rewrite_ids, color_by_media=color_by_media)
    write_csv(rows)
    print(f"planned {len(rows)} alt updates -> {OUT_CSV}")
    for row in rows[:12]:
        print(f"  {row['old_alt']}  =>  {row['new_alt']}")
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
