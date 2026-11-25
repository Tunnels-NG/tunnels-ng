/**
 * Internal team record. Not published.
 *
 * This module is deliberately not imported by any page, component or by
 * `src/content/company.ts`, so nothing here is bundled into the site. Never
 * import it from public UI code: individual names, job titles and experience
 * figures are withheld from the website.
 *
 * The only published figure is the aggregate in `src/content/company.ts`
 * (`combinedExperienceYears`). That figure is set by the company and covers the
 * wider engineering group, so it is not derived from `totalProfessionalExperience`
 * here. The aggregate must not be described as time spent working together, nor
 * as experience acquired at Tunnels.
 *
 * Portraits for a possible future leadership page are retained in
 * `src/assets/team/` (not served from `public/`).
 */

export interface TeamRecordEntry {
  slug: string;
  name: string;
  title: string;
  /** Short responsibility statement, not a career biography. */
  summary: string;
  /** Individual professional experience in years. Internal only. */
  years: number;
}

/** Presented in this order. Internal record; not published individually. */
export const teamRecord: TeamRecordEntry[] = [
  {
    slug: "chris-fega",
    name: "Chris Fega",
    title: "Founder & CEO",
    summary:
      "Leads the company: corporate strategy, business direction and partnerships, with overall accountability for the standard of work Tunnels delivers.",
    years: 11,
  },
  {
    slug: "sarah-obarhoro",
    name: "Sarah Obarhoro",
    title: "Chief Technology Officer",
    summary:
      "Owns technology leadership and engineering strategy: technical direction, architecture and the delivery of engineering work across engagements.",
    years: 4,
  },
  {
    slug: "vamsi-priya",
    name: "Vamsi Priya",
    title: "Head of Platform Engineering",
    summary:
      "Leads platform engineering, cloud infrastructure and reliability, and the engineering of the scalable platforms our clients run on.",
    years: 6,
  },
  {
    slug: "isaac-moses",
    name: "Isaac Moses",
    title: "Product Design Lead",
    summary:
      "Directs product design and user experience, translating business and user requirements into interfaces and product experiences that hold up in use.",
    years: 4,
  },
  {
    slug: "jessica-uboh",
    name: "Jessica Uboh",
    title: "Business Relations Lead",
    summary:
      "Owns business relationships and communication: client and partner contact, relationship management, and a consistent experience for the organisations we work with.",
    years: 4,
  },
  {
    slug: "kingsley-akposheri",
    name: "Kingsley Akposheri",
    title: "Legal Counsel",
    summary:
      "Provides legal guidance on contracts and commercial arrangements, and supports the company's legal and governance requirements.",
    years: 6,
  },
];

/** Internal derivation for the published aggregate. */
export const totalProfessionalExperience = teamRecord.reduce((total, person) => total + person.years, 0);
