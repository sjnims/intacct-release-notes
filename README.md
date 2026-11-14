# Sage Intacct Release Notes

Searchable, version-controlled markdown archive of [Sage Intacct](https://www.intacct.com/) release notes scraped from intacct.com, with AI-generated executive summaries.

Sage Intacct publishes quarterly release notes as HTML pages. This tool extracts them into clean markdown files with YAML frontmatter, then uses Claude to generate executive-level summaries organized by impact category.

## What's included

**936 pages** across 12 quarterly releases, 3 "hidden gems" recaps, and a release calendar:

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
| 2026-R1 |    78 | Quarterly release (2026 Release 1) |
| 2026-R2 |    62 | Quarterly release (2026 Release 2) |
| 2026-R3 |    74 | Quarterly release (2026 Release 3) |
| 2026-R4 |    77 | Quarterly release (2026 Release 4) |

Plus standalone pages: `hidden-gems-2023.md`, `hidden-gems-2024.md`, `hidden-gems-2025.md`, `2026-calendar.md`

Each quarterly release also has an AI-generated **executive summary** and a one-minute **quick read**, and each year has an **annual rollup**, all in `docs/<year>/summaries/`.

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

Standalone pages (hidden gems, calendar) live in the year root directory.

Executive summaries use BLUF (Bottom Line Up Front) format with impact categories:

```yaml
---
source: generated
release: 2025-R4
generated: 2026-02-07
generator: claude-opus-5
type: executive-summary
---
```

Quick reads (`<release>-quick-read.md`, `type: quick-read`) sit beside each executive summary and link back to it.

## Setup

Requires Node.js 22+ (the version CI runs).

```bash
npm install
npx playwright install chromium
```

Summarization runs through the [Claude Code](https://claude.com/claude-code) CLI, so install it and log in once by running `claude` — no API key needed.

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

Available release IDs: `2024-R1` through `2026-R4`, `hidden-gems-2023`, `hidden-gems-2024`, `hidden-gems-2025`, `2026-calendar`.

Standalone releases (hidden gems, calendar) skip the discover phase and extract directly.

### Summarization

Generates executive summaries from each release's index page using Claude Opus 5. Each call runs with Claude Code's tools and MCP servers turned off (`--tools "" --strict-mcp-config`), because summarizing only needs text back and the input is scraped content. Those flags were verified with Claude Code 2.1.325.

```bash
# Summarize a single release
npm run summarize -- 2025-R4

# Write the one-minute quick read for a release (creates its summary first if missing)
npm run summarize:quick -- 2025-R4

# Generate an annual rollup (creates missing per-release summaries first)
npm run summarize:year -- 2025

# Summaries, quick reads, and annual rollups for everything
npm run summarize:all

# Re-generate even if files exist
npm run summarize -- 2025-R4 --force
```

Per-release summaries are organized by executive impact: Breaking Changes & Deprecations, Action Required, New Capabilities, AI & Automation, Early Adopter Opportunities, Platform & API Changes, and Minor Enhancements. Empty categories are omitted. Quick reads boil each summary down to about 200 words: a bottom line, up to three items to act on (plus an "Also" line naming any other required actions, so none go unmentioned), up to three worth a look, and what can wait. A quick read is distilled from the executive summary, so after regenerating a summary with `--force`, regenerate its quick read too. Annual summaries synthesize across quarters into Key Themes, Most Significant Changes, Items Requiring Attention, and What to Watch.

## Adding a new release

Add an entry to the `RELEASES` object in `lib/config.mjs`:

```js
'2026-R2': { year: '2026', dir: '2026_Release_2', home: '2026-R2-home.htm' },
```

Then run:

```bash
node extract.mjs discover 2026-R2 && node extract.mjs extract 2026-R2
```

For preview/upcoming releases, add `preview: true` (uses `preview.intacct.com`). Once the release moves to `www.intacct.com` at GA, remove the flag and re-run `discover`.
For standalone single-page content, add `standalone: true, dir: null`.

## How it works

Two scripts: `extract.mjs` for scraping (using [Playwright](https://playwright.dev/) and [Turndown](https://github.com/mixmark-io/turndown)) and `summarize.mjs` for AI summarization (via `claude -p`, [Claude Code](https://claude.com/claude-code)'s print mode).

1. **Discover** -- Opens a release home page in headless Chromium, collects all sub-page links from the content area and sidebar navigation, and writes a `manifest.json` mapping URLs to output filenames.

2. **Extract** -- Reads the manifest, visits each page, strips boilerplate (sidebar, footer, breadcrumbs, TOC, "Related help topics"), converts HTML tables to markdown tables in-browser (because Turndown's node objects don't support DOM methods like `querySelectorAll`), then runs Turndown on the cleaned HTML. Waits 300ms between requests.

3. **Summarize** -- Reads each release's `index.md` (the overview page with the full feature table), sends it to Claude Opus 5 with a structured prompt, and writes the summary to `docs/<year>/summaries/`. Quick reads and annual summaries are both built from the per-release summaries rather than the source pages: a quick read distills one summary, an annual summary synthesizes a year of them.

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
