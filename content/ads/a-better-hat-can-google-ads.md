# Google Ads — A Better Hat Can

Draft only. Import files are in `content/ads/google-ads-import/`. Campaigns stay **Paused** until Zack enables them in Google Ads.

This Cloud Agent cannot sign into Google Ads (no saved Google session, and Zack should not paste a password into the VM). No Playwright needed.

**Product:** [A Better Hat Can](https://moonridgecompany.com/products/a-better-hat-can)  
**Price:** $149.99 (matches Teskeys; NRS is $169.99)  
**Offer:** Free U.S. shipping (already true — order is over $99). No coupon.  
**Landing URL:** `https://moonridgecompany.com/products/a-better-hat-can` only. Do not send paid traffic to the homepage.

---

## How to think about this

Do not try to beat the $60 M&F / Riding Warehouse cans. Those ads will click and bounce.

This can is for someone who already owns a hat worth protecting: 5-inch brim, stacks in a closet, three ways to carry, made in Gainesville, Texas. Moon Ridge is the first shop in Arkansas to carry it.

Search volume is small. That is the point. Cheap clicks on “cowboy hats” would drown the SKU. Tight keywords, this URL, stop if the math does not work.

**Unit math (until we have this SKU’s real margin):**

- Assume blended ~40% → about $60 gross after $149.99
- Target CPA: **under $40** to start. Kill or rewrite if CPA stays over **$55** after ~50 clicks.
- Suggested test: **$15–20/day** (~$450–600/month). Enough to learn. Not enough to hurt January.

Need COGS from Zack before scaling. If this can is thinner than 40%, drop the CPA cap.

Timing is decent: early felt season, people packing straw away and traveling with felt.

---

## Before spend (checklist)

1. **Google Ads conversion** from Shopify (Purchase) + enhanced conversions.
2. **Merchant Center** — product published to Google & YouTube, in stock, GTIN/brand if API provided one (SKU is blank in Shopify today; add `ABHC-BLK` or API’s code if you have it).
3. **Feed title** should keep “Cowboy Hat Case” / “Hat Can” — current SEO title is already: `Stackable Cowboy Hat Case – A Better Hat Can | Moon Ridge`.
4. Confirm the item is **not** excluded by the sold-out Flow (it is in stock).
5. Soften any ad line that sounds like a guaranteed overhead-bin fit. Teskeys says “most airline overhead bins.” We say “built to travel,” not “fits every plane.”

---

## Campaign structure

Two campaigns. Same landing page. No Display, YouTube, or Demand Gen until Search + Shopping have 2–3 weeks of data.

### Campaign A — Search: Hat Can

- Type: Search
- Networks: Search only (uncheck Display partners and Search partners for the first month)
- Locations: United States. Bid **+25% Arkansas**, **+15% Texas / Oklahoma / Missouri**
- Languages: English
- Bidding: **Maximize clicks** with a **$2.50 CPC cap** for 7–10 days, then switch to **Maximize conversions** once ~15 purchases or 30 days, whichever comes first. Do not start on Target CPA with no conversion history.
- Daily budget: **$12**
- Ad rotation: Optimize
- Final URL: product URL
- Tracking: Shopify Google channel / Ads tag

### Campaign B — Shopping: this SKU only

- Type: **Standard Shopping** (not PMax for the test)
- Priority: High
- Listing groups: **Item ID = this product only** (exclude everything else)
- Daily budget: **$8**
- Bidding: Manual CPC **$0.80** start, or Maximize clicks with $1.20 cap
- If you later add PMax, pin the asset group to this listing and add **brand exclusions** (Stetson, Resistol, Boot Barn) so it cannot wander into hat queries

Do **not** launch an open Performance Max “push this product” campaign. It will spend on cowboy hat shoppers who do not want a $150 case.

---

## Ad groups (Search)

Exact and phrase only for two weeks. Add broad later only on winners.

### AG1 — Brand / product name (highest intent)

| Keyword | Match |
| --- | --- |
| [a better hat can] | Exact |
| "a better hat can" | Phrase |
| [api hat can] | Exact |
| "api hat can" | Phrase |
| [api plastics hat can] | Exact |

Expect low volume, cheap, high convert. Always on.

### AG2 — Hat can (category)

| Keyword | Match |
| --- | --- |
| [hat can] | Exact |
| "hat can" | Phrase |
| [cowboy hat can] | Exact |
| "cowboy hat can" | Phrase |
| [western hat can] | Exact |
| "western hat can" | Phrase |
| [hat can carrier] | Exact |
| "cowboy hat can carrier" | Phrase |

### AG3 — Travel case (job to be done)

| Keyword | Match |
| --- | --- |
| [cowboy hat case] | Exact |
| "cowboy hat case" | Phrase |
| [cowboy hat travel case] | Exact |
| "cowboy hat travel case" | Phrase |
| [cowboy hat carrier] | Exact |
| "cowboy hat carrier" | Phrase |
| "hat case for travel" | Phrase |
| "fly with a cowboy hat" | Phrase |
| "pack cowboy hat airplane" | Phrase |

### AG4 — Storage / stack

| Keyword | Match |
| --- | --- |
| [cowboy hat storage] | Exact |
| "cowboy hat storage" | Phrase |
| [stackable hat case] | Exact |
| "stackable hat can" | Phrase |
| "hat can 5 inch brim" | Phrase |
| "wide brim hat case" | Phrase |

### Shared negatives (all Search ad groups)

Add as campaign negatives:

```
cheap
diy
cardboard
kids
child
toy
baseball
trucker
fitted cap
snapback
fedora box
amazon
used
rental
free
how to make
pattern
svg
cricut
helmet
hard hat
construction
```

Also negative exact `[hat]` `[cowboy hat]` `[stetson]` `[buy cowboy hat]` — those people want a hat, not a can. Let organic / other campaigns (if any) have them.

---

## Responsive search ad (one RSA per ad group, same bones)

Pin headline 1 in AG1 to “A Better Hat Can”. Leave others unpinned so Google can mix.

**Display path:** `hat-can` / `texas`

### Headlines (≤30 characters)

| # | Headline | Chars |
| --- | --- | --- |
| 1 | A Better Hat Can | 16 |
| 2 | Cowboy Hat Case | 15 |
| 3 | Stackable Hat Can | 17 |
| 4 | Fits a 5-Inch Brim | 18 |
| 5 | Made in Texas | 13 |
| 6 | Three Ways to Carry | 19 |
| 7 | Hard-Shell Hat Carrier | 22 |
| 8 | See the Hat Inside | 18 |
| 9 | First Shop in Arkansas | 22 |
| 10 | Free U.S. Shipping | 18 |
| 11 | Don't Crush the Brim | 20 |
| 12 | Travel With Your Hat | 20 |
| 13 | Moon Ridge Hats | 15 |
| 14 | $149.99 Hat Can | 15 |
| 15 | Built to Stack | 14 |

### Descriptions (≤90 characters)

| # | Description | Chars |
| --- | --- | --- |
| 1 | Hard-shell hat case. Stacks, fits a 5-inch brim, carries three ways. Made in Texas. | 83 |
| 2 | Handle, shoulder strap, or backpack. Built to travel with a good cowboy hat. | 76 |
| 3 | Moon Ridge is first in Arkansas to carry A Better Hat Can. Free U.S. shipping. | 79 |
| 4 | Old cans don't stack and chew wide brims. This one was built by asking hat people. | 82 |

Voice notes: no “limited time,” no “act now,” no 20% off. Free shipping is the deal. “First in Arkansas” is true and local; don’t lead national ads with it — Google will mix; that is fine.

### AG3-only extras (travel)

Swap in if the main RSA looks generic:

- Headline: `Airport-Ready Hat Can` (21)
- Description: `The hat can you can actually walk through an airport with. Fits a 5-inch brim.` (79)

Do not promise a specific airline’s bin.

---

## Assets

**Sitelinks** (final URL still related, not a bait-and-switch):

| Sitelink | URL |
| --- | --- |
| How to Store a Hat | `/blogs/hat-education/how-to-store-a-cowboy-hat` |
| Shop Cowboy Hats | `/collections/western-hats` |
| Original Hat Bar | `/pages/custom-hat-bar` |
| Visit Fayetteville | `/pages/contact` or about/hours page you prefer |

**Callouts:** Made in Texas · Fits 5" Brim · Stackable · 3 Ways to Carry · Free Shipping $99+ · Hard Shell

**Callouts to skip:** Sale, % off, Free shaping (shaping is in-store on hats, not this SKU).

**Image ads (Shopping):** Feed uses the PDP images. Best clickers will be the stacked cans and the smoke-tint lid with a hat visible. Make sure those are image 1–2 in Shopify if Shopping CTR is weak.

**Business name:** Moon Ridge Hats and Heritage

---

## What not to do

- No THANKYOU10 or any code on these ads (that code is post-purchase).
- No “was $169” unless you actually list a compare-at (you do not).
- No PMax with the full catalog “to help this product.”
- No remarketing barrage. If you add display remarketing later: one tasteful hat-can image, 30-day window, frequency cap 3/week.
- Don’t send “hat storage” clicks to the blog as the primary landing page. The blog should sitelink; the sale happens on the PDP.

---

## Week 1–2 operating notes

- Search terms report every 3 days. Add junk as negatives the same day.
- If a query is “hat can 2 pack” / “double hat can,” decide: we only sell the single API can. Negative those if they don’t convert.
- If CPC on `[cowboy hat case]` is >$4 with no conversion, pause that exact and keep phrase + brand.
- In-store: same product at 2218 N College. Location assets / “visit” can run in AR only so Fayetteville traffic is not forced to ship.

---

## After the test (only if CPA is in range)

1. Raise Search to $20–25/day on AG1–AG2 winners.
2. Then, and only then, a tightly listed PMax for this SKU.
3. Optional: one YouTube in-stream to the stacked-can clip if you have a 15s video of the hinge / backpack carry. Not a talking-head discount ad.

---

## Copy for Merchant Center / feed (if the Google title is thin)

Keep close to live SEO:

`A Better Hat Can - Stackable Cowboy Hat Case - 5 Inch Brim - Made in Texas`

Description (first 160 chars matter in Shopping):

`Hard-shell cowboy hat case from API in Gainesville, TX. Stacks, fits a 5-inch brim, carries by handle, strap, or backpack. In stock at Moon Ridge, Fayetteville.`
