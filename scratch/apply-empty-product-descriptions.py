#!/usr/bin/env python3
"""Paste drafted product descriptions into empty Shopify body_html fields.

Only updates products that:
- are in PASTE (in-stock + has photos)
- currently have empty/whitespace description
- are not in HOLD

Does not change price, inventory, or status.
"""

from __future__ import annotations

import json
import os
import sys
import time
import urllib.error
import urllib.request

STORE = "raftermhatco.myshopify.com"
API = f"https://{STORE}/admin/api/2024-10/graphql.json"

HOLD = {
    "cross-bracelet-14k-dip",
    "horse-shoe-bracelet-14k-dip",
    "turquoise-cross-bracelet-14k-gold-dip",
}

# Batches 2–3 (in-stock + photos) and batch 4 (mostly OOS, still have photos).
PASTE: dict[str, str] = {
    "bolo": (
        "<p>Black braided bolo with a silver-tone oval slide and ribbed metal tips. "
        "The cabochon stone changes with the colorway — Jade Green, Burnt Orange, "
        "Navy + Black, or White — set in a rope-edged frame. Western neckwear that "
        "still works with a clean shirt.</p>"
    ),
    "bull-necklace": (
        "<p>14-karat gold-dipped necklace with a small longhorn skull pendant on a "
        "fine chain. Packaged length reads 16.5\" with a 2\" extender. Quiet western "
        "detail — wears close to the collarbone, not costume-size.</p>"
    ),
    "cart-and-carriage-twilly": (
        "<p>Narrow twilly scarf in navy, white, red, and magenta — lattice florals "
        "on one side, horse-drawn carriage illustrations on the other, pointed ends. "
        "Tie it on a bag handle, around a hat band, or at the wrist. Small piece, "
        "full print.</p>"
    ),
    "gold-drip-satin-scarf": (
        "<p>Cream satin square printed with belted straps, gold chain links, and "
        "equestrian hardware — buckles, crests, and bit-style border work. Soft sheen, "
        "folds small, reads dressy without trying hard.</p>"
    ),
    "heart-necklace": (
        "<p>Icy blue beaded strand with a large marbled amber-brown heart pendant "
        "and gold-tone lobster clasp plus extender. Statement scale on the heart, "
        "soft color on the beads — made to sit centered on a simple neckline.</p>"
    ),
    "horse-bit-necklace-with-pearl-18k-gold-dipped": (
        "<p>18-karat gold-dipped statement necklace with an oversized horse-bit "
        "pendant, front toggle clasp, and a single baroque pearl dropping from the "
        "ring. Antiqued gold finish, chunky rolo chain. Equestrian jewelry that "
        "doesn't whisper.</p>"
    ),
    "isla-necklace": (
        "<p>Turquoise and earth-tone cube beads with tiny light-blue spacers, "
        "gold-tone lobster clasp, and extender. The stones shift from teal to cream "
        "to mottled brown along the strand — coastal color with a little desert "
        "mixed in.</p>"
    ),
    "la-cite-cavaliere-twilly": (
        "<p>Silk-feel twilly in pink, orange, and fuchsia with an illustrative "
        "map/cityscape print and pointed ends. Slim enough for a bag, hat, or "
        "ponytail — the kind of accent that finishes an outfit in one knot.</p>"
    ),
    "lime-and-lavender-scarf": (
        "<p>Square scarf in a lime-leaning green ground with dense white-and-brown "
        "paisley and a sunburst border. Soft drape for neck, bag, or pocket. Color "
        "that shows up in a room full of neutrals.</p>"
    ),
    "monterey-beaded-necklace": (
        "<p>Short beaded strand in faceted color blocks — turquoise, purple, red, "
        "green, yellow, and earth tones — with gold-tone spacers, lobster clasp, "
        "and extender. Bright enough for denim; clean enough for a dress.</p>"
    ),
    "red-bejeweled-bandana": (
        "<p>Classic red paisley bandana with a row of clear oval rhinestones across "
        "the front fold. Western base, dressed-up top line — wears tied at the neck "
        "or as a hair piece without looking costume.</p>"
    ),
    "sand-bejeweled-bandana": (
        "<p>Sand-tan paisley bandana with five clear marquise rhinestones along the "
        "folded edge. Same bejeweled idea as the red, softer colorway — pairs easy "
        "with denim, hats, and gold jewelry.</p>"
    ),
    "sedona-beaded-necklace": (
        "<p>Earth-tone faceted beads in amber, chocolate, tan, and soft grey-blue, "
        "hand-knotted between each stone on a tan cord. Gold-tone lobster clasp. "
        "Desert palette — the Sedona name fits.</p>"
    ),
    "silver-and-gold-horse-bit-necklace-14k-gold-plated": (
        "<p>Horse-bit centerpiece on a thick textured popcorn chain with coiled wrap "
        "details at the joins, lobster clasp, and round-link extender. Polished "
        "statement scale — equestrian hardware as the whole necklace, not a tiny "
        "charm.</p>"
    ),
    "sonoma-beaded-necklace": (
        "<p>Smooth rondelle beads in turquoise, slate, orange, peach, yellow, and "
        "forest green with light-blue seed spacers and a bright turquoise accent at "
        "center. Gold-tone clasp and extender. Color-blocked western jewelry that "
        "still wears casual.</p>"
    ),
    "stetson-stetson-1865-applique-script-hoodie-men": (
        "<p>Charcoal heather Stetson hoodie with a raised white chenille-style "
        "script applique across the chest and a quiet 1865 mark above the lettering. "
        "Kangaroo pocket, flat drawstrings, ribbed cuffs. Heritage branding you can "
        "wear past the hat rack. Sizes S–XL.</p>"
    ),
    "stetson-bullock": (
        "<p>Matte black woven western hat with a cattleman's crease, upswept sides, "
        "and three side vent holes. Thin black band with silver-tone studs around "
        "the crown. Everyday Stetson shape in a dark, clean colorway. Sized Small "
        "through XL.</p>"
    ),
    "stetson-stetson-with-star-print-hoodie-men": (
        "<p>Navy Stetson pullover with distressed white block lettering and a single "
        "star over the chest. Kangaroo pocket, drawstrings, ribbed cuffs — a "
        "straightforward hoodie that carries the brand without loud graphics. "
        "Sizes M–XL.</p>"
    ),
    "cupid-bring-me-a-cowboy-sweatshirt": (
        "<p>White crewneck sweatshirt with a small left-chest graphic: cupid in a "
        "red cowboy hat and boots, heart-tipped arrow ready to fly. Soft everyday "
        "fleece with ribbed collar, cuffs, and hem. A little humor, still wearable. "
        "Sizes S–L.</p>"
    ),
    "howdy-cap": (
        "<p>Neon orange trucker with purple puff-embroidered HOWDY across the foam "
        "front. Matching orange mesh back and curved brim. Loud on purpose — the "
        "kind of cap that earns a second look from across College Avenue.</p>"
    ),
    "support-your-local-cowboy": (
        "<p>Cream trucker with a black-bordered front patch that reads SUPPORT YOUR "
        "LOCAL COWBOY in three stacked lines. Foam front, mesh back, pre-curved brim. "
        "Simple message. Easy everyday hat.</p>"
    ),
    "stetson-co-ball-cap": (
        "<p>Navy-and-red Stetson canvas cap with cream embroidery — STETSON CO. "
        "arched over a bucking bronco. Red visor and top button, silver-tone S pin "
        "on the side. Structured front, one size.</p>"
    ),
    "espresso-chic-scarf": (
        "<p>Cream square with a tan monogram field, chocolate border, and an "
        "equestrian strap-and-chain print along the edge — buckles, studs, silver "
        "links. Soft sheen. Folds for the neck, bag, or pocket.</p>"
    ),
    "cirque-of-color-scarf": (
        "<p>Fuchsia square framed in teal, packed with folk-art animals, figures, "
        "and a wheel motif. Bright on purpose. Same drape as the other Moon Ridge "
        "squares — neck, bag, or pocket.</p>"
    ),
    "scarlet-wagon-wheel-twilly": (
        "<p>Narrow scarlet twilly in a white-and-black bandana print with pointed "
        "ends. Tie it on a bag handle, around a hat band, or at the wrist.</p>"
    ),
    "parade-of-color-twilly": (
        "<p>Narrow twilly in red, pink, and turquoise — horse panels on one side, "
        "stripes and checks on the other, pointed ends. Same slim knot as the other "
        "twillies.</p>"
    ),
    "support-live-country-music": (
        "<p>Heather gray cropped tee with SUPPORT LIVE COUNTRY MUSIC in white "
        "stacked across the chest. Raw hem, crew neck, sizes S–L. A message, not a "
        "costume graphic.</p>"
    ),
    "silverbelly-felt": (
        "<p>Silverbelly felt western hat with a cattleman crease and a slim matching "
        "self-felt band. Light, clean color — the pale tan-grey that reads as "
        "silverbelly in the hand. Open for in-store shaping.</p>"
    ),
    "black-felt": (
        "<p>Black felt western hat with a cattleman crease and a slim self-felt band "
        "finished with a three-piece silver-tone buckle set. Dark, clean, ready to "
        "shape in the shop.</p>"
    ),
    "sedona": (
        "<p>Stetson Sedona in rust-brown felt — pinch-front crown, flat brim, and a "
        "layered band set with a polished agate slice and leather tassels. Medium "
        "only on this listing. A statement hat, not a daily cattleman.</p>"
    ),
    "centennial": (
        "<p>Stetson Centennial in bone shantung straw. Cattleman crease, western "
        "brim, and a slim chevron band in cream and dark brown with the Stetson "
        "plate on the side. Listed in 7 1/8.</p>"
    ),
}

LOOKUP = """
query ProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    handle
    title
    status
    descriptionHtml
    featuredImage { id }
    media(first: 1) { nodes { id } }
  }
}
"""

UPDATE = """
mutation ProductUpdate($input: ProductInput!) {
  productUpdate(input: $input) {
    product { id handle descriptionHtml }
    userErrors { field message }
  }
}
"""


def token() -> str:
    value = os.environ.get("SHOPIFY_ADMIN_API_TOKEN", "").strip()
    if not value:
        raise SystemExit("SHOPIFY_ADMIN_API_TOKEN is not set")
    return value


def gql(query: str, variables: dict) -> dict:
    payload = json.dumps({"query": query, "variables": variables}).encode()
    req = urllib.request.Request(
        API,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": token(),
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = json.loads(resp.read().decode())
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "replace")
        raise SystemExit(f"Shopify HTTP {exc.code}: {detail[:400]}") from exc
    if body.get("errors"):
        raise SystemExit(f"Shopify GraphQL errors: {body['errors']}")
    return body["data"]


def is_blank(html: str | None) -> bool:
    if not html:
        return True
    text = (
        html.replace("<p>", "")
        .replace("</p>", "")
        .replace("<br>", "")
        .replace("<br/>", "")
        .replace("&nbsp;", " ")
        .strip()
    )
    return text == ""


def main() -> int:
    apply = "--apply" in sys.argv
    print(f"store={STORE} apply={apply} paste={len(PASTE)} hold={len(HOLD)}")

    updated = 0
    skipped = 0
    for handle, html in PASTE.items():
        if handle in HOLD:
            print(f"HOLD {handle}")
            skipped += 1
            continue
        data = gql(LOOKUP, {"handle": handle})
        product = data.get("productByHandle")
        if not product:
            print(f"MISSING {handle}")
            skipped += 1
            continue
        if not is_blank(product.get("descriptionHtml")):
            print(f"SKIP-HAS-COPY {handle} | {product['title']}")
            skipped += 1
            continue
        has_media = bool(product.get("featuredImage") or (product.get("media") or {}).get("nodes"))
        if not has_media:
            print(f"SKIP-NO-PHOTO {handle} | {product['title']}")
            skipped += 1
            continue
        print(f"{'UPDATE' if apply else 'DRY'} {handle} | {product['title']} | {product['status']}")
        if apply:
            result = gql(UPDATE, {"input": {"id": product["id"], "descriptionHtml": html}})
            errors = result["productUpdate"]["userErrors"]
            if errors:
                print(f"  ERROR {errors}")
                skipped += 1
            else:
                updated += 1
            time.sleep(0.35)
        else:
            updated += 1

    print(f"done updated={updated} skipped={skipped}")
    if not apply:
        print("re-run with --apply to write")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
