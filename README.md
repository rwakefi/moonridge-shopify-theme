# moonridge-shopify-theme

Moon Ridge Company Shopify theme.

## Shopify CLI setup

### 1. Install dependencies

```bash
npm install
```

### 2. Log in to your store

```bash
npm run login
```

Opens a browser to authenticate with your Shopify account. Use the account that has access to the Moon Ridge store.

### 3. List themes and pick a development theme

```bash
npm run list
```

Copy the **theme ID** of the unpublished theme you develop against (not live, unless intentional). Add it to `shopify.theme.toml`:

```toml
[environments.default]
store = "raftermhatco.myshopify.com"
theme = "YOUR_THEME_ID"
```

The store URL is `raftermhatco.myshopify.com` (Moon Ridge / Rafter M on Shopify).

### 4. Start local development

```bash
npm run dev
```

Syncs file changes to the configured theme and gives you a preview URL.

## Common commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Live preview + sync to dev theme |
| `npm run pull` | Download theme files from Shopify |
| `npm run push` | Upload local files to Shopify |
| `npm run check` | Theme Check linting |
| `npm run list` | List themes on the store |
| `npm run info` | Show current CLI theme connection |

Use `--environment development` if you add a second environment in `shopify.theme.toml`.

## Git workflow

- Theme edits from the Shopify admin may land on `main` as “Update from Shopify” commits.
- Pull before you work: `git pull origin main`
- Push theme file changes via PR, or `npm run push` to a **non-live** theme for testing.
