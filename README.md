# Tunnels Global — corporate website

Production website for **Tunnels Global (TunnelsNG)**: enterprise technology, software
engineering, intelligent systems, cloud infrastructure and technology transformation.

Built with Vite, React 18, TypeScript, Tailwind CSS and React Router. Content is
data-driven from `src/content/`, so new services, solutions and insights are added
without new page components.

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # client build + prerender every route into dist/
npm run preview  # serve the production build
npm run lint
```

`npm run build` runs three steps: the client bundle (`vite build`), an SSR bundle
of `src/entry-server.tsx` into `dist-ssr/`, and `scripts/prerender.mjs`, which
writes a fully rendered HTML file per route. `dist-ssr/` is build scratch and is
not deployed.

## Structure

```
src/
  components/
    brand/Logo.tsx            Mark + typographic wordmark
    contact/ContactForm.tsx   Validated enquiry form
    site/                     Navbar, Footer, Layout, SEO head manager, PageHeader,
                              CTA band, Hero and architecture diagram
  content/
    services.ts               5 service divisions
    solutions.ts              6 commercial solutions
    industries.ts             6 sectors
    insights.ts               Article library
  lib/
    site.ts                   Site config, navigation, contact details, env vars
    head.ts                   Route head payload builder (title, OG, JSON-LD)
    analytics.ts              Optional analytics integration point
  pages/                      Route components
  entry-server.tsx            Build-time render entry used by the prerenderer
scripts/
  prerender.mjs               Renders each sitemap URL into dist/<path>/index.html
public/
  assets/brand/               Supplied logo assets
  robots.txt, sitemap.xml, favicon.svg
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/about` | About Tunnels |
| `/services` | Service divisions |
| `/services/:slug` | Division detail (5) |
| `/solutions` | Commercial solutions |
| `/solutions/:slug` | Solution detail (6) |
| `/industries` | Industries |
| `/insights` | Insights index with topic filter |
| `/insights/:slug` | Article (6 published) |
| `/contact` | Project enquiry |
| `*` | 404 |

## Environment variables

All are optional at build time; the site runs without them and degrades honestly.

| Variable | Purpose | Required |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical origin used for canonical URLs, OG tags and structured data. Defaults to `https://tunnelsng.com`. | Recommended |
| `VITE_CONTACT_ENDPOINT` | HTTPS endpoint that accepts the enquiry JSON POST. Without it the form shows a clear "not configured" notice and offers a prefilled email fallback. | For live enquiries |
| `VITE_CONTACT_EMAIL` | Public enquiry address. Defaults to `hello@tunnelsng.com` — **confirm before launch**. | Recommended |
| `VITE_ANALYTICS_DOMAIN` | Analytics site domain. When set, the analytics script is loaded and events are tracked. | Optional |
| `VITE_ANALYTICS_SCRIPT` | Alternative analytics script URL. Defaults to Plausible. | Optional |

Create `.env.local` in the project root (never commit it):

```
VITE_SITE_URL=https://tunnelsng.com
VITE_CONTACT_EMAIL=hello@tunnelsng.com
VITE_CONTACT_ENDPOINT=https://your-form-handler.example.com/enquiry
VITE_ANALYTICS_DOMAIN=tunnelsng.com
```

### Contact form payload

`POST` with `Content-Type: application/json`:

```json
{
  "name": "…",
  "email": "…",
  "company": "…",
  "jobTitle": "…",
  "country": "…",
  "service": "Enterprise AI Implementation",
  "description": "…",
  "budget": "$50,000 – $150,000",
  "engagement": "Defined project",
  "privacy": true,
  "submittedAt": "2026-11-23T10:00:00.000Z",
  "source": "https://tunnelsng.com/contact"
}
```

The handler must return a 2xx status. It should also verify the request origin,
rate-limit by IP, and forward to the internal mailbox or CRM. Client-side spam
protection is a honeypot plus a minimum completion time; it is not a substitute
for server-side validation.

## Design system

- **Palette:** charcoal `#0D0D0E`, warm white `#F7F5F0`, neutral greys and the
  Tunnels red `#E52329` (from the supplied logo) used as an accent only.
- **Type:** Inter Tight (display), Inter (body), IBM Plex Mono (labels and data).
- **Layout:** 12-column editorial grid, 1px rules, square corners, no decorative
  gradients or glass effects.
- **Motion:** single scroll-reveal utility, disabled under
  `prefers-reduced-motion`.

## Known limitations

- **Rendering:** routes are prerendered at build time. `npm run build` renders
  every URL in `public/sitemap.xml` with `react-dom/server` and writes
  `dist/<path>/index.html` containing the page markup plus that route's title,
  description, canonical, Open Graph, Twitter and JSON-LD tags. Scrapers and
  crawlers that do not execute JavaScript therefore read the right metadata. The
  browser bundle hydrates the existing markup, and the head manager in
  `src/components/site/SEO.tsx` re-applies the same payload on client-side
  navigation. To prerender a new route, add it to `public/sitemap.xml`; the route
  list for prerendering comes from that file. Unknown paths still fall back to
  `dist/index.html` (the homepage shell) with a client-rendered 404.
- **Form delivery:** no backend is included. Enquiries require
  `VITE_CONTACT_ENDPOINT`.
- **Analytics:** no data is collected until `VITE_ANALYTICS_DOMAIN` is set.
- **Unverified content:** leadership profiles, client references, certifications
  and case studies are deliberately absent. The About page marks the leadership
  section as pending verified content.
- **OG image:** `public/assets/brand/tunnels-share.jpg` is an abstract brand visual
  without text. Replace it with an approved share card if required; the default
  is declared once in `src/lib/head.ts`.
- **Assets:** `public/assets/` contains only `brand/` (logos, mark, share image,
  apple-touch-icon). Historical imagery from the previous site was removed.

## Deployment

Static hosting. Build with `npm run build` and deploy `dist/`.

1. Keep the SPA fallback for unknown paths only, so the prerendered
   `dist/<route>/index.html` files are served for real routes (Netlify: files
   take precedence over `/* /index.html 200`; Vercel: framework preset Vite;
   Cloudflare Pages: single-page application mode). Directory-index resolution
   of `/about` to `/about/index.html` is required — all three hosts do this by
   default. Do not force the fallback with a rewrite that shadows existing files.
2. Set the environment variables above in the hosting provider.
3. Confirm the production domain matches `VITE_SITE_URL`, `public/sitemap.xml`
   and `public/robots.txt` (both files hardcode the canonical origin).
4. Submit `https://<domain>/sitemap.xml` to Google Search Console and Bing.
5. Complete a real enquiry submission against the configured endpoint.
