# Store optimization queue

Updated 2026-08-16 after a fresh store-analyzer pass (`scratch/store-analyzer-moonridgecompany-2026-08-16.md`).

Theme fixes in this PR do **not** write catalog data. Handles, descriptions, unpublishing, and a review app still need Shopify admin (and a clear OK before live paste).

## Done in theme

- Product JSON-LD no longer dumps raw metafield objects (verified gone on sampled PDPs).
- Image alt falls back to the product title; Admin alts filled 2026-08-16 (1,167 active images).
- Hat Experiences and Boots collection intros no longer say Rafter M.
- Brand / bestseller collections with empty admin copy now get Moon Ridge intros: Bigalli (`resistol-copy`), Best Selling Pendleton / Bigalli / Lucchese / Resistol / Goorin, Apparel, T-Shirts.
- Insider list tab title and H1 are Moon Ridge (admin title still says Rafter M).
- Contact page H1 is “Visit Moon Ridge” instead of “About Moon Ridge.”
- Shipping Policy link added to the footer bar.

## Still needs Shopify admin

Ranked by impact.

### 1. Reviews — parked for you
No review app. Theme already reads `product.metafields.reviews.rating`. Judge.me Free is the cheap path. Plan: `scratch/finding-01-reviews-plan.md`.

### 2. Empty descriptions — 31 pasted live 2026-08-16
Catalog empty count is now **3 of 298** — only the no-photo bracelets.

- `scratch/finding-02-empty-descriptions-batch1-pendleton.md` — already live
- `scratch/finding-02-empty-descriptions-batch2-jewelry.md` — 15 pasted; 3 no-image bracelets still held
- `scratch/finding-02-empty-descriptions-batch3-apparel.md` — 6 pasted
- `scratch/finding-02-empty-descriptions-batch4-remaining.md` — 10 pasted (mostly OOS)
- Script: `scratch/apply-empty-product-descriptions.py`

Held: `cross-bracelet-14k-dip`, `horse-shoe-bracelet-14k-dip`, `turquoise-cross-bracelet-14k-gold-dip`.

### 3. Collection handle leftovers — rename + redirect
| Live handle | Should be |
|---|---|
| `resistol-copy` | `bigalli` |
| `best-selling-stetsons-copy-1` | `best-selling-pendleton` |
| `best-selling-goorin-bros-copy` | `best-selling-bigalli` |
| `best-selling-pendleton-copy` | `best-selling-lucchese` |
| `best-selling-stetsons-copy` | `best-selling-resistol` |
| `accessories-1` | `accessories` (if free) |
| `ballcaps-truckers-1` | `ballcaps-truckers` |
| `hat-bands-1` | `hat-bands` |

Target handles were free on 2026-08-16 (storefront 404). Theme overrides key off the **live** handles, so update the snippet when you rename.

### 4. Empty published collections — unpublish
`bath`, `candles`, `mugs`, `shoelaces` — 0 products each.

### 5. Products with no photo — 14 live
Photograph or unpublish.

Hats/caps that can take vendor photos today:

- `pendleton-classic-patch-trucker-saddle`
- `pendleton-classic-patch-trucker-black` (titled Olive)
- `goorin-bros-badlands-stallion`

Jewelry with no photo (unpublish until shot): stud/coin/hoop earrings, both tennis bracelets, beaded turquoise bracelet, turquoise cross / horseshoe / cross bracelets.

### 6. Real image alt text — done 2026-08-16
All **1,167** active product images have Admin alt text.

### 7. Insider list page in admin
Theme overrides the title. Still change the Shopify page title + SEO title so admin matches: drop "Tuskers Trunk Show" and "Rafter M Hat Co. Insider List."

### 8. Out-of-stock catalog
89 of 298 products have zero available variants. Unpublish long-OOS SKUs or restock. Do not lead collections with empty-body OOS hats.
