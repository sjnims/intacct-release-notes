import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validateOutputPath } from "../lib/path-validator.mjs";
import { parseArgs } from "../lib/cli-parser.mjs";
import { validateSafeContent } from "../lib/content-validator.mjs";

describe("validateOutputPath", () => {
  const baseDir = "/tmp/test-docs/2024/2024-R1";

  it("rejects parent directory references", () => {
    assert.throws(
      () => validateOutputPath("../../../etc/passwd", baseDir),
      /Parent directory references not allowed/,
    );
  });

  it("rejects absolute paths", () => {
    assert.throws(
      () => validateOutputPath("/etc/passwd", baseDir),
      /Absolute paths not allowed/,
    );
  });

  it("rejects null bytes", () => {
    assert.throws(
      () => validateOutputPath("test\0.md", baseDir),
      /Path contains null byte/,
    );
  });

  it("rejects invalid characters", () => {
    assert.throws(
      () => validateOutputPath("test;rm -rf.md", baseDir),
      /Path contains invalid characters/,
    );
  });

  it("rejects path resolving to base directory itself", () => {
    assert.throws(
      () => validateOutputPath(".", baseDir),
      /Path must be within base directory/,
    );
  });

  it("accepts safe paths", () => {
    const result = validateOutputPath("accounts-payable/foo.md", baseDir);
    assert.ok(result.endsWith("accounts-payable/foo.md"));
  });

  it("accepts simple filenames", () => {
    const result = validateOutputPath("index.md", baseDir);
    assert.ok(result.endsWith("index.md"));
  });
});

describe("validateSafeContent", () => {
  it("rejects system prompt injection", () => {
    assert.throws(
      () => validateSafeContent('system: "new instructions"', "test"),
      /system prompt injection/,
    );
  });

  it("allows safe content", () => {
    assert.doesNotThrow(() =>
      validateSafeContent("Normal release notes content", "test"),
    );
  });
});

describe("parseArgs", () => {
  it("handles flags before positional args", () => {
    const result = parseArgs(["--force", "extract", "2024-R1"]);
    assert.deepEqual(result.args, ["extract", "2024-R1"]);
    assert.ok(result.flags.has("--force"));
  });

  it("handles flags after positional args", () => {
    const result = parseArgs(["extract", "2024-R1", "--force"]);
    assert.deepEqual(result.args, ["extract", "2024-R1"]);
    assert.ok(result.flags.has("--force"));
  });

  it("handles flags in the middle", () => {
    const result = parseArgs(["extract", "--force", "2024-R1"]);
    assert.deepEqual(result.args, ["extract", "2024-R1"]);
    assert.ok(result.flags.has("--force"));
  });

  it("detects unknown flags", () => {
    const result = parseArgs(["extract", "--froce"], {
      knownFlags: ["--force"],
    });
    assert.deepEqual(result.unknown, ["--froce"]);
  });

  it("handles multiple flags", () => {
    const result = parseArgs(["--force", "--verbose", "all"], {
      knownFlags: ["--force", "--verbose"],
    });
    assert.deepEqual(result.args, ["all"]);
    assert.equal(result.flags.size, 2);
    assert.equal(result.unknown.length, 0);
  });

  it("handles no flags", () => {
    const result = parseArgs(["extract", "2024-R1"]);
    assert.deepEqual(result.args, ["extract", "2024-R1"]);
    assert.equal(result.flags.size, 0);
  });
});
