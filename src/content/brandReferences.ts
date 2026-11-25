/**
 * Clients, partners and technology platforms referenced on the homepage.
 *
 * One flat list: the relationships are presented as a single set, without
 * sub-groupings. Logo assets are each brand's own mark, supplied by the brand
 * or taken from its published brand assets, and served locally. A brand without
 * a suitable asset uses a restrained initial placeholder, so it can be replaced
 * by adding `logo` and `logoHeight` here without touching layout.
 */
export interface BrandReference {
  name: string;
  href: string;
  /** Official asset, hosted locally. Omitting it falls back to the initial. */
  logo?: { src: string; width: number; height: number };
  /** Optically tuned display height in CSS pixels; defaults to 32. */
  logoHeight?: number;
  /** Drop an opaque edge colour with `multiply` where an asset is served on a light plate. */
  logoBlend?: "multiply";
  /** Placeholder initial, shown only when `logo` is absent. */
  initial?: string;
}

export const brandReferences: BrandReference[] = [
  {
    // SEV lockup supplied by the brand (wordmark over the Stitches En Vogue
    // line); background removed, original colours preserved.
    name: "Stitches En Vogue",
    href: "https://sev.ng",
    logo: { src: "/assets/references/sev.png", width: 581, height: 192 },
    logoHeight: 40,
    initial: "S",
  },
  {
    // okaneats serves its wordmark only as white-on-transparent, which is
    // unreadable on a light page. The site's own favicon carries the same
    // mark in brand colours on white; multiply removes the white plate.
    name: "okaneats",
    href: "https://okaneats.com.ng",
    logo: { src: "/assets/references/okaneats.png", width: 96, height: 96 },
    logoHeight: 40,
    logoBlend: "multiply",
    initial: "O",
  },
  {
    // https://www.rendezvouscare.com/_nuxt/Logo-no-bg.vHL9dyyN.png
    name: "Rendezvouscare",
    href: "https://rendezvouscare.com",
    logo: { src: "/assets/references/rendezvouscare.png", width: 575, height: 132 },
    logoHeight: 30,
    initial: "R",
  },
  {
    // https://payrendr.com/assets/Payrendr.png
    name: "payrendr",
    href: "https://payrendr.com",
    logo: { src: "/assets/references/payrendr.png", width: 486, height: 90 },
    logoHeight: 25,
    initial: "P",
  },
  {
    // Brush "I" mark supplied by the brand.
    name: "InScrape",
    href: "https://inscrape.dev",
    logo: { src: "/assets/references/inscrape.png", width: 146, height: 192 },
    logoHeight: 40,
    initial: "I",
  },
  {
    // https://zura.africa/images/logo.png
    name: "Zura",
    href: "https://zura.africa",
    logo: { src: "/assets/references/zura.png", width: 349, height: 96 },
    logoHeight: 28,
    initial: "Z",
  },
  {
    // Postject app mark (terminal glyph) supplied by the brand.
    name: "Postject",
    href: "https://postject.com",
    logo: { src: "/assets/references/postject.png", width: 128, height: 128 },
    logoHeight: 38,
    initial: "P",
  },
  {
    // https://listdem.com/Listdem-Icon.png
    name: "Listdem",
    href: "https://listdem.com",
    logo: { src: "/assets/references/listdem.png", width: 128, height: 128 },
    logoHeight: 36,
    initial: "L",
  },
  {
    // Drawra lockup (shield icon and wordmark) supplied by the brand.
    name: "Drawra",
    href: "https://drawra-frontend.pages.dev",
    logo: { src: "/assets/references/drawra.png", width: 615, height: 192 },
    logoHeight: 28,
    initial: "D",
  },
  // Platforms and tooling. Marks are the vendors' own published icons, taken
  // from the Simple Icons brand set and rendered locally.
  {
    name: "AWS",
    href: "https://aws.amazon.com",
    logo: { src: "/assets/references/aws.png", width: 128, height: 78 },
    logoHeight: 34,
  },
  {
    name: "Google Cloud",
    href: "https://cloud.google.com",
    logo: { src: "/assets/references/googlecloud.png", width: 128, height: 104 },
    logoHeight: 34,
  },
  {
    name: "Microsoft Azure",
    href: "https://azure.microsoft.com",
    logo: { src: "/assets/references/azure.png", width: 128, height: 122 },
    logoHeight: 32,
  },
  {
    name: "Docker",
    href: "https://www.docker.com",
    logo: { src: "/assets/references/docker.png", width: 128, height: 92 },
    logoHeight: 32,
  },
  {
    name: "Claude",
    href: "https://claude.ai",
    logo: { src: "/assets/references/claude.png", width: 128, height: 128 },
    logoHeight: 30,
  },
  {
    name: "OpenAI",
    href: "https://openai.com",
    logo: { src: "/assets/references/openai.png", width: 128, height: 128 },
    logoHeight: 30,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    logo: { src: "/assets/references/github.png", width: 128, height: 126 },
    logoHeight: 32,
  },
  {
    name: "Google",
    href: "https://www.google.com",
    logo: { src: "/assets/references/google.png", width: 126, height: 128 },
    logoHeight: 30,
  },
  {
    name: "Cloudflare",
    href: "https://www.cloudflare.com",
    logo: { src: "/assets/references/cloudflare.png", width: 128, height: 58 },
    logoHeight: 30,
  },
  {
    name: "Hetzner",
    href: "https://www.hetzner.com",
    logo: { src: "/assets/references/hetzner.png", width: 88, height: 86 },
    logoHeight: 32,
  },
  {
    name: "Kubernetes",
    href: "https://kubernetes.io",
    logo: { src: "/assets/references/kubernetes.png", width: 128, height: 125 },
    logoHeight: 32,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org",
    logo: { src: "/assets/references/postgresql.png", width: 124, height: 128 },
    logoHeight: 32,
  },
];
