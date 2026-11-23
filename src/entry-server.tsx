import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./App";
import { takeServerHead, type HeadPayload } from "./lib/head";

/**
 * Build-time render entry. Used only by `scripts/prerender.mjs`; the browser
 * bundle still mounts through `src/main.tsx`.
 */
export function render(path: string): { html: string; head: HeadPayload } {
  const html = renderToString(
    <QueryClientProvider client={new QueryClient()}>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </QueryClientProvider>,
  );

  return { html, head: takeServerHead() };
}
