STORE ANALYSIS — moonridgecompany.com

BOTTOM LINE
  Biggest issue:   Shoppers still hit hat and accessory PDPs with no reviews and often no description — 0 of 5 sampled PDPs show ratings, and 34 of 298 catalog products have empty body copy (24 still available to buy).
  Quick win:       Paste the drafted descriptions for the 21 in-stock empties that already have photos, then pick a review app so stars show on $40–$220 hats.

SNAPSHOT
  Products: 298  |  Collections: 51  |  Pages: 24
  Blog: yes (3 blogs / 22 sitemap URLs)  |  Currency: USD  |  Sampled: 14 pages
  Mobile speed: PageSpeed data unavailable  |  LCP: n/a  |  CLS: n/a
  Reviews: none detected (no aggregateRating; Judge.me widget absent; Yotpo/Loox/Okendo strings in theme HTML only)
  Cart type: drawer
  Trust: logo ✓ favicon ✓ contact page ✓ about page ✓
  AI bot access: allowed (default Shopify robots.txt; no GPTBot or ClaudeBot blocks)

FINDINGS

#1  No customer reviews or star ratings on product pages
  Scope:   Sampled
  Proof:   0 of 5 PDPs (Midtown, Bullock, Howdy Cap, Cupid sweatshirt, Heart Necklace) include aggregateRating or a Judge.me widget.
  Fix:     Install one review platform, request post-purchase reviews, show stars on PDPs and collection cards.
  Impact:  Trust rises on high-consideration hats and boots before add to cart.

#2  Empty product descriptions on 34 live listings
  Scope:   Catalog-wide
  Proof:   products.json 2026-08-16: 34 of 298 have empty body_html; 24 are available; 81 more have under 50 words.
  Fix:     Paste drafted copy for in-stock items with photos first (jewelry/scarves, hoodies, Bullock, Howdy Cap); hold 3 no-photo bracelets.
  Impact:  Buyers get material and shape facts; search and answer engines gain extractable product text.

#3  Brand and bestseller collections still use leftover handles and have no intro copy
  Scope:   Catalog-wide
  Proof:   Bigalli lives at /collections/resistol-copy (29 products, description empty); Best Selling Pendleton is best-selling-stetsons-copy-1 (42 products); 19 of 51 collections have empty descriptions.
  Fix:     Rename copy handles with redirects; add unique intros for brand and Best Selling pages (theme overrides drafted in this pass).
  Impact:  Brand searches land on a real Bigalli or Pendleton page instead of a Resistol leftover URL.

#4  Products for sale with no images
  Scope:   Catalog-wide
  Proof:   14 of 298 products have zero images; 11 of those are available (2 caps + 9 jewelry).
  Fix:     Add vendor photos for the Pendleton and Goorin caps, or unpublish the 11 available no-image SKUs.
  Impact:  Removes PDPs that cannot convert and that AI agents cannot describe visually.

#5  Nearly one-third of the catalog is fully out of stock
  Scope:   Catalog-wide
  Proof:   89 of 298 products have zero available variants, including Stetson Sedona at $220 and Centennial at $170.
  Fix:     Unpublish long-OOS SKUs or restock; keep empty-body OOS hats from merchandising until they can sell.
  Impact:  Fewer dead-end clicks from collections and search — higher add-to-cart rate on what is actually in stock.

#6  Four published collections contain zero products
  Scope:   Catalog-wide
  Proof:   collections.json lists bath, candles, mugs, and shoelaces at 0 products, all still published.
  Fix:     Unpublish the four empty collections in Shopify admin.
  Impact:  Stops empty category URLs from ranking or showing in navigation and sitemaps.

SAMPLE FIXES

  "Stetson Bullock"
  Problem:   In stock at $54 with a photo but body_html length 0 — no straw, crease, or band facts.
  Fix:       Add the drafted short description (black straw, cattleman crease, silver-studded band).
  Result:    PDP and AI answers can name the shape; the listing stops looking unfinished.

  "Bigalli" collection (handle resistol-copy)
  Problem:   Brand URL still says resistol-copy; description empty despite 29 products.
  Fix:       Change handle to bigalli with a redirect; theme override now supplies a Bigalli intro until admin copy is pasted.
  Result:    Brand searches and internal links land on a credible Bigalli page.

  "Pendleton Classic Patch Trucker — Saddle"
  Problem:   Available at $35 with zero images and no way to see the cap.
  Fix:       Add the vendor photo or unpublish until a shot exists.
  Result:    Shoppers and answer engines stop hitting a blank product card.

CONVERSION GAPS

  Elements missing that real shoppers expect:
  - No review stars or review count on PDPs or collection cards
  - Contact page H1 still reads “About Moon Ridge” (same heading as /pages/about-us)
  - Apparel PDPs link hat-sizing instead of a shirt or boot size chart
  - 11 available products have no photo, so the buy button sits on an empty gallery
  - Insider list admin title still says “Join the Rafter M Hat Co. Insider List!” (theme overrides the public H1)

AI-FACING GAPS

  Questions AI agents cannot answer confidently from this store today:
  - “What do customers say about the Stetson Midtown or Bullock?”
  - “What material and crease is the Stetson Bullock?”
  - “Where do I shop Bigalli hats on Moon Ridge?” (URL is still resistol-copy)
  - “Which jewelry pieces are in stock and have photos?”
  - “What size should I order for a Moon Ridge hoodie or Lucchese boot?”
  - “Does this $170+ hat have verified buyer ratings?”
