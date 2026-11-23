/**
 * Build-time prerenderer.
 *
 * Runs after the client build (`vite build`) and the SSR bundle
 * (`vite build --ssr src/entry-server.tsx`). For every URL in
 * `public/sitemap.xml` it renders the app with react-dom/server, serialises the
 * route's SEO payload into the built `dist/index.html` shell, and writes the
 * result to `dist/<path>/index.html`.
 *
 * Social scrapers and crawlers that do not execute JavaScript therefore receive
 * the title, description, canonical, Open Graph, Twitter and JSON-LD tags — and
 * the rendered page copy — in the initial HTML. The browser bundle still mounts
 * normally and re-applies the same head payload on navigation.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const escapeText = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttr = (value) => escapeText(value).replace(/"/g, "&quot;");

/** JSON-LD must not be able to close its own script element. */
const escapeJsonLd = (value) => value.replace(/</g, "\\u003c");

function serializeHead(head) {
  return head.tags
    .map((tag) => {
      if (tag.kind === "meta") {
        return `<meta ${tag.attr}="${escapeAttr(tag.key)}" content="${escapeAttr(tag.content)}" data-seo-managed="true" />`;
      }
      if (tag.kind === "link") {
        return `<link rel="${escapeAttr(tag.rel)}" href="${escapeAttr(tag.href)}" data-seo-managed="true" />`;
      }
      return `<script type="${escapeAttr(tag.type)}" data-seo-managed="true">${escapeJsonLd(tag.text)}</script>`;
    })
    .join("\n    ");
}

function checkHtml(html, route) {
  const problems = [];

  if ((html.match(/<link rel="canonical"/g) || []).length !== 1) {
    problems.push("expected exactly one canonical link");
  }
  if (!html.includes('<meta name="description"')) problems.push("missing description");
  if (!html.includes('property="og:title"')) problems.push("missing og:title");
  if (!html.includes('property="og:image"')) problems.push("missing og:image");
  if (!html.includes('name="twitter:card"')) problems.push("missing twitter:card");
  if (!html.includes('type="application/ld+json"')) problems.push("missing JSON-LD");
  if (/<div id="root"><\/div>/.test(html)) problems.push("root container is empty");

  if (problems.length) {
    throw new Error(`Prerender check failed for ${route}: ${problems.join(", ")}`);
  }
}

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const sitemap = await readFile(path.join(distDir, "sitemap.xml"), "utf8");

const routes = [
  ...new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
      const pathname = new URL(match[1].trim()).pathname.replace(/\/+$/, "");
      return pathname || "/";
    }),
  ),
];

if (template.includes('id="root"></div>') === false) {
  throw new Error("Unexpected build template: no empty root container found.");
}

const { render } = await import(pathToFileURL(ssrEntry).href);

const written = [];

for (const route of routes) {
  const { html: bodyHtml, head } = render(route);

  let html = template.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeText(head.title)}</title>`,
  );
  html = html.replace("</head>", `  ${serializeHead(head)}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  checkHtml(html, route);

  const target =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html");

  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);

  written.push({ route, title: head.title });
}

console.log(`Prerendered ${written.length} routes:`);
written.forEach(({ route, title }) => console.log(`  ${route.padEnd(56)} ${title}`));
