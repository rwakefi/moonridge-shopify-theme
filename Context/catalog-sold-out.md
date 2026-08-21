# Catalog, sold-out, and paid feeds

Standing store facts from 2026-08-21. Next session: do not re-sweep feeds or Hats For Everyone leftovers unless numbers have drifted.

## Decision

Hide sold-out products from paid feeds and from hand-picked nav collections. Keep them on the Online Store, POS, and Headless (hat finder). Complimentary shaping stays in-store only.

Men’s Hats and Women’s Hats stay **manual**. 56 hats sit in both; Google gender is mostly unisex; there is no clean smart-collection rule.

## Live after the 8/21 pass

| Surface | Before | After |
|---|---|---|
| Sold-out non-boot products on Shop / Google / Facebook / TikTok | 74 | **0** |
| Hats For Everyone | 172 (35 sold-out leftovers) | **137** (0 leftovers) |
| Men’s Hats | 94 (34 sold-out) | **60** |
| Women’s Hats | 61 (19 sold-out) | **42** |

Boots, Services, Gift Card, Hat Sale Wall, and other untracked products were not unpublished. Online Store / POS / Headless were not dropped.

## Shopify Flow (Zack built in admin, 8/21)

Flow is installed. Two workflows, both on:

1. **Sold out — hide from paid feeds** — Inventory quantity changed, product **total** inventory ≤ 0, Active, exclude Service / Gift Cards / Boots / LUCCHESE / Hat Sale Wall. Hide from Google & YouTube, Facebook & Instagram, TikTok, Shop. Then remove from **Men’s Hats** and **Women’s Hats**. Does not add restocks back to those two.
2. **Restocked — publish to paid feeds** — same exclusions, total inventory > 0. Publish to those four channels only.

Do **not** use the Shopify template that hides out-of-stock from the Online Store.

Hats For Everyone already has TYPE = Headwear AND inventory > 0. Restocks show up there without Flow.

## Still open

- Negative inventory (Ivy Newsboy −3, Black Felt −12, Silverbelly Felt −12, plus hat bands). Optional Flow: email Zack, not customers.
- Omnisend still off. Back-in-stock / abandon cart only when Zack says go. No SMS.
- Men’s / Women’s restocks are hand-added, same as merchandising.
- Theme: `snippets/card-product.liquid` still says “Contact Store For Availability” on some sold-out cards (Lucchese fitting copy was the stuck edit). Sort sold-out last is still open.
- Cloud Agent cannot drive Shopify Flow in its own browser (Cloudflare login wall). Zack builds Flow in his admin.

## Audit files

- `scratch/sold-out-feed-sweep-2026-08-21.md` + `.json`
- `scratch/mens-womens-sold-out-strip-2026-08-21.md` + `.json`
- `scratch/shopify-flow-sold-out-feeds.md`
- Theme PR (docs only): https://github.com/rwakefi/moonridge-shopify-theme/pull/83
