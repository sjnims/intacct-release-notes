# Project Overview

## Purpose
Scrapes Sage Intacct release notes from intacct.com and converts them to clean markdown files with YAML frontmatter. The output is a searchable, version-controlled archive of quarterly release notes.

## Tech Stack
- **Runtime**: Node.js (ES modules)
- **Browser automation**: Playwright (headless Chromium)
- **HTML-to-markdown**: Turndown
- **Linting**: ESLint + markdownlint-cli2
- **Formatting**: Prettier
- **Package manager**: npm

## Source Code
The entire tool is a **single file**: `extract.mjs`. There are no other source files.

## Output
- 714+ markdown files across 9 quarterly releases (2024-R1 through 2026-R1)
- 3 standalone "hidden gems" recap pages
- 1 release calendar page
- Each quarterly release has its own directory with an `index.md`, `manifest.json`, and sub-pages organized by module (accounts-payable, general-ledger, etc.)

## Two-Phase Pipeline
1. **Discover** — Opens a release home page, collects sub-page links from content + sidebar nav, writes `manifest.json`
2. **Extract** — Reads manifest, visits each page, cleans DOM, converts tables in-browser, runs Turndown, writes markdown with YAML frontmatter

## Key Symbols in extract.mjs
- `RELEASES` — Config object mapping release IDs to metadata (year, dir, home URL, flags)
- `discover(release)` — Phase 1: scrape home page, build manifest
- `extract(release, {force})` — Phase 2: convert pages to markdown
- `extractPage(page, url, turndown)` — Core extraction: DOM cleanup + Turndown conversion
- `all({force})` — Run discover+extract for all releases
- `baseUrl`, `homeUrl`, `releaseBaseUrl` — URL helpers
- `urlToOutputFile` — Maps URLs to local filenames
- `createTurndown` — Configures Turndown with custom table passthrough rule
