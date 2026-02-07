# Contributing

Thanks for your interest in contributing to this project!

## Development Setup

1. **Node.js 22+** is required.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Copy `.env.example` to `.env` and add your Anthropic API key (only needed
   for summarization).

## Running Checks

Before submitting a PR, make sure all checks pass:

```bash
npm run lint          # ESLint + markdownlint
npm run format:check  # Prettier
```

To auto-fix formatting:

```bash
npm run format
```

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new functionality
- `fix:` — bug fixes
- `docs:` — documentation changes
- `chore:` — maintenance tasks

## Branch Naming

- `feature/<description>`
- `fix/<description>`
- `chore/<description>`

## Pull Requests

1. Create a branch from `main`.
2. Keep changes focused — one concern per PR.
3. Ensure CI passes (ESLint, Markdownlint, Prettier).
4. Request a review.
