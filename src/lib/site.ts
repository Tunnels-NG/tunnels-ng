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
  /** Public profiles used in Organization structured data and the footer. */
  socialLinks: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/tunnelsng" }],
  /** Operational commitment stated on the enquiry form. Change only if it can be met. */
  responseTime: "two business days",
  enquiryEndpoint: (env.VITE_CONTACT_ENDPOINT as string | undefined) || "",
  analyticsDomain: (env.VITE_ANALYTICS_DOMAIN as string | undefined) || "",
  /** The company serves clients internationally; no country listing is published. */
  coverage: "Global",
} as const;

export const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** The three commercial offers that lead the site's positioning. */
export const LEAD_SOLUTION_SLUGS = [
  "enterprise-ai-implementation",
  "cloud-platform-transformation",
  "enterprise-systems-modernisation",
] as const;

/** Service divisions that lead commercial positioning on the homepage. */
export const LEAD_SERVICE_SLUGS = [
  "ai-intelligent-systems",
  "cloud-platform-infrastructure",
  "enterprise-software",
] as const;

export const ENGAGEMENT_MODELS = [
  {
    name: "Project-Based Engineering",
    summary:
      "A scoped programme with clear outcomes, milestones and acceptance criteria. Best for modernisation, platform builds and system integration with a defined end state.",
    bestFor: "Fixed scope, clear delivery date",
  },
  {
    name: "Managed Engineering Services",
    summary:
      "Senior engineers and architects owning live systems inside your delivery structure, under agreed service objectives. Best when a platform needs an owner without a long hiring cycle.",
    bestFor: "Ongoing delivery and reliability",
  },
  {
    name: "Strategic Engineering Partnerships",
    summary:
      "Retained architecture and technology leadership: decision support, technical due diligence, roadmap definition and independent review of critical programmes.",
    bestFor: "Leadership and decision support",
  },
] as const;
