/**
 * Shared utilities for extract and summarize scripts
 */

import { join } from "node:path";
import { OUT_ROOT, RELEASES, BASE_PROD, BASE_PREVIEW } from "./config.mjs";

// ─── URL Helpers ────────────────────────────────────────────────────────────

export function baseUrl(release) {
  return RELEASES[release]?.preview ? BASE_PREVIEW : BASE_PROD;
}

export function homeUrl(release) {
  const r = RELEASES[release];
  if (!r) throw new Error(`Unknown release: ${release}`);
  const base = baseUrl(release);
  if (r.dir) return `${base}/${r.year}/${r.dir}/${r.home}`;
  return `${base}/${r.year}/${r.home}`;
}

export function releaseBaseUrl(release) {
  const r = RELEASES[release];
  const base = baseUrl(release);
  if (r.dir) return `${base}/${r.year}/${r.dir}/`;
  return `${base}/${r.year}/`;
}

// ─── Path Helpers ───────────────────────────────────────────────────────────

export function outDir(release) {
  const r = RELEASES[release];
  if (r.standalone) return join(OUT_ROOT, r.year);
  return join(OUT_ROOT, r.year, release);
}

export function outFile(release) {
  const r = RELEASES[release];
  if (r.standalone) return join(OUT_ROOT, r.year, `${release}.md`);
  return null; // multi-page releases use manifest
}

export function manifestPath(release) {
  return join(outDir(release), "manifest.json");
}

export function summaryDir(year) {
  return join(OUT_ROOT, year, "summaries");
}

export function releaseSummaryPath(releaseId) {
  const r = RELEASES[releaseId];
  if (!r) throw new Error(`Unknown release: ${releaseId}`);
  return join(summaryDir(r.year), `${releaseId}.md`);
}

export function yearSummaryPath(year) {
  return join(summaryDir(year), `${year}-annual.md`);
}

export function indexPath(releaseId) {
  const r = RELEASES[releaseId];
  if (!r) throw new Error(`Unknown release: ${releaseId}`);
  return join(OUT_ROOT, r.year, releaseId, "index.md");
}

// ─── Date Helpers ───────────────────────────────────────────────────────────

export function today() {
  return new Date().toISOString().split("T")[0];
}

// ─── Content Processing ─────────────────────────────────────────────────────

export function stripFrontmatter(md) {
  return md.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
}

// ─── Release Query Helpers ──────────────────────────────────────────────────

export function releasesForYear(year) {
  return Object.entries(RELEASES)
    .filter(([, r]) => r.year === year && !r.standalone)
    .map(([id]) => id);
}

// ─── Frontmatter Generators ─────────────────────────────────────────────────

/**
 * Creates YAML frontmatter for extracted content
 */
export function createExtractedFrontmatter({ source, release, title }) {
  return `---
source: ${source}
release: ${release}
extracted: ${today()}
title: ${JSON.stringify(title)}
---
`;
}

/**
 * Creates YAML frontmatter for AI-generated release summaries
 */
export function createGeneratedReleaseFrontmatter({ release, generator }) {
  return `---
source: generated
release: ${release}
generated: ${today()}
generator: ${generator}
type: executive-summary
---
`;
}

/**
 * Creates YAML frontmatter for AI-generated annual summaries
 */
export function createGeneratedYearFrontmatter({ year, releases, generator }) {
  const releaseList = releases.map((id) => `  - ${id}`).join("\n");
  return `---
source: generated
year: "${year}"
generated: ${today()}
generator: ${generator}
type: annual-summary
releases:
${releaseList}
---
`;
}
