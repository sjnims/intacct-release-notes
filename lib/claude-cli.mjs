/**
 * How summarize.mjs invokes the Claude Code CLI
 */

/**
 * Arguments for a one-shot `claude -p` summarization call.
 *
 * The session gets no tools. Summarization only needs text back, and the
 * prompts carry scraped release notes, so a model that can run Bash or write
 * files is a far bigger target for injected instructions than one that can
 * only answer. Both flags are needed: `--tools ""` removes the built-in tools
 * but leaves MCP servers connected, and `--strict-mcp-config` (with no
 * `--mcp-config`) drops the MCP servers but leaves the built-in tools.
 *
 * @param {{ model: string, system: string }} options
 * @returns {string[]} argv for `claude` (the prompt itself goes over stdin)
 */
export function claudeArgs({ model, system }) {
  return [
    "-p",
    "--model",
    model,
    "--effort",
    "medium",
    "--tools",
    "",
    "--strict-mcp-config",
    "--system-prompt",
    system,
    "--output-format",
    "json",
  ];
}
