# Shop sales + Google visibility drop — research notes

**Date:** 2026-08-05  
**Question:** Why did Shop channel sales drop, and why aren’t we showing up in Google like before — is it Shop, or something else?

## Short answer

**Mostly the May 2026 rebrand (Rafter M → Moon Ridge + domain change), not a single Shop-only bug.** Shop and Google both lean hard on store/brand name + trust history. You changed both ~3 months ago. Brand/local searches still find you; product and “used to show up” discovery surfaces are softer while Google and Shop relearn the new identity. Seasonality (spring peak vs summer) can amplify the feeling.

It’s **not** “the website is broken and uncrawlable.” Redirects, sitemap, and schema look fine.

---

## What we can verify from outside (no admin access)

### Working (good news)

| Check | Result |
|---|---|
| `raftermhatco.com` → `moonridgecompany.com` | 301 primary-domain redirect (including product URLs) |
| `raftermhatco.myshopify.com` | Also 301s to moonridgecompany.com |
| Sitemap | Live (~296 products, 23 pages, collections, blogs) |
| robots.txt | Crawlable; not blocking Google |
| Homepage / brand schema | Organization named Moon Ridge; `alternateName` includes Rafter M, Rafter M Hat Company, Moonridge, Arkansas's Original Hat Bar |
| Brand / local search | DuckDuckGo + general web results still surface Moon Ridge for “Moon Ridge hats Fayetteville,” “cowboy hats Fayetteville,” hat bar queries |
| Product page SEO samples | Titles like `Stetson Midtown Wide Brim Hat \| Moon Ridge`; Product JSON-LD with brand + offers present |

### Soft / split (this is the “not showing up like before” feel)

| Check | Result |
|---|---|
| Generic product queries (`buy Stetson cowboy hat`, `Resistol hat online`, `Stetson Skyline 6X`) | Dominated by Stetson.com, Boot Barn, Amazon, HatCountry, etc. — Moon Ridge rarely in the mix |
| Old brand queries (`Rafter M` + Stetson / address) | Still hit Facebook, directories, and some Rafter M-labeled pages — authority split across two names |
| Local citations for `2218 N College Ave` | **Both** “Rafter M Hat Company” and “Moon Ridge” listings still appear — NAP / name inconsistency after rebrand |

### Site polish issues (minor, not the main drop)

- Homepage has multiple H1s, including an empty header H1 and a junk H1 `Responsive Image Grid` (theme/section label leaking into the page). Worth cleaning later; won’t explain a channel-wide sales cliff alone.

### Shop.app

External probes of `shop.app` store URLs hit rate limits / 429s, so we **could not** confirm live Shop search ranking from outside. Diagnosis for Shop has to come from Shopify admin (checklist below).

---

## How the pieces fit

```
May 2026 rebrand
  ├─ New brand name (low search history)
  ├─ New primary domain (Google re-associates authority via redirects)
  ├─ Google Business / directories still mixed Rafter M vs Moon Ridge
  ├─ Shop discovery keyed to store name + reviews + eligibility signals
  └─ Customers / Google / Shop still half-trained on "Rafter M"
         ↓
  Brand searches OK · Discovery / Shop / Maps softer · Sales look "way down"
```

### 1. Rebrand (largest likely cause)

Official rename was **May 2026**. As of early August that’s only ~3 months of “Moon Ridge” equity vs years of “Rafter M.”

Expected pattern after a domain + name change:

- Branded search recovers first (you’re largely there for Moon Ridge / hat bar / Fayetteville).
- Maps / local pack and non-brand discovery take longer while Google reconciles identity.
- Marketplace-style discovery (Shop) treats you closer to a newer merchant identity until name, reviews, and order history align under the new brand.

Redirects are in place (good). That does **not** instantly transfer all rankings or Shop search behavior.

### 2. Shop channel specifically

Shop is its own discovery layer. Visibility depends on:

- Eligibility / status (no quiet policy, shipping-tracking, or verification flags)
- Products published to Shop / Catalog (not Online Store only)
- Clear titles, categories, images, reviews
- Store name customers actually type

If people used to find you as **Rafter M** inside Shop, searching **Moon Ridge** (or product-only terms) will feel like you “disappeared,” even when the store is still eligible. Merchants also report silent indexing / eligibility suppression — only visible under **Sales channels → Shop → Status**.

Shop sales dropping while Online Store / POS hold up → lean Shop. All channels down together → lean rebrand + seasonality + Google, not Shop alone.

### 3. Google (organic + Shopping), separate from Shop

Two different Google surfaces:

| Surface | What it is | Rebrand risk |
|---|---|---|
| Organic / Maps | Website + Business Profile + citations | High — name mismatch across directories is visible today |
| Google Shopping / free listings (Merchant Center) | Product feed via Google & YouTube channel | High if domain/business name wasn’t re-verified after the switch |

Industry noise in 2026 (AI Overviews, PMax/feed AI) is squeezing Shopping CTR industry-wide. That can hurt paid/free Shopping for everyone; it does **not** replace the rebrand as your primary story.

### 4. Seasonality (amplifier, not the whole story)

Store pattern from prior Shopify data: **April–June strongest**, Jan/Feb floor. Comparing Shop now to a spring peak will look worse even without a channel bug. Use same-month YoY or 3-month rolling by channel, not peak-vs-now.

---

## Admin checklist (Zack) — 20 minutes, in order

Do these in Shopify / Google. No live store edits needed to *diagnose*.

1. **Analytics → Reports → Sales by channel**  
   Chart Shop vs Online Store vs Point of Sale for last 6–12 months.  
   - Shop-only cliff → Shop eligibility / indexing.  
   - Everything down → rebrand + Google + seasonality.

2. **Sales channels → Shop → Status / eligibility**  
   Any banners for shipping tracking rates, business verification, policy, or “not searchable”? Screenshot them.

3. **Phone test (Shop app)**  
   Search: `Moon Ridge`, `Rafter M`, one exact product title (e.g. Stetson Midtown). Note whether *your* store appears or only competitors.

4. **One product → Publishing**  
   Confirm Shop is checked (not just Online Store). If checked, uncheck → save → recheck → save to force re-sync (common fix when indexing stalls).

5. **Google & YouTube / Merchant Center → Diagnostics**  
   Disapprovals, misrepresentation, website claim, domain mismatch after moonridgecompany.com went primary.

6. **Google Search Console**  
   Properties for **both** domains. Confirm Change of Address (if used), sitemap submitted for moonridgecompany.com, Coverage / Page indexing trends since May.

7. **Google Business Profile**  
   Name = Moon Ridge (not permanently closed old listing). Website = moonridgecompany.com. Same NAP as the site. Don’t create a second listing.

8. **Citation cleanup**  
   Directories still labeling `2218 N College Ave` as **Rafter M Hat Company** — update to Moon Ridge / “formerly Rafter M” where possible. Split names keep Maps soft.

---

## What this is probably *not*

- Site blocked from crawling (robots/sitemap look fine).
- Lost all product indexes (site:style queries still return Moon Ridge Stetson pages).
- “Shop randomly turned off the whole industry” as the only explanation — rebrand timing lines up too cleanly.

---

## Suggested next moves (after checklist — approval before any live changes)

1. Finish the admin checklist; share Shop status + channel chart if you want a second pass.  
2. Citation / GBP cleanup under Moon Ridge (biggest unpaid Google lever).  
3. Keep “formerly Rafter M” on About, FAQ, schema alternateName (already present — good).  
4. Optional later: fix homepage H1 leak (`Responsive Image Grid`).  
5. Don’t chase big %-off Shop promos to buy back ranking — protect margin; fix identity/eligibility first.

---

## Limits of this pass

- No Shopify Admin / Analytics / Shop status API in this environment — channel revenue and eligibility flags need your eyes.  
- `shop.app` blocked external scraping (429).  
- No Search Console or Merchant Center login — indexing/disapproval detail unknown until you open them.

*Research only — no live store or marketing changes made.*
