# Sage Intacct Release Notes

Searchable, version-controlled markdown archive of [Sage Intacct](https://www.intacct.com/) release notes scraped from intacct.com.

Sage Intacct publishes quarterly release notes as HTML pages. This tool extracts them into clean markdown files with YAML frontmatter, making them easy to search, diff, and reference.

## What's included

**714 pages** across 9 quarterly releases, 3 "hidden gems" recaps, and a release calendar:

| Release | Pages | Coverage                           |
| ------- | ----: | ---------------------------------- |
| 2024-R1 |    66 | Quarterly release (2024 Release 1) |
| 2024-R2 |    70 | Quarterly release (2024 Release 2) |
| 2024-R3 |    77 | Quarterly release (2024 Release 3) |
| 2024-R4 |    83 | Quarterly release (2024 Release 4) |
| 2025-R1 |    86 | Quarterly release (2025 Release 1) |
| 2025-R2 |    94 | Quarterly release (2025 Release 2) |
| 2025-R3 |    94 | Quarterly release (2025 Release 3) |
| 2025-R4 |    71 | Quarterly release (2025 Release 4) |
| 2026-R1 |    69 | Quarterly release (2026 Release 1) |

Plus standalone pages: `hidden-gems-2023.md`, `hidden-gems-2024.md`, `hidden-gems-2025.md`, `2026-calendar.md`

## Output format

Each page becomes a markdown file with YAML frontmatter:

```yaml
---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/2025-R4-home.htm
release: 2025-R4
extracted: 2026-02-07
title: "2025 R4 Release Notes"
---
```

Quarterly releases are organized into directories by module:

```text
2025-R4/
  index.md                              # Release overview
  manifest.json                         # URL-to-file mapping
  1-regional-updates/australia.md       # Regional updates
  accounts-payable/...                  # AP features
  general-ledger/...                    # GL features
  platform-services/...                 # API/platform features
  ...
```

Standalone pages (hidden gems, calendar) live in the project root.

## Setup

Requires Node.js 18+.

```bash
npm install
npx playwright install chromium
```

## Usage

The extractor has two phases: **discover** (find all sub-pages) and **extract** (convert to markdown).

```bash
# Extract a single release
node extract.mjs discover 2025-R4     # Scrape home page, write manifest.json
node extract.mjs extract 2025-R4      # Convert each page to markdown

# Re-extract even if files already exist
node extract.mjs extract 2025-R4 --force

# Discover + extract all releases at once
node extract.mjs all
```

Available release IDs: `2024-R1` through `2025-R4`, `2026-R1`, `hidden-gems-2023`, `hidden-gems-2024`, `hidden-gems-2025`, `2026-calendar`.

Standalone releases (hidden gems, calendar) skip the discover phase and extract directly.

## Adding a new release

Add an entry to the `RELEASES` object in `extract.mjs`:

```js
'2026-R2': { year: '2026', dir: '2026_Release_2', home: '2026-R2-home.htm' },
```

Then run:

```bash
node extract.mjs discover 2026-R2 && node extract.mjs extract 2026-R2
```

For preview/upcoming releases, add `preview: true` (uses `preview.intacct.com`).
For standalone single-page content, add `standalone: true, dir: null`.

## How it works

The entire tool is a single file (`extract.mjs`) using [Playwright](https://playwright.dev/) for headless browsing and [Turndown](https://github.com/mixmark-io/turndown) for HTML-to-markdown conversion.

1. **Discover** -- Opens a release home page in headless Chromium, collects all sub-page links from the content area and sidebar navigation, and writes a `manifest.json` mapping URLs to output filenames.

2. **Extract** -- Reads the manifest, visits each page, strips boilerplate (sidebar, footer, breadcrumbs, TOC, "Related help topics"), converts HTML tables to markdown tables in-browser, then runs Turndown on the cleaned HTML. Waits 300ms between requests.

Tables are converted inside the Playwright browser context (not in Node.js) because Turndown's node objects don't support DOM methods like `querySelectorAll`.

## Linting and formatting

```bash
npm run lint            # ESLint + markdownlint
npm run lint:js         # ESLint only
npm run lint:md         # markdownlint only
npm run format          # Prettier (write)
npm run format:check    # Prettier (check)
```

## License

ISC
