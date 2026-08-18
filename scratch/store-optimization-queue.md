# Store optimization queue

Updated 2026-08-17 after the store-analyzer handoff. Theme follow-up in this branch does **not** write catalog data.

Live catalog writes (copy, status, prices, handles, unpublish) still need a clear OK. Judge.me / Omnisend stay parked.

## Done in theme (live on main unless noted)

- Product JSON-LD no longer dumps raw metafield objects.
- Image alt falls back to the product title; Admin alts filled 2026-08-16 (1,167 active images).
- Hat Experiences and Boots collection intros no longer say Rafter M.
- Brand / bestseller collections with empty admin copy get Moon Ridge intros (snippet now keys **both** leftover and target handles, so a rename does not blank the intro).
- Insider list tab title and H1 are Moon Ridge (admin title still says Rafter M).
- Contact page H1 is “Visit Moon Ridge.”
- Shipping Policy link added to the footer bar.

## Done in this follow-up (theme only — not live until merged)

- Collection intro snippet accepts leftover **and** target handles (`resistol-copy` / `bigalli`, plus the other `-copy` bestsellers).
- Home hub and home category filters skip collections with 0 products (`bath`, `candles`, `mugs`, `shoelaces` stop showing as empty tiles).
- “Your Hat, Restored.” no longer sits on apparel, jewelry, caps, or boots PDPs. It now lives on cowboy-hat and Bigalli templates, and the section hides itself on non-hat product pages.
- Fit line under Add to cart is product-aware (hat sizing guide, apparel, ball caps, Lucchese, jewelry). Boots PDPs also get a Fit accordion. Featured collection on boots is Lucchese, not hats.

## Still needs Shopify admin

Ranked by impact. Click-by-click. Do not start until you say so.

### 1. Reviews — parked
No review app. Theme already reads `product.metafields.reviews.rating`. Judge.me Free is the cheap path. Plan: `scratch/finding-01-reviews-plan.md`.

Needs a clear OK before install.

### 2. Empty descriptions — 31 pasted live 2026-08-16
Catalog empty count is **3 of 298** — only the no-photo bracelets.

Held until they have a shot: `cross-bracelet-14k-dip`, `horse-shoe-bracelet-14k-dip`, `turquoise-cross-bracelet-14k-gold-dip`.

Script: `scratch/apply-empty-product-descriptions.py`

### 3. Collection handle leftovers — rename + redirect
Theme intros already match both sides. After rename, no snippet edit is required.

In Shopify admin → Products → Collections → open the collection → Search engine listing → URL and handle:

| Live handle | Change to |
|---|---|
| `resistol-copy` | `bigalli` |
| `best-selling-stetsons-copy-1` | `best-selling-pendleton` |
| `best-selling-goorin-bros-copy` | `best-selling-bigalli` |
| `best-selling-pendleton-copy` | `best-selling-lucchese` |
| `best-selling-stetsons-copy` | `best-selling-resistol` |
| `accessories-1` | `accessories` (if free) |
| `ballcaps-truckers-1` | `ballcaps-truckers` |
| `hat-bands-1` | `hat-bands` |

Target handles were free on 2026-08-16 (storefront 404). Confirm Shopify creates a redirect from the old URL. If it does not: Online Store → Navigation → URL redirects.

### 4. Empty published collections — unpublish
Products → Collections → each of `bath`, `candles`, `mugs`, `shoelaces` → Unpublish from Online Store.

Theme already hides the empty home-hub tiles. Unpublishing stops the empty URLs from ranking.

### 5. Products with no photo — 14 live
Photograph or unpublish.

Hats/caps that can take vendor photos today:

- `pendleton-classic-patch-trucker-saddle`
- `pendleton-classic-patch-trucker-black` (titled Olive)
- `goorin-bros-badlands-stallion`

Jewelry with no photo (unpublish until shot): stud/coin/hoop earrings, both tennis bracelets, beaded turquoise bracelet, turquoise cross / horseshoe / cross bracelets.

Do not paste copy on the 3 no-photo bracelets until they have a shot.

### 6. Real image alt text — done 2026-08-16
All **1,167** active product images have Admin alt text.

### 7. Insider list page in admin
Theme overrides the public H1 and tab title. Still change the Shopify page title + SEO title: drop "Tuskers Trunk Show" and "Rafter M Hat Co. Insider List."

### 8. Out-of-stock catalog
89 of 298 products have zero available variants. Unpublish long-OOS SKUs or restock. Do not lead collections with empty-body OOS hats.

## Do not

- Paste copy on the 3 no-photo bracelets until they have a shot.
- Reuse `THANKYOU10` for abandonment.
- Install or activate a review app or Omnisend without a clear OK.
- Live catalog writes (copy, status, prices) without an explicit go-ahead.
