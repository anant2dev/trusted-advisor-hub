import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  MARKDOWN_PAGES,
  NOT_FOUND_MARKDOWN,
  markdownResponse,
  resolveMarkdownPath,
  wantsMarkdown,
} from "./lib/agent-md";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function withVary(response: Response): Response {
  const existing = response.headers.get("vary");
  if (existing && /\baccept\b/i.test(existing)) return response;
  const headers = new Headers(response.headers);
  headers.set("vary", existing ? `${existing}, Accept` : "Accept, Accept-Encoding");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/index") {
        url.pathname = "/";
        return Response.redirect(url, 308);
      }

      // acceptmarkdown.com content negotiation: `Accept: text/markdown` or a
      // `.md` suffix returns the markdown twin of a page.
      const accept = request.headers.get("accept");
      const mdPath = resolveMarkdownPath(url.pathname);
      if (mdPath && (wantsMarkdown(accept) || url.pathname.endsWith(".md"))) {
        return markdownResponse(MARKDOWN_PAGES[mdPath]!);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);

      if (normalized.status === 404 && (wantsMarkdown(accept) || !accept?.includes("text/html"))) {
        return markdownResponse(NOT_FOUND_MARKDOWN, 404);
      }
      return withVary(normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
