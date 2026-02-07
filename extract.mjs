import { chromium } from "playwright";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import TurndownService from "turndown";

// ─── Configuration ──────────────────────────────────────────────────────────

const BASE_PROD = "https://www.intacct.com/ia/docs/en_US/releasenotes";
const BASE_PREVIEW = "https://preview.intacct.com/ia/docs/en_US/releasenotes";
const OUT_ROOT = new URL(".", import.meta.url).pathname;

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

// ─── Helpers ────────────────────────────────────────────────────────────────

function baseUrl(release) {
  return RELEASES[release]?.preview ? BASE_PREVIEW : BASE_PROD;
}

function homeUrl(release) {
  const r = RELEASES[release];
  if (!r) throw new Error(`Unknown release: ${release}`);
  const base = baseUrl(release);
  if (r.dir) return `${base}/${r.year}/${r.dir}/${r.home}`;
  return `${base}/${r.year}/${r.home}`;
}

function releaseBaseUrl(release) {
  const r = RELEASES[release];
  const base = baseUrl(release);
  if (r.dir) return `${base}/${r.year}/${r.dir}/`;
  return `${base}/${r.year}/`;
}

function outDir(release) {
  const r = RELEASES[release];
  if (r.standalone) return OUT_ROOT; // standalone files go in project root
  return join(OUT_ROOT, release);
}

function outFile(release) {
  const r = RELEASES[release];
  if (r.standalone) return join(OUT_ROOT, `${release}.md`);
  return null; // multi-page releases use manifest
}

function manifestPath(release) {
  return join(outDir(release), "manifest.json");
}

/** Convert a full URL to a local output filename relative to release dir.
 *  e.g. .../Accounts_Payable/2024-R2-foo.htm → accounts-payable/foo.md
 */
function urlToOutputFile(url, release) {
  const base = releaseBaseUrl(release);
  let rel = url.startsWith(base)
    ? url.slice(base.length)
    : new URL(url).pathname.split("/").pop();

  // Remove .htm extension
  rel = rel.replace(/\.htm$/, "");

  // Split into path segments
  const parts = rel.split("/");

  // Process each segment: lowercase, underscores to hyphens
  const processed = parts.map((seg) => {
    // Convert Accounts_Payable → accounts-payable
    let s = seg.replace(/_/g, "-").toLowerCase();
    // Strip the release prefix like "2024-r1-" from the filename
    const prefix = release.toLowerCase() + "-";
    if (s.startsWith(prefix)) {
      s = s.slice(prefix.length);
    }
    // Also handle variant prefixes like "24r1-"
    const shortPrefix =
      release.replace(/^20(\d{2})-R/i, "$1r").toLowerCase() + "-";
    if (s.startsWith(shortPrefix)) {
      s = s.slice(shortPrefix.length);
    }
    return s;
  });

  return processed.join("/") + ".md";
}

function createTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*",
  });

  // Tables are pre-converted to markdown in the browser context (see extractPage).
  // They are wrapped in <pre data-md-table> to preserve newlines.
  td.addRule("mdTablePassthrough", {
    filter(node) {
      return (
        node.nodeName === "PRE" && node.getAttribute("data-md-table") === "true"
      );
    },
    replacement(content) {
      return "\n\n" + content + "\n\n";
    },
  });

  return td;
}

// ─── Page extraction ────────────────────────────────────────────────────────

async function extractPage(page, url, turndown) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForSelector(".mc-body-content, #mc-main-content, main", {
    timeout: 10000,
  });

  const { title, html } = await page.evaluate(() => {
    // Remove unwanted DOM elements before extracting
    const selectors = [
      ".right-sidebar",
      ".sidenav",
      "nav.breadcrumbs",
      ".breadcrumb",
      "footer",
      ".footer",
      ".feedback-section",
      // "On this page" sidebar nav
      ".on-this-page",
      '[data-mc-conditions*="Default.ScreenOnly"]',
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach((el) => el.remove());
    }

    // Remove "Related help topics" sections — can appear as headings or standalone divs/paragraphs
    document.querySelectorAll("h2, h3, h4, p, div, span").forEach((el) => {
      if (/^related help topics$/i.test(el.textContent.trim())) {
        // Remove the element and all following siblings until next heading
        let next = el.nextElementSibling;
        while (next && !/^H[1-6]$/.test(next.tagName)) {
          const toRemove = next;
          next = next.nextElementSibling;
          toRemove.remove();
        }
        el.remove();
      }
    });

    // Remove "In this release note" TOC sections
    document.querySelectorAll("h2, h3, h4, p, div").forEach((el) => {
      if (/^in this release note/i.test(el.textContent.trim())) {
        let next = el.nextElementSibling;
        // Remove following list (the TOC)
        if (next && (next.tagName === "UL" || next.tagName === "OL")) {
          next.remove();
        }
        el.remove();
      }
    });

    // Remove MadCap-generated mini-TOC at the top of pages
    // (nested list of anchor links pointing to sections on the same page)
    document
      .querySelectorAll(".mc-miniToc, .mini-toc, [data-mc-toc]")
      .forEach((el) => el.remove());

    const titleEl = document.querySelector("h1");
    const titleText = titleEl?.innerText?.trim() || "";
    // Remove the h1 so it doesn't duplicate in the body
    if (titleEl) titleEl.remove();

    const mainEl =
      document.querySelector(".mc-body-content") ||
      document.querySelector("#mc-main-content") ||
      document.querySelector("main") ||
      document.querySelector(".body-container");

    // Resolve relative URLs to absolute
    if (mainEl) {
      mainEl.querySelectorAll("a[href]").forEach((a) => {
        a.setAttribute("href", a.href); // .href is already absolute
      });
      mainEl.querySelectorAll("img[src]").forEach((img) => {
        img.setAttribute("src", img.src);
      });

      // Convert <table> elements to markdown text in a placeholder div
      // (Turndown runs in Node.js where DOM methods aren't available on its nodes)
      mainEl.querySelectorAll("table").forEach((table) => {
        const rows = table.querySelectorAll("tr");
        if (!rows.length) return;

        const mdRows = [];
        let headerDone = false;

        for (const row of rows) {
          const cells = row.querySelectorAll("th, td");
          const isHeader = cells[0]?.tagName === "TH";
          const values = Array.from(cells).map((c) =>
            c.textContent.trim().replace(/\|/g, "\\|").replace(/\n+/g, " "),
          );
          mdRows.push("| " + values.join(" | ") + " |");

          if (isHeader && !headerDone) {
            mdRows.push("| " + values.map(() => "---").join(" | ") + " |");
            headerDone = true;
          }
        }

        if (!headerDone && mdRows.length > 0) {
          const cols = (mdRows[0].match(/\|/g) || []).length - 1;
          mdRows.splice(
            1,
            0,
            "| " + Array(cols).fill("---").join(" | ") + " |",
          );
        }

        const placeholder = document.createElement("pre");
        placeholder.setAttribute("data-md-table", "true");
        placeholder.textContent = mdRows.join("\n");
        table.replaceWith(placeholder);
      });
    }

    return {
      title: titleText,
      html: mainEl?.innerHTML || "",
    };
  });

  // Convert HTML to markdown
  let md = turndown.turndown(html);

  // Clean up excessive whitespace
  md = md.replace(/\n{3,}/g, "\n\n").trim();

  // Remove any remaining boilerplate that slipped through
  md = md.replace(/\n?©[\s\S]*$/, "").trim();
  md = md.replace(/\n?Help center\s+Release notes[\s\S]*$/, "").trim();

  // Remove leading TOC-like content: bulleted lists at the very start that are just
  // self-referencing anchor links (same-page navigation)
  md = md.replace(/^(?:\s*-\s+\[.*?\]\(.*?#.*?\)\n)+\n*/, "").trim();

  // Remove stray "Related help topics" that survived DOM cleanup
  md = md.replace(/^Related help topics\n+/i, "").trim();

  // Remove stray category labels at the start (short lines like "Accounts Payable", "regional updates")
  // Only remove if it's a short line (< 50 chars) followed by a blank line
  md = md
    .replace(/^.{1,50}\n\n/, (match) => {
      // Only strip if it looks like a category label (no punctuation except &, -, spaces)
      if (/^[A-Za-z &\-/]+\n\n$/.test(match)) return "";
      return match;
    })
    .trim();

  return { title, markdown: md };
}

// ─── Discover mode ──────────────────────────────────────────────────────────

async function discover(release) {
  const r = RELEASES[release];
  if (!r) throw new Error(`Unknown release: ${release}`);

  if (r.standalone) {
    console.log(
      `${release} is standalone — skipping discover (will extract single page)`,
    );
    return;
  }

  console.log(`Discovering pages for ${release}...`);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const home = homeUrl(release);
  const base = releaseBaseUrl(release);

  await page.goto(home, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForSelector(
    ".mc-body-content, #mc-main-content, main, .sidenav",
    { timeout: 10000 },
  );

  // Collect all links from main content AND sidebar navigation
  const links = await page.evaluate(
    ({ base, home }) => {
      const urls = new Set();

      // Get links from main content area
      const mainEl =
        document.querySelector(".mc-body-content") ||
        document.querySelector("#mc-main-content") ||
        document.querySelector("main");
      if (mainEl) {
        mainEl.querySelectorAll("a[href]").forEach((a) => {
          urls.add(a.href);
        });
      }

      // Get links from sidebar navigation
      document
        .querySelectorAll(".sidenav a[href], nav a[href], .toc a[href]")
        .forEach((a) => {
          urls.add(a.href);
        });

      // Filter to only URLs within the release directory
      return Array.from(urls).filter((u) => {
        return u.startsWith(base) && u.endsWith(".htm") && u !== home;
      });
    },
    { base, home },
  );

  // Deduplicate and sort
  const uniqueLinks = [...new Set(links)].sort();

  console.log(`Found ${uniqueLinks.length} sub-pages`);

  // Build manifest
  const pages = uniqueLinks.map((url) => ({
    url,
    outputFile: urlToOutputFile(url, release),
  }));

  const manifest = {
    release,
    homeUrl: home,
    extractedAt: new Date().toISOString(),
    pages,
  };

  const dir = outDir(release);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    manifestPath(release),
    JSON.stringify(manifest, null, 2),
    "utf-8",
  );
  console.log(
    `Wrote manifest with ${pages.length} pages → ${manifestPath(release)}`,
  );

  await browser.close();
}

// ─── Extract mode ───────────────────────────────────────────────────────────

async function extract(release, { force = false } = {}) {
  const r = RELEASES[release];
  if (!r) throw new Error(`Unknown release: ${release}`);

  const turndown = createTurndown();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let success = 0;
  let skipped = 0;
  let failed = 0;

  if (r.standalone) {
    // Single-page extraction
    const out = outFile(release);
    if (existsSync(out) && !force) {
      console.log(
        `${release}: ${out} already exists (use --force to re-extract)`,
      );
      await browser.close();
      return;
    }

    const url = homeUrl(release);
    console.log(`Extracting standalone page: ${release}`);
    try {
      const { title, markdown } = await extractPage(page, url, turndown);
      const frontmatter = [
        "---",
        `source: ${url}`,
        `release: ${release}`,
        `extracted: ${new Date().toISOString().split("T")[0]}`,
        `title: "${title.replace(/"/g, '\\"')}"`,
        "---",
      ].join("\n");

      writeFileSync(
        out,
        `${frontmatter}\n\n# ${title}\n\n${markdown}\n`,
        "utf-8",
      );
      console.log(`  ✓ ${out}`);
    } catch (err) {
      console.error(`  ✗ ${release}: ${err.message}`);
    }
    await browser.close();
    return;
  }

  // Multi-page extraction from manifest
  const mPath = manifestPath(release);
  if (!existsSync(mPath)) {
    throw new Error(`No manifest found for ${release}. Run discover first.`);
  }

  const manifest = JSON.parse(readFileSync(mPath, "utf-8"));
  const dir = outDir(release);
  const total = manifest.pages.length + 1; // +1 for index page

  // Extract the home/index page first
  const indexPath = join(dir, "index.md");
  if (!existsSync(indexPath) || force) {
    try {
      const { title, markdown } = await extractPage(
        page,
        manifest.homeUrl,
        turndown,
      );
      const frontmatter = [
        "---",
        `source: ${manifest.homeUrl}`,
        `release: ${release}`,
        `extracted: ${new Date().toISOString().split("T")[0]}`,
        `title: "${title.replace(/"/g, '\\"')}"`,
        "---",
      ].join("\n");

      writeFileSync(
        indexPath,
        `${frontmatter}\n\n# ${title}\n\n${markdown}\n`,
        "utf-8",
      );
      success++;
      console.log(`[${success + skipped + failed}/${total}] ✓ index.md`);
    } catch (err) {
      failed++;
      console.error(
        `[${success + skipped + failed}/${total}] ✗ index.md: ${err.message}`,
      );
    }
    await delay(300);
  } else {
    skipped++;
    console.log(`[${success + skipped + failed}/${total}] ⊘ index.md (exists)`);
  }

  // Extract each sub-page
  for (const entry of manifest.pages) {
    const pagePath = join(dir, entry.outputFile);

    if (existsSync(pagePath) && !force) {
      skipped++;
      console.log(
        `[${success + skipped + failed}/${total}] ⊘ ${entry.outputFile} (exists)`,
      );
      continue;
    }

    try {
      const { title, markdown } = await extractPage(page, entry.url, turndown);
      const frontmatter = [
        "---",
        `source: ${entry.url}`,
        `release: ${release}`,
        `extracted: ${new Date().toISOString().split("T")[0]}`,
        `title: "${title.replace(/"/g, '\\"')}"`,
        "---",
      ].join("\n");

      mkdirSync(dirname(pagePath), { recursive: true });
      writeFileSync(
        pagePath,
        `${frontmatter}\n\n# ${title}\n\n${markdown}\n`,
        "utf-8",
      );
      success++;
      console.log(
        `[${success + skipped + failed}/${total}] ✓ ${entry.outputFile}`,
      );
    } catch (err) {
      failed++;
      console.error(
        `[${success + skipped + failed}/${total}] ✗ ${entry.outputFile}: ${err.message}`,
      );
    }

    await delay(300);
  }

  await browser.close();
  console.log(
    `\n${release}: ${success} extracted, ${skipped} skipped, ${failed} failed (${total} total)`,
  );
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── All mode ───────────────────────────────────────────────────────────────

async function all({ force = false } = {}) {
  for (const release of Object.keys(RELEASES)) {
    console.log(`\n${"═".repeat(60)}`);
    console.log(`Processing ${release}`);
    console.log("═".repeat(60));

    await discover(release);
    await extract(release, { force });
  }
  console.log("\nAll releases processed.");
}

// ─── CLI ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const command = args[0];
const releaseArg = args[1];
const force = args.includes("--force");

switch (command) {
  case "discover":
    if (!releaseArg) {
      console.error("Usage: node extract.mjs discover <release-id>");
      console.error("Releases:", Object.keys(RELEASES).join(", "));
      process.exit(1);
    }
    discover(releaseArg).catch(console.error);
    break;

  case "extract":
    if (!releaseArg) {
      console.error("Usage: node extract.mjs extract <release-id> [--force]");
      console.error("Releases:", Object.keys(RELEASES).join(", "));
      process.exit(1);
    }
    extract(releaseArg, { force }).catch(console.error);
    break;

  case "all":
    all({ force }).catch(console.error);
    break;

  default:
    console.log("Sage Intacct Release Notes Extractor");
    console.log("");
    console.log("Usage:");
    console.log(
      "  node extract.mjs discover <release-id>   Discover sub-pages, write manifest",
    );
    console.log(
      "  node extract.mjs extract <release-id>    Extract pages to markdown",
    );
    console.log(
      "  node extract.mjs all [--force]           Discover + extract all releases",
    );
    console.log("");
    console.log("Releases:", Object.keys(RELEASES).join(", "));
    break;
}
