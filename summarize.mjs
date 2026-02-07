import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// ─── Configuration ──────────────────────────────────────────────────────────

const RELEASES = {
  "2024-R1": { year: "2024", dir: "2024_Release_1", home: "2024-R1-home.htm" },
  "2024-R2": { year: "2024", dir: "2024_Release_2", home: "2024-R2-home.htm" },
  "2024-R3": { year: "2024", dir: "2024_Release_3", home: "2024-R3-home.htm" },
  "2024-R4": { year: "2024", dir: "2024_Release_4", home: "2024-R4-home.htm" },
  "2025-R1": { year: "2025", dir: "2025_Release_1", home: "2025-R1-home.htm" },
  "2025-R2": { year: "2025", dir: "2025_Release_2", home: "2025-R2-home.htm" },
  "2025-R3": { year: "2025", dir: "2025_Release_3", home: "2025-R3-home.htm" },
  "2025-R4": { year: "2025", dir: "2025_Release_4", home: "2025-R4-home.htm" },
  "2026-R1": {
    year: "2026",
    dir: "2026_Release_1",
    home: "2026-R1-home.htm",
    preview: true,
  },
  "hidden-gems-2023": {
    year: "2023",
    dir: null,
    home: "2023-year-end-review.htm",
    standalone: true,
  },
  "hidden-gems-2024": {
    year: "2024",
    dir: null,
    home: "2024-hidden-gems.htm",
    standalone: true,
  },
  "hidden-gems-2025": {
    year: "2025",
    dir: null,
    home: "2025-hidden-gems.htm",
    standalone: true,
  },
  "2026-calendar": {
    year: "2026",
    dir: null,
    home: "2026-release-calendar.htm",
    standalone: true,
  },
};

const OUT_ROOT = "docs";
const MODEL = "claude-opus-4-6";

// ─── Helpers ────────────────────────────────────────────────────────────────

function stripFrontmatter(md) {
  return md.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
}

function releasesForYear(year) {
  return Object.entries(RELEASES)
    .filter(([, r]) => r.year === year && !r.standalone)
    .map(([id]) => id);
}

function summaryDir(year) {
  return join(OUT_ROOT, year, "summaries");
}

function releaseSummaryPath(releaseId) {
  const r = RELEASES[releaseId];
  if (!r) throw new Error(`Unknown release: ${releaseId}`);
  return join(summaryDir(r.year), `${releaseId}.md`);
}

function yearSummaryPath(year) {
  return join(summaryDir(year), `${year}-annual.md`);
}

function indexPath(releaseId) {
  const r = RELEASES[releaseId];
  if (!r) throw new Error(`Unknown release: ${releaseId}`);
  return join(OUT_ROOT, r.year, releaseId, "index.md");
}

function today() {
  return new Date().toISOString().split("T")[0];
}

// ─── Prompts ────────────────────────────────────────────────────────────────

const RELEASE_SYSTEM_PROMPT = `You are an expert at analyzing enterprise software release notes and creating executive summaries for CFOs, Controllers, and IT Directors at companies using Sage Intacct.

Write a concise executive summary using the BLUF (Bottom Line Up Front) format. Start with a 2-3 sentence overview of the most important things in this release.

Then organize changes into ONLY the relevant categories below (omit empty categories entirely):

## Breaking Changes & Deprecations
Things that will break or go away. Maximum 3-5 bullets.

## Action Required
Deadlines, migrations, things needing planning. Maximum 3-5 bullets.

## New Capabilities (GA)
Generally available features shipping this release. Maximum 3-5 bullets.

## AI & Automation
Copilot, AP Automation, ML features. Maximum 3-5 bullets.

## Early Adopter Opportunities
Opt-in programs worth evaluating. Maximum 3-5 bullets.

## Platform & API Changes
REST API, triggers, integrations. Maximum 3-5 bullets.

## Minor Enhancements
Everything else worth a mention. Maximum 3-5 bullets.

Rules:
- Be specific: name the feature, not "a new feature was added"
- Include regional availability in parentheses when limited (e.g., "US only", "UK, US")
- Use plain language, avoid marketing speak
- Each bullet should be one concise sentence
- Do NOT include the category heading if there are no items for it
- Do NOT wrap the output in any code fences or extra markdown — start directly with the BLUF paragraph`;

const YEAR_SYSTEM_PROMPT = `You are an expert at analyzing enterprise software release notes and creating annual executive summaries for CFOs, Controllers, and IT Directors at companies using Sage Intacct.

You will receive the executive summaries from each quarterly release in a year. Synthesize them into a cohesive annual summary.

Start with a 3-4 sentence overview of the year's most significant themes and changes.

Then organize into these sections:

## Key Themes
3-5 bullets identifying the major strategic directions (e.g., "AI integration across financial workflows", "Global expansion to new regions")

## Most Significant Changes
5-7 bullets covering the highest-impact features shipped across all releases this year

## Items Requiring Attention
3-5 bullets covering breaking changes, deprecations, and items needing action, with their timelines

## What to Watch
2-3 bullets on early adopter programs and previews that signal future direction

Rules:
- Synthesize across releases — don't just list each release's items
- Identify patterns and themes that emerge across quarters
- Be specific: name features and timelines
- Use plain language, avoid marketing speak
- Each bullet should be one concise sentence
- Do NOT wrap the output in any code fences or extra markdown — start directly with the overview paragraph`;

// ─── Summarize ──────────────────────────────────────────────────────────────

async function summarizeRelease(releaseId, { force = false } = {}) {
  const r = RELEASES[releaseId];
  if (!r) throw new Error(`Unknown release: ${releaseId}`);
  if (r.standalone) {
    console.log(`⏭  Skipping standalone release: ${releaseId}`);
    return;
  }

  const outPath = releaseSummaryPath(releaseId);
  if (existsSync(outPath) && !force) {
    console.log(`⏭  ${outPath} exists (use --force to regenerate)`);
    return;
  }

  const idxPath = indexPath(releaseId);
  if (!existsSync(idxPath)) {
    console.error(`❌ Index not found: ${idxPath}`);
    return;
  }

  console.log(`📄 Summarizing ${releaseId}...`);
  const content = stripFrontmatter(readFileSync(idxPath, "utf8"));

  const client = new Anthropic();
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system: RELEASE_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Here are the release notes for Sage Intacct ${releaseId}. Create an executive summary.\n\n${content}`,
      },
    ],
  });

  const summary = message.content[0].text;
  const frontmatter = [
    "---",
    "source: generated",
    `release: ${releaseId}`,
    `generated: ${today()}`,
    `generator: ${MODEL}`,
    "type: executive-summary",
    "---",
  ].join("\n");

  mkdirSync(summaryDir(r.year), { recursive: true });
  writeFileSync(
    outPath,
    `${frontmatter}\n\n# ${releaseId.replace("-", " ")} Executive Summary\n\n${summary}\n`,
  );

  const { input_tokens, output_tokens } = message.usage;
  console.log(
    `✅ ${outPath} (${input_tokens} in / ${output_tokens} out tokens)`,
  );
}

async function summarizeYear(year, { force = false } = {}) {
  const releases = releasesForYear(year);
  if (releases.length === 0) {
    console.error(`❌ No multi-page releases found for ${year}`);
    return;
  }

  // Ensure per-release summaries exist
  for (const id of releases) {
    if (!existsSync(releaseSummaryPath(id))) {
      console.log(`📝 Generating missing summary for ${id}...`);
      await summarizeRelease(id);
    }
  }

  const outPath = yearSummaryPath(year);
  if (existsSync(outPath) && !force) {
    console.log(`⏭  ${outPath} exists (use --force to regenerate)`);
    return;
  }

  console.log(`📅 Summarizing year ${year}...`);

  // Build input from per-release summaries
  const parts = releases.map((id) => {
    const content = stripFrontmatter(
      readFileSync(releaseSummaryPath(id), "utf8"),
    );
    return `<release id="${id}">\n${content}\n</release>`;
  });

  const client = new Anthropic();
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system: YEAR_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Here are the quarterly executive summaries for Sage Intacct in ${year}. Create an annual summary.\n\n${parts.join("\n\n")}`,
      },
    ],
  });

  const summary = message.content[0].text;
  const frontmatter = [
    "---",
    "source: generated",
    `year: "${year}"`,
    `generated: ${today()}`,
    `generator: ${MODEL}`,
    "type: annual-summary",
    "releases:",
    ...releases.map((id) => `  - ${id}`),
    "---",
  ].join("\n");

  mkdirSync(summaryDir(year), { recursive: true });
  writeFileSync(
    outPath,
    `${frontmatter}\n\n# ${year} Annual Summary\n\n${summary}\n`,
  );

  const { input_tokens, output_tokens } = message.usage;
  console.log(
    `✅ ${outPath} (${input_tokens} in / ${output_tokens} out tokens)`,
  );
}

async function all({ force = false } = {}) {
  // Collect unique years that have multi-page releases
  const years = [
    ...new Set(
      Object.entries(RELEASES)
        .filter(([, r]) => !r.standalone)
        .map(([, r]) => r.year),
    ),
  ].sort();

  // Generate per-release summaries
  for (const [id, r] of Object.entries(RELEASES)) {
    if (r.standalone) continue;
    try {
      await summarizeRelease(id, { force });
    } catch (err) {
      console.error(`❌ Error summarizing ${id}: ${err.message}`);
    }
  }

  // Generate per-year summaries
  for (const year of years) {
    try {
      await summarizeYear(year, { force });
    } catch (err) {
      console.error(`❌ Error summarizing year ${year}: ${err.message}`);
    }
  }
}

// ─── CLI ────────────────────────────────────────────────────────────────────

function usage() {
  console.log(`Usage:
  node --env-file=.env summarize.mjs release <release-id> [--force]
  node --env-file=.env summarize.mjs year <year> [--force]
  node --env-file=.env summarize.mjs all [--force]

Or via npm scripts:
  npm run summarize -- <release-id> [--force]
  npm run summarize:year -- <year> [--force]
  npm run summarize:all [-- --force]

Release IDs: ${Object.entries(RELEASES)
    .filter(([, r]) => !r.standalone)
    .map(([id]) => id)
    .join(", ")}`);
}

const args = process.argv.slice(2);
const command = args[0];
const force = args.includes("--force");

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    "❌ ANTHROPIC_API_KEY not set. Use: node --env-file=.env summarize.mjs ...",
  );
  process.exit(1);
}

switch (command) {
  case "release": {
    const id = args[1];
    if (!id) {
      console.error("❌ Missing release ID");
      usage();
      process.exit(1);
    }
    try {
      await summarizeRelease(id, { force });
    } catch (err) {
      console.error(`❌ ${err.message}`);
      process.exit(1);
    }
    break;
  }
  case "year": {
    const year = args[1];
    if (!year) {
      console.error("❌ Missing year");
      usage();
      process.exit(1);
    }
    try {
      await summarizeYear(year, { force });
    } catch (err) {
      console.error(`❌ ${err.message}`);
      process.exit(1);
    }
    break;
  }
  case "all":
    await all({ force });
    break;
  default:
    usage();
    process.exit(command ? 1 : 0);
}
