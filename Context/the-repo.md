# The repo

Everyone working on the store, theme, and Cowork notes uses **one GitHub repo**:

**https://github.com/rwakefi/moonridge-shopify-theme**

That is this project. `main` is the live Shopify theme (GitHub-connected; merge publishes). Cowork context lives in `Context/` and `CLAUDE.md` in that same repo — not in a second copy of the files.

## What is not the repo

**iCloud Drive → Co Work OS** is a working folder (brand assets, videos, one-off notes, leftover `.liquid` copies). It is not a git checkout. Editing theme files there will drift from GitHub and from the live theme.

Put assets and throwaway notes in Co Work OS if you want. Theme, catalog decisions, and agent context go in the GitHub repo.

## Other repos (on purpose)

- `rwakefi/hat_finder` — Flutter / iOS hat finder
- `hatfinder.moonridgecompany.com` — web quiz (Netlify)

Same Shopify catalog. Different codebases.

## For Desktop Cowork / Cursor on the Mac

Open **moonridge-shopify-theme** (a git clone), not the iCloud Co Work OS folder, when the work is store/theme/context.

```bash
cd ~/wherever-you-keep-code
git clone https://github.com/rwakefi/moonridge-shopify-theme.git
git pull origin main
```

Tonight’s sold-out / Flow wrap is on branch `cursor/unpublish-sold-out-feeds-d974` (PR #83). Merge that to `main` before expecting those Context files on a fresh clone.
