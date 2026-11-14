/**
 * Content validation to prevent prompt injection attacks
 */

/**
 * Validates content safety before inserting into prompts
 * @param {string} content - Content to validate
 * @param {string} context - Context for error messages
 * @throws {Error} if suspicious patterns detected
 */
export function validateSafeContent(content, context) {
  const dangerPatterns = [
    { pattern: /ignore previous instructions/i, name: "instruction override" },
    // Closing tags of the delimiters that summarize.mjs wraps content in
    { pattern: /<\/(release|executive_summary)>/i, name: "XML tag injection" },
    { pattern: /\[INST\]/i, name: "instruction marker" },
    { pattern: /\{\{.*\}\}/s, name: "template injection" },
    { pattern: /system\s*:\s*"/, name: "system prompt injection" },
  ];

  for (const { pattern, name } of dangerPatterns) {
    if (pattern.test(content)) {
      throw new Error(
        `Potentially unsafe content in ${context}: detected ${name}`,
      );
    }
  }
}

/**
 * Validates that model output has the quick read structure before it is
 * written. A malformed file would otherwise stick, because later runs skip
 * any quick read that already exists.
 * @param {string} content - Model output, without frontmatter or title
 * @param {string} context - Context for error messages
 * @throws {Error} on a preamble, a code fence, or a truncated response
 */
export function validateQuickRead(content, context) {
  const problems = [];
  if (!content.startsWith("**Bottom line:**")) {
    problems.push('does not start with "**Bottom line:**"');
  }
  // "## Act on" is optional (a release may require no action); these are not
  const lines = content.split("\n");
  for (const heading of ["## Worth a look", "## Can wait"]) {
    if (!lines.includes(heading)) problems.push(`missing "${heading}"`);
  }
  if (problems.length > 0) {
    throw new Error(
      `Malformed quick read for ${context}: ${problems.join("; ")}`,
    );
  }
}
