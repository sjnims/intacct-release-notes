/**
 * Path validation to prevent path traversal attacks
 */

import { resolve, sep } from "node:path";

/**
 * Validates output path to prevent path traversal attacks
 * @param {string} outputPath - Relative path to validate
 * @param {string} baseDir - Base directory (e.g., docs/2024/2024-R1)
 * @returns {string} Normalized absolute path
 * @throws {Error} if path is unsafe
 */
export function validateOutputPath(outputPath, baseDir) {
  // 1. Reject null bytes
  if (outputPath.includes("\0")) {
    throw new Error(`Path contains null byte: ${outputPath}`);
  }

  // 2. Reject absolute paths
  if (outputPath.startsWith("/") || /^[a-zA-Z]:/.test(outputPath)) {
    throw new Error(`Absolute paths not allowed: ${outputPath}`);
  }

  // 3. Reject parent directory references
  if (outputPath.includes("..")) {
    throw new Error(`Parent directory references not allowed: ${outputPath}`);
  }

  // 4. Allowlist characters (alphanumeric, hyphens, slashes, dots)
  if (!/^[a-z0-9\-/.]+$/i.test(outputPath)) {
    throw new Error(`Path contains invalid characters: ${outputPath}`);
  }

  // 5. Normalize and verify result is within baseDir
  const normalizedBase = resolve(baseDir);
  const normalizedPath = resolve(baseDir, outputPath);

  if (!normalizedPath.startsWith(normalizedBase + sep)) {
    throw new Error(
      `Path escapes base directory: ${outputPath} (resolves to ${normalizedPath})`,
    );
  }

  return normalizedPath;
}
