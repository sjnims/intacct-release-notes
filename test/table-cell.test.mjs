import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { cellToMarkdown } from "../lib/table-cell.mjs";

function cell(innerHTML) {
  const { document } = new JSDOM(
    `<table><tr><td>${innerHTML}</td></tr></table>`,
  ).window;
  return document.querySelector("td");
}

describe("cellToMarkdown", () => {
  it("separates list items with no whitespace between tags", () => {
    assert.equal(
      cellToMarkdown(cell("<ul><li>Canada</li><li>United States</li></ul>")),
      "Canada United States",
    );
  });

  it("separates a paragraph from a following list", () => {
    assert.equal(
      cellToMarkdown(
        cell(
          "<p>Requires:</p><ul><li>Subscription in Sage Intacct</li><li>Configuration and setup</li></ul>",
        ),
      ),
      "Requires: Subscription in Sage Intacct Configuration and setup",
    );
  });

  it("separates text around <br>", () => {
    assert.equal(
      cellToMarkdown(cell("line one<br>line two")),
      "line one line two",
    );
  });

  it("leaves whitespace-separated markup unchanged (no double spaces)", () => {
    assert.equal(
      cellToMarkdown(
        cell("<ul>\n<li>Canada</li>\n<li>United States</li>\n</ul>"),
      ),
      "Canada United States",
    );
  });

  it("does not add a space when the element's text already ends with one", () => {
    assert.equal(
      cellToMarkdown(cell("<p>Variance Analysis. </p><p>Watch the video</p>")),
      "Variance Analysis. Watch the video",
    );
  });

  it("does not split inline elements", () => {
    assert.equal(
      cellToMarkdown(cell("Sage <b>Intacct</b>. See <a href='#'>docs</a>.")),
      "Sage Intacct. See docs.",
    );
  });

  it("escapes pipes and backslashes for markdown tables", () => {
    assert.equal(cellToMarkdown(cell("a|b\\c")), "a\\|b\\\\c");
  });

  it("does not modify the original cell", () => {
    const td = cell("<ul><li>a</li><li>b</li></ul>");
    const before = td.innerHTML;
    cellToMarkdown(td);
    assert.equal(td.innerHTML, before);
  });

  it("is self-contained, so it can be injected into the page as source", () => {
    const { window } = new JSDOM(
      "<table><tr><td><li>x</li><li>y</li></td></tr></table>",
      { runScripts: "outside-only" },
    );
    window.eval(`globalThis.__cellToMarkdown = ${cellToMarkdown};`);
    const td = window.document.querySelector("td");
    assert.equal(window.__cellToMarkdown(td), "x y");
  });
});
