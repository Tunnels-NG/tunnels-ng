import { useEffect } from "react";
import { SITE } from "@/lib/site";
import { applyHead, buildHead, recordServerHead, removeHead, type SeoInput } from "@/lib/head";

/**
 * Route-level document head manager.
 *
 * `buildHead` produces the tag payload; this component writes it into the live
 * document on mount and again whenever the route's metadata changes. The same
 * payload is serialised into each route's HTML at build time (see
 * `scripts/prerender.mjs`), so scrapers that do not run JavaScript get the
 * real title, description, canonical, Open Graph and JSON-LD tags.
 */
const SEO = (props: SeoInput) => {
  const head = buildHead(props);
  const headKey = JSON.stringify(head);

  if (typeof window === "undefined") recordServerHead(head);

  useEffect(() => {
    applyHead(head);
    return removeHead;
    // `headKey` captures every field that affects the payload.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headKey]);

  return null;
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

export default SEO;
