# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Does

Scrapes Sage Intacct release notes from intacct.com and converts them to markdown files with YAML frontmatter. The entire tool is a single file: `extract.mjs`.

## Commands

```bash
# Extraction
node extract.mjs discover <release-id>     # Scrape home page, write manifest.json
node extract.mjs extract <release-id>       # Convert pages to markdown from manifest
node extract.mjs extract <release-id> --force  # Re-extract even if files exist
node extract.mjs all                        # Discover + extract all releases

# Linting & formatting
npm run lint            # eslint + markdownlint
npm run lint:js         # eslint only
npm run lint:md         # markdownlint only
npm run format          # prettier write
npm run format:check    # prettier check
```

Release IDs: `2024-R1` through `2025-R4`, `2026-R1`, `hidden-gems-2023`, `hidden-gems-2024`, `hidden-gems-2025`, `2026-calendar`.

## Architecture

`extract.mjs` is the only source file. It has two phases:

1. **Discover** — Opens a release home page with Playwright headless browser, collects all sub-page links from content + sidebar nav, writes a `<release>/manifest.json` listing URLs and output filenames.

2. **Extract** — Reads the manifest, visits each page, cleans the DOM (removes sidebar, footer, breadcrumbs, TOC, "Related help topics"), converts tables to markdown in-browser (since Turndown can't use DOM methods on its nodes), then runs Turndown HTML-to-markdown on the remaining innerHTML. Each file gets YAML frontmatter with `source`, `release`, `extracted`, and `title`.

**Standalone pages** (hidden gems, calendar) skip discover and extract a single page directly to the project root.

**Preview releases** (e.g., `2026-R1`) use `preview.intacct.com` instead of `www.intacct.com` — controlled by the `preview: true` flag in the `RELEASES` lookup table.

## Adding a New Release

Add an entry to the `RELEASES` object in `extract.mjs`:

```js
'2026-R2': { year: '2026', dir: '2026_Release_2', home: '2026-R2-home.htm' },
// For preview/upcoming releases, add: preview: true
// For standalone single-page content, add: standalone: true, dir: null
```

Then run `node extract.mjs discover 2026-R2 && node extract.mjs extract 2026-R2`.

## Key Design Decisions

- **Tables are converted in-browser** via `page.evaluate()` before passing HTML to Turndown. Turndown's node objects lack real DOM methods like `querySelectorAll`, so table-to-markdown conversion must happen in the Playwright browser context. Tables are wrapped in `<pre data-md-table>` elements that Turndown passes through.
- **Several markdownlint rules are disabled** in `.markdownlint-cli2.jsonc` because scraped content inherently triggers them (long lines, inconsistent tables, missing alt text, duplicate headings). MD030 is disabled because prettier and markdownlint conflict on list marker spacing.
- **300ms delay** between page requests to be polite to the server.
