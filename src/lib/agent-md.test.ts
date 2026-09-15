import { describe, expect, it } from "vitest";
import {
  MARKDOWN_PAGES,
  NOT_FOUND_MARKDOWN,
  markdownResponse,
  resolveMarkdownPath,
  wantsMarkdown,
} from "./agent-md";

describe("wantsMarkdown", () => {
  it("detects an explicit markdown Accept header", () => {
    expect(wantsMarkdown("text/markdown")).toBe(true);
    expect(wantsMarkdown("text/markdown, text/plain;q=0.9")).toBe(true);
  });

  it("ignores browser Accept headers and missing headers", () => {
    expect(wantsMarkdown("text/html,application/xhtml+xml")).toBe(false);
    expect(wantsMarkdown(null)).toBe(false);
  });
});

describe("resolveMarkdownPath", () => {
  it("resolves known pages, trailing slashes and .md suffixes", () => {
    expect(resolveMarkdownPath("/")).toBe("/");
    expect(resolveMarkdownPath("/about")).toBe("/about");
    expect(resolveMarkdownPath("/about/")).toBe("/about");
    expect(resolveMarkdownPath("/about.md")).toBe("/about");
    expect(resolveMarkdownPath("/index.md")).toBe("/");
  });

  it("returns null for unknown paths", () => {
    expect(resolveMarkdownPath("/nope")).toBeNull();
    expect(resolveMarkdownPath("/nope.md")).toBeNull();
  });
});

describe("markdown payloads", () => {
  it("covers every public page with substantial content", () => {
    for (const path of ["/", "/about", "/plans", "/plan-finder", "/book-appointment", "/contact", "/privacy"]) {
      expect(MARKDOWN_PAGES[path], path).toBeTruthy();
      expect(MARKDOWN_PAGES[path]!.length, path).toBeGreaterThan(500);
      expect(MARKDOWN_PAGES[path]!.startsWith("# "), path).toBe(true);
    }
  });

  it("gives the 404 body recovery links", () => {
    expect(NOT_FOUND_MARKDOWN).toContain("/sitemap.xml");
    expect(NOT_FOUND_MARKDOWN).toContain("/llms.txt");
    expect(NOT_FOUND_MARKDOWN).toContain("# 404");
  });
});

describe("markdownResponse", () => {
  it("sets the markdown content type and Vary: Accept", () => {
    const res = markdownResponse("# hi", 404);
    expect(res.status).toBe(404);
    expect(res.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(res.headers.get("vary")).toBe("Accept, Accept-Encoding");
  });
});
