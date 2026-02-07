# Style and Conventions

## Code Style

- **Formatter**: Prettier defaults (applied via `npm run format`)
- **Linter**: ESLint with recommended rules
- **Module system**: ES modules (`"type": "module"` in package.json, `.mjs` extension)
- **Quotes**: Double quotes (Prettier default)
- **Semicolons**: Yes (Prettier default)
- **Trailing commas**: All (Prettier default)
- **Indentation**: 2 spaces

## Naming Conventions

- Functions: camelCase (`extractPage`, `urlToOutputFile`, `createTurndown`)
- Constants: UPPER_SNAKE_CASE (`BASE_PROD`, `RELEASES`, `OUT_ROOT`)
- Local variables: camelCase
- Output directories/files: kebab-case (`accounts-payable`, `hidden-gems-2024.md`)

## Git Conventions

- Commit style: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `style:`)
- Branch naming: `feature/desc`, `fix/desc`, `chore/desc`

## Markdown Output Conventions

- Every extracted markdown file has YAML frontmatter with `source`, `release`, `extracted`, `title`
- The `title` field is double-quoted and escaped
- Extracted date is ISO date (YYYY-MM-DD), not full timestamp
- H1 heading repeats the title below frontmatter
- Tables are converted in-browser before Turndown processes them

## Markdownlint

Several rules are disabled in `.markdownlint-cli2.jsonc` because scraped content inherently triggers them:

- MD013 (line length), MD025 (single h1), MD056/MD060 (tables), MD045 (image alt text), MD033 (inline HTML), MD036 (bold as heading), MD024 (duplicate headings), MD030 (list marker spacing — Prettier conflict)

## Design Patterns

- Single-file architecture: all logic in `extract.mjs`
- Tables converted in Playwright browser context (not Node.js) because Turndown nodes lack DOM methods
- 300ms delay between page requests to be polite to the server
- Preview releases use `preview.intacct.com`; standalone pages skip discover phase
