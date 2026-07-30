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
- **Palette:** warm cream/off-white backgrounds with chocolate brown and saddle-leather tan accents. Rich but understated.
- **Typography:** elegant serif, nothing bold or aggressive.
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
- **The way to edit:** Shopify admin → Online Store → Themes → ⋯ → **Edit code** (driven via the Claude in Chrome browser). Edits made in the admin code editor sync back to the GitHub repo automatically because of the GitHub integration.
- The Shopify MCP's `themeFilesUpsert` is blocked on the live/MAIN theme — API writes only work on unpublished themes. Browser code-editor edits are the working path for live-theme changes.
- Key theme facts learned:
  - All product templates (`product.json`, `product.cowboy-hats.json`, `product.bigalli.json`, `product.boots.json`, `product.drinkware.json`, `product.gift-card.json`, `product.home.json`, `product.services.json`, `product.rafter-m-personally-you.json`) use the shared `main-product` section → one edit to `snippets/buy-buttons.liquid` reaches every template. None of them override the buy_buttons block settings (all use schema defaults from `sections/main-product.liquid`).
  - Trust microcopy ("In-store or shipping nationwide…") lives as a `buy_buttons` block setting default in `sections/main-product.liquid` (~line 2497), rendered in `snippets/buy-buttons.liquid` (~line 120).
  - Ball caps are identified by product tag `Ballcaps` (they ship via a separate $6 profile; no free-shipping tier).
- Shipping rates (July 2026): General profile $15 ground ≤$99.99 / free ≥$100 (the $99.00–$99.99 dead zone was fixed 2026-07-19); Hats profile $15 economy, free ≥$99.99, $70 express; Ball caps $6/$25/$50; local pickup free.

## Active work queue (as of 2026-07-19)

1. **Commit the shipping-line theme edit** — full instructions + paste-ready code in `shipping-line-theme-edit.md`. Use the GitHub connector to commit to `rwakefi/moonridge-shopify-theme` branch `main` (auto-deploys via Shopify GitHub integration). Verify on a live product page after.
2. **Cart abandonments — Bob wants to work on this next.** Context: the checkout performance review (`checkout-performance-review.md`) found ~40 abandoned checkouts/quarter at $110+ AOV. First steps identified: verify abandoned-checkout email automation is active (Marketing → Automations), confirm Shop app cart reminders are on (Shop channel → Settings), then look at recovery copy/timing and possibly an incentive strategy (THANKYOU10 code exists for post-purchase; don't reuse it for abandonment without discussing).

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

- The Shopify MCP connector is live for this store — use it for products, collections, orders, inventory, and discounts rather than guessing.
- Treat the lists above as a snapshot, not a source of truth — re-verify against live Shopify metafields before writing anything customer-facing.
- If work touches the Hat Finder app or theme, the relevant repos are `rwakefi/hat_finder` (Flutter) and `rwakefi/moonridge-shopify-theme` (Shopify Liquid theme), plus the Netlify project `moonridge-hatfinder`.
- This file was built by reviewing the store's About Us / brand pages and past Cowork sessions (crown/brim terminology, and the Moon Ridge Hat Finder app planning conversation) as of July 2026. Update it as the brand voice, team, or product ecosystem evolves.
