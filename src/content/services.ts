export interface ServiceDivision {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  message: string;
  intro: string[];
  capabilities: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  outcomes: string[];
  engagement: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceDivision[] = [
  {
    slug: "ai-intelligent-systems",
    number: "01",
    name: "AI & Intelligent Systems",
    shortName: "AI & Intelligent Systems",
    tagline: "Move AI from experimentation into operational systems.",
    summary:
      "Enterprise AI implementation, intelligent workflows and private knowledge systems that are secure, integrated and accountable.",
    message:
      "We move AI beyond experimentation into practical business operations.",
    intro: [
      "Most organisations now have access to capable models. Far fewer have AI in production, connected to real business data, governed by clear rules, and doing work that someone is accountable for. The gap is rarely the model. It is architecture, integration, data quality, evaluation and operations.",
      "We build AI systems as software systems: with defined boundaries, access control, measurable quality, observability and a path to maintain them. That means starting from a business process with a real cost or delay, not from a model demo.",
    ],
    capabilities: [
      {
        title: "Enterprise AI implementation",
        body: "Production systems that sit inside existing processes, with evaluation, access control, audit trails and clear ownership.",
      },
      {
        title: "AI agents and intelligent workflows",
        body: "Bounded agents and workflow automation for research, triage, document handling and operational decision support.",
      },
      {
        title: "Private enterprise knowledge systems",
        body: "Retrieval over your own documents and systems, with permission-aware access and traceable answers.",
      },
      {
        title: "Retrieval-augmented generation (RAG)",
        body: "Ingestion, chunking, retrieval, ranking and evaluation designed around your content rather than a generic demo pipeline.",
      },
      {
        title: "Document intelligence and automation",
        body: "Extraction, classification and validation for contracts, claims, invoices and operational records.",
      },
      {
        title: "AI integration with existing systems",
        body: "Connection to ERPs, CRMs, data platforms and internal APIs, with the same reliability expectations as any other integration.",
      },
      {
        title: "AI infrastructure and deployment",
        body: "Model hosting, gateways, cost controls, rate limiting and deployment patterns that fit your cloud and security posture.",
      },
      {
        title: "AI governance and operational readiness",
        body: "Usage policy, data handling, human review points, monitoring and incident response for AI-enabled processes.",
      },
    ],
    approach: [
      {
        title: "Start with the process",
        body: "We map where time, cost and error actually occur, then decide whether AI is the right instrument. Some problems need a better workflow, not a model.",
      },
      {
        title: "Build an evaluation set first",
        body: "Before interface work, we define what a good answer looks like and assemble representative cases. Quality is measured, not asserted.",
      },
      {
        title: "Design for the surrounding system",
        body: "Retrieval, permissions, data freshness, fallbacks and human review are architecture decisions. We make them explicitly.",
      },
      {
        title: "Operate what we ship",
        body: "Logging, cost visibility, drift monitoring and a clear escalation path. An AI feature without an owner is a liability.",
      },
    ],
    outcomes: [
      "A production AI capability tied to a defined business process",
      "Measured quality against a representative evaluation set",
      "Clear data boundaries and permission-aware access",
      "Predictable operating cost and usage visibility",
      "An internal team able to run and extend the system",
    ],
    engagement: [
      "AI opportunity and readiness assessment",
      "Production pilot with defined success criteria",
      "Full implementation and integration programme",
      "Ongoing operation and model lifecycle support",
    ],
    metaTitle: "Enterprise AI Implementation & Intelligent Systems",
    metaDescription:
      "Tunnels designs and builds production enterprise AI: agents, RAG, document intelligence and AI integration with governance, evaluation and operational support.",
  },
  {
    slug: "enterprise-software",
    number: "02",
    name: "Enterprise Software & Systems Engineering",
    shortName: "Enterprise Software",
    tagline: "Software systems businesses can depend on and scale.",
    summary:
      "Enterprise applications, APIs and distributed systems engineered for long-term maintainability rather than short-term delivery.",
    message:
      "We engineer software systems that businesses can depend on and scale.",
    intro: [
      "Business-critical software accumulates constraints: integrations that were never designed, data models that no longer match the operation, and delivery pressure that leaves little room for structural work. Eventually the system becomes the limiting factor.",
      "We work on those systems directly — designing, building, integrating and modernising applications where correctness, throughput and maintainability matter more than novelty.",
    ],
    capabilities: [
      {
        title: "Enterprise application development",
        body: "Internal platforms, operational tools and customer-facing systems built around real workflows and real volumes.",
      },
      {
        title: "Legacy system modernisation",
        body: "Incremental replacement of ageing applications, with coexistence, data migration and cutover planned explicitly.",
      },
      {
        title: "API design and integration",
        body: "Versioned, documented interfaces between systems that were never intended to talk to each other.",
      },
      {
        title: "Distributed systems engineering",
        body: "Services, queues and event flows designed for failure, retries, ordering and observability.",
      },
      {
        title: "Backend architecture",
        body: "Domain boundaries, data ownership and service contracts that hold as teams and load grow.",
      },
      {
        title: "Data-intensive applications",
        body: "Systems where correctness, query performance and data lineage are central design constraints.",
      },
      {
        title: "Business process platforms",
        body: "Workflow, approval and case management systems that replace spreadsheets and manual coordination.",
      },
      {
        title: "Architecture and engineering reviews",
        body: "Independent assessment of an existing system, with prioritised, costed remediation rather than a scorecard.",
      },
    ],
    approach: [
      {
        title: "Understand the operating reality",
        body: "We read the code, the schemas, the incident history and the delivery process. Architecture decisions are grounded in what the system actually does.",
      },
      {
        title: "Define boundaries before code",
        body: "Domain ownership, contracts and data flow are agreed early so that parallel delivery does not create new coupling.",
      },
      {
        title: "Deliver in safe increments",
        body: "Strangler patterns, parallel runs and feature flags let production keep working while the system changes underneath it.",
      },
      {
        title: "Leave the system legible",
        body: "Documentation, tests and operational runbooks are part of the deliverable, not an afterthought.",
      },
    ],
    outcomes: [
      "A system architecture that can absorb change without destabilising",
      "Reduced dependency on undocumented, single-owner components",
      "Clear migration paths away from unsupported technology",
      "Lower change failure rate and faster, safer releases",
      "Engineering documentation your team can work from",
    ],
    engagement: [
      "Architecture and codebase assessment",
      "Modernisation programme with phased cutover",
      "New platform build alongside an existing system",
      "Embedded engineering team under your delivery model",
    ],
    metaTitle: "Enterprise Software Engineering & Legacy Modernisation",
    metaDescription:
      "Enterprise application development, legacy modernisation, API integration and distributed systems engineering from Tunnels Global.",
  },
  {
    slug: "cloud-platform-infrastructure",
    number: "03",
    name: "Cloud, Platform & Infrastructure Engineering",
    shortName: "Cloud & Platform",
    tagline: "Infrastructure that keeps modern businesses running.",
    summary:
      "AWS, Azure and Google Cloud engineering, Kubernetes platforms, infrastructure as code, DevOps and observability.",
    message:
      "We build the infrastructure that keeps modern businesses running.",
    intro: [
      "Cloud environments rarely fail because a service was unavailable. They fail because nobody owns the platform: access is inconsistent, environments drift, deploys are manual, costs are unattributed and monitoring measures hosts rather than customer experience.",
      "We build platforms that are reproducible, permissioned and observable — and we make sure the team responsible can operate them without us in the room.",
    ],
    capabilities: [
      {
        title: "AWS, Azure and Google Cloud engineering",
        body: "Account structure, networking, identity, compute and managed data services designed for your operating model.",
      },
      {
        title: "Cloud migration and modernisation",
        body: "Assessment, sequencing and execution — including honest decisions about what should not be lifted and shifted.",
      },
      {
        title: "Kubernetes and container infrastructure",
        body: "Cluster design, workload isolation, autoscaling, ingress and upgrade strategy that survives real traffic.",
      },
      {
        title: "Infrastructure as Code",
        body: "Terraform or equivalent for every environment, with review, drift detection and controlled change.",
      },
      {
        title: "DevOps and CI/CD",
        body: "Build, test and release pipelines with environment promotion, rollback and clear ownership.",
      },
      {
        title: "Platform engineering",
        body: "Internal platforms and golden paths that reduce the operational burden on product teams.",
      },
      {
        title: "Cloud cost optimisation",
        body: "Attribution, waste removal and architectural changes that reduce spend without reducing capability.",
      },
      {
        title: "Monitoring, observability and recovery",
        body: "Metrics, logs, traces, service objectives, alerting and tested recovery procedures.",
      },
    ],
    approach: [
      {
        title: "Assess the estate",
        body: "We inventory accounts, workloads, identities, dependencies and spend before proposing a target architecture.",
      },
      {
        title: "Design the target platform",
        body: "Environments, network boundaries, deployment model, observability and cost ownership defined in one design.",
      },
      {
        title: "Migrate in waves",
        body: "Low-risk workloads first, with rollback available at every stage and explicit acceptance criteria per wave.",
      },
      {
        title: "Hand over with evidence",
        body: "Runbooks, tested restores and a working on-call model. Handover is verified, not assumed.",
      },
    ],
    outcomes: [
      "Reproducible environments with no manual configuration drift",
      "Faster, safer releases with a reliable rollback path",
      "Visibility into cost by team, service and environment",
      "Service-level monitoring aligned to business impact",
      "Tested disaster recovery rather than a documented intention",
    ],
    engagement: [
      "Cloud and platform assessment",
      "Migration or landing-zone programme",
      "Kubernetes and platform build",
      "Ongoing platform and reliability support",
    ],
    metaTitle: "Cloud Infrastructure, Platform Engineering & DevOps",
    metaDescription:
      "AWS, Azure and Google Cloud engineering, Kubernetes platforms, infrastructure as code, CI/CD, observability and cloud cost optimisation.",
  },
  {
    slug: "cybersecurity-reliability",
    number: "04",
    name: "Cybersecurity & Technology Reliability",
    shortName: "Security & Reliability",
    tagline: "Reduce technology risk. Build resilient systems.",
    summary:
      "Cloud security architecture, hardening, security automation, reliability engineering and recovery planning.",
    message:
      "We help businesses reduce technology risk and build resilient systems.",
    intro: [
      "Security and reliability are usually treated as separate functions until an incident proves otherwise. Both depend on the same things: knowing what you run, controlling who can change it, observing it honestly and rehearsing failure.",
      "We improve the security posture and operational resilience of existing environments. We do not claim certifications or offer formal penetration testing; where independent testing is required, we help scope it and act on the findings.",
    ],
    capabilities: [
      {
        title: "Cloud security architecture",
        body: "Identity, network segmentation, encryption, secret management and least-privilege access by design.",
      },
      {
        title: "Infrastructure hardening",
        body: "Baseline configuration, patch strategy, exposure review and removal of standing privileges.",
      },
      {
        title: "Application security improvements",
        body: "Secure development practices, dependency management, authentication and authorisation review.",
      },
      {
        title: "Security automation",
        body: "Policy as code, automated checks in CI, and alerting that produces actionable signal rather than noise.",
      },
      {
        title: "Reliability engineering",
        body: "Service objectives, error budgets, capacity review and failure-mode analysis for critical systems.",
      },
      {
        title: "Disaster recovery planning",
        body: "Recovery objectives, restore procedures and rehearsals that establish real recovery time.",
      },
      {
        title: "Infrastructure risk assessments",
        body: "A prioritised view of exposure across infrastructure, access, dependencies and operational process.",
      },
      {
        title: "Technical resilience reviews",
        body: "Independent review of architecture and operations ahead of growth, audit or a major programme.",
      },
    ],
    approach: [
      {
        title: "Establish the real exposure",
        body: "We look at identities, network paths, data stores and deployment permissions rather than relying on policy documents.",
      },
      {
        title: "Fix what matters first",
        body: "Findings are ranked by exploitability and business impact, with effort estimates. A long list is not a plan.",
      },
      {
        title: "Automate the baseline",
        body: "Controls that depend on human discipline decay. We move them into infrastructure and pipeline checks.",
      },
      {
        title: "Rehearse failure",
        body: "Restore tests, dependency failure scenarios and incident exercises expose the gaps that documentation hides.",
      },
    ],
    outcomes: [
      "A prioritised, evidence-based risk register",
      "Reduced standing access and clearer identity boundaries",
      "Security checks enforced in the delivery pipeline",
      "Recovery procedures that have actually been executed",
      "Operational confidence going into growth or audit",
    ],
    engagement: [
      "Security and resilience assessment",
      "Hardening and remediation programme",
      "Reliability engineering engagement",
      "Disaster recovery design and rehearsal",
    ],
    metaTitle: "Cloud Security, Reliability Engineering & Resilience",
    metaDescription:
      "Cloud security architecture, infrastructure hardening, security automation, reliability engineering and disaster recovery planning from Tunnels.",
  },
  {
    slug: "technology-advisory",
    number: "05",
    name: "Technology Advisory & Engineering Partnerships",
    shortName: "Advisory & Partnerships",
    tagline: "Senior engineering thinking, backed by execution.",
    summary:
      "Technology strategy, enterprise architecture, fractional leadership, due diligence and long-term engineering partnerships.",
    message:
      "Senior engineering thinking, backed by the ability to execute.",
    intro: [
      "Technology decisions made at leadership level are often separated from the people who understand the system. Strategies are written without an implementation path; vendors are selected without an exit; teams are reorganised around diagrams rather than constraints.",
      "We work alongside leadership and engineering teams on the decisions that are expensive to reverse — architecture, platform choice, modernisation sequencing, delivery structure — and we stay to help execute them.",
    ],
    capabilities: [
      {
        title: "Technology strategy",
        body: "A practical position on platform, architecture and investment, tied to business priorities and current constraints.",
      },
      {
        title: "Enterprise architecture",
        body: "Target-state design, domain boundaries, integration principles and a sequenced path from today's estate.",
      },
      {
        title: "Fractional technology leadership",
        body: "Senior technical leadership for a defined period: architecture ownership, hiring support and delivery oversight.",
      },
      {
        title: "Technical due diligence",
        body: "Independent assessment of code, infrastructure, team and risk for investment, acquisition or partnership decisions.",
      },
      {
        title: "Engineering team augmentation",
        body: "Senior engineers who raise delivery capability rather than adding headcount without leverage.",
      },
      {
        title: "Architecture assessments",
        body: "A structured review of an existing system against its actual requirements, with prioritised recommendations.",
      },
      {
        title: "Technology transformation roadmaps",
        body: "Phased plans with dependencies, risk, cost and decision points made explicit.",
      },
      {
        title: "Long-term engineering partnerships",
        body: "A retained relationship that combines advisory access with implementation capacity.",
      },
    ],
    approach: [
      {
        title: "Understand the business constraint",
        body: "Cost, regulation, growth, margin, competitive pressure. Technology recommendations only matter relative to one of these.",
      },
      {
        title: "Work from evidence",
        body: "Code, infrastructure, incident data and delivery metrics rather than stakeholder opinion alone.",
      },
      {
        title: "Make trade-offs explicit",
        body: "Every roadmap states what is being deferred and what that deferral costs. There is no free option.",
      },
      {
        title: "Stay accountable",
        body: "Advisory work is judged by decisions implemented, not documents delivered.",
      },
    ],
    outcomes: [
      "A technology strategy that engineering teams can act on",
      "Clear sequencing for modernisation and investment",
      "Independent evidence for due diligence and board decisions",
      "Reduced key-person dependency in technical leadership",
      "Delivery capability that remains after the engagement",
    ],
    engagement: [
      "Strategy and architecture engagement",
      "Fractional CTO or architecture leadership",
      "Technical due diligence",
      "Retained engineering partnership",
    ],
    metaTitle: "Technology Strategy, Architecture & Fractional Leadership",
    metaDescription:
      "Technology strategy, enterprise architecture, fractional CTO support, technical due diligence and long-term engineering partnerships.",
  },
];

export const getService = (slug?: string) => services.find((service) => service.slug === slug);
