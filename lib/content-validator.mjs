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
    { pattern: /<\/release>/i, name: "XML tag injection" },
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
