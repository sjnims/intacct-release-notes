import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  createExtractedFrontmatter,
  createGeneratedReleaseFrontmatter,
  createGeneratedYearFrontmatter,
} from "../lib/utils.mjs";

describe("frontmatter format consistency", () => {
  it("createExtractedFrontmatter ends with exactly one trailing newline", () => {
    const fm = createExtractedFrontmatter({
      source: "https://example.com",
      release: "2024-R1",
      title: "Test",
    });
    assert.ok(fm.endsWith("---\n"), "should end with ---\\n");
    assert.ok(
      !fm.endsWith("---\n\n"),
      "should not end with extra trailing newline",
    );
  });

  it("createGeneratedReleaseFrontmatter ends with exactly one trailing newline", () => {
    const fm = createGeneratedReleaseFrontmatter({
      release: "2024-R1",
      generator: "test",
    });
    assert.ok(fm.endsWith("---\n"), "should end with ---\\n");
    assert.ok(
      !fm.endsWith("---\n\n"),
      "should not end with extra trailing newline",
    );
  });

  it("createGeneratedYearFrontmatter ends with exactly one trailing newline", () => {
    const fm = createGeneratedYearFrontmatter({
      year: "2024",
      releases: ["2024-R1", "2024-R2"],
      generator: "test",
    });
    assert.ok(fm.endsWith("---\n"), "should end with ---\\n");
    assert.ok(
      !fm.endsWith("---\n\n"),
      "should not end with extra trailing newline",
    );
  });

  it("all frontmatter functions produce consistent format for content assembly", () => {
    // When assembling content like `${frontmatter}\n# Title`,
    // the result should have exactly one blank line between --- and # Title
    const fns = [
      createExtractedFrontmatter({
        source: "https://example.com",
        release: "2024-R1",
        title: "Test",
      }),
      createGeneratedReleaseFrontmatter({
        release: "2024-R1",
        generator: "test",
      }),
      createGeneratedYearFrontmatter({
        year: "2024",
        releases: ["2024-R1"],
        generator: "test",
      }),
    ];

    for (const fm of fns) {
      const assembled = `${fm}\n# Title`;
      const lines = assembled.split("\n");
      const closingFenceIndex = lines.lastIndexOf("---");
      // After closing ---, there should be exactly one blank line, then # Title
      assert.equal(
        lines[closingFenceIndex + 1],
        "",
        "should have one blank line after ---",
      );
      assert.equal(
        lines[closingFenceIndex + 2],
        "# Title",
        "heading should follow the blank line",
      );
    }
  });
});
