STORE ANALYSIS — moonridgecompany.com

BOTTOM LINE
  Biggest issue:   Shoppers land on products with no reviews and often no description — 0 of 20 sampled PDPs show ratings, and 56 of 295 catalog products have empty body copy (38 still available to buy).
  Quick win:       Write descriptions for the 38 in-stock empty-body products (Pendleton + jewelry/accessories first) and turn on a review app so stars appear on PDPs.

SNAPSHOT
  Products: 295  |  Collections: 51 published (30 via collections.json)  |  Pages: 24
  Blog: yes (3 blogs / 22 sitemap URLs)  |  Currency: USD  |  Sampled: 45 pages
  Mobile speed: PageSpeed data unavailable  |  LCP: n/a  |  CLS: n/a
  Reviews: none detected (Loox/Yotpo/Okendo metafields all null; no aggregateRating)
  Cart type: drawer
  Trust: logo ✓ favicon ✓ contact page ✓ about page ✓
  AI bot access: allowed (default Shopify robots.txt; no GPTBot/ClaudeBot/Perplexity blocks)

FINDINGS

#1  No customer reviews or star ratings on product pages
  Scope:   Sampled
  Proof:   20 of 20 PDPs have MetafieldReviews/Loox/Yotpo/Okendo values null; 0 of 20 Product schemas include aggregateRating or review.
  Fix:     Install one review platform, import/request post-purchase reviews, show stars on PDPs and collection cards.
  Impact:  Trust and PDP conversion rise on high-consideration hats/boots ($35–$645).

#2  Empty product descriptions across a large share of the live catalog
  Scope:   Catalog-wide
  Proof:   56 of 295 products have empty body_html; 38 of those are still available; 66 of 295 have under 100 characters of text.
  Fix:     Prioritize copy for in-stock empties (15 Pendleton, jewelry/scarves, then remaining apparel).
  Impact:  Buyers get materials/fit context; Google and AI assistants gain extractable product facts.

#3  Nearly one-third of the catalog is fully out of stock
  Scope:   Catalog-wide
  Proof:   94 of 295 products have zero available variants (31.9%), including sampled Lucchese Sunset Roper at $645.
  Fix:     Unpublish or restock long-OOS SKUs; hide OOS from collection merchandising where possible.
  Impact:  Fewer dead-end clicks from collections, ads, and search — higher add-to-cart rate.

#4  Brand collection URLs and descriptions are broken or empty
  Scope:   Catalog-wide
  Proof:   Bigalli uses handle resistol-copy (29 products); Best Selling Pendleton uses best-selling-stetsons-copy-1 (41 products, desc_len=0); 7 collections with ≥8 products have empty/thin descriptions (126+ products affected).
  Fix:     Rename copy handles to clean brand URLs and add unique collection descriptions for brand and “Best Selling” pages.
  Impact:  Cleaner brand search landing pages and better category ranking/AI citation.

#5  Product JSON-LD emits metafield errors instead of hat attributes
  Scope:   Sampled
  Proof:   5 of 20 Product schemas include values {"error":"json not allowed for this object"} for material and/or Crown Shape, Crown Height, Brim Width, Country of Origin (e.g. Resistol 20X Wildfire).
  Fix:     Fix theme JSON-LD mapping for product metafields so crown/brim/material output plain strings.
  Impact:  Richer merchant/search understanding of hat specs shoppers filter by.

#6  Products for sale with no images
  Scope:   Catalog-wide
  Proof:   19 of 295 products have zero images; 9 of those are still available (mostly jewelry/bracelets).
  Fix:     Add photography or unpublish the 9 available no-image SKUs immediately.
  Impact:  Removes unsellable PDPs that destroy trust when discovered.

SAMPLE FIXES

  "Pendleton Fringed Cotton Throw"
  Problem:   In stock at $98 with 6 images but body_html length 0 — no material, size, or care facts.
  Fix:       Add a short description covering fiber, dimensions, care, and where it fits in the home assortment.
  Result:    PDP and AI answers can explain the product; collection SEO picks up unique text.

  "Bigalli" collection (handle resistol-copy)
  Problem:   Brand collection URL still says resistol-copy; description empty despite 29 products.
  Fix:       Change handle to bigalli (with redirect) and write a Bigalli heritage blurb + shop CTA.
  Result:    Brand searches and internal links land on a credible Bigalli page, not a Resistol leftover.

  "Resistol 20X Wildfire 30 Profile"
  Problem:   Strong written description, but schema additionalProperty values are JSON errors for crown/brim/origin.
  Fix:       Output metafield strings (e.g. Cattleman's crown, 4.25-inch brim) in JSON-LD instead of raw objects.
  Result:    Search/merchant features can read the hat specs already on the page.

CONVERSION GAPS

  Elements missing that real shoppers expect:
  - No review stars or review count on PDPs/collection cards
  - Footer links Privacy/Refund/Terms/Contact but not Shipping Policy (policy exists at /policies/shipping-policy)
  - No boot- or apparel-specific size chart (hat-sizing is linked even on tees; Lucchese PDP has no boot size guide)
  - Express/Shop Pay buttons not present in HTML on 19 of 20 sampled PDPs despite Shop Pay enabled in shop meta
  - Cart add-ons collection exists but only 2 products — drawer upsell strip not evidenced in sampled HTML

AI-FACING GAPS

  Questions AI agents cannot answer confidently from this store today:
  - “What do customers say about the Resistol 20X Wildfire?”
  - “What are the dimensions and care instructions for the Pendleton Fringed Cotton Throw?”
  - “What boot size should I order for Lucchese Sunset Roper?”
  - “Which Moon Ridge jewelry pieces are currently in stock with photos?”
  - “What’s the difference between Moon Ridge’s Bigalli vs Resistol collections online?” (URL/handle confusion)
  - “Does this product have verified buyer ratings before I buy a $200+ hat?”
