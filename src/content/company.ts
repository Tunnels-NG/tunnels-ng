/**
 * Company and key personnel content.
 *
 * Confirmed facts only: founding year, registered office and the named key
 * personnel with their titles and areas of responsibility. Milestones that
 * have not been supplied with dates are described in sequence rather than
 * assigned a year. Do not add biographies, qualifications, previous employers
 * or client outcomes that the company has not confirmed.
 */

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  /** Short responsibility statement, not a career biography. */
  summary: string;
  portrait: string | null;
  portraitAlt: string;
  initials: string;
}

/** Presented in this order; all six carry equal visual weight. */
export const teamMembers: TeamMember[] = [
  {
    slug: "chris-fega",
    name: "Chris Fega",
    title: "Founder & CEO",
    summary:
      "Leads the company: corporate strategy, business direction and partnerships, with overall accountability for the standard of work Tunnels delivers.",
    portrait: "/assets/team/chris-fega.jpg",
    portraitAlt: "Portrait of Chris Fega, Founder and CEO of Tunnels Global",
    initials: "CF",
  },
  {
    slug: "sarah-obarhoro",
    name: "Sarah Obarhoro",
    title: "Chief Technology Officer",
    summary:
      "Owns technology leadership and engineering strategy: technical direction, architecture and the delivery of engineering work across engagements.",
    portrait: "/assets/team/sarah-obarhoro.jpg",
    portraitAlt: "Portrait of Sarah Obarhoro, Chief Technology Officer at Tunnels Global",
    initials: "SO",
  },
  {
    slug: "vamsi-priya",
    name: "Vamsi Priya",
    title: "Head of Platform Engineering",
    summary:
      "Leads platform engineering, cloud infrastructure and reliability, and the engineering of the scalable platforms our clients run on.",
    portrait: "/assets/team/vamsi-priya.jpg",
    portraitAlt: "Portrait of Vamsi Priya, Head of Platform Engineering at Tunnels Global",
    initials: "VP",
  },
  {
    slug: "isaac-moses",
    name: "Isaac Moses",
    title: "Product Design Lead",
    summary:
      "Directs product design and user experience, translating business and user requirements into interfaces and product experiences that hold up in use.",
    portrait: "/assets/team/isaac-moses.jpg",
    portraitAlt: "Portrait of Isaac Moses, Product Design Lead at Tunnels Global",
    initials: "IM",
  },
  {
    slug: "jessica-uboh",
    name: "Jessica Uboh",
    title: "Business Relations Lead",
    summary:
      "Owns business relationships and communication: client and partner contact, relationship management, and a consistent experience for the organisations we work with.",
    portrait: "/assets/team/jessica-uboh.jpg",
    portraitAlt: "Portrait of Jessica Uboh, Business Relations Lead at Tunnels Global",
    initials: "JU",
  },
  {
    slug: "kingsley-akposheri",
    name: "Kingsley Akposheri",
    title: "Legal Counsel",
    summary:
      "Provides legal guidance on contracts and commercial arrangements, and supports the company's legal and governance requirements.",
    portrait: "/assets/team/kingsley-akposheri.jpg",
    portraitAlt: "Portrait of Kingsley Akposheri, Legal Counsel at Tunnels Global",
    initials: "KA",
  },
];

export const teamIntro =
  "Technology is only as strong as the people responsible for its direction, design, delivery and operation. Our team brings together engineering, product, business relations and legal expertise under one shared standard of accountability.";

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
