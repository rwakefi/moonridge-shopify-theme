# moonridge-shopify-theme

Moon Ridge Company Shopify theme (Liquid). There is no separate backend/frontend app — the
"application" is the theme rendered by Shopify. Standard commands live in `README.md` and
`package.json` scripts (`dev`, `pull`, `push`, `check`, `list`, `info`, `login`).

## Cursor Cloud specific instructions

- Node >= 20.10 is required (see `package.json` `engines`); the VM ships Node 22, which is fine.
- `npm install` installs the pinned Shopify CLI locally; run CLI commands via `npm run <script>`
  or `npx shopify ...`.
- Running the theme (`npm run dev` / `shopify theme dev`) requires authenticating to the Shopify
  store `raftermhatco.myshopify.com`. Interactive `shopify auth login` uses device-code OAuth and
  needs a browser, so it cannot complete headlessly. For non-interactive/cloud runs, provide a
  Theme Access token as `SHOPIFY_CLI_THEME_TOKEN` and run:
  `shopify theme dev --store raftermhatco.myshopify.com --password "$SHOPIFY_CLI_THEME_TOKEN"`.
  CI (`.github/workflows/deploy.yml`, `preview.yml`) uses this same token + store approach.
- Lint gotcha: `npm run check` (`shopify theme check`) reports thousands of informational
  `MatchingTranslations` offenses from the `locales/*.schema.json` files. The default pretty
  text renderer is pathologically slow at drawing that many boxed offenses and can appear hung
  for 15+ minutes at ~100% CPU. Use JSON output instead, which finishes in ~45s:
  `npx shopify theme check --output json > /tmp/check.json`. There are currently 0 error/warning
  offenses (all are info-level suggestions).
- When a `shopify` CLI command hangs, `timeout` alone does not kill it — the CLI spawns a detached
  `node .../shopify` grandchild that survives. Kill by PID: `pgrep -f "theme check"` then `kill -9`.
