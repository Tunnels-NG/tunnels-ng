/**
 * Commercial engagement models.
 *
 * No prices are published. Scope, shape and governance are described; the
 * commercial conversation happens after the problem is understood.
 */

export interface EngagementModel {
  slug: string;
  number: string;
  name: string;
  short: string;
  summary: string;
  suitableWhen: string[];
  structure: string[];
  contributes: string[];
  responsibilities: string[];
  governance: string[];
  notSuitableWhen: string;
}

export const engagementModels: EngagementModel[] = [
  {
    slug: "project-based-engineering",
    number: "01",
    name: "Project-Based Engineering",
    short: "Defined scope, milestones and acceptance criteria.",
    summary:
      "A bounded programme with a stated outcome. Scope, deliverables, acceptance criteria and change control are agreed before work starts, and the engagement ends when the acceptance criteria are met or explicitly renegotiated.",
    suitableWhen: [
      "The problem is understood well enough to define a target state.",
      "There is a decision, migration, launch or audit date the work must serve.",
      "The outcome can be described as verifiable acceptance criteria.",
      "Internal engineering capacity exists to own the result afterwards, or a support period is included.",
    ],
    structure: [
      "Discovery or assessment phase, which may be a separate engagement",
      "Fixed scope by phase, with deliverables listed per phase",
      "Milestones tied to demonstrable output rather than elapsed time",
      "Acceptance criteria written before delivery begins",
      "Change control for scope added after signature",
    ],
    contributes: [
      "Named technical lead accountable for architecture and delivery",
      "Engineering team sized to the phase plan",
      "Architecture, implementation, testing and deployment",
      "Documentation, decision records and handover",
      "Defined support period after acceptance",
    ],
    responsibilities: [
      "Client: decision authority, access to subject-matter experts and timely review",
      "Tunnels: delivery, technical quality, reporting and acceptance evidence",
      "Shared: acceptance sign-off, dependency resolution and change decisions",
    ],
    governance: [
      "Weekly delivery report: progress, risks, decisions required",
      "Milestone review with demonstration against acceptance criteria",
      "Written change request for scope movement, with cost and schedule impact",
      "Escalation path agreed at kickoff, with named contacts on both sides",
    ],
    notSuitableWhen:
      "The problem is still being discovered, the target state cannot yet be described, or the requirement will change materially during delivery. In those cases an assessment or a managed service is a better fit.",
  },
  {
    slug: "managed-engineering-services",
    number: "02",
    name: "Managed Engineering Services",
    short: "Ongoing engineering, reliability and optimisation.",
    summary:
      "A continuing engineering relationship under an agreed service scope. Suitable for systems that are live and need to improve, for platforms that need an owner, and for teams that need dependable capacity rather than a project.",
    suitableWhen: [
      "A system or platform is in production and requires ongoing engineering.",
      "Reliability, security and cost need continuous attention rather than a one-off review.",
      "Internal capacity is insufficient for both new work and maintenance.",
      "There are recurring operational obligations: patching, upgrades, recovery testing.",
    ],
    structure: [
      "Service scope defining included work, response expectations and exclusions",
      "Agreed capacity or coverage window, with a named engineering lead",
      "Prioritised backlog reviewed on a fixed cadence",
      "Separate handling for project work outside the service scope",
      "Periodic review of service objectives, cost and improvement backlog",
    ],
    contributes: [
      "Named engineering lead and standing team",
      "Incident response within agreed severity and response targets",
      "Platform lifecycle, patching and dependency management",
      "Monitoring, alerting and service objective reporting",
      "Continuous improvement against a reviewed backlog",
    ],
    responsibilities: [
      "Client: operational priorities, business context and acceptance of service scope",
      "Tunnels: delivery within scope, response within targets, transparent reporting",
      "Shared: incident review, improvement prioritisation and quarterly service review",
    ],
    governance: [
      "Service objectives, response targets and escalation documented in the agreement",
      "Monthly service report: incidents, changes, reliability and cost",
      "Quarterly review of service objectives, capacity and improvement plan",
      "Explicit out-of-scope procedure, so unplanned work is visible rather than absorbed",
    ],
    notSuitableWhen:
      "There is no system in production yet, or the requirement is a single defined change with a clear end date. A project engagement will usually be cheaper and faster.",
  },
  {
    slug: "strategic-engineering-partnerships",
    number: "03",
    name: "Strategic Engineering Partnerships",
    short: "Long-term access to senior engineering judgement and capacity.",
    summary:
      "A retained relationship combining architecture leadership, decision support and implementation capacity. Designed for organisations making consequential technology decisions across multiple teams or years.",
    suitableWhen: [
      "Technology decisions span teams and outlast a single project.",
      "Senior architecture judgement is needed continuously but not full time.",
      "A transformation programme needs independent technical oversight.",
      "The organisation needs delivery capacity without permanent headcount.",
    ],
    structure: [
      "Named senior architect or engineering lead with agreed availability",
      "Standing architecture and delivery review cadence",
      "Access to specialist engineering capability for defined pieces of work",
      "Decision rights documented: what the partnership owns, advises on, or is consulted for",
      "Quarterly review against agreed technical and delivery measures",
    ],
    contributes: [
      "Architecture ownership and technical decision support",
      "Delivery oversight, risk reporting and independent challenge",
      "Fractional technology leadership where required",
      "Hiring support, team design and capability development",
      "Implementation capacity through the wider engineering team",
    ],
    responsibilities: [
      "Client: strategic priorities, decision authority and access to leadership",
      "Tunnels: independent technical judgement, continuity and delivery oversight",
      "Shared: quarterly objectives and review of technical and delivery measures",
    ],
    governance: [
      "Written decision rights and escalation path, agreed at the start",
      "Regular architecture review with recorded decisions",
      "Quarterly review of delivery, reliability, cost and capability",
      "Either side can adjust the shape with agreed notice, without ending the relationship",
    ],
    notSuitableWhen:
      "The need is a single delivery with no ongoing decision surface. A project engagement gives better value and clearer accountability.",
  },
];

export const getEngagementModel = (slug?: string) =>
  engagementModels.find((model) => model.slug === slug);

export const commercialNote =
  "We do not publish prices. Scope, team shape and commercial terms are agreed after the problem is understood, because a fixed number quoted before discovery is either padded or wrong.";
