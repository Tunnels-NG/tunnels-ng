/**
 * Route head model.
 *
 * `buildHead` is the single source of truth for per-route title, description,
 * canonical, Open Graph, Twitter and JSON-LD tags. It is pure, so the same
 * output feeds two consumers:
 *
 * - the browser head manager in `components/site/SEO.tsx`, which writes the
 *   tags into `document.head` (unchanged client behaviour), and
 * - the build-time prerenderer, which serialises them into each route's HTML
 *   so scrapers that do not execute JavaScript still see them.
 */
import { SITE } from "./site";

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export type HeadTag =
  | { kind: "meta"; attr: "name" | "property"; key: string; content: string }
  | { kind: "link"; rel: string; href: string }
  | { kind: "script"; type: string; text: string };

export interface HeadPayload {
  title: string;
  tags: HeadTag[];
}

export const HEAD_MARKER = "data-seo-managed";

export function buildHead({
  title,
  description,
  path,
  type = "website",
  image = `${SITE.url}/assets/brand/tunnels-share.jpg`,
  noindex = false,
  structuredData,
}: SeoInput): HeadPayload {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const canonical = `${SITE.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

  const tags: HeadTag[] = [];

  const meta = (attr: "name" | "property", key: string, content: string) => {
    tags.push({ kind: "meta", attr, key, content });
  };

  meta("name", "description", description);
  meta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");

  tags.push({ kind: "link", rel: "canonical", href: canonical });

  meta("property", "og:type", type);
  meta("property", "og:site_name", SITE.name);
  meta("property", "og:title", fullTitle);
  meta("property", "og:description", description);
  meta("property", "og:url", canonical);
  meta("property", "og:image", image);
  meta("property", "og:locale", "en_GB");

  meta("name", "twitter:card", "summary_large_image");
  meta("name", "twitter:title", fullTitle);
  meta("name", "twitter:description", description);
  meta("name", "twitter:image", image);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.operatingName,
    url: SITE.url,
    logo: `${SITE.url}/assets/brand/tunnels-logo.svg`,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    areaServed: "Worldwide",
    knowsAbout: [
      "Enterprise AI implementation",
      "Enterprise software engineering",
      "Legacy system modernisation",
      "Cloud infrastructure engineering",
      "Kubernetes and platform engineering",
      "Enterprise systems integration",
      "Technology transformation",
      "Cybersecurity and reliability engineering",
    ],
    sameAs: [SITE.linkedin],
  };

  const blocks = [
    organization,
    ...(structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : []),
  ];

  blocks.forEach((block) => {
    tags.push({ kind: "script", type: "application/ld+json", text: JSON.stringify(block) });
  });

  return { title: fullTitle, tags };
}

/** Writes the head payload into the live document. Browser only. */
export function applyHead(head: HeadPayload) {
  document.head.querySelectorAll(`[${HEAD_MARKER}]`).forEach((node) => node.remove());

  document.title = head.title;

  head.tags.forEach((tag) => {
    let node: HTMLElement;

    if (tag.kind === "meta") {
      const meta = document.createElement("meta");
      meta.setAttribute(tag.attr, tag.key);
      meta.setAttribute("content", tag.content);
      node = meta;
    } else if (tag.kind === "link") {
      const link = document.createElement("link");
      link.setAttribute("rel", tag.rel);
      link.setAttribute("href", tag.href);
      node = link;
    } else {
      const script = document.createElement("script");
      script.type = tag.type;
      script.textContent = tag.text;
      node = script;
    }

    node.setAttribute(HEAD_MARKER, "true");
    document.head.appendChild(node);
  });
}

/** Removes everything this head manager owns. Browser only. */
export function removeHead() {
  document.head.querySelectorAll(`[${HEAD_MARKER}]`).forEach((node) => node.remove());
}

/*
 * Server-side collection for the prerenderer. Rendering is synchronous, so the
 * last payload recorded during a render belongs to that route.
 */
let serverHead: HeadPayload | null = null;

export function recordServerHead(head: HeadPayload) {
  serverHead = head;
}

export function takeServerHead(): HeadPayload {
  if (!serverHead) throw new Error("No SEO head payload was recorded during render.");
  const head = serverHead;
  serverHead = null;
  return head;
}
