# Launch QA Checklist (SEO, CTR, Retention)

Use this checklist before publishing the updated theme.

## 1) Technical SEO checks

- [x] **Robots tag behavior** in page source:
  - Home / collection / product pages show:
    - `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`
  - Search page shows:
    - `noindex,follow`
  - Cart/account/login/register/order pages show:
    - `noindex,nofollow`
- [x] **Canonical tag** exists and points to current canonical URL.
- [x] **Open Graph/Twitter tags** present:
  - `og:title`, `og:description`, `og:image` (HTTPS)
  - `twitter:title`, `twitter:description`, `twitter:image` when image exists
- [x] **Structured data appears in source**:
  - `Organization` & `LocalBusiness`
  - `WebSite` with `SearchAction`
  - `Product` schema on product pages
  - FAQ schema block still present where intended (Rebrand FAQ + AI Knowledge Graph)

## 2) Product page conversion checks

- [ ] Add to cart works for:
  - In-stock single-variant products
  - Multi-variant products
  - Out-of-stock products
- [ ] **Low-stock notice** only appears when inventory is tracked and at/under threshold.
- [ ] **Trust microcopy** and **conversion reassurance** display correctly when enabled.
- [ ] Dynamic checkout buttons still render/function when enabled.
- [ ] Mobile and desktop product CTA areas look clean (no overlapping text).

## 3) Collection/listing CTR checks

- [ ] Product cards display expected:
  - Title, price, badges, quick add behavior
  - Rating stars
  - Review count visibility follows section setting
- [ ] Card image alt fallbacks work when image alt is blank (inspect a few cards in source).
- [ ] Collection page speed and layout remain stable after adding optional intro/links.

## 4) Search and predictive search checks

- [ ] Search page shows **intent hint** text when configured.
- [ ] No-results query shows recovery module (heading, text, CTA links).
- [ ] Recovery links go to the correct destinations.
- [ ] Product results in search still render cards properly.
- [ ] Predictive search:
  - Returns suggestions/products as before
  - Product thumbnail alt fallback is not empty when media alt is missing
  - Keyboard navigation (up/down/enter) still works

## 5) Collection banner SEO module checks

- [ ] Optional `collection_intro` renders under collection description when set.
- [ ] Internal link module displays only when enabled.
- [ ] Link labels/URLs are correct and crawlable.
- [ ] No broken HTML appears when links are partially configured.

## 6) Script/performance sanity checks

- [ ] Setmore script appears **once** in rendered page source.
- [ ] No visible JS console errors on:
  - Home
  - Product
  - Collection
  - Search
  - Cart
- [ ] Lighthouse smoke check (optional but recommended):
  - Run on home, a top product page, and a top collection page
  - Confirm no major regressions in Performance / SEO categories

## 7) Theme editor configuration checklist

Before launch, configure these new settings where needed:

- [ ] Product template (`buy_buttons` block):
  - Trust microcopy toggle + copy
  - Low stock notice toggle + threshold
  - Conversion reassurance copy
- [ ] Newsletter section:
  - Incentive text
- [ ] Main collection banner:
  - SEO intro copy
  - Internal link module + heading + links
- [ ] Main collection product grid:
  - Review count toggle
- [ ] Main search:
  - Intent hint
  - No-results recovery heading/text/links

## 8) Post-launch monitoring (first 48h)

- [ ] Check Search Console for sudden crawl/indexing anomalies.
- [ ] Track search page exit rate and no-results behavior in analytics.
- [ ] Watch add-to-cart conversion rate on top products.
- [ ] Check newsletter signup conversion trend.
- [ ] Validate that branded social shares show correct OG image/title/description.
