# Judge.me on Moon Ridge — setup, best practices, no-spam rules

Researched 2026-08-25 from Judge.me help (new 2025 app design), Shopify App Store pricing, FTC Consumer Reviews Rule (effective Oct 2024), and a live HTML capture of moonridgecompany.com. This is a working brief, not a go-live. Nothing here should be turned on without Zack’s OK.

Related: `scratch/finding-01-reviews-plan.md` (older draft; this file supersedes the setup steps).

---

## Already live (do not reinstall)

Judge.me is already installed and rendering.

- App embed `judgeme_core` is on in `config/settings_data.json`.
- Star Rating Badge + Review Widget sit on every product template (hats, boots, home, Bigalli, services, gift card, Personally Yours).
- Live PDP capture (Midtown, 2026-08-25): Judge.me core + preview badge + review widget loaded; **1 real 5-star review**. Coupons off.
- Aug 16 store-analyzer said “no review app.” That finding is stale.

So the remaining job is **settings, copy, cadence, and what to leave off** — not another install.

---

## Plans

Two plans, flat price. Unlimited reviews and unlimited request emails on both.

| | Free ($0) | Awesome ($15/mo, 15-day trial) |
|---|---|---|
| Widgets | Review widget, star badge, some carousels | All 16 widgets (Q&A, Happy Customers page, pop-up, floating tab, AI summary) |
| Request emails | Yes, unlimited | Same, plus **reminders**, **Delivered** trigger, custom schedules per product, coupons |
| Branding | “Powered by Judge.me” on widgets/emails | Can strip branding |
| Custom sender domain | — | Yes (DKIM + Return-Path) |
| Google Shopping ratings feed | — | Yes (Judge.me is a Google review partner) |
| Omnisend / Klaviyo / Flow | Listed as Awesome on the pricing page | Yes |
| SMS | Off | Available — **never use for Moon Ridge** |

Free is enough to collect and show reviews. Awesome is worth it later for: strip branding (same rule as Omnisend), send-from `moonridgecompany.com`, Google Shopping stars, and the Delivered trigger. $15/mo is the ceiling.

**Do not start the Awesome trial until email copy and cadence are decided.** Trial turns features on that default to naggy (reminders, media follow-ups).

---

## How review emails actually work

1. Customer orders.
2. Judge.me waits for a trigger: Created / Paid / **Fulfilled (default)** / Delivered (Awesome) / Archived.
3. After a delay, it sends 1 email for the whole order **or** 1 email per product (default is per product — change this).
4. Link is unique and good for **180 days**. Reviews from that link are marked Verified.
5. Reminders (Awesome only): up to 3 extra emails if they didn’t review. Judge.me itself says 2nd and 3rd reminders get marked as spam.

Install default: requests **on** for new fulfilled orders. Turning a channel off skips unsent requests; emails already sent cannot be recalled.

Sender without custom domain: `requests+<domain>@judge.me`. Reply-to is the admin notification address. 2nd/3rd reminders go from `@judgeme.email`. Custom domain (Awesome) is the only way this looks like Moon Ridge in the inbox.

Default send time = same clock time as the original order. Override to a fixed hour in the store timezone (CDT). There is a weekday-only option on the Early User Program.

---

## Recommended Moon Ridge cadence (do not badger)

Match Omnisend rules: email-only, one reason to write, quiet hours ~8am–8pm CDT, no stacking with other post-purchase mail.

### Send

- **Channel:** Judge.me only. Do **not** also run Omnisend’s “product review request” workflow. Omnisend cannot collect Judge.me reviews in its own emails anyway — its Judge.me integration only syncs *submitted* review data as contact fields.
- **Count:** **One email per order.** Settings → Request scheduling → Multi-product: “Send a single email with requests for multiple products.” Cap products per email at 3 (hats + a band is enough; 7 is the max and too many).
- **Trigger:** Prefer **Delivered + fallback** (Awesome). Fallback = if Shopify never marks delivered, send N days after fulfillment. On Free, use **Fulfilled + a delay that matches real transit** (US ground is often ~3–7 days after you ship). Do not use Created or Paid.
- **Delay after the trigger:** Hats / apparel / home goods: **7–10 days after delivery** (or ~12–17 days after fulfillment if you only have Fulfilled). Boots: a little longer is fine (break-in). That is earlier than the old 14–21 day draft, and closer to when people actually wear the piece. 14–21 still works if you want extra breathing room.
- **POS:** Separate timing. They already have the hat. **2–4 days after the POS order**, or skip POS email entirely and use an in-store QR. Do not treat POS like a shipped order.
- **International:** Longer delay than domestic, or turn off if volume is tiny and transit is messy.
- **Time of day:** Fixed send, e.g. **10:00 AM CDT**. Not 2:37 AM because that’s when they checked out.
- **Reminders:** **Off.** If Awesome is on later, one reminder at +7 days, and only if they opened the first email. Never 2–3. Never “send even if they didn’t open.”
- **Media reminder** (photo follow-up after a text review): **Off.** They already did the work.
- **SMS / push:** **Off.**
- **Past orders blast:** Skip for now. It emails up to 5,000 historic orders ~10 minutes after you run it. Easy to look like a blast. If you seed later, do a small manual list of recent happy customers, max 1 email per person.
- **Frequency cap:** Limit requests if another request went out recently (Judge.me already skips “request sent for another order in the last 7 days”). Set cooldown to **30–60 days** so a repeat buyer doesn’t get another ask the next week.
- **Repeat purchases of the same product:** Uncheck “Send requests when the customer purchases the same product.” One review per hat is enough.
- **Variants:** Uncheck “Send requests for each product variant” so a 7 1/8 and a 7 1/4 of the same hat don’t generate two emails.

### Skip automatically (already built)

Judge.me skips: refunds / restocks, active returns, already reviewed, unsubscribed, hard bounce / spam complaint, blocklisted emails, no email on the order. Full refunds skip once Shopify restocks.

Still add:

- Blocklist `*@moonridgecompany.com` and staff emails.
- Tag `judgeme_excluded` on customers who ask to be left alone (checked at send time, so you can tag them after the order).
- Product exclusions (Awesome, or the `judgeme_excluded` product tag): **Gift Card**, **Services** (shaping/cleaning — collect a store review in person if you want that), maybe custom line items.

### Consent

Default Judge.me setting: send review requests to **everyone**, including people who opted out of Shopify marketing. US review requests are often treated as transactional *if there is no coupon*. Adding a discount makes them look like marketing.

Safer Moon Ridge default: **uncheck** “Send review requests to customers who have opted out of Shopify marketing emails” **if** you ever attach a coupon. With no coupon, leaving it checked is common practice; still respect Judge.me’s own Unsubscribe (that skip cannot be force-resent).

Quiet hours: Judge.me does not have an 8pm cutoff beyond “custom send time.” A 10am CDT send covers this.

---

## Copy

Do not ship Judge.me’s default template. It is salesy, uses star emoji in the subject, and talks like a review app.

Use the existing draft (from finding-01), Judge.me variables swapped in:

**Subject:** How’s the hat treating you?  
**Preview:** No pressure — just curious how it fits.

> Hi {{ buyer_first_name }},
>
> Hope you’ve had a little time with your new piece from Moon Ridge.
>
> If you’re happy with the fit and feel, a short review helps the next person find theirs. If something’s off — sizing, shaping, shipping — reply to this email. We’ll take care of you.
>
> [Leave a review]
>
> Grateful either way,  
> The Wakefield Family  
> Moon Ridge Hats and Heritage  
> Fayetteville, AR

Rules:

- No urgency. No “it only takes a minute” guilt.
- No product recommendations in the email (Awesome add-on — leave off).
- Reply-to should land on **info@moonridgecompany.com** so a complaint is a conversation, not a 1-star.
- Strip Judge.me branding when the plan allows. Flag it if Free still shows “Powered by Judge.me.”
- Logo + cream/ink/saddle colors in email styling. Live widget color is still Judge.me teal `#108474`. Brand ink is `#312110`.

---

## What not to turn on (spam + legal)

These features exist to squeeze more reviews. They fight Moon Ridge’s “don’t badger” rule, and some fight the FTC.

| Feature | Why skip |
|---|---|
| Automatic reminders (2–3) | Judge.me warns they get marked spam. |
| Media reminder | Second ask after they already reviewed. |
| Review request SMS | Standing no-SMS rule. |
| Product recs in the request email | Turns a thank-you into a pitch. |
| Pop-up reviews widget | Corner toasts of 5-star reviews, every page. Feels like a sales popup. |
| Floating Reviews tab | Persistent side button on every page. |
| Auto-share reviews to Facebook/IG/X | Don’t post customer names/photos without a human pass. |
| Coupons-for-reviews (at first) | Extra email, marketing-consent issues, FTC disclosure. If ever: **≤10%**, any rating, never “5-star only.” Judge.me already removed rating-based coupons for Shopify policy. |
| “Help screen before a negative review” | Shows a Contact us wall when they tap 1–3 stars. That’s review gating. FTC Consumer Reviews Rule (16 CFR 465) bans suppressing or discouraging negative reviews. Fashion Nova paid $4.2M for hiding sub-4-star reviews. **Currently off live (`show_negative_reviews_help_screen: false`). Keep it off.** Offer help to *everyone* in the email instead. |
| Default star rating preset = 5 | Live setting `widget_rating_preset_default: 5`. That’s a nudge. Set to no preset / blank. |
| Sample / demo reviews on empty PDPs | Theme JSON has `"review_data": "sample_data"` on the review widget. Confirm live empty products show the empty state, not fake “John Smith” reviews. `empty_state` is `empty_widget` which should be fine — still eyeball it. |
| Omnisend review-request workflow | Double ask. One channel only. |
| Insider reviews (family/staff) without disclosure | FTC: owners/employees must disclose the connection. Don’t seed the catalog with Wakefield reviews unless labeled. |

Legal, short version (not legal advice):

- Incentives are legal only if they are **not** tied to a positive or negative sentiment, and the incentive is **disclosed** on the review. Judge.me tags incentivized reviews for Google Shopping (`is_incentivized_review`).
- Do not hide genuine negative reviews. Auto-publish is actually the honest default; moderate spam, profanity, and fake — not 2-star fit complaints.
- Reply in public, in the Moon Ridge compassionate voice, then fix it offline.

---

## On-site widgets (theme)

Already on PDPs: badge under the title, widget lower on the page. Hide badge when there are zero reviews (`hide_badge_preview_if_no_reviews: true` — already on).

Do next, in admin / theme editor (Zack click):

1. Widget color off teal `#108474` onto brand ink / saddle.
2. Confirm no duplicate theme stars + Judge.me stars.
3. Collection-card stars only if they look quiet (hat grid already has a token system — don’t let a second star style land).
4. Leave pop-up, floating tab, medals spam, Instagram UGC widgets off until there’s a real review volume and a design pass.
5. JSON-LD: Judge.me `enable_json_ld_products` is **false**. Theme already emits product schema and reads `product.metafields.reviews.rating`. Don’t turn on a second aggregateRating block without checking for duplicate schema.
6. Services + gift card templates have the same widgets. Gift cards should not collect product reviews. Services might belong as **store** reviews (hat bar experience), not a star rating on “$35 reshape.”

In-store: Judge.me QR / review link → POS receipt or a small card at the hat bar. Store review QR for the Fayetteville experience; product QR only if they bought a specific hat. Prefer the hosted form so it doesn’t depend on the theme popup.

---

## Admin hygiene

- **Reviews dashboard:** skip a customer (blocklist), skip a product, cancel unsent, force-send (force-send kills reminders — fine).
- **Admin notifications:** email Zack/Natalie on new reviews, especially low stars, so a 1-star doesn’t sit unanswered.
- **Moderation:** auto-publish on (live). Keep spam/profanity filter. Never “only publish 4–5 star.”
- **Shopify Flow:** Judge.me can trigger “new review received” (email-sourced reviews only) or “review request ready” (to send via a third-party mailer). Using Flow to send the request from Omnisend is how you *accidentally* double. Leave Flow for internal alerts if anything.
- **Google / Shop / Meta syndication:** Awesome. Useful later for Shopping stars. Same catalog rules as sold-out feeds — don’t syndicate reviews for products you’ve unpublished from paid channels if Google’s matching would resurrect them. Check before enabling the feed.

---

## Live settings snapshot (2026-08-25, storefront `jdgmSettings`)

Worth fixing even before email is on:

| Setting | Live | Want |
|---|---|---|
| Coupons | Off | Stay off for now |
| Negative-review help screen | Off | Stay off |
| Hide badge if no reviews | On | Keep |
| Auto-publish | On | Keep, with spam filter |
| Widget primary color | `#108474` (Judge.me teal) | Brand ink `#312110` |
| “Powered by Judge.me” | On (`remove_judgeme_branding: false`) | Off when Awesome |
| Default star preset | **5** | None |
| Product JSON-LD from Judge.me | Off | Leave off until schema audit |
| Floating tab | Not installed | Leave off |
| Review videos | Off | Optional later |

Email request schedule is **not** in the storefront payload. Check Apps → Judge.me → Settings → Request scheduling before assuming nothing is sending. Default on install is Fulfilled + on.

---

## Suggested setup order (when Zack says go)

1. Open Judge.me → Request scheduling. Confirm whether automatic emails are already firing.
2. Set one-email-per-order, product cap 3, variant/repeat-purchase off, 30–60 day cooldown.
3. Set domestic delay (Delivered + fallback, or Fulfilled + ~2 weeks). POS shorter or off.
4. Exclude gift card / services / staff emails.
5. Rewrite the request template with the draft above. Send yourself a test.
6. Custom send time 10:00 AM CDT.
7. Leave reminders, media, SMS, coupons, pop-ups, social auto-push **off**.
8. Recolor widgets. Clear the 5-star form preset.
9. In-store QR for the hat bar (store review), optional.
10. Awesome later: branding, custom sender, Google Shopping, Delivered trigger. Still no reminder pile.

---

## Sources

- [Getting started (2025 app design)](https://judge.me/help/en/articles/11632753-getting-started-with-judge-me-new-app-design-2025)
- [Automatic review request emails](https://judge.me/help/en/articles/8379844-automatic-review-request-emails)
- [Reminder emails](https://judge.me/help/en/articles/11792628-automatic-review-request-reminder-emails)
- [Email blocklists](https://judge.me/help/en/articles/8380054-email-blocklists)
- [Marketing consent](https://judge.me/help/en/articles/14288340-sending-review-requests-based-on-shopify-marketing-consent)
- [Request dashboard / skip reasons](https://judge.me/help/en/articles/8384973-review-requests-dashboard)
- [Past orders](https://judge.me/help/en/articles/8380029-sending-review-request-emails-for-past-orders)
- [Media reminders](https://judge.me/help/en/articles/8380115-media-reminder-emails)
- [Coupons](https://judge.me/help/en/articles/8379747-offering-judge-me-generated-coupon-codes-for-reviews)
- [Negative-review “Contact us” screen](https://judge.me/help/en/articles/12136303-offering-a-contact-us-option-before-a-negative-review-is-submitted)
- [QR / POS links](https://judge.me/help/en/articles/9685536-collecting-reviews-using-a-qr-code)
- [Omnisend integration](https://judge.me/help/en/articles/8310250-integrating-with-omnisend-to-send-review-follow-up-emails) — data sync only, cannot collect via Omnisend
- [Pricing](https://judge.me/pricing)
- [FTC Consumer Reviews Rule Q&A](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers)
