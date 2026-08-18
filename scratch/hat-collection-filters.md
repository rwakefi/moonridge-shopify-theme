# Hat collection filters — Search & Discovery + Hat Finder

Theme work is in `templates/collection.hats.json`. Filters themselves are **Shopify Search & Discovery**, not Liquid. This file is the admin setup so collection pages and Hat Finder speak the same language.

Ian (Ecommerce Bournemouth): men’s hats had 91 products with only price + availability. Add brand, size, colour, hat type / material. Sidebar on desktop, obvious filter button on mobile. Keep Hat Finder as the guided path. Do **not** recategorize the whole catalog — use data already on products.

## Assign the template (after this theme is live)

Shopify Admin → Products → Collections → each collection → Theme template → **hats**.

| Collection | Handle |
|---|---|
| Men's Hats | `mens-hats` |
| Women's Hats | `womens-hats` |
| Hats for Everyone | `hats-for-everyone` |

Leave brand, home, and boots collections on the default template.

## How the two tools line up

Hat Finder wizard (app + hatfinder.moonridgecompany.com) already reads these metafields. Collection filters should use the **same sources and the same labels**.

| Shopper question | Hat Finder | Search & Discovery filter | Shopify source |
|---|---|---|---|
| Felt, straw, cap? | Hat type | **Hat type** | Product metafield `custom.felt_straw_or_ballcap` |
| Cowboy, fedora, outdoors? | Style (Western / City / Outdoor) | Skip as a filter | Hats hub collections already split this: `western-hats`, `city-hats`, `outdoors-sportsman-hats`. Hat Finder infers Western from `custom.city` / `custom.outdoors` booleans — those make ugly Yes/No filters. |
| What crease? | Crown | **Crown shape** | `custom.crown_shape` |
| How does the brim sit? | Brim | **Brim shape** | `custom.brim_shape` |
| Whose hat? | Vendor on results | **Brand** | Vendor |
| What color? | — | **Color** | Product option `Color` (swatches if S&D offers them) |
| What size? | Size chips on results | **Size** | Product options `Size` and `Accessory size` (see note) |
| In stock / budget? | — | **Availability**, **Price** | Standard filters |

Optional later (Hat Finder has them; they get noisy on a collection page): `custom.crown_height`, `custom.brim_width`.

**Material vs season:** Hat Finder does not have a season step. Felt vs straw *is* the seasonal split. Do not invent a Season filter. Skip `custom.material` unless you later want fiber-level (bangora, fur felt) — hat type is the one that matches the quiz.

## Search & Discovery setup

Apps → **Search & Discovery** → Filters → Add filter.

Add in this order (matches the quiz):

1. Hat type — source `custom.felt_straw_or_ballcap`. Label: **Hat type**. Values should stay **Felt**, **Straw**, **Ballcap**, **Beanie/Flat Cap**.
2. Crown shape — `custom.crown_shape`. Label: **Crown shape**. Keep metafield titles exact (Cattleman's, CHL (Cool Hand Luke), etc.).
3. Brim shape — `custom.brim_shape`. Label: **Brim shape**. Same rule.
4. Brand — Vendor. Label: **Brand**.
5. Color — option Color. Use visual swatches if available.
6. Size — option Size. If hats also use **Accessory size**, add a second filter and label it **Hat size**, or rename that option to Size over time so there is one list. Do not merge by hand on 91 products in one sitting.
7. Availability
8. Price

Then:

- Hide empty / junk values (test SKUs, one-off colors).
- Put Availability last or second-to-last so type and shape lead.
- Filters only show on a collection if at least one product there has that value. Empty metafields = missing checkboxes, not a theme bug.

Metafields must be filterable types (single-line text, list of values, or metaobject). If a source does not appear in S&D, check Settings → Custom data → Products → that definition → storefront access.

## What the theme is doing

- New template `collection.hats`: vertical sidebar on desktop, full-width Filter button on mobile, vendor on cards, Hat Finder CTA under the grid.
- Default `collection.json` stays drawer-style for everything else.
- Sidebar + empty-results copy points to `/pages/hat-finder`.

Filters will still look thin (price + availability only) until the S&D list above is saved. That is admin, not a second theme pass.

## Do not change for this pass

- Recategorizing hats that are missing `felt_straw_or_ballcap`, crown, or brim.
- Building a custom filter app.
- SMS / extra marketing around the new filters.
