# Finding #1 — Product reviews plan (draft)

## Goal
Get real star ratings on product pages and collection cards. Theme already reads Shopify’s standard review metafields (`product.metafields.reviews.rating` / `rating_count` in `sections/main-product.liquid`).

## Recommendation
**Judge.me (Free plan)** — writes those standard metafields, shows stars on PDPs, supports post-purchase email requests. No theme rewrite needed for basic stars.

Alternatives if you already prefer one: Loox, Okendo, Yotpo (theme has leftover metafield hooks for those, but all currently null).

## What Zack does in Shopify (approval required)
1. Shopify admin → Apps → install **Judge.me Product Reviews** (Free).
2. Enable on-site widgets: product star rating + review widget on PDPs.
3. Turn on **review request emails** from Judge.me (or we’ll use Omnisend later — pick one channel so we don’t double-ask).
4. Optional: manually request reviews from recent happy customers / in-store guests to seed the first 10–20.

## Cadence (Moon Ridge rules)
- Soft ask only — no nagging, no stacked “leave a review” blasts.
- Prefer **one** request ~14–21 days after delivery (matches existing post-purchase plan).
- Email-only. No SMS.
- Suppress if they already reviewed.
- Quiet hours 8am–8pm CDT.
- Do **not** activate Omnisend review flow until Zack approves.

## Soft review email draft (Omnisend or Judge.me — not live)

**Subject:** How’s the hat treating you?

**Preview:** No pressure — just curious how it fits.

---

Hi {{ first_name | default: "there" }},

Hope you’ve had a little time with your new piece from Moon Ridge.

If you’re happy with the fit and feel, a short review helps the next person find theirs. If something’s off — sizing, shaping, shipping — reply to this email. We’ll take care of you.

[Leave a review]

Grateful either way,  
The Wakefield Family  
Moon Ridge Hats and Heritage  
Fayetteville, AR

---

## Done when
- Stars render on at least one live PDP with a real rating
- Review requests go out through a single approved channel
- No Omnisend/Judge.me double-messaging

## Out of scope for this finding
Live app install, publishing automations, paid plan upgrades — need Zack’s click in admin.
