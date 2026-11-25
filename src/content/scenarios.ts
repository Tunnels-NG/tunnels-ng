/**
 * Engineering scenarios.
 *
 * Problem-led demonstrations of how Tunnels investigates, architects and
 * engineers a class of problem. These are illustrative engineering scenarios:
 * they are not client engagements, they describe no client identity, data or
 * measured result, and they must never be presented as completed or deployed
 * work. Where a proposed outcome cannot be measured, it is described as a
 * capability rather than a number.
 *
 * Division and solution references are slugs resolved against
 * `src/content/services.ts` and `src/content/solutions.ts` so naming stays
 * consistent across the site.
 */

export interface ScenarioLayer {
  label: string;
  nodes: string[];
}

export interface Scenario {
  slug: string;
  number: string;
  title: string;
  /** One-sentence problem statement used on listings, cards and page ledes. */
  summary: string;
  /** Engineering division slug from services.ts. */
  division: string;
  /** Commercial solution slug from solutions.ts. */
  solution: string;
  /** Business context paragraphs. */
  context: string[];
  /** The challenge, in practical business language. */
  challenge: string[];
  /** Why conventional approaches are insufficient, and what makes it hard. */
  difficulties: { title: string; body: string }[];
  /** Discover → Architect → Engineer → Validate → Deploy → Operate. */
  approach: { phase: string; title: string; body: string; decisions: string[] }[];
  /** Explicit trade-offs and the alternatives considered. */
  tradeoffs: { title: string; body: string }[];
  architecture: {
    intro: string;
    layers: ScenarioLayer[];
    /** Labels for the connection between each pair of layers. */
    flows: string[];
    choices: { title: string; body: string }[];
  };
  /** Capability outcomes only. No invented percentages or achieved metrics. */
  outcomes: string[];
  /** Technical considerations, shown as a restrained list. */
  capabilities: string[];
  metaTitle: string;
  metaDescription: string;
}

export const scenarios: Scenario[] = [
  {
    slug: "legacy-enterprise-modernisation",
    number: "01",
    title: "Modernising Legacy Enterprise Systems",
    summary:
      "Replacing a business-critical core in stages, so operations continue while the architecture, data and delivery model move forward.",
    division: "enterprise-software",
    solution: "enterprise-systems-modernisation",
    context: [
      "A system that has run the business for a decade or more is rarely one application. It is a core platform, a set of customisations, scheduled batch jobs, a reporting estate and a group of integrations added one department at a time. It still works, which is precisely why it is hard to replace: the business has built operating habits, controls and exceptions around its exact behaviour.",
      "The pressure to change usually arrives from several directions at once. Releases take months, the people who understand the customisations are retiring, and new products need data and interfaces the current design cannot provide. Modernisation is therefore not a technology refresh. It is a programme that has to improve the architecture without interrupting the operations that depend on it.",
    ],
    challenge: [
      "The organisation needs the capability of a modern platform — modular services, stable interfaces, observable behaviour — while month-end close, regulatory reporting, order fulfilment and audit obligations continue on the existing system. Any plan that requires a long feature freeze is commercially unacceptable, and any plan that switches everything at once concentrates the risk into a single, irreversible moment.",
      "Conventional approaches tend to fail in predictable ways. A full rewrite produces a clean design but rebuilds years of undocumented behaviour from memory, and the old system stays live throughout. A lift-and-shift moves the same design to newer hardware. A package replacement assumes the organisation will adopt the vendor's process rather than the one it has spent a decade refining. Each treats modernisation as a replacement event rather than a controlled sequence of reversible steps.",
    ],
    difficulties: [
      {
        title: "The specification is the running system",
        body: "Business rules live in triggers, stored procedures, scheduled jobs and manual workarounds. No document states them, and interviews surface the intended process rather than the exceptions that keep it running. Behaviour has to be recovered from code, data and observed transactions before it can be preserved or deliberately retired.",
      },
      {
        title: "Data carries the history",
        body: "Identifiers are reused, statuses have meanings that changed over time, and records reference systems that no longer exist. A migration that copies rows without reconciling meaning produces a system that is technically complete and commercially wrong.",
      },
      {
        title: "Cutover is an organisational event",
        body: "The switch touches finance calendars, integrations, reports and trained staff at the same time. Sequencing, rollback and acceptance criteria are as much part of the architecture as service boundaries, and they need to be agreed with the people who carry the operational risk.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Establish the evidence base",
        body: "We inventory applications, interfaces, jobs, data stores and ownership, and confirm it against runtime evidence: logs, traces, query activity and job histories. Interviews explain intent; the system explains what actually happens.",
        decisions: [
          "Produce a dependency map and risk register before proposing any target architecture.",
          "Record which behaviour is contractual, which is habit, and which is safe to retire.",
          "Agree the business capabilities that must remain uninterrupted, and how that is measured.",
        ],
      },
      {
        phase: "02",
        title: "Define boundaries and seams",
        body: "Service boundaries are drawn from business capabilities and data ownership, not from the current module layout or the organisational chart. The target is a seam the organisation can cut along safely, not an idealised end-state diagram.",
        decisions: [
          "Apply a strangler pattern: new capability is built beside the core, then traffic moves incrementally.",
          "Decide explicitly which functions are commodity and should be bought rather than rebuilt.",
          "Document the anti-corruption layer that translates between old and new models.",
        ],
      },
      {
        phase: "03",
        title: "Build the transition layer",
        body: "A façade and compatibility adapters let consumers address a stable interface while the implementation behind it changes. Where possible the seam sits at an API or message boundary rather than inside a shared database.",
        decisions: [
          "Prefer routing at the API boundary over triggers and views inside the legacy schema.",
          "Run shadow reads to compare old and new responses before trusting the new path.",
          "Version contracts so downstream consumers migrate on a published schedule.",
        ],
      },
      {
        phase: "04",
        title: "Migrate data with proof",
        body: "Extraction, transformation and loading are staged, repeatable and measured. Every load is reconciled against the source with counts, checksums and business-level totals, and historical records remain available read-only.",
        decisions: [
          "No destructive step until reconciliation and business sign-off have passed.",
          "Keep an immutable archive of historical records rather than transforming them in place.",
          "Re-run migrations from a fixed snapshot so defects are reproducible.",
        ],
      },
      {
        phase: "05",
        title: "Validate and rehearse cutover",
        body: "The cutover is practised in a production-like environment, including the parts nobody enjoys: batch windows, downstream feeds, report regeneration and the route back. Go/no-go criteria and an abort decision are agreed in advance.",
        decisions: [
          "Replay realistic traffic and peak batch loads, not only functional tests.",
          "Time the rollback and prove it on the same data volume as production.",
          "Define the named decision maker for go/no-go, and the conditions that trigger abort.",
        ],
      },
      {
        phase: "06",
        title: "Retire and operate",
        body: "Decommissioning happens in dependency order, with credentials, jobs and network routes removed as each component is retired. New services carry ownership metadata, dashboards, alerts and runbooks before the programme closes.",
        decisions: [
          "Track change failure rate and lead time on the new path rather than project milestones.",
          "Hold a defined stabilisation period with named support ownership.",
          "Leave the internal team able to change and operate what was built.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Strangler versus rewrite",
        body: "A rewrite can produce a cleaner model, but it concentrates risk, freezes delivery and depends on reconstructing behaviour that was never written down. A strangler pattern costs more in temporary seams and dual running, and is usually the cheaper way to stay in business throughout.",
      },
      {
        title: "Shared database versus owned data",
        body: "Sharing the legacy schema is fast to start and creates permanent coupling: every consumer must change when the core does. Service-owned data is slower to establish and is what makes independent change possible. Dual writes are not a migration strategy; they are a divergence generator.",
      },
      {
        title: "Buy versus build",
        body: "Payroll, tax calculation and statutory reporting are poor candidates for custom code. Workflows that differentiate the business usually are. The decision belongs to a business case, not to an engineering preference.",
      },
    ],
    architecture: {
      intro:
        "A transition architecture rather than a final one. The façade is temporary by design; domain services and their data stores are the durable parts, and the legacy core is reduced to a read-only source as capability moves.",
      layers: [
        { label: "Channels", nodes: ["Web portal", "Partner API", "Internal operations", "Batch clients"] },
        {
          label: "Transition",
          nodes: ["API façade", "Routing & versioning", "Compatibility adapters", "Shadow-read comparison"],
        },
        {
          label: "Services",
          nodes: ["Domain services", "Workflow service", "Reporting projections", "Integration adapters"],
        },
        {
          label: "Data",
          nodes: ["Legacy core (read-only)", "New domain stores", "Change data capture", "Historical archive"],
        },
      ],
      flows: [
        "HTTPS · versioned contracts",
        "domain events · idempotent consumers",
        "CDC · reconciliation jobs",
      ],
      choices: [
        {
          title: "A façade instead of database triggers",
          body: "Routing at the interface keeps the legacy schema untouched and makes the transition observable. Triggers inside the old database hide behaviour exactly where it is hardest to test.",
        },
        {
          title: "Change data capture over dual writes",
          body: "Publishing changes from the log keeps one writer for each record and avoids the silent divergence that appears when two applications both believe they own the same row.",
        },
        {
          title: "Projections for reporting",
          body: "Reports are rebuilt from events and domain stores rather than reading the legacy schema directly, which is what allows the core to be retired in stages.",
        },
      ],
    },
    outcomes: [
      "A change surface that is bounded by domain rather than by the age of the core.",
      "Release cadence on new capability that no longer depends on the legacy release cycle.",
      "Data continuity proven by reconciliation, not assumed from a successful load.",
      "Integration through published contracts, so consumers are not coupled to internal tables.",
      "Components that can be retired independently as their replacement proves itself.",
      "Operational ownership and documentation that survive the programme.",
    ],
    capabilities: [
      "Legacy architecture and technical debt assessment",
      "Domain and service boundary design",
      "Database migration, reconciliation and archiving",
      "API design and contract versioning",
      "Distributed systems and eventual consistency",
      "Observability across old and new paths",
      "Backward compatibility and transition planning",
      "Deployment, rollback and batch sequencing",
    ],
    metaTitle: "Legacy Enterprise System Modernisation | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: phased legacy modernisation with dependency mapping, service boundaries, data reconciliation, backward compatibility and rehearsed cutover.",
  },
  {
    slug: "enterprise-ai-operations",
    number: "02",
    title: "Introducing AI Into Enterprise Operations",
    summary:
      "Putting AI inside a real operational workflow, with permission-aware retrieval, bounded actions and evaluation before scale.",
    division: "ai-intelligent-systems",
    solution: "enterprise-ai-implementation",
    context: [
      "An operations team handles a high volume of requests that arrive through email, a ticketing queue and a partner portal. Answering them requires reading policy documents, checking three systems and applying judgement that experienced staff carry in their heads. The work is not glamorous, but it is expensive to scale and slow to teach.",
      "A first AI pilot produced impressive demonstrations and no operational change. The retrieval pipeline was built from a folder export, permissions were ignored, answers were judged by whoever was in the room, and nobody owned the system after the pilot ended. The organisation now wants a use case that reaches production with security, evidence and an operating model attached.",
    ],
    challenge: [
      "The difficulty is rarely access to a capable model. It is whether the system can retrieve the right material for the person asking, distinguish a grounded answer from a plausible one, act only within clearly bounded authority, and prove that it behaved correctly after the fact. In an operational process, a confident wrong answer is more damaging than no answer at all.",
      "Buying a general assistant leaves the hard parts unsolved: the organisational knowledge stays in documents and systems the assistant cannot see, or sees too much of. A custom model trained on the domain is usually the wrong first move, because the knowledge changes faster than the weights and the organisation cannot yet evaluate the output. The work is architecture, data access, workflow design and measurement.",
    ],
    difficulties: [
      {
        title: "Retrieval has to respect entitlements",
        body: "An index that contains everything gives a support agent access to a contract they are not permitted to open. Access rules must be enforced from the requesting identity at query time, not described in a prompt and hoped for.",
      },
      {
        title: "There is no benchmark until one is built",
        body: "Teams discover quality problems in production because nothing measured them earlier. A small, reviewed set of real tasks with expected answers is the only reliable way to compare models, prompts and retrieval changes.",
      },
      {
        title: "Actions are not answers",
        body: "Reading a document and issuing a refund are different risk categories. Tool calls need scoped credentials, idempotency, explicit confirmation for irreversible steps and an audit trail that attributes the action to a person, not to a model.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Select the workflow deliberately",
        body: "We choose a queue with measurable handling time, a clear owner and a failure mode the business can tolerate. The first production use case should prove the operating model, not carry the programme's reputation.",
        decisions: [
          "Rank candidates by volume, handling cost, data readiness and blast radius of an error.",
          "Avoid starting where a wrong answer is unrecoverable or externally visible.",
          "Agree the human decision the system supports, and who remains accountable for it.",
        ],
      },
      {
        phase: "02",
        title: "Map data, entitlements and freshness",
        body: "We inventory the sources that hold the knowledge, who owns them, how often they change and which parts must never enter an index. Classification and retention are settled before ingestion is built.",
        decisions: [
          "Carry source permissions and classification metadata through ingestion.",
          "Exclude credentials, personal data and restricted material by policy, not by prompt.",
          "Define a refresh cadence per source instead of assuming the index is current.",
        ],
      },
      {
        phase: "03",
        title: "Design the interaction and the abstention",
        body: "The workflow states where the human sits, what the system may assert, and when it must decline. Escalation is a designed path, not an error message.",
        decisions: [
          "Require citations for factual claims and make the source visible to the reviewer.",
          "Define the abstention behaviour for thin or conflicting retrieval.",
          "Keep a human approval step before any write to a business system.",
        ],
      },
      {
        phase: "04",
        title: "Build retrieval and orchestration",
        body: "Ingestion preserves document structure and stable identifiers. Retrieval combines lexical and vector search, then reranks. A model gateway centralises allowlisting, fallback, rate limits and cost control; a workflow layer holds state and approvals.",
        decisions: [
          "Chunk by document structure rather than fixed length so headings and clauses stay intact.",
          "Route every model call through a gateway so provider changes are configuration.",
          "Expose tools through a narrow service with scoped tokens and idempotent operations.",
        ],
      },
      {
        phase: "05",
        title: "Evaluate before and after release",
        body: "A reviewed golden set runs on every prompt, model or retrieval change. We track groundedness, citation coverage, abstention, task completion, latency and cost per task, and fail the change when quality regresses.",
        decisions: [
          "Score answers against source evidence, not against another model's opinion.",
          "Version prompts, indexes and evaluation sets together.",
          "Include the awkward cases: ambiguous requests, stale documents and conflicting policy.",
        ],
      },
      {
        phase: "06",
        title: "Operate and govern",
        body: "The system runs with tracing, cost dashboards, access reviews and a named owner. Feedback from reviewers feeds the content and retrieval configuration rather than disappearing into a backlog.",
        decisions: [
          "Trace each request end to end: retrieval, tool calls, model, latency and cost.",
          "Publish a usage policy that states permitted and prohibited tasks.",
          "Keep a documented route to disable a use case without disabling the platform.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Retrieval versus fine-tuning",
        body: "Retrieval changes what the system knows now; fine-tuning changes how it behaves. For policy and product knowledge, retrieval is the maintainable choice. Fine-tuning is worth considering for format, tone and classification tasks with stable, well-labelled data.",
      },
      {
        title: "Managed API versus self-hosted models",
        body: "A managed model is faster to adopt and shifts capacity and patching to the provider, at the cost of data-processing terms, variable latency and price exposure. Self-hosting trades control for operational burden and a narrower quality ceiling.",
      },
      {
        title: "Autonomy versus approval",
        body: "Every removed approval increases throughput and reduces accountability. Writes to money, customer records or regulated data keep a human gate until the evaluation record justifies anything else.",
      },
    ],
    architecture: {
      intro:
        "Four planes rather than a single pipeline: sources with their entitlements, a retrieval plane that filters by identity, a reasoning plane that can act only through narrow tools, and a control plane that measures and audits both.",
      layers: [
        { label: "Sources", nodes: ["Policy library", "Ticketing & CRM", "Document stores", "Internal APIs"] },
        {
          label: "Retrieval",
          nodes: ["Ingestion pipeline", "ACL & metadata index", "Hybrid search + rerank", "Tool gateway"],
        },
        {
          label: "Reasoning",
          nodes: ["Model gateway", "Workflow orchestrator", "Human approval", "Cited answer"],
        },
        {
          label: "Control",
          nodes: ["Identity & entitlements", "Evaluation suite", "Tracing & cost", "Audit log"],
        },
      ],
      flows: [
        "connectors · source permissions",
        "grounded context · scoped tools",
        "policy checks · traces · reviews",
      ],
      choices: [
        {
          title: "Model gateway",
          body: "One internal interface for model access makes allowlisting, fallback, retries, rate limits and cost attribution enforceable in code rather than by convention across teams.",
        },
        {
          title: "Query-time access filtering",
          body: "The identity of the requester is resolved before retrieval and applied as a filter, so a document the user cannot open is never placed in the context window.",
        },
        {
          title: "Evidence with every answer",
          body: "Citations are part of the response contract. If the system cannot ground a claim in a source the user is entitled to see, the correct output is an explicit abstention.",
        },
      ],
    },
    outcomes: [
      "Less time spent locating policy and precedent across disconnected sources.",
      "Answers that carry provenance, so a reviewer can verify rather than trust.",
      "A bounded action surface with an audit trail for every write.",
      "Quality regressions caught by evaluation before they reach operations.",
      "Model spend that is attributed, capped and visible per workflow.",
      "An operating model that allows a use case to be changed or retired safely.",
    ],
    capabilities: [
      "LLM and model gateway integration",
      "Retrieval-augmented generation and hybrid search",
      "Vector indexing with permission metadata",
      "Agent orchestration and bounded tool use",
      "Data pipelines and document processing",
      "Access control and data classification",
      "Evaluation sets and regression testing",
      "AI observability and cost governance",
    ],
    metaTitle: "Enterprise AI Implementation | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: permission-aware RAG, bounded tool use, human approval, evaluation and governance for AI inside enterprise operations.",
  },
  {
    slug: "infrastructure-for-scale",
    number: "03",
    title: "Engineering Infrastructure for Scale",
    summary:
      "Rebuilding infrastructure as a repeatable platform: defined environments, automated delivery, observable services and attributable cost.",
    division: "cloud-platform-infrastructure",
    solution: "cloud-platform-transformation",
    context: [
      "A product that began on a single server now runs across a cloud account assembled during growth. Environments were created by copying, deployments happen from an engineer's laptop, and autoscaling was enabled without changing the application's session handling. It works most of the time, and nobody can say precisely why it fails when it does.",
      "Commercial pressure arrives on two fronts. Product teams want faster releases and more headroom for seasonal peaks; finance wants a cloud bill that can be attributed and forecast. Both are symptoms of the same gap: infrastructure exists as a set of individually maintained resources rather than a platform with defined, reproducible behaviour.",
    ],
    challenge: [
      "Reliability and cost cannot be improved by adding capacity or switching on another managed service. Peak traffic exposes a stateful component that cannot scale horizontally, non-production environments idle at production size, and a single availability zone carries the database. Each of these is an architectural decision that was never made explicitly.",
      "Conventional responses — a larger instance, a second region, a tagging policy — address a symptom without changing the operating model. The organisation needs environments that can be recreated from code, a delivery path that does not depend on individual laptops, and observable services whose cost and failure modes are known before an incident.",
    ],
    difficulties: [
      {
        title: "Workloads have different shapes",
        body: "A stateless web tier, a long-running job, a message consumer and a relational database each need a different scaling and failure model. A single platform template applied to all four produces either fragility or cost.",
      },
      {
        title: "Data gravity constrains movement",
        body: "Databases, queues, object storage and their backups are the slowest parts to relocate and the hardest to validate. Migration plans fail when restore has been assumed rather than tested at production size.",
      },
      {
        title: "Cost is produced by architecture",
        body: "Egress, idle non-production capacity, storage tiers and over-provisioned instances are design outcomes. Tagging records who spent the money; it does not change what the design spends it on.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Baseline workloads and spend",
        body: "We inventory services, dependencies, traffic patterns, incident history and spend by service, team and environment. The baseline is measured, not estimated from an architecture diagram.",
        decisions: [
          "Identify the components that actually constrain availability before designing redundancy.",
          "Separate cost that is workload-driven from cost that is environment-driven.",
          "Agree service objectives per user journey rather than per server.",
        ],
      },
      {
        phase: "02",
        title: "Design the target topology",
        body: "Accounts or projects are separated by environment and blast radius, networks are segmented, and availability zones and recovery objectives are set explicitly. Managed versus self-managed is decided per component with an operational cost attached.",
        decisions: [
          "Set recovery point and recovery time objectives before choosing replication technology.",
          "Keep production data out of non-production environments by default.",
          "Prefer fewer, well-understood components over a broad service catalogue.",
        ],
      },
      {
        phase: "03",
        title: "Codify the platform",
        body: "Infrastructure is defined in versioned modules with remote state, policy checks and review. A golden path takes a repository to a running service with logging, secrets, alerts and ownership metadata already in place.",
        decisions: [
          "Make infrastructure as code the only route to change, including emergency fixes.",
          "Provide a supported path rather than a gate: the correct route must be the fastest one.",
          "Embed cost allocation and ownership metadata at provisioning time.",
        ],
      },
      {
        phase: "04",
        title: "Containerise where justified",
        body: "Stateless services are packaged and scheduled; stateful components are handled deliberately, with storage, backups and failover designed rather than inherited from a default. Orchestration is adopted when scheduling and scaling needs justify its operational cost.",
        decisions: [
          "Move session state out of application instances before scaling them horizontally.",
          "Keep databases on managed services unless there is a specific reason not to.",
          "Set resource requests and limits from observed usage, then review them.",
        ],
      },
      {
        phase: "05",
        title: "Migrate with rehearsed recovery",
        body: "Data movement is staged and verified. Load tests reach expected peak plus headroom, failover is exercised, and restore is timed on production-scale data. Cutover includes a tested route back to the previous state.",
        decisions: [
          "Schedule restore tests as a recurring operational task, not a one-off migration step.",
          "Test the failure of each dependency, not only the failure of a server.",
          "Record the measured recovery time and compare it with the agreed objective.",
        ],
      },
      {
        phase: "06",
        title: "Operate and optimise",
        body: "Alerts are tied to user-visible symptoms and service objectives. Capacity and cost are reviewed on a rhythm, with rightsizing, storage lifecycle and commitment planning handled as engineering work with an owner.",
        decisions: [
          "Alert on error budget burn and dependency health, not on CPU thresholds.",
          "Review cost per service and per environment with the teams that control it.",
          "Keep a documented capacity model for seasonal and campaign peaks.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Managed services versus control",
        body: "Managed databases and queues remove patching and failover work at the cost of configuration limits and provider dependency. Self-managed components are justified when a specific constraint cannot be met otherwise, not by default.",
      },
      {
        title: "Multi-region versus single-region resilience",
        body: "Multi-region improves disaster tolerance and multiplies cost, data consistency questions and operational surface. Many organisations are better served by a well-tested single-region design with proven restore and a realistic recovery objective.",
      },
      {
        title: "Kubernetes versus a simpler runtime",
        body: "Orchestration repays its operational cost when there are many services, a platform team and a real scheduling need. For a handful of services, a managed container runtime is often the more reliable platform.",
      },
    ],
    architecture: {
      intro:
        "A layered platform with one change path. Traffic enters through controlled edge services, workloads run on private networking, data sits on managed services with tested recovery, and operations are produced by the same code that provisions the platform.",
      layers: [
        { label: "Edge", nodes: ["DNS & CDN", "WAF", "Load balancer", "TLS termination"] },
        {
          label: "Platform",
          nodes: ["Container workloads", "Queue & workers", "Cache", "Secrets & config"],
        },
        {
          label: "Data",
          nodes: ["Managed relational DB", "Object storage", "Read replicas", "Backups & PITR"],
        },
        {
          label: "Operations",
          nodes: ["IaC modules", "CI/CD pipeline", "Metrics · logs · traces", "Cost allocation"],
        },
      ],
      flows: ["TLS · routing rules", "private network · workload identity", "snapshots · restore tests"],
      choices: [
        {
          title: "Separate accounts per environment",
          body: "Account-level separation limits the blast radius of a mistake, makes cost attribution unambiguous and removes the class of incident caused by a staging job reaching production data.",
        },
        {
          title: "Workload identity over static keys",
          body: "Services receive short-lived credentials bound to their identity, so a leaked configuration file is not a permanent grant and access can be revoked centrally.",
        },
        {
          title: "Recovery proven by rehearsal",
          body: "Backups are only a control when a restore has been timed and verified. The restore test is part of the platform's delivery pipeline, not a document in a shared drive.",
        },
      ],
    },
    outcomes: [
      "Environments that can be recreated from code rather than repaired by hand.",
      "A deployment path that is repeatable and independent of individual machines.",
      "Recovery that has been measured against an agreed objective.",
      "Capacity that can absorb growth without redesigning the platform.",
      "Spend that is attributable to a service, a team and an environment.",
      "Fewer bespoke components and a smaller operational surface to maintain.",
    ],
    capabilities: [
      "AWS and GCP architecture",
      "Kubernetes and container platforms",
      "Terraform and infrastructure as code",
      "CI/CD and release engineering",
      "Networking, DNS and edge security",
      "Caching and database scaling",
      "Observability and service objectives",
      "High availability, backup and disaster recovery",
      "Cloud cost governance",
    ],
    metaTitle: "Cloud Infrastructure Engineering for Scale | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: reproducible cloud infrastructure, infrastructure as code, container platforms, observability, tested recovery and cost governance.",
  },
  {
    slug: "enterprise-systems-integration",
    number: "04",
    title: "Connecting Disconnected Enterprise Systems",
    summary:
      "Replacing point-to-point scripts with owned interfaces, reliable delivery and one place to see what actually happened.",
    division: "enterprise-software",
    solution: "enterprise-systems-integration",
    context: [
      "Over several years, each department bought the tool that suited its work: finance, sales, warehouse and support. Integration grew around them as a series of scripts written by whoever needed the data first. One feed runs nightly over CSV, another posts webhooks into a middleware configuration nobody reviews, and a third copies records directly between databases.",
      "The business notices the result rather than the cause. A customer address is updated in three places and agrees in one. Month-end closes with a reconciliation spreadsheet. When a sync fails, the first signal is a complaint from a customer or a support agent, not an alert.",
    ],
    challenge: [
      "The organisation needs its systems to agree about customers, orders, inventory and invoices without replacing all of them. That is not a transport problem. It requires deciding which system is the authority for each entity, what the contract between systems means, and what happens when delivery is delayed, duplicated or rejected.",
      "Conventional fixes — another point-to-point connector, a nightly extract, a shared database view — reduce the immediate symptom and increase the number of places that must change together. The estate becomes harder to reason about with every addition, and each new integration inherits the ambiguity of the last.",
    ],
    difficulties: [
      {
        title: "Semantics, not transport",
        body: "Two systems can exchange JSON perfectly and still disagree about whether a cancelled order is closed, whether an address is billing or delivery, and which identifier is stable across mergers. A contract that does not state meaning leaves every consumer to guess.",
      },
      {
        title: "Exactly-once delivery is a fiction",
        body: "Networks retry, consumers restart and brokers redeliver. The realistic design is at-least-once delivery with idempotent consumers, stable deduplication keys and ordering guarantees scoped to a single entity.",
      },
      {
        title: "Nobody owns the integration",
        body: "When an interface belongs to no team, failures are discovered by users and fixed by whoever is available. Ownership, lineage and alerting are prerequisites for reliability, not documentation to add later.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Map systems and ownership",
        body: "We record every system, the entities it holds, who produces and consumes each one, and the latency the business actually needs. Duplicate masters are identified before any interface is designed.",
        decisions: [
          "Declare one system of record per entity and treat everything else as a projection.",
          "Separate data that must be real-time from data that can be minutes or hours old.",
          "Document the manual reconciliation that currently compensates for missing integration.",
        ],
      },
      {
        phase: "02",
        title: "Define contracts and identifiers",
        body: "Each interface has a versioned schema, a stated meaning, stable identifiers and a named owner. A schema registry and a published deprecation window prevent silent drift.",
        decisions: [
          "Model lifecycle events explicitly rather than inferring state from field changes.",
          "Use opaque, stable identifiers; never expose an internal primary key as an external contract.",
          "Add fields compatibly and remove them only on a scheduled version change.",
        ],
      },
      {
        phase: "03",
        title: "Choose the interaction style",
        body: "Queries use request/response, state changes publish events, and bulk movement uses batch with explicit checkpoints. Chatty synchronous chains are avoided where a failure would cascade across systems.",
        decisions: [
          "Publish from a transactional outbox so a database commit and its event cannot diverge.",
          "Keep event payloads small and reference large objects rather than embedding them.",
          "Avoid direct database-to-database links as an integration mechanism.",
        ],
      },
      {
        phase: "04",
        title: "Build the integration layer",
        body: "A gateway fronts synchronous interfaces, a broker carries events, and connectors translate between contracts and system APIs. Consumers are idempotent, failures land in a dead-letter queue, and replay is a supported operation.",
        decisions: [
          "Deduplicate on a business key derived from the producer, not on arrival time.",
          "Make retries bounded and observable; endless retry loops hide defects.",
          "Treat replay as a routine procedure with a scoped blast radius.",
        ],
      },
      {
        phase: "05",
        title: "Reconcile and monitor",
        body: "Correlation identifiers follow a business event across systems. Technical health is monitored alongside business-level checks such as record counts, balances and unmatched items, with alerts on lag and queue depth.",
        decisions: [
          "Alert on stalled consumption and DLQ growth before users notice missing data.",
          "Publish a daily reconciliation report as a product, not a spreadsheet.",
          "Retain an audit trail of who changed what, through which interface.",
        ],
      },
      {
        phase: "06",
        title: "Migrate and decommission",
        body: "New interfaces run in parallel with the old ones, results are compared, and consumers move in dependency order. Legacy scripts, credentials and scheduled jobs are removed as each path is retired.",
        decisions: [
          "Cut over one consumer at a time with a measurable comparison period.",
          "Revoke credentials for retired integrations rather than leaving them dormant.",
          "Keep the old path available until reconciliation has passed for a full business cycle.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Broker versus direct calls",
        body: "A broker decouples producers from consumers and absorbs failure, at the cost of another system to operate and a more complex debugging story. Direct calls are simpler to trace and fragile under load. The choice belongs to the interaction, not to a platform standard.",
      },
      {
        title: "Canonical model versus pairwise mapping",
        body: "A shared canonical model reduces the number of translations and creates a committee-owned artefact that changes slowly. Pairwise mapping keeps each integration local and multiplies maintenance. Most estates need a small canonical core and deliberate exceptions.",
      },
      {
        title: "Synchronous consistency versus availability",
        body: "Distributed transactions across systems are expensive and brittle. Accepting eventual consistency requires the business to tolerate a short delay and the interface to make that delay visible, which is often the harder part of the change.",
      },
    ],
    architecture: {
      intro:
        "One integration layer between business systems and their consumers, with ownership metadata and observability as part of the design rather than an afterthought. No system reads another system's database directly.",
      layers: [
        { label: "Business systems", nodes: ["ERP", "CRM", "Warehouse", "Finance"] },
        {
          label: "Integration",
          nodes: ["API gateway", "Schema registry", "Event broker", "Outbox publisher"],
        },
        {
          label: "Consumers",
          nodes: ["Idempotent consumers", "Projections", "Reconciliation jobs", "DLQ & replay"],
        },
        {
          label: "Governance",
          nodes: ["Contract versions", "Correlation tracing", "Ownership metadata", "Audit trail"],
        },
      ],
      flows: ["REST · versioned schemas", "events · dedupe keys", "checks · alerts · replay"],
      choices: [
        {
          title: "Transactional outbox",
          body: "Writing the event in the same transaction as the state change removes the window where a record is committed but its event is lost, which is the most common cause of silent divergence.",
        },
        {
          title: "Schema registry",
          body: "Contracts are registered and validated at publication, so an incompatible change fails in the pipeline rather than in a consumer at month-end.",
        },
        {
          title: "Business-level reconciliation",
          body: "Technical metrics show that messages moved; reconciliation shows that the numbers agree. Both are required, and the second is what the business trusts.",
        },
      ],
    },
    outcomes: [
      "A declared authority for each entity, so records stop disagreeing silently.",
      "Fewer manual reconciliations and less duplicate data entry.",
      "Delivery failures that are visible, retryable and owned.",
      "Interfaces that can evolve without coordinated releases across every system.",
      "Release cycles that no longer depend on the slowest application in the chain.",
      "A record of what changed, when and through which interface.",
    ],
    capabilities: [
      "REST API and webhook design",
      "Event-driven architecture",
      "Message brokers and NATS / Kafka operations",
      "Schema design and contract versioning",
      "Idempotent consumers and dead-letter handling",
      "Data synchronisation and reconciliation",
      "Sagas and distributed workflow patterns",
      "End-to-end tracing and integration monitoring",
    ],
    metaTitle: "Enterprise Systems Integration & API Engineering | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: owned system-of-record boundaries, versioned contracts, event-driven integration, idempotent consumers and reconciliation.",
  },
  {
    slug: "technology-reliability-security",
    number: "05",
    title: "Improving Technology Reliability and Security",
    summary:
      "Finding where the system actually fails, reducing the blast radius of an incident, and building evidence that recovery works.",
    division: "cybersecurity-reliability",
    solution: "technology-reliability-security",
    context: [
      "Service incidents have become routine enough that the organisation has stopped treating them as exceptional. Alert volume is high and confidence in it is low. Access has accumulated over years of projects: standing administrator rights, shared credentials and service accounts whose purpose is remembered by one person.",
      "The security questionnaire from an enterprise customer asks for evidence of access reviews, patching, restore testing and incident handling. The answers exist as intentions rather than records, and assembling them takes weeks each time. Reliability and security are being managed as separate programmes with separate documents, while the same incidents expose both.",
    ],
    challenge: [
      "The organisation needs fewer disruptions and a defensible security posture without freezing delivery. That means knowing which dependencies matter, what the system does under failure, who can reach what, and how quickly it can be restored — and being able to demonstrate all four with evidence produced as a by-product of normal operation.",
      "Tooling alone does not produce these properties. A SIEM without an owner generates alerts nobody acts on; a backup without a restore test is a hope; a least-privilege policy that is not enforced in identity is a document. The work is a sequence of decisions about failure, authority and evidence.",
    ],
    difficulties: [
      {
        title: "Failure modes are unknown",
        body: "Without a dependency map and service objectives, redundancy is applied where it is easy rather than where it matters. The component that causes the next outage is often one nobody classified as critical.",
      },
      {
        title: "Privilege sprawl cannot be fixed by policy",
        body: "Removing standing access requires understanding what each identity does, replacing shared credentials with workload identity, and providing a fast, audited route for legitimate emergency access. A policy document changes none of that.",
      },
      {
        title: "Evidence has to be continuous",
        body: "Audit and customer assurance ask for proof across time: who had access last quarter, which hosts were patched, when the last restore succeeded. Reconstructing this retrospectively is expensive and usually incomplete.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Establish a risk baseline",
        body: "We build a service and dependency inventory, review incident history, assess identity and network exposure, and consolidate vulnerability and configuration findings. Findings are ranked by business impact, not by scanner severity alone.",
        decisions: [
          "Map each service to the user journey it supports and the cost of its unavailability.",
          "Identify single points of failure and untested dependencies explicitly.",
          "Agree the top remediation items with the business owner of each risk.",
        ],
      },
      {
        phase: "02",
        title: "Define reliability targets",
        body: "Service objectives are derived from user journeys, with error budgets that make the cost of unreliability a shared number. Alerts are rewritten to fire on symptoms that affect users rather than on resource thresholds.",
        decisions: [
          "Publish objectives with the owners who can spend against them.",
          "Route alerts to a named rotation with an escalation path and a runbook.",
          "Review incidents for contributing conditions, not for individual blame.",
        ],
      },
      {
        phase: "03",
        title: "Reduce blast radius",
        body: "Network segmentation, workload identity and scoped roles limit what a compromised component can reach. Secrets move to a managed store, and emergency access becomes time-bound, approved and logged.",
        decisions: [
          "Replace static service credentials with short-lived identity tokens.",
          "Introduce just-in-time elevation instead of permanent administrator access.",
          "Separate production from non-production at the account and network level.",
        ],
      },
      {
        phase: "04",
        title: "Harden the delivery path",
        body: "Dependencies and images are scanned in the pipeline, artefacts are signed, and CI credentials are scoped to what a build actually needs. Change provenance is recorded automatically, which is also the evidence auditors ask for.",
        decisions: [
          "Fail builds on known critical vulnerabilities in shipped artefacts.",
          "Grant pipeline identities the narrowest permissions that still allow deployment.",
          "Record who approved which change and what was deployed, without manual entry.",
        ],
      },
      {
        phase: "05",
        title: "Rehearse failure",
        body: "Restores are timed on production-scale data, failover is exercised, and dependency outages are simulated. The measured recovery time is compared with the agreed objective and the gap is funded as engineering work.",
        decisions: [
          "Test recovery from the failure the business fears, not only the convenient one.",
          "Record the actual time to restore and the point of data loss.",
          "Fix findings in the same quarter, or record the accepted risk with an owner.",
        ],
      },
      {
        phase: "06",
        title: "Institutionalise the controls",
        body: "Runbooks, access reviews, patch reporting and incident response become scheduled operations with owners. Control evidence is generated from systems rather than compiled by hand before an audit.",
        decisions: [
          "Automate access review exports and patch status reporting.",
          "Keep a remediation backlog ordered by business impact with dates and owners.",
          "Review incident actions at a fixed cadence until they are closed.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Security friction versus delivery speed",
        body: "Strict controls slow routine work and invite workarounds when the approved route is painful. Short-lived credentials and just-in-time access keep the control while removing most of the daily cost, which is why they are preferable to static restrictions.",
      },
      {
        title: "Redundancy versus tested recovery",
        body: "A second availability zone is not a recovery plan. Redundancy reduces the likelihood of some outages; restore testing addresses the failures redundancy cannot cover. Budget spent on one is not a substitute for the other.",
      },
      {
        title: "Breadth versus depth of remediation",
        body: "Closing every scanner finding spreads effort thinly and leaves the material risks open. A narrower set of high-impact fixes, completed and verified, produces a better posture than a long list of partially addressed items.",
      },
    ],
    architecture: {
      intro:
        "Security and reliability share one control plane. Identity is the primary boundary, the delivery path is constrained, and the same signals that operate the system produce the evidence used in assurance.",
      layers: [
        { label: "Identity", nodes: ["SSO & MFA", "Role assignments", "Workload identity", "Secrets manager"] },
        {
          label: "Application",
          nodes: ["Authorisation checks", "Input validation", "Rate limiting", "Dependency scanning"],
        },
        {
          label: "Infrastructure",
          nodes: ["Network segmentation", "WAF & TLS", "Patch baseline", "Encrypted storage"],
        },
        {
          label: "Detection",
          nodes: ["Metrics · logs · traces", "Objective alerts", "Audit trail", "Incident response"],
        },
      ],
      flows: ["short-lived tokens · policy", "private routes · least privilege", "signals · escalation"],
      choices: [
        {
          title: "Identity as the control boundary",
          body: "Network rules and application checks still matter, but every human and workload action is attributable to an identity with scoped permissions, which is what makes least privilege enforceable and auditable.",
        },
        {
          title: "Symptom-based alerting",
          body: "Alerting on user-visible error rates and latency reduces noise, shortens response and prevents the fatigue that turns a real alert into background signal.",
        },
        {
          title: "Evidence from the pipeline",
          body: "Deployment records, scan results and restore timestamps are captured automatically, so assurance is a query rather than a project.",
        },
      ],
    },
    outcomes: [
      "A dependency and risk picture that is current enough to act on.",
      "Fewer alerts, each tied to a user-visible symptom and an owner.",
      "A blast radius that is limited by identity and network design.",
      "Recovery that has been measured rather than assumed.",
      "Audit and customer assurance evidence produced continuously.",
      "Remediation prioritised by business impact and tracked to closure.",
    ],
    capabilities: [
      "IAM and least-privilege design",
      "Network and application security review",
      "Vulnerability management and patch governance",
      "Secrets management and workload identity",
      "Observability and service objectives",
      "Backup, restore and disaster recovery testing",
      "Incident response and escalation design",
      "Control evidence and audit readiness",
    ],
    metaTitle: "Technology Reliability & Security Engineering | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: risk baselining, service objectives, least privilege, hardened delivery, rehearsed recovery and continuous control evidence.",
  },
  {
    slug: "engineering-capacity-partnership",
    number: "06",
    title: "Extending Engineering Capacity for Critical Initiatives",
    summary:
      "Adding architectural leadership and delivery capacity to a critical programme without taking ownership away from the business.",
    division: "technology-advisory",
    solution: "strategic-engineering-partnerships",
    context: [
      "A revenue-critical platform needs to be replaced while the internal team of four keeps it running. Hiring for two senior roles is taking months, an implementation partner is already delivering a separate module, and architecture decisions are accumulating in review meetings without an owner.",
      "The organisation does not want to outsource the programme. It wants the decisions, the delivery structure and enough senior engineering capability to move faster, with knowledge that remains inside the company when the engagement changes shape.",
    ],
    challenge: [
      "The apparent problem is headcount. The real constraint is decision throughput: work waits for architecture guidance, integration conventions are agreed verbally, and each new contributor introduces a slightly different interpretation of the target. Adding more contractors without that structure increases work in progress and does not shorten delivery.",
      "An external team that works outside existing review, security and deployment practice creates a second estate to maintain and a handover problem at the end. Capacity has to be added inside the organisation's standards, with a deliberate plan to reduce external dependency rather than a contract that quietly renews.",
    ],
    difficulties: [
      {
        title: "Decision latency",
        body: "Unclear decision rights stall work quietly. Without a named architecture owner and recorded decisions, the same trade-off is reopened repeatedly and delivery slows without appearing blocked.",
      },
      {
        title: "Conventions and quality",
        body: "External engineers who bypass review, test standards or deployment practice deliver features that the internal team cannot safely operate. Integration into existing practice is a design requirement, not an onboarding detail.",
      },
      {
        title: "Capability has to stay",
        body: "Knowledge that leaves with a contract is a recurring cost. Pairing, written decisions and progressive ownership transfer are the difference between buying capacity and renting it permanently.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Frame the programme",
        body: "We establish the objectives, commercial constraints, current capability and the decisions that must be made first. Success is defined in operational terms, including what the internal team should own by the end.",
        decisions: [
          "Separate the work that needs senior judgement from the work that needs throughput.",
          "Agree the decisions that cannot wait for a full architecture phase.",
          "Record exit criteria and a planned reduction in external dependency at the start.",
        ],
      },
      {
        phase: "02",
        title: "Set the technical direction",
        body: "A small set of architecture decisions defines boundaries, integration conventions, standards and the sequencing of work. Each decision is recorded with its context, alternatives and consequences.",
        decisions: [
          "Keep the decision record short enough to be read and current enough to be trusted.",
          "Adopt the client's existing standards where they are sound; propose changes explicitly where they are not.",
          "Resolve trade-offs in a forum with authority to decide, not in review comments.",
        ],
      },
      {
        phase: "03",
        title: "Establish the delivery model",
        body: "Team shape, cadence, ownership boundaries, escalation and definition of done are agreed in writing. Engineers work inside the client's repositories, pipeline and review process from the first week.",
        decisions: [
          "Embed with existing squads rather than running a parallel delivery track.",
          "Name a technical lead accountable for consistency across the programme.",
          "Make progress visible against outcomes rather than activity.",
        ],
      },
      {
        phase: "04",
        title: "Deliver in increments",
        body: "Work is sequenced so that each increment is operable and reviewable. Engineers participate in design review, code review and incident follow-up, which is how standards travel between teams.",
        decisions: [
          "Ship behind the client's release controls rather than around them.",
          "Include operational readiness in each increment, not at programme close.",
          "Keep a single backlog with the client's product ownership intact.",
        ],
      },
      {
        phase: "05",
        title: "Build internal capability",
        body: "Pairing, design sessions and ownership handover run throughout the engagement. Runbooks, decision records and architecture notes are written for the people who will remain, not for the engagement team.",
        decisions: [
          "Transfer ownership component by component, with the internal team leading the change.",
          "Support hiring and interview design where the gap is permanent headcount.",
          "Leave documentation that reflects the system as operated, not as proposed.",
        ],
      },
      {
        phase: "06",
        title: "Measure and exit deliberately",
        body: "Lead time, change failure, decision throughput and ownership coverage are reviewed together. The engagement reduces on an agreed schedule rather than ending abruptly or renewing by default.",
        decisions: [
          "Track which decisions and services the internal team now owns unaided.",
          "Review the dependency plan at a fixed cadence with the executive sponsor.",
          "Close with a support model for the period after the engagement.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Embedded versus separate squad",
        body: "An embedded team integrates with existing practice and transfers capability continuously, at the cost of some coordination overhead. A separate squad moves faster initially and tends to produce a system the internal team did not design and cannot easily own.",
      },
      {
        title: "Speed versus capability transfer",
        body: "Delivering with external engineers alone is quicker in the short term. Pairing costs some velocity and is the only reliable way to leave capability behind when the engagement ends.",
      },
      {
        title: "Fixed scope versus rolling roadmap",
        body: "A fixed scope is easier to procure and usually wrong by the second quarter. A rolling roadmap with agreed outcomes and review points handles change honestly, provided the commercial terms allow re-sequencing.",
      },
    ],
    architecture: {
      intro:
        "The architecture of the engagement rather than of a system: direction, delivery, governance and continuity, with decision rights and ownership transfer made explicit.",
      layers: [
        { label: "Direction", nodes: ["Business objectives", "Architecture owner", "Decision records", "Sequencing"] },
        {
          label: "Delivery",
          nodes: ["Technical lead", "Embedded engineers", "Client squads", "Platform & QA"],
        },
        {
          label: "Governance",
          nodes: ["Design review", "Delivery reporting", "Risk register", "Escalation path"],
        },
        {
          label: "Continuity",
          nodes: ["Runbooks & docs", "Pairing & shadowing", "Ownership handover", "Hiring support"],
        },
      ],
      flows: ["priorities · constraints", "decisions · standards", "capability transfer"],
      choices: [
        {
          title: "Named architecture accountability",
          body: "A single accountable owner for technical direction removes the ambiguity that stalls delivery, and makes the reasoning behind each decision reviewable later.",
        },
        {
          title: "Client repositories and pipeline",
          body: "Working inside the client's tooling keeps one source of truth, subjects external code to the same review and security controls, and avoids a parallel estate to reconcile at handover.",
        },
        {
          title: "Ownership transfer by component",
          body: "Handover happens repeatedly during delivery rather than once at the end, so capability is demonstrated while the engagement team is still available to correct it.",
        },
      ],
    },
    outcomes: [
      "Delivery that is limited by decisions and capacity rather than by coordination.",
      "Architecture decisions that are recorded, consistent and reviewable.",
      "External engineers working inside existing standards rather than around them.",
      "Internal ownership of components demonstrated before the engagement closes.",
      "A planned reduction in external dependency instead of an open-ended contract.",
      "A support model for the period after handover.",
    ],
    capabilities: [
      "Solution and enterprise architecture",
      "Engineering leadership and technical governance",
      "Distributed team design and delivery management",
      "Software quality and review practice",
      "Platform and modernisation strategy",
      "Hiring support and capability assessment",
      "Operational readiness and handover",
      "Technical due diligence and independent review",
    ],
    metaTitle: "Strategic Software Engineering Partnerships | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: architecture leadership, embedded delivery capacity, technical governance and deliberate capability transfer for critical initiatives.",
  },
  {
    slug: "fragmented-data-reporting-estate",
    number: "07",
    title: "Consolidating a Fragmented Data and Reporting Estate",
    summary:
      "Replacing a sprawl of extracts, spreadsheets and departmental reports with owned domain models, one semantic layer and definitions the business agrees on.",
    division: "enterprise-software",
    solution: "enterprise-systems-modernisation",
    context: [
      "Every department reports on the same business from a different copy of the data. Finance assembles a month-end model from extracts taken out of the finance system; commercial keeps a warehouse built for a campaign two years ago; operations queries the transactional database directly because the warehouse runs a day behind. Revenue, active customer and gross margin all have several definitions, and nobody can say which number is correct in a meeting.",
      "Individually each report was cheap: an extract, a spreadsheet, a dashboard built for a question someone once asked. Collectively they form an estate that nobody owns. A schema change in a source system breaks an unknown number of downstream reports, a question that crosses two departments takes an analyst days to answer, and the same figure is presented differently to the board, the regulator and the sales team.",
    ],
    challenge: [
      "The organisation needs one governed view of its data — a place where meaning is defined, controlled and traceable — without switching off the reports executives rely on at month-end. That requires decisions that are commercial before they are technical: which department owns each domain, whose definition of revenue becomes canonical, which historical reports are worth reproducing and which should be retired.",
      "Buying a new BI tool changes the presentation layer and leaves the definition problem untouched. A data lake built without ownership becomes a larger version of the same disorder. A modelling programme that tries to describe the whole enterprise before delivering a single trusted number usually runs out of sponsorship first. The sequence — ownership, definitions, models, migration, retirement — is what determines whether the result is used.",
    ],
    difficulties: [
      {
        title: "Definitions are a business decision",
        body: "Two departments can both be right within their own process and still disagree about a number that reaches the board. Reconciling them needs a named owner per domain, a canonical definition with documented exceptions, and an agreed process for changing it — none of which a data team can decide alone.",
      },
      {
        title: "Nobody knows what is actually used",
        body: "Report inventories describe what exists, not what matters. Usage telemetry, scheduled deliveries and interviews reveal the small number of outputs that carry operational or regulatory weight, and the long tail that exists because deleting it felt risky.",
      },
      {
        title: "Quality is invisible until it is measured",
        body: "An extract that runs successfully can still be wrong: late, incomplete, duplicated or silently truncated. Without explicit expectations on freshness, completeness and uniqueness, quality problems are discovered in a board pack rather than in the pipeline.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Inventory the estate and its consumers",
        body: "We catalogue sources, extracts, transformations, reports, spreadsheets and their consumers, then confirm the picture against lineage and usage evidence. The output is a map of where every published number comes from and who would notice if it changed.",
        decisions: [
          "Rank reports by operational and regulatory criticality, not by the seniority of their audience.",
          "Identify duplicate definitions of the same measure before proposing a model.",
          "Record the manual steps that currently correct upstream data.",
        ],
      },
      {
        phase: "02",
        title: "Assign domain ownership and definitions",
        body: "Each business domain gets an accountable owner, a defined set of entities and a canonical definition for its measures. Exceptions are written down rather than resolved silently in a query.",
        decisions: [
          "Make the definition document the reference for every downstream report.",
          "Define measures once and derive variants explicitly rather than reimplementing them.",
          "Agree a change process with the owners before the first model is published.",
        ],
      },
      {
        phase: "03",
        title: "Model the core and publish a semantic layer",
        body: "Raw and conformed zones separate source fidelity from business meaning. Domain models are built on tested transformations, and a semantic layer exposes certified measures so consumers query definitions rather than tables.",
        decisions: [
          "Keep raw data immutable so a modelling defect can be corrected by replay rather than re-extraction.",
          "Publish certified datasets first and mark everything else as exploratory.",
          "Model at the grain the business reports on, not at the grain the source happens to store.",
        ],
      },
      {
        phase: "04",
        title: "Migrate reporting in waves",
        body: "Reports move in criticality order. Each wave runs old and new outputs in parallel, compares totals and distribution, and retires the old path only after the owner signs off on the difference.",
        decisions: [
          "Reconcile to business totals, not only to row counts from the source extract.",
          "Rebuild the reports that matter and deliberately retire the ones that do not.",
          "Give each wave a named owner who accepts the migrated number in writing.",
        ],
      },
      {
        phase: "05",
        title: "Operate quality and lineage",
        body: "Freshness, volume, schema and business-rule tests run on every load, with failures alerting the owning team. Lineage from source column to published measure is captured automatically so an unexplained number can be traced in minutes.",
        decisions: [
          "Fail the load when a critical expectation breaks rather than publishing suspect data.",
          "Route quality alerts to the domain owner, not to a central support queue.",
          "Track unresolved data defects as a funded backlog with business impact attached.",
        ],
      },
      {
        phase: "06",
        title: "Retire and govern",
        body: "Legacy extracts, scheduled jobs and credentials are removed as their replacements prove themselves, and access is granted through the semantic layer rather than by copying datasets. Governance continues as a light, scheduled operating rhythm.",
        decisions: [
          "Revoke access to retired extracts instead of leaving them running quietly.",
          "Review certified measures and ownership on a fixed cadence.",
          "Keep self-service access bounded by row-level policy and certified datasets.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Central warehouse versus domain-owned marts",
        body: "A central warehouse concentrates modelling skill and control, and becomes a queue for every change. Domain-owned marts move faster and risk drift without shared definitions. A conformed core with owned marts and one semantic layer is usually the workable middle.",
      },
      {
        title: "Rebuild every report versus retire most of them",
        body: "Reproducing the full estate preserves familiarity and carries forward years of accidental logic. Retiring aggressively is cheaper to operate and requires somebody with authority to say a report is no longer needed. The second option is almost always right and almost always harder to agree.",
      },
      {
        title: "Batch versus streaming freshness",
        body: "Streaming improves operational freshness and multiplies cost, complexity and failure modes. Most reporting needs a reliable daily or intraday batch; a small number of operational measures justify a streaming path, decided per measure rather than per platform.",
      },
    ],
    architecture: {
      intro:
        "An estate with one governed layer between sources and consumers. Raw data is preserved, meaning is modelled and tested once, and every published measure can be traced back to the columns and rules that produced it.",
      layers: [
        { label: "Sources", nodes: ["Finance & ERP", "CRM & commercial", "Operational systems", "External feeds"] },
        {
          label: "Ingestion",
          nodes: ["Scheduled extracts", "Change data capture", "API & file connectors", "Validation & quarantine"],
        },
        {
          label: "Modelling",
          nodes: ["Raw & conformed zones", "Domain models", "Semantic layer", "Metric definitions"],
        },
        {
          label: "Consumption",
          nodes: ["Executive reporting", "Self-service BI", "Operational dashboards", "Regulatory extracts"],
        },
      ],
      flows: ["loads · CDC · contracts", "tested transformations · lineage", "certified metrics · row-level policy"],
      choices: [
        {
          title: "Semantic layer as the contract",
          body: "Consumers query a defined measure rather than a physical table, so a definition changes in one place and every report reflects it consistently instead of diverging quietly.",
        },
        {
          title: "Tests next to the transformation",
          body: "Quality expectations live with the model that produces the data, so a change that breaks freshness, uniqueness or a business rule fails in the pipeline rather than in a board pack.",
        },
        {
          title: "Certified versus exploratory",
          body: "A visible distinction between governed datasets and analyst exploration lets self-service grow without letting unvetted numbers acquire the authority of a certified report.",
        },
      ],
    },
    outcomes: [
      "One agreed definition per measure, owned and documented.",
      "Reports that can be traced from a published figure back to source columns and rules.",
      "Data quality failures caught in the pipeline rather than in reporting.",
      "A smaller reporting estate with the long tail retired deliberately.",
      "Self-service analysis bounded by certified models and access policy.",
      "A governance rhythm that keeps ownership and definitions current.",
    ],
    capabilities: [
      "Data estate assessment and lineage mapping",
      "Dimensional and domain data modelling",
      "Semantic layer and metric governance",
      "ETL and ELT pipeline engineering",
      "Data quality testing and observability",
      "Report migration and reconciliation",
      "Access control and row-level security",
      "Data platform operations and ownership models",
    ],
    metaTitle: "Data & Reporting Estate Consolidation | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: consolidating fragmented reporting with domain ownership, canonical definitions, a semantic layer, tested pipelines and staged report migration.",
  },
  {
    slug: "data-centre-exit",
    number: "08",
    title: "Exiting a Data Centre Without Stopping the Business",
    summary:
      "Moving a mixed estate out of owned facilities in dependency order, with connectivity, capacity and recovery proven before each cutover.",
    division: "cloud-platform-infrastructure",
    solution: "cloud-platform-transformation",
    context: [
      "A colocation contract ends in fourteen months. The estate inside it grew over a decade: virtualised workloads, two physical appliances with no obvious cloud equivalent, file shares, batch integrations with partners, and a database cluster that runs the core application. Some of it is documented. The rest is known by two engineers and a diagram that is four years old.",
      "The business case was written around avoiding a hardware refresh. The risk sits somewhere else: fixed dependencies nobody has mapped, licence terms written for owned infrastructure, and integrations whose latency assumptions have never been tested outside the building.",
    ],
    challenge: [
      "Every workload has to keep running while its hosting changes. That means reproducing connectivity, DNS, identity, backup windows and partner routes, then proving each wave works under realistic load before traffic moves — and keeping a tested route back for the stabilisation period. It also means deciding what should not move at all.",
      "Lifting everything as-is recreates the current design at a higher run cost and defers the technical debt into a new contract. Replatforming the whole estate inside the same deadline is two programmes attempting to succeed simultaneously. The credible plan separates moving from changing, and applies modernisation only where it reduces risk or cost within the window.",
    ],
    difficulties: [
      {
        title: "Some dependencies are physical",
        body: "Appliances, licence servers, serial-connected equipment and latency-sensitive partner links do not map cleanly to cloud equivalents. Each needs a decision — replace, rehost with a supported alternative, or keep on a reduced footprint — taken before the wave plan is credible.",
      },
      {
        title: "Cutover is per wave, not per server",
        body: "An application is only as movable as its neighbours. Waves have to follow dependency order, and each one carries its own DNS changes, firewall rules, credentials and rollback conditions. Migrating servers in alphabetical order produces partial systems and avoidable outages.",
      },
      {
        title: "Licensing changes with the platform",
        body: "Support terms, core-based pricing and clauses about shared hosting or dedicated hardware can make a technically simple move commercially unattractive. Licensing has to be assessed per workload, early, alongside the architecture.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Map the estate and its dependencies",
        body: "We inventory workloads, owners, data stores, integrations, appliances and traffic flows, then validate the map against network telemetry and observed connections. Undocumented dependencies are the main source of failed cutovers.",
        decisions: [
          "Treat unknown dependencies as blockers rather than assumptions until observed traffic confirms them.",
          "Record latency, throughput and batch windows each workload actually needs.",
          "Identify the workloads that must stay close to a partner or a physical asset.",
        ],
      },
      {
        phase: "02",
        title: "Decide move, modernise or retire",
        body: "Each workload gets an explicit disposition with a stated reason. Rehosting is a legitimate answer for stable systems with a short remaining life; retirement is often the cheapest migration available.",
        decisions: [
          "Retire anything with no owner, no users and no contractual obligation.",
          "Modernise only where it reduces operating cost or risk inside the migration window.",
          "Assess licensing and support terms before committing a workload to a target platform.",
        ],
      },
      {
        phase: "03",
        title: "Build landing zones and connectivity first",
        body: "Accounts, networks, identity federation, logging and guardrails exist before the first workload arrives. Private connectivity to partners and remaining facilities is proven with test traffic, not assumed from configuration.",
        decisions: [
          "Treat connectivity and identity as prerequisites, not as part of the first cutover.",
          "Apply the same policy baseline to every account so exceptions are visible.",
          "Size bandwidth and gateways against measured peak, not average.",
        ],
      },
      {
        phase: "04",
        title: "Rehearse each wave",
        body: "Workloads are replicated, started in the target environment and tested with representative traffic and batch volumes. Restore, failover and rollback are timed against the same data scale as production.",
        decisions: [
          "Prove the rollback before the cutover, on the same wave.",
          "Replay the batch calendar, including month-end, rather than only daytime traffic.",
          "Record measured recovery time against the agreed objective for each wave.",
        ],
      },
      {
        phase: "05",
        title: "Cut over in dependency order",
        body: "Traffic moves wave by wave, with a named decision maker, a change window agreed with the business, and a stabilisation period in which both paths remain available. Old infrastructure stays recoverable until the wave has proven itself.",
        decisions: [
          "Sequence waves by dependency and business criticality together.",
          "Move DNS and routes on a plan with tested propagation, not as an afterthought.",
          "Keep the previous environment warm through the stabilisation window.",
        ],
      },
      {
        phase: "06",
        title: "Decommission and optimise",
        body: "Facilities, circuits, hardware and credentials are retired in order, with costs removed from the run rate as each one closes. Capacity and spend are reviewed against the original business case once the estate has settled.",
        decisions: [
          "Cancel circuits and support contracts as part of the plan, not after it.",
          "Rightsize from observed usage in the first full quarter.",
          "Publish a run-cost baseline the finance team can hold the platform to.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Rehost versus replatform",
        body: "Rehosting preserves behaviour and shortens the timeline, and carries the existing design into a more expensive environment. Replatforming reduces run cost and risk and adds change to a programme that is already moving. Mixing the two deliberately, per workload, is usually the only way to meet the deadline without accepting the same problems in a new building.",
      },
      {
        title: "One provider versus several",
        body: "A single provider simplifies connectivity, identity and skills. Multiple providers improve negotiating position and resilience against one vendor's failure, at a real cost in networking, tooling and operational complexity. For most organisations this is a decision to revisit after the exit, not during it.",
      },
      {
        title: "Managed database versus self-managed",
        body: "A managed database removes patching, backup and failover work and constrains engine versions and extensions. Self-managing preserves control and transfers the operational burden to a team that is simultaneously migrating. The constraint should be specific and documented if it drives the choice.",
      },
    ],
    architecture: {
      intro:
        "A landing zone built before the workloads arrive, connectivity proven before the first cutover, and migration treated as a sequence of reversible waves rather than a single move.",
      layers: [
        {
          label: "Connectivity",
          nodes: ["Private interconnect", "VPN & private DNS", "Edge & WAF", "Partner routes"],
        },
        {
          label: "Landing zone",
          nodes: ["Accounts & guardrails", "Network segmentation", "Identity federation", "Logging baseline"],
        },
        {
          label: "Workloads",
          nodes: ["Rehosted servers", "Container services", "Managed databases", "Files & backup"],
        },
        {
          label: "Migration",
          nodes: ["Replication", "Wave runbooks", "Cutover tooling", "Validation & rollback"],
        },
      ],
      flows: ["private paths · route policy", "templates · policy as code", "replication · verified cutover"],
      choices: [
        {
          title: "Waves by dependency, not by department",
          body: "Grouping workloads by what they call keeps each wave independently testable and reversible. Departmental grouping feels tidier to stakeholders and splits systems that must change together.",
        },
        {
          title: "Connectivity before compute",
          body: "Proving private routes, DNS and identity against a test workload surfaces the integration problems early, when they are configuration changes rather than cutover incidents.",
        },
        {
          title: "Rollback kept live",
          body: "The previous environment stays recoverable through stabilisation, so a failed wave costs a change window rather than an outage and an escalation.",
        },
      ],
    },
    outcomes: [
      "An estate that leaves the facility on a planned schedule rather than a contract deadline.",
      "Connectivity and identity proven before workloads depend on them.",
      "Cutovers that are reversible for a defined stabilisation period.",
      "Retired hardware, circuits and licences removed from the run rate.",
      "Recovery objectives measured on the new platform.",
      "A target platform governed by code rather than by individual configuration.",
    ],
    capabilities: [
      "Data centre migration and wave planning",
      "Cloud landing zone and account design",
      "Hybrid networking and private connectivity",
      "Server, database and file migration",
      "Identity federation and access design",
      "Licensing and support assessment",
      "Backup, restore and failover testing",
      "Decommissioning and cost baseline",
    ],
    metaTitle: "Data Centre Exit & Cloud Migration | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: a data centre exit planned in dependency-ordered waves, with landing zones, proven connectivity, rehearsed rollback and full decommissioning.",
  },
  {
    slug: "post-acquisition-systems-consolidation",
    number: "09",
    title: "Consolidating Systems After an Acquisition",
    summary:
      "Bringing two estates into one operating model — identity, customer records, contracts and finance — without disrupting either side's customers.",
    division: "technology-advisory",
    solution: "enterprise-systems-integration",
    context: [
      "An acquisition doubles the customer base and adds a second ERP, a second CRM, another identity provider, a separate support desk and its own integration estate. The commercial case promises synergies within twelve months. Both customer bases have to keep working throughout, and staff on both sides are uncertain about which systems and roles will survive.",
      "The two engineering organisations also differ in practice: one deploys weekly from a pipeline, the other ships quarterly from a release branch. Neither set of standards is wrong, and neither can simply be imposed without losing the people expected to operate the result.",
    ],
    challenge: [
      "Consolidation is not a single migration. It is a set of decisions about which capabilities merge, which federate and which stay separate because a contract, a regulator or a genuine business difference requires it. Identity and customer records come first, because almost everything else depends on agreeing who a customer is and who may act on their behalf.",
      "A big-bang integration concentrates every risk into one weekend and assumes both organisations can be rebuilt at once. Indefinite coexistence is equally expensive: duplicate licences, two support models and staff maintaining parallel processes. The plan has to deliver synergy in stages while keeping both customer bases stable and contractual obligations intact.",
    ],
    difficulties: [
      {
        title: "The same customer appears twice",
        body: "Records created independently collide on identifiers, names and addresses, and merge decisions affect billing, entitlements and support history. Entity resolution needs business rules, review of ambiguous matches and a durable mapping that survives further acquisitions.",
      },
      {
        title: "Two identity models",
        body: "Different directories, authentication policies and privileged-access practices mean federating identity is both a technical and a governance task. Getting it wrong either locks people out or grants the wrong people access to the other side's data.",
      },
      {
        title: "Contracts and residency constrain consolidation",
        body: "Customer agreements, data-processing terms and regional requirements can prohibit moving records into the surviving platform. Some capabilities must federate rather than merge, and that has to be established before the target architecture is fixed.",
      },
    ],
    approach: [
      {
        phase: "01",
        title: "Establish joint governance",
        body: "A single programme with named decision rights across both organisations, an agreed definition of synergy, and a forum that can settle disagreements about standards and ownership quickly.",
        decisions: [
          "Name one accountable owner per capability before work starts.",
          "Separate cost synergy from capability consolidation so each can be tracked honestly.",
          "Agree which organisation's standards apply per domain, and where a new standard is needed.",
        ],
      },
      {
        phase: "02",
        title: "Baseline both estates and their obligations",
        body: "We inventory systems, contracts, data flows, licences and integration points on both sides, and record the constraints each brings. This is also where the real cost of coexistence becomes visible.",
        decisions: [
          "Record contractual and regulatory constraints per dataset before designing the target.",
          "Identify duplicate licences and support contracts with their end dates.",
          "Map which systems each customer segment actually depends on.",
        ],
      },
      {
        phase: "03",
        title: "Decide consolidate, federate or separate",
        body: "Each capability gets an explicit disposition. Consolidation is the default only where it is permitted, cheaper to operate and safe for both customer bases; federation is a legitimate outcome where obligations require it.",
        decisions: [
          "Federate identity first so access can be governed before data moves.",
          "Keep capabilities separate where contracts or residency forbid consolidation.",
          "Publish the disposition map so nobody plans against an assumption that was reversed.",
        ],
      },
      {
        phase: "04",
        title: "Sequence identity, customer, then finance",
        body: "Identity and access are unified so people can work across both estates under one policy. Customer records are resolved and migrated with review of ambiguous matches. Finance consolidation follows, once the customer and product data it depends on are trustworthy.",
        decisions: [
          "Do not migrate transactional data before identity and entitlements are agreed.",
          "Route ambiguous entity matches to a business reviewer rather than merging automatically.",
          "Keep historical records readable throughout, even where they are not migrated.",
        ],
      },
      {
        phase: "05",
        title: "Migrate with dual running",
        body: "Each migration runs both paths in parallel with reconciliation at business level, and customer-facing change windows are chosen around both sides' trading patterns. Support teams are briefed and staffed before the switch, not after it.",
        decisions: [
          "Reconcile balances, entitlements and open orders, not only record counts.",
          "Test the customer journey end to end on the merged platform, including support and billing.",
          "Brief front-line teams and publish escalation routes before each wave.",
        ],
      },
      {
        phase: "06",
        title: "Retire the redundant estate",
        body: "Duplicate systems, integrations and licences are retired as each capability completes migration, and the combined engineering organisation settles on one delivery model with a documented operating rhythm.",
        decisions: [
          "Close duplicate contracts and revoke retired access as part of the same wave.",
          "Adopt one delivery practice per domain, chosen on evidence rather than on seniority.",
          "Keep an acquisition playbook so the next integration does not start from scratch.",
        ],
      },
    ],
    tradeoffs: [
      {
        title: "Big-bang versus federated coexistence",
        body: "A single cutover is simpler to communicate and concentrates risk into one irreversible window. Federated coexistence spreads risk and extends duplicate cost. Staged consolidation, with federation where obligations demand it, is slower to present as a headline and far more likely to keep both customer bases.",
      },
      {
        title: "One ERP versus best-of-breed",
        body: "A single platform reduces integration surface and licence duplication at the cost of forcing one organisation's process onto the other. Best-of-breed preserves fit and maintains an integration estate forever. The decision belongs to the capability, with the operational cost of each option stated.",
      },
      {
        title: "Synergy pace versus customer stability",
        body: "Aggressive consolidation hits the commercial case earlier and risks visible disruption during the period customers are most likely to reconsider their supplier. Sequencing by customer impact costs time and protects the revenue the synergy was meant to improve.",
      },
    ],
    architecture: {
      intro:
        "One access model across both estates, a resolved customer master, and explicit federation where obligations prevent consolidation. Integration and reconciliation sit between the two sides until each capability has completed migration.",
      layers: [
        {
          label: "Identity & access",
          nodes: ["Federated SSO", "Directory sync", "Role mapping", "Privileged access"],
        },
        {
          label: "Customer & product",
          nodes: ["Customer master", "Product catalogue", "Entitlements", "Consent & residency"],
        },
        {
          label: "Finance & operations",
          nodes: ["ERP consolidation", "Billing & invoicing", "Procurement", "Combined reporting"],
        },
        {
          label: "Integration & control",
          nodes: ["API gateway", "Event backbone", "Reconciliation", "Data lineage"],
        },
      ],
      flows: ["federation · provisioning", "contracts · entity resolution", "reconciliation · lineage"],
      choices: [
        {
          title: "Identity federation before data migration",
          body: "Unifying access first means every subsequent migration happens under a known permission model, instead of creating a window where data moves faster than the controls around it.",
        },
        {
          title: "Entity resolution as a service",
          body: "Match, merge and survivorship rules live in one governed service with a durable identifier mapping, so later acquisitions reuse the logic rather than rebuilding it in each migration.",
        },
        {
          title: "Federate where obligations require",
          body: "A deliberate federated boundary is cheaper and safer than a consolidation that breaches a customer contract or a residency requirement, and it can be revisited when those terms change.",
        },
      ],
    },
    outcomes: [
      "One access model, so people and workloads are governed consistently across both estates.",
      "A resolved customer master with reviewed merges and a durable identifier mapping.",
      "Consolidation sequenced by dependency and customer impact rather than by contract date.",
      "Duplicate licences and systems retired with the cost removed from the run rate.",
      "Contractual and residency obligations preserved by explicit federation boundaries.",
      "An operating model the combined engineering organisation can sustain.",
    ],
    capabilities: [
      "Post-merger systems and integration strategy",
      "Identity federation and access governance",
      "Customer entity resolution and data migration",
      "ERP and CRM consolidation",
      "Contract and licence rationalisation",
      "Data residency and consent compliance",
      "Dual-running reconciliation",
      "Operating model and delivery standardisation",
    ],
    metaTitle: "Post-Acquisition Systems Consolidation | Engineering Scenario | Tunnels Global",
    metaDescription:
      "An illustrative engineering scenario: consolidating two estates after an acquisition with identity federation, entity resolution, staged migration and deliberate federation boundaries.",
  },
];

export const getScenario = (slug: string | undefined) =>
  scenarios.find((scenario) => scenario.slug === slug);

/** Scenarios featured on the homepage, in presentation order. */
export const homeScenarioSlugs = [
  "legacy-enterprise-modernisation",
  "enterprise-ai-operations",
  "infrastructure-for-scale",
] as const;
