/**
 * Company content.
 *
 * Confirmed facts only: founding year, registered office and collective
 * experience. Milestones that have not been supplied with dates are described
 * in sequence rather than assigned a year. Do not add biographies,
 * qualifications, previous employers or client outcomes the company has not
 * confirmed.
 *
 * Individual team members are not published. Personnel data lives in the
 * internal record at `src/content/teamRecord.ts`, which is never imported by
 * public UI code, and portraits are retained in `src/assets/team/` (not served).
 */

/**
 * Aggregate professional experience published on the site.
 *
 * Supplied by the company and covering the wider engineering group, so it is
 * not derived from the individual record in `src/content/teamRecord.ts`. Do not
 * describe the total as experience gained working together, nor as experience
 * acquired at Tunnels.
 */
export const combinedExperienceYears = 55;

export const experienceHeading = "Decades of Experience. A Growing Global Team.";

/** Public copy. The first paragraph carries the aggregate figure. */
export const experienceIntro = [
  `Tunnels Global brings together a multidisciplinary team of technology professionals with over ${combinedExperienceYears} years of combined professional experience.`,
  "Our collective expertise spans software engineering, enterprise architecture, cloud and platform engineering and product development.",
  "We bring together the right expertise to solve complex problems, engineer dependable systems and help organisations navigate technological change.",
  "Top engineers globally, solving problems.",
];

export const companyAddress = {
  line1: "28 Stretton Road",
  city: "Leicester",
  country: "England",
  postcode: "LE3 6BN",
};

export const operatingModel =
  "Tunnels works as a distributed team: engineering, technical leadership and client collaboration are coordinated across locations and time zones, with synchronous time reserved for decisions and written records kept for everything else. The company's registered office is in Leicester, England.";

export interface TimelineEntry {
  period: string;
  title: string;
  copy: string;
}

export const companyTimeline: TimelineEntry[] = [
  {
    period: "2018",
    title: "Foundation",
    copy: "Tunnels is founded as an engineering practice working directly with organisations on business-critical software and the systems around it. Advisory and delivery sit in one accountable team from the start.",
  },
  {
    period: "Growth",
    title: "Engineering capability expands",
    copy: "The practice develops its engineering capabilities and widens its work across software development, systems engineering, infrastructure and technology delivery, as engagements move from individual applications to the platforms and integrations around them.",
  },
  {
    period: "Today",
    title: "Tunnels Global",
    copy: "The company is positioning itself as an international technology and engineering company serving organisations across markets, with five divisions delivered under one engineering standard.",
  },
];

export const timelineNote =
  "The founding year is confirmed. Later stages are described in sequence rather than given dates that have not been confirmed.";
