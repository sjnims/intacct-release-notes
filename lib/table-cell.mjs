/**
 * Table cell → markdown cell text.
 *
 * extract.mjs injects this function's source into the browser page (code run
 * by page.evaluate can't import modules), so it must stay self-contained: no
 * references to anything outside its own body. It only uses standard DOM APIs
 * on its argument, which also lets the tests run it against jsdom.
 *
 * @param {Element} cell - A <td> or <th> element (not modified)
 * @returns {string} Cell text, escaped for use inside a markdown table row
 */
export function cellToMarkdown(cell) {
  // Block elements inside cells (e.g. <ul><li>Canada</li><li>United
  // States</li></ul>) may have no whitespace between them, which makes
  // textContent run words together. Insert a space only where the source has
  // none, so whitespace-separated markup is unchanged.
  const clone = cell.cloneNode(true);
  clone.querySelectorAll("p, div, ul, ol, li, br").forEach((el) => {
    const next = el.nextSibling;
    if (next && !/\s$/.test(el.textContent) && !/^\s/.test(next.textContent)) {
      el.after(" ");
    }
  });
  return clone.textContent
    .trim()
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/\n+/g, " ");
}
