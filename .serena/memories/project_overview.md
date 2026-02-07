# Project Overview

## Purpose

Scrapes Sage Intacct release notes from intacct.com, converts them to clean markdown files with YAML frontmatter, and generates AI-powered executive summaries using Claude. The output is a searchable, version-controlled archive of quarterly release notes with per-release and annual summaries.

## Tech Stack

- **Runtime**: Node.js (ES modules)
- **Browser automation**: Playwright (headless Chromium)
- **HTML-to-markdown**: Turndown
- **Linting**: ESLint + markdownlint-cli2
- **Formatting**: Prettier
- **AI summarization**: @anthropic-ai/sdk (Claude Opus 4.6)
- **Package manager**: npm

## Source Code

Two source files:

- `extract.mjs` — Scraping and extraction (Playwright + Turndown)
- `summarize.mjs` — AI-powered executive summary generation (Anthropic SDK)

## Output

- 714+ markdown files across 9 quarterly releases (2024-R1 through 2026-R1)
- 3 standalone "hidden gems" recap pages
- 1 release calendar page
- Each quarterly release has its own directory with an `index.md`, `manifest.json`, and sub-pages organized by module (accounts-payable, general-ledger, etc.)
- Per-release executive summaries and annual rollups in `docs/<year>/summaries/`

## Pipeline

1. **Discover** — Opens a release home page, collects sub-page links from content + sidebar nav, writes `manifest.json`
2. **Extract** — Reads manifest, visits each page, cleans DOM, converts tables in-browser, runs Turndown, writes markdown with YAML frontmatter
3. **Summarize** — Reads each release's `index.md`, sends to Claude Opus 4.6 with structured prompts, writes executive summaries. Annual summaries use map-reduce: read per-release summaries, then synthesize across quarters.

## Key Symbols in extract.mjs

- `RELEASES` — Config object mapping release IDs to metadata (year, dir, home URL, flags)
- `discover(release)` — Phase 1: scrape home page, build manifest
- `extract(release, {force})` — Phase 2: convert pages to markdown
- `extractPage(page, url, turndown)` — Core extraction: DOM cleanup + Turndown conversion
- `all({force})` — Run discover+extract for all releases
- `baseUrl`, `homeUrl`, `releaseBaseUrl` — URL helpers
- `urlToOutputFile` — Maps URLs to local filenames
- `createTurndown` — Configures Turndown with custom table passthrough rule

## Key Symbols in summarize.mjs

- `RELEASES` — Duplicated from extract.mjs (must be kept in sync)
- `summarizeRelease(releaseId, {force})` — Generate per-release executive summary from index.md
- `summarizeYear(year, {force})` — Generate annual rollup from per-release summaries
- `all({force})` — Summarize all releases and years
- `RELEASE_SYSTEM_PROMPT` — BLUF format prompt with impact categories
- `YEAR_SYSTEM_PROMPT` — Annual synthesis prompt
- `stripFrontmatter(md)` — Remove YAML frontmatter from markdown
