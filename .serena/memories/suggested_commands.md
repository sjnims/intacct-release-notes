# Suggested Commands

## Setup (First Time)

Requires Node.js 20.6+ (for `--env-file` support).

```bash
npm install
npx playwright install chromium
```

For summarization, copy `.env.example` to `.env` and add your Anthropic API key.

## Extraction

```bash
node extract.mjs discover <release-id>      # Scrape home page, write manifest.json
node extract.mjs extract <release-id>        # Convert pages to markdown from manifest
node extract.mjs extract <release-id> --force  # Re-extract even if files exist
node extract.mjs all                         # Discover + extract all releases
node extract.mjs all --force                 # Re-extract everything
```

## Valid Release IDs

`2024-R1`, `2024-R2`, `2024-R3`, `2024-R4`, `2025-R1`, `2025-R2`, `2025-R3`, `2025-R4`, `2026-R1`, `hidden-gems-2023`, `hidden-gems-2024`, `hidden-gems-2025`, `2026-calendar`

## Summarization (requires ANTHROPIC_API_KEY in .env)

```bash
npm run summarize -- <release-id>           # Summarize one release
npm run summarize -- <release-id> --force   # Re-generate even if exists
npm run summarize:year -- <year>            # Annual rollup from release summaries
npm run summarize:year -- <year> --force
npm run summarize:all                       # All releases + all years
npm run summarize:all -- --force
```

Or without npm scripts:

```bash
node --env-file=.env summarize.mjs release <release-id> [--force]
node --env-file=.env summarize.mjs year <year> [--force]
node --env-file=.env summarize.mjs all [--force]
```

## Linting & Formatting

```bash
npm run lint            # ESLint + markdownlint (all files)
npm run lint:js         # ESLint on extract.mjs and summarize.mjs
npm run lint:md         # markdownlint on all .md files
npm run format          # Prettier write mode
npm run format:check    # Prettier check mode (no changes)
```

## Task Completion Checklist

After any code changes, always run:

1. `npm run format` — Auto-format
2. `npm run lint` — Must pass with 0 errors

## System Utilities (macOS / Darwin)

- `git` — Version control
- `rm -f` — Always use `-f` flag (no interactive prompts in this environment)
- `node` / `npm` — Runtime and package manager
- `npx playwright install chromium` — Install browser for extraction
