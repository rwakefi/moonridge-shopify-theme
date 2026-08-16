# Store optimization queue

Picked up 2026-08-16 from the Aug 12 store-analyzer audit. Re-checked live storefront JSON today.

Theme fixes in this PR do **not** write catalog data. Handles, alt fields, descriptions, and unpublishing still need Shopify admin.

## Done in theme (this PR)

- Product JSON-LD no longer dumps raw metafield objects (`json not allowed for this object` on material / crown / brim / origin).
- Image alt falls back to the product title on PDP media, cart drawer, add-ons, and cart notification.
- Hat Experiences and Boots collection intros no longer say Rafter M.
- Insider list tab title is no longer "Tuskers Trunk Show." H1 is Moon Ridge, not Rafter M.
- Shipping Policy link added to the footer bar.

## Still needs Shopify admin (not done)

Ranked by impact. I cannot paste these from this environment — no Admin API.

### 1. Reviews — parked for you
No review app. Theme already reads `product.metafields.reviews.rating`. Judge.me Free is the cheap path. Plan: `scratch/finding-01-reviews-plan.md`.

### 2. Empty descriptions — drafts ready, not live
34 products still have empty `body_html` (was 56 in August; some got filled).
38 in-stock drafts already written:

- `scratch/finding-02-empty-descriptions-batch1-pendleton.md` (voice approved)
- `scratch/finding-02-empty-descriptions-batch2-jewelry.md`
- `scratch/finding-02-empty-descriptions-batch3-apparel.md`

Hold the 3 no-photo bracelets until they have images.

Hats still empty today: `stetson-bullock`, `centennial` (Stetson Centennial), `sedona` (Stetson Sedona), plus `silverbelly-felt` and `black-felt`.

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

### 4. Empty published collections — unpublish
`bath`, `candles`, `mugs`, `shoelaces` — 0 products each.

### 5. Products with no photo — 14 live
Photograph or unpublish.

Hats/caps that can take vendor photos today:

- `pendleton-classic-patch-trucker-saddle`
- `pendleton-classic-patch-trucker-black` (titled Olive)
- `goorin-bros-badlands-stallion`

Jewelry with no photo (unpublish until shot): stud/coin/hoop earrings, both tennis bracelets, beaded turquoise bracelet, turquoise cross / horseshoe / cross bracelets.

### 6. Real image alt text
Every storefront image alt is blank (1,060 images / 284 products). Theme fallback helps the page. Google Images and the Merchant feed still need the Admin alt field filled.

Pattern: `{Brand} {Product name}` — e.g. `Stetson Bullock cowboy hat`.

### 7. Insider list page in admin
Theme overrides the title. Still change the Shopify page title + SEO title so admin matches: drop "Tuskers Trunk Show" and "Rafter M Hat Co. Insider List."
