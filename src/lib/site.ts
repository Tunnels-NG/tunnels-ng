/**
 * Central site configuration.
 *
 * Production domain: confirmed as TunnelsNG.com for this build. Override at
 * deploy time with VITE_SITE_URL if the canonical host changes.
 */
const env = import.meta.env;

export const SITE = {
  name: "Tunnels Global",
  shortName: "Tunnels",
  operatingName: "TunnelsNG",
  legalName: "Tunnels Global",
  url: (env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://tunnelsng.com",
  founded: "2018",
  tagline: "Engineering the systems behind business transformation.",
  description:
    "Tunnels Global is an enterprise technology and engineering company. We design, build, modernise and operate intelligent systems, software, cloud platforms and secure infrastructure.",
  email: (env.VITE_CONTACT_EMAIL as string | undefined) || "hello@tunnelsng.com",
  linkedin: "https://www.linkedin.com/company/tunnelsng",
  enquiryEndpoint: (env.VITE_CONTACT_ENDPOINT as string | undefined) || "",
  analyticsDomain: (env.VITE_ANALYTICS_DOMAIN as string | undefined) || "",
  /** The company serves clients internationally; no country listing is published. */
  coverage: "Global",
} as const;

export const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    name: "Defined project",
    summary:
      "A scoped programme with clear outcomes, milestones and acceptance criteria. Best for modernisation, platform builds and system integration with a defined end state.",
    bestFor: "Fixed scope, clear delivery date",
  },
  {
    name: "Embedded engineering team",
    summary:
      "Senior engineers and architects working inside your delivery structure, under your priorities. Best when you need additional capability without a long hiring cycle.",
    bestFor: "Ongoing delivery capacity",
  },
  {
    name: "Advisory partnership",
    summary:
      "Fractional architecture and technology leadership: decision support, technical due diligence, roadmap definition and independent review of critical programmes.",
    bestFor: "Leadership and decision support",
  },
] as const;
