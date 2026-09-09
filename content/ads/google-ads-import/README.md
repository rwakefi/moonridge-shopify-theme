# Import these files into Google Ads

Campaigns are **Paused**. Nothing spends until you enable them.

You do **not** need Playwright. Import on your computer while you are signed into the Moon Ridge Google Ads account.

## Search campaign (this folder)

Use [Google Ads Editor](https://ads.google.com/home/tools/ads-editor/) (free Mac/Windows app) or Ads → Tools → Bulk actions → Uploads.

Import in this order:

1. `01-campaigns.csv`
2. `02-ad-groups.csv`
3. `03-keywords.csv`
4. `04-responsive-search-ads.csv`
5. `05-negative-keywords.csv`

After import:

- Campaign name: **Hat Can - Search**
- Budget: **$12/day**
- Networks: Google search only
- Bid: Maximize clicks, ad group CPC cap **$2.50**
- Status: **Paused**
- Add location bid adjustments in the UI: Arkansas +25%, Texas / Oklahoma / Missouri +15%
- Add sitelinks: store guide, western hats, hat bar, visit Fayetteville (URLs in the parent brief)

Post a review, then enable when you want spend.

## Shopping campaign (UI only)

CSV cannot lock Shopping to one SKU as cleanly. Build this in Ads after Merchant Center is linked:

1. Create campaign → Shopping (not Performance Max)
2. Daily budget **$8**
3. Priority High
4. Listing group: include **only** A Better Hat Can (exclude everything else)
5. Leave **Paused** until Search is imported and conversions are firing

## Do not turn on yet if

- Shopify purchase conversion is not in this Ads account
- The product is missing from Merchant Center / Google channel
