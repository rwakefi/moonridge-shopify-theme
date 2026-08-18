# Moon Ridge Cowork

Before beginning any task, read these three context files in order:
1. Context/who-i-am.md
2. Context/how-i-talk.md
3. Context/how-you-work.md

Follow all rules in how-you-work.md. Never skip this step.

---

# Moon Ridge Hats and Heritage — Claude Reference

Context file for Cowork sessions working on Moon Ridge's store, content, and copy.

## The store

- **Moon Ridge Hats and Heritage** (moonridgecompany.com) — formerly/aka **Rafter M Hat Company** (raftermhatco.com, legacy domain still live on some emails). "Rafter M" is still used as the umbrella lifestyle brand name.
- Based in Northwest Arkansas. Started on the Wakefields' back deck.
- Shopify store, Basic plan, USD, CDT. Contact: info@moonridgecompany.com.
- Sells western/fashion hats (Stetson, Resistol, Charlie 1 Horse, Bigalli, Goorin Bros.), boots (Lucchese), wool goods and blankets (Pendleton), apparel, and home goods/accessories. **Not just hats and boots** — the full catalog is positioned as a highly curated, high-quality selection across apparel and goods. Also runs hat-shaping parties/events and an interior design offshoot.

## Name change (May 2026)

Rafter M Hat Company officially became **Moon Ridge Company** (also shown as "Moon Ridge Hats and Heritage" in Shopify admin) in May 2026. Messaging on this: "Rafter M is now Moon Ridge. Exact same people, exact same place. More brands, new name." Some legacy assets (e.g. the gift card product, `raftermhatco.com` email domain, `raftermhatco.myshopify.com` store domain) still carry the old name — don't be surprised by "Rafter M" showing up in older product names, code, or email addresses; it's the same business.

Common search/SEO terms customers use for the brand: Moon Ridge, Moonridge Company, Rafter M Hats.

Public positioning line: **"Legendary Brands. FITTED. PERSONALIZED."** Also described as specializing in "The Art of Everything Hats" — custom shaping, deep-steam cleaning, professional restoration.

**In-store hat bar naming (settled Aug 2026):** **Arkansas's Original Hat Bar** — drop "Custom" from the branded name. Page handle `/pages/custom-hat-bar` can stay for URL stability; titles, meta, schema, and storefront copy use Original Hat Bar.

## The people

- **Zack Wakefield** — co-founder/owner. Spent years leading and growing businesses before this one. Came into hats to support Natalie's vision and build something together — the business is framed as a shared, family effort rather than his solo venture.
- **Natalie Jo Wakefield** — co-founder. A hairstylist and designer by trade; she's the one who saw how the right hat could transform someone's look, which is the origin of the business. Also runs **Moon Ridge Home & Interiors** under the same brand umbrella (natalie@moonridgecompany.com), writing in first person there.
- Signed collectively as **"The Wakefield Family."**
- No other staff should be named in content — keep references to the team limited to Zack and Natalie (or "the Wakefield Family" / "our team") rather than naming other employees.

## Brand story

From the About Us page:

> "At Moon Ridge, we believe a good hat does more than complete your outfit — it tells your story. It's the way you carry yourself, the confidence in your step, the look in the mirror when you finally find *the one.*"

Core positioning: honesty, authenticity, craftsmanship you can feel. No rush, no gimmicks — shopping (in store or online) is personal, not transactional. Brand partners are chosen because the Wakefields have used and trust them personally, not just because they sell.

## Brand partners carried

- **Stetson** — 1865, "Boss of the Plains," the most iconic hat brand in the world.
- **Resistol** — 1927, Texas-made, built to "resist all."
- **Charlie 1 Horse** — 1970s, horseshoe-branded, fashion-forward western (Lainey Wilson associated).
- **Goorin Bros.** — 1895 Pittsburgh, family-owned, felt hats + Animal Farm trucker caps.
- **Bigalli** — 1926, Italian craftsmanship + Ecuadorian straw.
- **Lucchese** — 1880s San Antonio bootmaker, hand-lasted, "smaller menu, better execution."
- **Pendleton** — 1863 Oregon wool mill, vertically integrated, one material mastered completely.

## Physical store & customer experience

- **Retail store:** 2218 N College Ave, Fayetteville, AR 72703 ("two doors south of the bowling alley on College Avenue"). Also listed in Shopify as location "Rafter M + Personally Yours."
- **Headquarters/shipping:** 3242 E Lovers Ln, Fayetteville, AR 72701 (separate Shopify location — this is the returns address, likely warehouse/office rather than the storefront).
- **Phone:** (479) 430-2667. **Email:** info@moonridgecompany.com.
- **Hours:** Mon–Fri 10am–5pm, Sat 10am–2pm, closed Sunday. Hours can shift around private events.
- **Master hat shapers in-store:** Thursday–Saturday (Thu/Fri 10am–5pm, Sat 10am–2pm). Regular staff cover Mon–Sat.
- **Walk-ins welcome, no appointment required** — but booking a "Free Hat Experience" appointment is recommended for dedicated one-on-one fitting time.
- **Shaping/cleaning pricing:** complimentary custom shaping is an **in-store service only** (walk-ins and appointments) on hats purchased at Moon Ridge; $35 to shape/clean a hat bought elsewhere. Free shaping does **not** apply to shipped/online orders — do not position it as a shipping or online-purchase perk in customer-facing content.
- Also books hat-shaping parties/hat bars for weddings, corporate events, and private parties (8–250 guests).
- **Social:** Instagram [@moonridgeco](https://instagram.com/moonridgeco), Facebook (Moonridgecompany), TikTok [@moonridgeco](https://tiktok.com/moonridgeco).

## Tagline & visual identity

- **Tagline: "Hats & Heritage."** Simple, timeless, not trendy — meant to signal a lifestyle and tradition, not just a product category.
- **Palette:** warm cream/off-white backgrounds with chocolate brown and saddle-leather tan accents. Rich but understated. Values in use on the theme: ink `#312110`, cream `#faf8f5`, saddle tan `#9c7a52`.
- **Typography:** elegant serif, nothing bold or aggressive. **The live store does not currently deliver this** — see **Typography: the live font situation** below before doing any type work.
- **Overall feel:** "like flipping through a premium Western lifestyle magazine, not a rodeo supply catalog." Elevated Western, not kitschy cowboy. Minimal and confident — the logo/brand doesn't need to shout.
- Illustration style (for app/marketing use): hand-crafted but refined — think ink-sketch/clean line art echoing the logo's hat icon, not cartoonish.

## Product ecosystem (technical)

- **moonridge-shopify-theme** (github.com/rwakefi) — the Liquid/CSS Shopify storefront theme, store domain `raftermhatco.myshopify.com`.
- **hat_finder** (github.com/rwakefi) — companion Flutter/Dart iOS app: a guided hat-finder quiz with fit/size measurement, backed by a Railway API that pulls from the same Shopify catalog.
- **hatfinder.moonridgecompany.com** (Netlify, team `zwakefield`) — web version of the same hat finder quiz.
- All three (theme, app, web quiz) read from the same Shopify product catalog, so they should stay visually and terminologically consistent with each other.
- **Hat Finder app concept:** opens with "What kind of hat are you feeling today?" → grid of illustrated hat crown types (swipe each to preview real people wearing that style) → tap through to a lookbook gallery → Shopify products for that hat type displayed below → purchase. Discovery-first, sales second.

## Voice & tone

Pulled from the About Us / brand-partner pages and from live copywriting sessions with the Wakefields:

- Confident, warm, rooted in western/ranch heritage. Never salesy or hype-driven — the product and craftsmanship do the selling.
- Short, direct sentences with one vivid, concrete detail rather than piles of adjectives.
- Uses physical, visual anchors so a customer can picture the product before touching it (e.g. "matches the width of the crown," "a finger's width beyond the crown," "sharp corners and sides that are high and tight").
- Comfortable with insider terminology (crown shapes, brim shapes, felt grades, fur weights). Write for people who already care about hats — don't over-explain basics.
- Heritage brand copy leans on real history (founders, years, place names) rather than vague claims.
- Family framing throughout — "The Wakefield Family," first-person from Natalie Jo on interiors content.
- When the Wakefields edit copy, expect precise, surgical feedback (cut one word, swap "crease" for "dip," drop a whole clause). Match that precision back — make the exact edit requested, don't rewrite more than asked, and don't over-explain the change afterward.

**Always, in every context (product copy, customer replies, social, internal notes): lead with a compassionate, understanding tone.** Assume good faith, acknowledge the customer's situation before problem-solving, and never sound clinical, defensive, or dismissive — even when saying no to a return, refund, or request. This matters most in customer service replies, but it should color everything written for Moon Ridge.

## Product content conventions

- Crown shapes and brim shapes are catalogued as a primary title plus parenthetical aliases, e.g. `CHL (Cool Hand Luke)`, `Brick/Rounded Brick/Minnick`.
- Copy must match the live Shopify metafield titles (`custom.crown_shape`, `custom.brim_shape`) exactly — check current values before publishing new wording, since the list evolves.
- Crown shapes on file: Cattleman's, Brick/Rounded Brick/Minnick, Pinch Front/Teardrop/Diamond, Texas Punch, Gus/Tom Mix, Cutter, Gambler/Telescope, CHL (Cool Hand Luke), The Walker, Mule Kick/Horseshoe, Open Crown.
- Brim shapes on file: Flat/Pencil Curl, Snap Brim/Flanged Brim, RD (Round), J (George Strait, Medium Curved), JB (Bullrider), CHL (Cool Hand Luke, Shovel, Reiner Low Sides), U (Reiner High Sides), WTP (West Texas Punch, Rancher), SC (Showmanship).

## How to edit the website/theme (verified July 2026)

- The live theme is **GitHub-connected**: `moonridge-shopify-theme/main` (theme ID `gid://shopify/OnlineStoreTheme/184590074160`), synced to `github.com/rwakefi/moonridge-shopify-theme` branch `main`. The repo is publicly clonable (read-only from Cowork's sandbox — no push credentials, no `gh` CLI, no authenticated Shopify CLI).
- **Cloud Agents are different:** they have git push credentials and a read-only `gh`. **Merging to `main` is publishing** — Shopify syncs within about a minute. Treat a merge as a live store change and get Zack's explicit go-ahead first (verified Aug 2026, PR #81 was live ~60s after push).
- **There is no working PR preview.** The `Deploy PR Preview` workflow fails on every PR — the `SHOPIFY_PREVIEW_THEME_ID` secret points at a theme that no longer exists on the store. Don't read that red X as a signal about your changes, and don't rely on it to see your work. Until it's fixed, the way to preview a theme change is to curl the live page HTML, swap in the branch's stylesheets, and render it in headless Chrome — that caught three real bugs on PR #81 that reading the CSS had missed.
- **The way to edit:** Shopify admin → Online Store → Themes → ⋯ → **Edit code** (driven via the Claude in Chrome browser). Edits made in the admin code editor sync back to the GitHub repo automatically because of the GitHub integration.
- The Shopify MCP's `themeFilesUpsert` is blocked on the live/MAIN theme — API writes only work on unpublished themes. Browser code-editor edits are the working path for live-theme changes.
- Key theme facts learned:
  - All product templates (`product.json`, `product.cowboy-hats.json`, `product.bigalli.json`, `product.boots.json`, `product.drinkware.json`, `product.gift-card.json`, `product.home.json`, `product.services.json`, `product.rafter-m-personally-you.json`) use the shared `main-product` section → one edit to `snippets/buy-buttons.liquid` reaches every template. None of them override the buy_buttons block settings (all use schema defaults from `sections/main-product.liquid`).
  - Trust microcopy ("In-store or shipping nationwide…") lives as a `buy_buttons` block setting default in `sections/main-product.liquid` (~line 2673), rendered in `snippets/buy-buttons.liquid`.
  - Product shipping note (live): `snippets/buy-buttons.liquid` shows "Free U.S. shipping on orders over $99 · $15 standard" (or "$6 U.S. shipping" when product tagged `Ballcaps`).
  - Ball caps are identified by product tag `Ballcaps` (they ship via a separate $6 profile; no free-shipping tier).
  - **Brand pages** use template `page.brand-v2.json` (not `page.brand.json`). Heritage block + Best Selling carousel read `custom.brand_collection_handle` / logo metafields. Theme JSON `| remove: "'s"` filters on dynamic sources are ignored by Shopify — strip possessive `'s` in `blocks/brand-heritage.liquid` at render time so Stetson reads "Stetson Heritage" / "The Story of Stetson". Best Selling carousel intentionally keeps the apostrophe.
  - Heritage copy drafts: `content/brand-pages/stetson-heritage.md` and `resistol-heritage.md` (both published live Aug 2026). Other brand pages (Pendleton, Goorin Bros, etc.) share the template but do not yet have full Stetson-style heritage timelines. `/pages/charlie-1-horse` currently redirects to a collection; `/pages/bigalli` 404s.
  - **Cart add-ons (cart upsells) already built** (verified Aug 2026): `snippets/cart-drawer-addons.liquid` in the cart drawer; settings under Cart → "Suggested add-ons" (`cart-add-ons` collection, "Add to your order", limit 6). If the strip doesn't show live, check the collection first — not missing theme code. Resume notes: `scratch/cart-addons-notes.md`.
  - **Hat collections** (Men's Hats, Women's Hats, Hats for Everyone) use `templates/collection.hats.json` → `main-collection-banner` + `main-collection-product-grid` + `hat-finder-cta`. Styling lives in `assets/hats-collection.css`, which since Aug 2026 is built on a **design token block at the top of the file** — palette, a four-step type scale, one tracking value per role, one radius, one grid rhythm. Add a token there before hardcoding a value, or the toolbar/grid/badges/CTA drift apart again. 24 products a page.
  - **Body template classes:** `<body>` only carries `template-suffix-hats`, added conditionally in `layout/theme.liquid`. `home-product.css`, `home-collection.css` and `drinkware-product.css` are all written against `.template-suffix-home` / `.template-suffix-drinkware`, which **still don't exist** — those stylesheets have never rendered. Switching them on would change those pages, so it needs its own review.
  - **Grid spacing:** never set `column-gap`/`row-gap` on `.product-grid` directly. Dawn computes item widths from `--grid-*-horizontal-spacing` and uses the same variables for the gap, so overriding only the gap makes items too wide and collapses the mobile grid to one column. Set the variables.
- Shipping rates (July 2026): General profile $15 ground ≤$99.99 / free ≥$100 (the $99.00–$99.99 dead zone was fixed 2026-07-19); Hats profile $15 economy, free ≥$99.99, $70 express; Ball caps $6/$25/$50; local pickup free.

## Brand fonts (confirmed by Zack 2026-08-18)

**The four official Moon Ridge fonts are Lora, Playfair Display, Cinzel, and Tenor Sans.** Three serifs and one sans. Anything else appearing on the storefront is not brand — treat it as drift to be removed, not a choice to be matched.

All four are open-source, so there is **no licensing constraint and no need to fetch files from anywhere**:

| Font | In Shopify's font library? | Handles / source |
| --- | --- | --- |
| Lora | Yes | `lora_n4 lora_i4 lora_n5 lora_i5 lora_n6 lora_i6 lora_n7 lora_i7` |
| Playfair Display | Yes | `playfair_display_n4` … `_n9` plus italics |
| Tenor Sans | Yes | `tenor_sans_n4` (single weight) |
| Cinzel | **No** | Already uploaded to Moon Ridge's own Shopify Files as `Cinzel-Medium.ttf`, registered as family `customfont` |

So Lora / Playfair Display / Tenor Sans can be set straight from **Theme settings → Typography** — served off Shopify's CDN, no third-party request, no upload. Cinzel is the only one needing the manual upload it already has.

**Do not use Canela.** It is referenced all over `heritage-luxury.css`, `lumin.css` and the dead `cus_font` / `font` keys in `settings_data.json`, but it is not a Moon Ridge font — it is demo data that shipped with the purchased theme. The two files are hosted on *other merchants'* CDN paths (`/0765/8707/3883/`, `/0811/3002/9368/`; Moon Ridge is `/0885/7180/6000/`) and the font name tables identify it as genuine Canela by **Commercial Type**, a commercial licence sold per domain. Replace those references with a brand font rather than wiring Canela up.

## Typography: the live font situation (audited Aug 2026 — Zack wants to tackle this)

The brand guide asks for an elegant serif. The store does not currently render one, and the reasons are all fixable. Audited against the live site with headless Chrome, so these are what actually renders, not what the files claim.

**What actually loads on the storefront** (network capture of `/collections/mens-hats`, 2026-08-18 — **six families, ten files on one page**):

| Family | Served from | On brand? |
| --- | --- | --- |
| Jost `n5` | Shopify library — current `type_header_font` | No |
| Poppins `n4/n5/n7` | Shopify library — current `type_body_font` | No |
| Playfair `n4/n7` | Shopify library (note: "Playfair", not "Playfair Display") | Near |
| Libre Baskerville `n4/n7` | Shopify library | No |
| Tenor Sans | **Google Fonts** `@import` in `sections/brand-switcher.liquid` | Yes, wrong source |
| Cinzel Medium | Moon Ridge Shopify Files, family `customfont` | Yes |

So the two most visible faces on the store — headings and body — are currently **Jost and Poppins, neither of which is a brand font**. The real job is not "add a font", it's cutting six families down to the official set. Also remove the stray Google Fonts `@import`s in `sections/brand-switcher.liquid` (Tenor Sans) and `sections/founders-review.liquid` (Playfair Display + Dancing Script) — the first two are in Shopify's library already.

Note `config/settings_data.json` in the repo says `futura_n5` / `harmonia_sans_n4` — that is **stale**, don't trust it for fonts. Live values differ; check the rendered page.

**Why headings are inconsistent — three separate causes:**

1. `assets/heritage-luxury.css` and `assets/lumin.css` both set `h1, h2, h3, .h1, .h2, .h3, .card__heading, .banner__heading` to `"Canela", "Playfair Display", serif !important`. **Neither font is loaded under those names**, so everything hitting that rule falls back to **Times New Roman** — including every product title on the store. Fix: point that stack at a brand font.
2. The live custom-font block (`sections/custom-fonts.liquid`, configured in `sections/header-group.json`) loads **`Cinzel-Medium.ttf`** and registers it as the family **`customfont`**, applied to `h1`/`h2` only. So the serif that renders is Cinzel while the serif referenced in CSS is Canela, and they never meet.
3. Elements matching neither rule use `var(--font-heading-family)` = Jost. Net effect before the Aug 2026 fixes: hero title in Cinzel, toolbar title in Jost, product titles in Times — three faces for headings on one page.

**Note on Cinzel:** it works well as a large masthead but it is a Roman inscriptional **capitals** design with almost no lowercase character — do not use it below roughly 24px or for product titles. Playfair Display or Lora are the right choices for text-size serif.

**Two other global `!important` layers to know about before touching type or cards:**

- `sections/header.liquid` has a `<style>` that paints `.color-inverse` and `.color-background-2` white with `!important`. Both are stock Shopify colour-scheme classes, so it reaches product badges and **any section set to either scheme** — `background-2` is defined as brown-on-white and renders white instead. Narrowing that selector to header-only selectors would repaint sections across the store, so it needs its own change and Zack's eyes.
- `heritage-luxury.css` and `lumin.css` **share 52 selectors** and are both loaded on every page. They also wrap every product card in a second white panel (10px padding, 4px radius) with an 8px hover lift, on top of the panel the theme card style already draws.

Scoped workarounds for all of the above exist in `assets/hats-collection.css` (hat collections only) — read the comment blocks there before repeating the work elsewhere.

## Email & Omnisend (customer messaging)

**Brand for all Omnisend work:** **Moon Ridge Hats and Heritage** (moonridgecompany.com). If the Omnisend account has multiple stores/brands, always confirm and use Moon Ridge Hats and Heritage — never set up or edit under a different brand without asking.

**Remove Omnisend branding from everything.** No "Powered by Omnisend," Omnisend logos, Omnisend footer links, or other Omnisend platform marks in customer-facing emails, forms, popups, landing pages, or SMS. Customer-facing surfaces should look like Moon Ridge only. Omnisend's Free plan does **not** allow branding removal — paid plan (Standard or higher) is required; if branding can't be removed yet, flag it to Zack before anything goes live. When editing templates, strip any residual Omnisend marks from footers and prebuilt blocks.

**Do not badger customers.** Light, respectful automation beats aggressive recovery sequences. This is a standing preference for Zack — treat it as a hard constraint when designing or editing campaigns, flows, SMS, or any outbound marketing.

### Channel & cadence rules
- **Email-only for now** — do not add SMS (or push) automations unless explicitly asked.
- Cap automation send volume: about **1 automation email per day** and **no more than 3–4 per week** to the same person across flows.
- **Suppress** automation emails if the customer just purchased.
- **Quiet hours:** roughly **8am–8pm CDT** — don't schedule sends outside that window.
- Do **not** stack Omnisend messages on top of Shopify's transactional order/shipping emails (no duplicate "your order shipped" style content).

### Discount & offer rules
- **Max discount: 10%.** Never create or recommend an offer above 10% off in Omnisend (or any marketing automation) unless Zack explicitly overrides.
- Protect the ~**40%** blended gross margin — no early or heavy %-off pressure in automations.
- Abandoned cart: **no discount on emails 1–2**; only consider a small late incentive on a final reminder (**≤10%**), and **never reuse `THANKYOU10`** for abandonment without discussing first (that code is post-purchase).
- Prefer real value props over coupons first (e.g. free shipping ≥$100, fit/shaping expertise, brand trust).

### AI email guidance (keep human judgment in charge)
Drawn from modern AI email best practices (incl. Salesforce's AI-in-email guidance) and adapted to Moon Ridge's no-badger standard:

- **AI reduces fatigue — it does not justify more email.** Use send-time optimization and preference signals so people hear from us when they're receptive, not more often.
- **Relevance over volume.** Personalize from real first-party behavior (purchases, browse, signup source) so each send has a clear reason. Never use AI to manufacture urgency or pressure.
- **Human brand voice wins.** Let AI draft structure/variants; Zack/Natalie (or an approved agent pass) add the Moon Ridge POV. No AI copy goes live without human oversight for brand consistency and compassion.
- **Clear goal before each send or flow.** Know the one job (recover cart, welcome, care tip, soft review) before generating content or turning on AI features.
- **Start with platform AI that's already built in** (send-time optimization, subject-line testing, simple content variants) before custom/complex models.
- **A/B test one thing at a time** with a control group — don't change subject, offer, and body in the same test.
- **Trust and consent first.** Prefer first-party, permissioned data. Don't chase purchased lists or dark patterns that erode trust.
- Empathetic, thoughtful content is the bar — efficiency is secondary.

### Priority flows to build (drafts only until approved)
1. **Abandoned cart** — 3 emails at ~2h / ~24h / ~72h; exit on purchase.
2. **Welcome** — 3 emails: immediate brand intro → Day 3 experience/shaping → Day 7 soft shop CTA.
3. **Post-purchase** — 1–2 emails only (~7–10 days care/fit; ~14–21 days soft review). Don't duplicate Shopify order/shipping mail.
4. Later (not first): back-in-stock, winback (~90/120 days), birthday.
5. Skip for now: browse/product abandonment, replenishment, heavy campaign blasts.

Never activate, send, or publish Omnisend campaigns/automations without explicit approval.

## Active work queue (as of 2026-08-18)

0. **Brand fonts roll-out — next design job.** Official set confirmed 2026-08-18 (Lora, Playfair Display, Cinzel, Tenor Sans — see **Brand fonts** above). No blockers: three of the four are in Shopify's font library, Cinzel is already uploaded, nothing needs fetching from Dropbox. The work is (a) set Typography to the brand fonts — headings and body are currently Jost and Poppins, neither on brand, (b) repoint the Canela stack in `heritage-luxury.css` / `lumin.css`, (c) drop the Google Fonts `@import`s in `brand-switcher.liquid` and `founders-review.liquid`, (d) get the page down from six font families. Related cleanup that should probably ride along: the `.color-inverse` rule in `header.liquid` and the duplicated `heritage-luxury.css` / `lumin.css`.
1. **Cart abandonments — Bob wants to work on this next.** Context: the checkout performance review found ~40 abandoned checkouts/quarter at $110+ AOV. First steps: verify abandoned-checkout email automation is active (Marketing → Automations), confirm Shop app cart reminders are on (Shop channel → Settings), then look at recovery copy/timing and possibly an incentive strategy (THANKYOU10 is post-purchase; don't reuse for abandonment without discussing). Follow the **Email & Omnisend** rules above — do not badger.
2. **Cart add-ons — paused.** Theme code is in place; next step when resumed is populate/confirm the `cart-add-ons` collection (and optionally tweak heading/look). Details in `scratch/cart-addons-notes.md`.
3. **Brand page heritage roll-out.** Stetson + Resistol are live with researched timelines. Remaining brands on `page.brand-v2` still need full heritage copy (and Charlie 1 Horse / Bigalli page URLs need fixing or creating). Optional: Resistol heritage image band (no Megargee equivalent yet).
4. ~~Commit the shipping-line theme edit~~ — **done** (live on product pages).
5. ~~Arkansas's Original Hat Bar naming~~ — **done** on `main` / live (draft PR #50 superseded).
6. ~~Hat collection template design pass~~ — **done and live** (PR #81, merged 2026-08-18). Token system in `assets/hats-collection.css`, fixed the body class that had left two-thirds of that stylesheet dead, restored the two-column mobile grid, split sale vs sold-out badges, 24 products a page. Open question Zack hasn't answered: with the desktop hero title correctly hidden, the reading order is intro copy → title in the filter bar → grid. Offer to lead with the title instead if he raises it.

Housekeeping: draft PRs `#50` (Original Hat Bar) and `#45` (cart-addons notes) — #50 conflicting/superseded; #45 docs only (notes now landed in-repo via currency pass). Broken CI: `Deploy PR Preview` fails on every PR (dead `SHOPIFY_PREVIEW_THEME_ID`) — worth fixing so future theme work can be previewed before merge.

## Financials (established July 2026)

- **Blended gross margin: ~40%** across the store — used as the default assumption for pricing, lease, and expansion math unless a specific product line is being modeled.
- **Current retail rent (College Ave):** $700/mo. Any lease comparison should use this as the baseline, not just the new number in isolation.
- **Trailing 12-mo avg monthly gross sales:** roughly $14,000–14,300/mo (Shopify-tracked, Aug '25–Jun '26 full months), but revenue is volatile month to month — swings from ~$3.4K to ~$25.8K in a single year, so don't treat the average as a floor.
- **Seasonal pattern (confirmed across 2 years of Shopify data, Aug '24–Jul '26):**
  - **January is the seasonal floor** both years (Jan '25 ~$2K, Jan '26 ~$3.4K). February also runs soft.
  - **April–June is the strongest stretch**, consistently outperforming the rest of the year both years — likely rodeo/wedding season and warm-weather western wear.
  - **December gets a holiday bump** relative to Oct/Nov.
  - Caveat: the business is growing fast overall, so raw month-over-month comparisons are colored by growth, not pure seasonality — the Jan low and spring ramp are the two signals that hold up despite that growth.
  - Note: the May 2026 peak month partly overlaps with the Moon Ridge rebrand launch, so treat that specific spike as partly rebrand-driven, not purely seasonal.
- Any new fixed cost (rent, hires, etc.) should be stress-tested against the January/February floor, not the trailing average — a cost that looks fine in an April month can be a real strain in a January one.
- **Active decision in progress:** evaluating a move from College Ave ($700/mo) to a Dickson St location ($5,000/mo, entertainment district). At 40% margin, the rent delta ($4,300/mo) requires ~$10,750/mo in sustained incremental gross sales to break even — roughly a 75% lift over the trailing baseline. Lucchese boots are being added as a new revenue line, contributing a minimum $2,300/mo, which covers about a fifth of that gap on its own. See `Dickson_St_Lease_Breakeven_Model.xlsx` for the full scenario model.

## Working notes for Claude

- Shopify Admin API / CLI work against the live Moon Ridge store. Prefer live Shopify data for products, collections, orders, inventory, and discounts rather than guessing. (MCP availability varies by agent environment — Desktop vs Cloud Agent may differ.)
- **Dropbox:** Desktop MCP can be connected (`https://mcp.dropbox.com/mcp`). Tokens seen so far have been App Folder–scoped (can't see full Dropbox / shared brand asset libraries) — regenerate with Full Dropbox if agents need existing brand photos. Cloud Agents need Dropbox MCP added separately at cursor.com/agents → MCP.
- Treat the lists above as a snapshot, not a source of truth — re-verify against live Shopify metafields before writing anything customer-facing.
- If work touches the Hat Finder app or theme, the relevant repos are `rwakefi/hat_finder` (Flutter) and `rwakefi/moonridge-shopify-theme` (Shopify Liquid theme), plus the Netlify project `moonridge-hatfinder`.
- Theme CSS carries several `!important` layers that quietly override anything you write. Before concluding a style "should work", render it and check computed values rather than reading the CSS — see the preview-harness note under **How to edit the website/theme**.
- This file was built by reviewing the store's About Us / brand pages and past Cowork sessions (crown/brim terminology, and the Moon Ridge Hat Finder app planning conversation) as of July 2026; currency-pass updates Aug 2026; hat collection design pass and font audit 2026-08-18. Update it as the brand voice, team, or product ecosystem evolves.
