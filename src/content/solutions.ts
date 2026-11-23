export interface Solution {
  slug: string;
  number: string;
  name: string;
  short: string;
  summary: string;
  problem: string[];
  why: string;
  approach: { title: string; body: string }[];
  includes: string[];
  outcomes: string[];
  engagement: string[];
  serviceSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: "enterprise-ai-implementation",
    number: "01",
    name: "Enterprise AI Implementation",
    short: "From AI experimentation to integrated operational systems.",
    summary:
      "We take AI from isolated pilots to governed, integrated systems that perform a defined role in your operations.",
    problem: [
      "AI pilots are easy to start and hard to finish. A prototype demonstrates capability; it does not handle permissions, exceptions, cost control, audit, or the colleague who has to trust the output every day.",
      "The result is a growing collection of experiments that never reach production, while the business processes that prompted them remain unchanged.",
    ],
    why:
      "The value of AI is realised only when it operates inside a real process with real accountability. Until then it is a research expense. Each additional stalled pilot also makes the next business case harder to approve.",
    approach: [
      {
        title: "Select one process with measurable cost",
        body: "We start where delay, rework or manual effort can be quantified, so the system has a business baseline to be judged against.",
      },
      {
        title: "Design the full system",
        body: "Data access, retrieval, model choice, guardrails, human review, fallback behaviour and observability are specified together.",
      },
      {
        title: "Evaluate before scaling",
        body: "A representative test set and defined thresholds determine whether the system is fit for production use.",
      },
      {
        title: "Integrate and hand over",
        body: "Connection to existing systems, monitoring, cost controls and documentation, with your team able to operate it.",
      },
    ],
    includes: [
      "AI readiness and opportunity assessment",
      "Solution architecture and data-flow design",
      "Retrieval, agent or workflow implementation",
      "Integration with core business systems",
      "Evaluation framework and quality baseline",
      "Governance, access control and audit logging",
      "Deployment, monitoring and cost controls",
      "Team enablement and operating documentation",
    ],
    outcomes: [
      "A working AI capability inside a live business process",
      "Measured quality against agreed criteria",
      "Clear governance and data-handling boundaries",
      "Known operating cost per unit of work",
      "A documented path to extend the system",
    ],
    engagement: [
      "Assessment and production pilot",
      "Defined implementation programme",
      "Embedded AI engineering team",
    ],
    serviceSlugs: ["ai-intelligent-systems", "enterprise-software", "technology-advisory"],
    metaTitle: "Enterprise AI Implementation Services",
    metaDescription:
      "Move AI from pilot to production. Tunnels implements governed enterprise AI systems integrated with existing business platforms.",
  },
  {
    slug: "enterprise-systems-modernisation",
    number: "02",
    name: "Enterprise Systems Modernisation",
    short: "Modernise legacy applications, APIs and business platforms.",
    summary:
      "Incremental replacement of ageing systems, with coexistence, migration and cutover planned before any code is written.",
    problem: [
      "Legacy platforms become expensive in ways that are easy to ignore: change requests take months, knowledge sits with two people, integrations are undocumented, and every release carries operational risk.",
      "A full rewrite is often proposed as the answer. It usually replaces a working system with a late, incomplete one.",
    ],
    why:
      "The cost is not only maintenance spend. It is the product decisions you cannot take, the partners you cannot integrate with, the security patches you cannot apply, and the senior engineers who leave rather than work on it.",
    approach: [
      {
        title: "Map the system as it is",
        body: "Code, data, integrations, batch jobs and the undocumented behaviours users depend on.",
      },
      {
        title: "Define the seams",
        body: "We identify where the system can be split so new components can be introduced without a single cutover.",
      },
      {
        title: "Run old and new in parallel",
        body: "Strangler patterns, shadow traffic and reconciliation allow the business to keep operating throughout.",
      },
      {
        title: "Retire deliberately",
        body: "Each legacy component has a retirement condition and a date, or the programme never ends.",
      },
    ],
    includes: [
      "Legacy and dependency assessment",
      "Target architecture and migration sequencing",
      "API and integration layer design",
      "Data model and migration strategy",
      "Incremental service or module delivery",
      "Parallel-run and reconciliation tooling",
      "Cutover, rollback and decommission planning",
      "Knowledge transfer and documentation",
    ],
    outcomes: [
      "Reduced change lead time on core business systems",
      "Removal of unsupported or end-of-life components",
      "Documented, testable interfaces between systems",
      "Lower release risk and fewer failed changes",
      "A decommissioning path for the legacy estate",
    ],
    engagement: [
      "Modernisation assessment and roadmap",
      "Phased modernisation programme",
      "Architecture-led embedded team",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure", "technology-advisory"],
    metaTitle: "Legacy System Modernisation Services",
    metaDescription:
      "Modernise legacy enterprise applications and platforms incrementally, with migration sequencing, parallel running and safe decommissioning.",
  },
  {
    slug: "cloud-platform-transformation",
    number: "03",
    name: "Cloud & Platform Transformation",
    short: "Secure, scalable, observable and cost-efficient infrastructure.",
    summary:
      "Cloud landing zones, Kubernetes platforms, infrastructure as code and delivery pipelines built for how your teams actually operate.",
    problem: [
      "Cloud environments accumulate shortcuts: manually created resources, shared credentials, environments that no longer match, and a bill nobody can attribute to a team or product.",
      "The platform becomes a source of incidents and a bottleneck on every release, while the organisation pays for capacity it does not use.",
    ],
    why:
      "Infrastructure determines how quickly and safely a business can change. When it is unmanaged, every product decision carries an operational tax and every incident is diagnosed by guesswork.",
    approach: [
      {
        title: "Assess accounts, workloads and spend",
        body: "A factual baseline across environments, identities, dependencies and cost allocation.",
      },
      {
        title: "Design the target platform",
        body: "Account structure, network boundaries, identity, deployment model and observability in one coherent design.",
      },
      {
        title: "Build with code from the start",
        body: "Every environment reproducible, reviewed and drift-detected. No console-only changes.",
      },
      {
        title: "Migrate in controlled waves",
        body: "Low-risk workloads first, with rollback and acceptance criteria at each stage.",
      },
    ],
    includes: [
      "Cloud estate and cost assessment",
      "Landing zone and account structure",
      "Network and identity design",
      "Kubernetes or container platform build",
      "Infrastructure as code for all environments",
      "CI/CD pipelines with promotion and rollback",
      "Observability, alerting and service objectives",
      "Cost allocation and optimisation",
    ],
    outcomes: [
      "Reproducible environments with controlled change",
      "Faster release cadence with lower failure rate",
      "Cost visibility by team and service",
      "Monitoring tied to customer-facing impact",
      "A platform your engineers can operate",
    ],
    engagement: [
      "Cloud and platform assessment",
      "Landing zone or migration programme",
      "Platform engineering partnership",
    ],
    serviceSlugs: ["cloud-platform-infrastructure", "cybersecurity-reliability", "enterprise-software"],
    metaTitle: "Cloud & Platform Transformation Services",
    metaDescription:
      "Cloud transformation across AWS, Azure and Google Cloud: landing zones, Kubernetes, infrastructure as code, CI/CD and observability.",
  },
  {
    slug: "enterprise-systems-integration",
    number: "04",
    name: "Enterprise Systems Integration",
    short: "Connect disconnected systems, services and data.",
    summary:
      "APIs, events and integration layers that make separate systems behave like one coherent operation.",
    problem: [
      "Most enterprises run on a set of systems that each hold part of the truth: an ERP, a CRM, a data warehouse, a handful of line-of-business tools and a spreadsheet that reconciles them.",
      "Integration is added per project, so the estate becomes a mesh of point-to-point connections that nobody can safely change.",
    ],
    why:
      "Disconnected systems create manual reconciliation, delayed reporting and inconsistent customer experience. They also make every new initiative more expensive, because each one adds another connection to maintain.",
    approach: [
      {
        title: "Inventory the flows",
        body: "What data moves, between which systems, with what latency, ownership and failure behaviour.",
      },
      {
        title: "Define a canonical model",
        body: "Shared contracts for the entities that matter, so integrations stop encoding one vendor's data model.",
      },
      {
        title: "Introduce an integration layer",
        body: "APIs, events or a broker as appropriate, with retries, idempotency, ordering and dead-letter handling.",
      },
      {
        title: "Make it observable",
        body: "Per-flow monitoring, replay capability and clear ownership when a message fails.",
      },
    ],
    includes: [
      "Integration landscape assessment",
      "API strategy and contract design",
      "Event-driven or request-response architecture",
      "Middleware and broker implementation",
      "Data mapping, validation and reconciliation",
      "Authentication and authorisation between systems",
      "Error handling, retries and dead-letter queues",
      "Monitoring, alerting and replay tooling",
    ],
    outcomes: [
      "Fewer manual reconciliation processes",
      "Consistent data across operational systems",
      "Documented, versioned interfaces",
      "Integration failures detected and recoverable",
      "Faster onboarding of new systems and partners",
    ],
    engagement: [
      "Integration assessment and strategy",
      "Integration platform implementation",
      "Ongoing integration engineering",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure", "ai-intelligent-systems"],
    metaTitle: "Enterprise Systems Integration & API Engineering",
    metaDescription:
      "Connect enterprise systems with well-designed APIs, event flows and integration layers built for reliability and observability.",
  },
  {
    slug: "technology-reliability-security",
    number: "05",
    name: "Technology Reliability & Security",
    short: "Improve availability, security posture and operational resilience.",
    summary:
      "A prioritised programme across access, infrastructure, delivery and recovery — measured against real failure scenarios.",
    problem: [
      "Security reviews produce long lists. Reliability work waits until an incident. Recovery plans exist in a document that has never been executed.",
      "Meanwhile the environment keeps changing, so yesterday's assessment no longer describes today's exposure.",
    ],
    why:
      "The cost of an outage or a security failure is not only downtime. It is customer trust, contractual exposure, regulatory attention and the engineering time diverted into recovery for weeks afterwards.",
    approach: [
      {
        title: "Establish evidence",
        body: "Identity paths, network exposure, data stores, deployment permissions and incident history reviewed directly.",
      },
      {
        title: "Rank by impact",
        body: "Findings ordered by exploitability and business consequence, with effort and ownership attached.",
      },
      {
        title: "Automate the baseline",
        body: "Controls moved into infrastructure definitions and delivery pipelines so they do not depend on memory.",
      },
      {
        title: "Rehearse recovery",
        body: "Restores and failure scenarios executed, timed and documented — then repeated.",
      },
    ],
    includes: [
      "Cloud security and identity review",
      "Infrastructure hardening",
      "Application security practice review",
      "Policy as code and pipeline security checks",
      "Service objectives and error budgets",
      "Failure-mode and dependency analysis",
      "Disaster recovery design and testing",
      "Incident response process definition",
    ],
    outcomes: [
      "A ranked, actionable risk register",
      "Reduced standing privilege and lateral movement risk",
      "Security controls enforced automatically",
      "Recovery time established through testing",
      "Fewer repeat incidents and faster diagnosis",
    ],
    engagement: [
      "Security and resilience assessment",
      "Remediation programme",
      "Reliability engineering support",
    ],
    serviceSlugs: ["cybersecurity-reliability", "cloud-platform-infrastructure", "technology-advisory"],
    metaTitle: "Technology Reliability & Security Services",
    metaDescription:
      "Improve security posture and operational resilience with cloud security architecture, hardening, reliability engineering and recovery testing.",
  },
  {
    slug: "strategic-engineering-partnerships",
    number: "06",
    name: "Strategic Engineering Partnerships",
    short: "Ongoing access to senior engineering capability and delivery teams.",
    summary:
      "A retained relationship that combines architecture leadership, decision support and implementation capacity.",
    problem: [
      "Senior engineering judgement is needed intermittently but cannot be hired on demand. A single architect is expensive to recruit, hard to retain and quickly overloaded.",
      "Project-based engagements end just as the team has enough context to be effective, and the knowledge leaves with them.",
    ],
    why:
      "Complex technology environments need continuity. Decisions made this quarter constrain the options available in eighteen months, and those decisions benefit from someone who remembers why the current system looks the way it does.",
    approach: [
      {
        title: "Agree the decision rights",
        body: "Which decisions the partnership owns, which it advises on, and how engineering teams escalate.",
      },
      {
        title: "Establish a working cadence",
        body: "Architecture review, delivery oversight and leadership reporting on a predictable rhythm.",
      },
      {
        title: "Pair rather than replace",
        body: "Our engineers work with your team so capability remains when the engagement changes shape.",
      },
      {
        title: "Review against outcomes",
        body: "Quarterly review of delivery, reliability and cost measures agreed at the start.",
      },
    ],
    includes: [
      "Named senior architect or engineering lead",
      "Architecture and technical decision support",
      "Delivery oversight and risk reporting",
      "Access to specialist engineering capability",
      "Hiring and team-structure support",
      "Vendor and platform evaluation",
      "Quarterly technical and delivery review",
      "Escalation path for critical incidents",
    ],
    outcomes: [
      "Continuity in technical leadership",
      "Faster, better-evidenced technology decisions",
      "Additional delivery capacity without permanent headcount",
      "Reduced key-person risk",
      "Engineering capability retained in-house",
    ],
    engagement: [
      "Retained advisory partnership",
      "Embedded engineering team",
      "Fractional technology leadership",
    ],
    serviceSlugs: ["technology-advisory", "enterprise-software", "cloud-platform-infrastructure"],
    metaTitle: "Strategic Engineering Partnerships & Fractional CTO",
    metaDescription:
      "Retained engineering partnerships combining senior architecture leadership, technology advisory and implementation capacity.",
  },
];

export const getSolution = (slug?: string) => solutions.find((solution) => solution.slug === slug);
