/**
 * Shared configuration for extract and summarize scripts
 */

export const BASE_PROD = "https://www.intacct.com/ia/docs/en_US/releasenotes";
export const BASE_PREVIEW =
  "https://preview.intacct.com/ia/docs/en_US/releasenotes";
export const OUT_ROOT = "docs";
export const MODEL = "claude-opus-4-6";

export const RELEASES = {
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
