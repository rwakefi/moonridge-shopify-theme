# Finding #1 — Product reviews plan (draft)

Superseded for setup detail by `scratch/judgeme-setup-research.md` (2026-08-25). This file keeps the original goal and the approved-voice email draft.

## Status (2026-08-25)

Judge.me is **already installed and live**. App embed on. Star badge + review widget on every product template. Midtown PDP showed 1 real 5-star review. Coupons off. Negative-review “contact us first” screen off.

Remaining work is settings, copy, and cadence — not a second install. Do not turn request emails, reminders, or Omnisend review flows on without Zack’s OK.

## Goal
Real star ratings on product pages and collection cards. Theme already reads Shopify’s standard review metafields (`product.metafields.reviews.rating` / `rating_count` in `sections/main-product.liquid`).

## Cadence (Moon Ridge rules)
- Soft ask only — no nagging, no stacked “leave a review” blasts.
- **One email per order**, ~7–10 days after delivery (or ~2 weeks after fulfillment on the Free plan).
- Email-only. No SMS. No media follow-up. No 2nd/3rd reminder.
- Skip if they already reviewed, refunded, or unsubscribed.
- Quiet hours 8am–8pm CDT (fixed 10:00 AM CDT send).
- Judge.me **or** Omnisend — never both.

## Soft review email draft (not live)

**Subject:** How’s the hat treating you?

**Preview:** No pressure — just curious how it fits.

---

Hi {{ buyer_first_name }},

Hope you’ve had a little time with your new piece from Moon Ridge.

If you’re happy with the fit and feel, a short review helps the next person find theirs. If something’s off — sizing, shaping, shipping — reply to this email. We’ll take care of you.

[Leave a review]

Grateful either way,  
The Wakefield Family  
Moon Ridge Hats and Heritage  
Fayetteville, AR

---

## Done when
- Stars render on at least one live PDP with a real rating *(done — Midtown)*
- Review requests go out through a single approved channel
- No Omnisend/Judge.me double-messaging
- Widget color and 5-star form preset cleaned up (see research brief)
