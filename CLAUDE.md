# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Does

Scrapes Sage Intacct release notes from intacct.com and converts them to markdown files with YAML frontmatter, then generates AI-powered executive summaries using Claude. Two source files: `extract.mjs` (scraping) and `summarize.mjs` (summarization).

## Setup

Requires Node.js 20.6+ (for `--env-file` support).

```bash
npm install
npx playwright install chromium
```

For summarization, copy `.env.example` to `.env` and add your Anthropic API key.

## Commands

```bash
# Extraction
node extract.mjs discover <release-id>     # Scrape home page, write manifest.json
node extract.mjs extract <release-id>       # Convert pages to markdown from manifest
node extract.mjs extract <release-id> --force  # Re-extract even if files exist
node extract.mjs all                        # Discover + extract all releases

# Summarization (requires ANTHROPIC_API_KEY in .env — see .env.example)
npm run summarize -- <release-id>           # Summarize one release
npm run summarize -- <release-id> --force   # Re-generate even if exists
npm run summarize:year -- <year>            # Annual rollup from release summaries
npm run summarize:year -- <year> --force
npm run summarize:all                       # All releases + all years
npm run summarize:all -- --force

# Testing, linting & formatting
npm test                # Run test suite
npm run lint            # eslint + markdownlint
npm run lint:js         # eslint only
npm run lint:md         # markdownlint only
npm run format          # prettier write
npm run format:check    # prettier check
```

Release IDs: `2024-R1` through `2025-R4`, `2026-R1`, `hidden-gems-2023`, `hidden-gems-2024`, `hidden-gems-2025`, `2026-calendar`.

## Architecture

All output goes under `docs/<year>/` (e.g., `docs/2024/2024-R1/`, `docs/2025/hidden-gems-2025.md`).

### extract.mjs — Scraping

Two phases:

1. **Discover** — Opens a release home page with Playwright headless browser, collects all sub-page links from content + sidebar nav, writes a `docs/<year>/<release>/manifest.json` listing URLs and output filenames.

2. **Extract** — Reads the manifest, visits each page, cleans the DOM (removes sidebar, footer, breadcrumbs, TOC, "Related help topics"), converts tables to markdown in-browser (since Turndown can't use DOM methods on its nodes), then runs Turndown HTML-to-markdown on the remaining innerHTML. Each file gets YAML frontmatter with `source`, `release`, `extracted`, and `title`.

**Standalone pages** (hidden gems, calendar) skip discover and extract a single page directly to `docs/<year>/`.

**Preview releases** (e.g., `2026-R1`) use `preview.intacct.com` instead of `www.intacct.com` — controlled by the `preview: true` flag in the `RELEASES` lookup table.

### summarize.mjs — AI Summarization

Uses the Anthropic SDK to call Claude Opus 4.6 for generating executive summaries. Reads only each release's `index.md` (not all ~70 individual pages) to stay within token limits.

- **Per-release summaries** (`docs/<year>/summaries/<release>.md`) — BLUF format with impact categories (Breaking Changes, Action Required, New Capabilities, AI & Automation, Early Adopter, Platform & API, Minor Enhancements). Empty categories are omitted.
- **Annual summaries** (`docs/<year>/summaries/<year>-annual.md`) — Map-reduce pattern: reads per-release summaries (generating any missing ones first), then synthesizes into Key Themes, Most Significant Changes, Items Requiring Attention, What to Watch.

Standalone releases (hidden gems, calendar) are skipped by summarization.

## Adding a New Release

Add an entry to the `RELEASES` object in `lib/config.mjs`:

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
- **Summaries use index-only strategy** — each release's `index.md` contains a comprehensive feature table (7.5K–21K tokens) sufficient for executive summaries, avoiding the 82K–205K tokens of all individual pages.

## Recent Improvements (2026-02)

**Reliability:**

- Browser resource management with try-finally guards prevents zombie Chromium processes
- Proper exit codes for CI/CD integration (errors now return exit code 1)
- Exponential backoff retry for API rate limits (handles 429/500/502/503/504 errors)
- Batch error aggregation in `all()` functions provides comprehensive failure reporting

**Security:**

- Path traversal protection validates all output paths before file operations
- Prompt injection detection for AI summaries scans for malicious patterns
- Robust CLI argument parsing (flags can appear anywhere: `--force extract 2024-R1` works)
- Unknown flag detection prevents typos from silently being ignored

**Maintainability:**

- Single source of truth for RELEASES config in `lib/config.mjs`
- Shared utilities extracted to `lib/utils.mjs` (frontmatter, dates, paths)
- Test coverage for critical security paths (`npm test`)
- Shared modules: `lib/config.mjs`, `lib/utils.mjs`, `lib/path-validator.mjs`, `lib/cli-parser.mjs`
