/**
 * CLI argument parser that separates flags from positional arguments
 */

/**
 * Parses CLI arguments separating flags from positional args
 * @param {string[]} argv - process.argv.slice(2)
 * @param {object} options - { knownFlags: ['--force'] }
 * @returns {{ args: string[], flags: Set<string>, unknown: string[] }}
 */
export function parseArgs(argv, options = {}) {
  const { knownFlags = [] } = options;
  const knownSet = new Set(knownFlags);

  const args = [];
  const flags = new Set();
  const unknown = [];

  for (const arg of argv) {
    if (arg.startsWith("--")) {
      flags.add(arg);
      if (!knownSet.has(arg)) {
        unknown.push(arg);
      }
    } else {
      args.push(arg);
    }
  }

  return { args, flags, unknown };
}
