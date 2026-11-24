export type InsightCategory =
  | "AI Implementation"
  | "Cloud & Infrastructure"
  | "Enterprise Architecture"
  | "Modernisation"
  | "Security & Reliability";

export interface Insight {
  slug: string;
  title: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  excerpt: string;
  dek: string;
  author: string;
  /** Editorial role, shown next to the author attribution. */
  authorRole?: string;
  /** Present only when the article has been materially revised after publication. */
  updated?: string;
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
  takeaways: string[];
  relatedService?: string;
  /** Explicit related reading. Falls back to category before recency. */
  relatedSlugs?: string[];
  relatedSolutions?: string[];
  featured?: boolean;
}

/**
 * Editorial attribution. Insights are written by the engineering team from
 * current work; they are not client case studies and are not presented as such.
 */
export const EDITORIAL_NAME = "Tunnels Engineering";
export const EDITORIAL_ROLE = "Engineering editorial";

export const editorialNote =
  "Insights are written by the Tunnels engineering team from current client work and internal research. They are editorial perspectives, not client case studies. No confidential engagement detail, client identity or unverified performance claim is published.";

export const insightCategories: InsightCategory[] = [
  "AI Implementation",
  "Cloud & Infrastructure",
  "Enterprise Architecture",
  "Modernisation",
  "Security & Reliability",
];

export const insights: Insight[] = [
  {
    slug: "why-enterprise-ai-pilots-stall",
    relatedSlugs: ["operating-model-for-ai-in-production", "designing-retrieval-that-holds-up"],
    relatedSolutions: ["enterprise-ai-implementation"],
    title: "Why enterprise AI pilots stall before production",
    category: "AI Implementation",
    date: "2026-10-14",
    readTime: "7 min read",
    excerpt:
      "The failure is rarely the model. It is the absence of an evaluation set, a data boundary and an owner for the system after launch.",
    dek:
      "Most enterprise AI programmes do not fail at the demonstration stage. They fail in the space between a working prototype and a system the business is willing to depend on.",
    author: "Tunnels Engineering",
    featured: true,
    relatedService: "ai-intelligent-systems",
    sections: [
      {
        paragraphs: [
          "A pilot usually begins well. A team selects a promising use case, connects a model to a sample of documents or records, and produces output that looks impressive in a review. The business case is approved on the strength of that demonstration. Then the programme slows.",
          "The reasons given are familiar: security review, data access, unclear ownership, integration complexity. They are symptoms of one underlying problem. The pilot was built to prove that a model can produce plausible output, not to prove that a system can operate reliably inside a process.",
        ],
      },
      {
        heading: "A demonstration is not an evaluation",
        paragraphs: [
          "The single most useful artefact in an AI programme is not the prototype. It is a representative evaluation set: real inputs, expected outputs, edge cases, and defined tolerances for error. Without it, nobody can answer the only question that matters at the approval stage — is this good enough for the work it will do?",
          "An evaluation set changes the conversation. It forces the business to define what correct means, exposes the cases where the model is unreliable, and provides a baseline that survives model changes. It also prevents the most expensive failure mode: shipping a system whose quality nobody can measure.",
        ],
        list: [
          "Collect real cases, including the awkward ones that never appear in demos.",
          "Separate cases where a wrong answer is inconvenient from those where it is unacceptable.",
          "Record a human baseline so the model is compared to current performance, not perfection.",
          "Re-run the same set whenever the model, prompt or retrieval strategy changes.",
        ],
      },
      {
        heading: "Data boundaries are an architecture decision",
        paragraphs: [
          "In a pilot, it is acceptable to copy a folder of documents into a vector store. In production, the same system must respect existing permissions. A support agent should not be able to retrieve a contract that its user cannot open. A regional team should not see another region's records.",
          "Retrofitting permission-aware retrieval is expensive, because it usually means changing ingestion, the index and the query path at once. Deciding it at the start costs a fraction of that. The same applies to retention, data residency and which third-party services are allowed to see which content.",
        ],
      },
      {
        heading: "Someone has to own the system",
        paragraphs: [
          "AI systems drift. Documents are updated, formats change, models are deprecated and usage patterns shift. A system without an owner degrades quietly until someone notices that quality has fallen and cannot explain when it started.",
          "Production readiness means named ownership, logging that records inputs and outputs where appropriate, visible cost per unit of work, a human escalation path for low-confidence cases, and a documented process for changing the model or prompt. None of these are exotic. They are ordinary operational discipline applied to a new class of component.",
        ],
      },
      {
        heading: "What we do differently",
        paragraphs: [
          "We start an AI engagement by selecting a process with a measurable cost and building the evaluation set before the interface. We design permissions and data flow with the same rigour as any other integration, and we define the operating model before launch rather than after.",
          "This makes the first release smaller and slower than a demo-driven programme. It also makes the second release possible, which is where the value actually accumulates.",
        ],
      },
    ],
    takeaways: [
      "Build the evaluation set before the prototype.",
      "Treat permissions and data boundaries as design constraints, not launch tasks.",
      "Define ownership, monitoring and escalation before production.",
      "Measure against a human baseline, not an ideal.",
    ],
  },
  {
    slug: "legacy-modernisation-without-big-bang-rewrite",
    relatedSlugs: ["custom-reporting-estate-is-a-modernisation-problem", "integration-layer-is-the-product"],
    relatedSolutions: ["enterprise-systems-modernisation"],
    title: "Legacy modernisation without a big-bang rewrite",
    category: "Modernisation",
    date: "2026-09-02",
    readTime: "8 min read",
    excerpt:
      "Rewrites fail for organisational reasons as much as technical ones. Incremental replacement keeps the business operating while the system changes.",
    dek:
      "The case for replacing a legacy system is usually obvious. The case for replacing it in one programme, on one date, is much weaker than it appears.",
    author: "Tunnels Engineering",
    relatedService: "enterprise-software",
    sections: [
      {
        paragraphs: [
          "Every legacy system was once a reasonable decision. It solved a real problem with the tools and constraints of its time. Years later, the constraints have changed and the system has become the thing that limits the business — but it also contains years of encoded business rules that nobody has documented.",
          "That combination is why full rewrites are so risky. The team rebuilding the system does not know which behaviours are essential, which are accidental, and which are workarounds that must not be reproduced. The old system is the specification, and it is written in a language nobody fully reads any more.",
        ],
      },
      {
        heading: "Find the seams before the target state",
        paragraphs: [
          "Modernisation begins with an honest map: what the system does, which data it owns, which integrations depend on it, which batch jobs run against it, and which user behaviours rely on undocumented quirks. This is unglamorous work and it determines whether the programme succeeds.",
          "The output is not a target architecture diagram. It is a set of seams — places where a component can be replaced while the rest of the system keeps running. Often the first useful deliverable is an API or anti-corruption layer in front of the legacy system, which creates a stable contract and makes everything afterwards safer.",
        ],
      },
      {
        heading: "Parallel running is a feature",
        paragraphs: [
          "Incremental replacement means old and new coexist for a period. That is usually described as a cost. In practice it is the most reliable risk control available: new behaviour can be compared against old behaviour on real traffic, discrepancies can be reconciled, and cutover becomes a decision rather than an event.",
          "Shadow traffic, dual writes, feature flags and reconciliation reports are not temporary scaffolding to be embarrassed about. They are how a business keeps its commitments while its systems change.",
        ],
      },
      {
        heading: "Give every legacy component a retirement condition",
        paragraphs: [
          "Programmes without decommissioning criteria tend to run indefinitely. Each legacy module should have a named owner, a condition under which it can be retired, and a date by which that is expected. When a condition is missed, that is a signal to review the plan rather than to extend it silently.",
          "This also changes the business case. Modernisation is not measured by how much new code was written. It is measured by how much old code, infrastructure and operational burden was removed.",
        ],
      },
      {
        heading: "Sequencing is the strategy",
        paragraphs: [
          "The order in which components are replaced determines risk, cost and how quickly the organisation sees benefit. We sequence by dependency, business value and reversibility — favouring changes that can be undone, and deferring irreversible data migrations until the surrounding system is stable.",
          "A modernisation roadmap that cannot be stopped halfway without losing the investment is not a plan. It is a bet.",
        ],
      },
    ],
    takeaways: [
      "Treat the legacy system as the specification and map its real behaviour.",
      "Create interfaces before replacing implementations.",
      "Use parallel running as risk control, not overhead.",
      "Define retirement conditions for every legacy component.",
    ],
  },
  {
    slug: "what-your-cloud-platform-actually-costs",
    relatedSlugs: ["what-platform-engineering-actually-buys", "reliability-is-an-engineering-discipline"],
    relatedSolutions: ["cloud-platform-transformation"],
    title: "What your cloud platform actually costs",
    category: "Cloud & Infrastructure",
    date: "2026-07-21",
    readTime: "6 min read",
    excerpt:
      "The invoice is the smallest part of the cost. Manual environments, unclear ownership and slow releases consume more than unused capacity.",
    dek:
      "Cloud cost conversations usually start with the monthly bill. The larger number is the engineering time spent working around a platform that was never designed as a product.",
    author: "Tunnels Engineering",
    relatedService: "cloud-platform-infrastructure",
    sections: [
      {
        paragraphs: [
          "A cloud bill is legible. It arrives monthly, it has a total, and it can be reduced with a set of well-known tactics: rightsizing, commitments, storage lifecycle rules. These tactics work, and they are usually where cost optimisation starts.",
          "But an unmanaged platform also imposes costs that never appear on an invoice: engineers creating environments by hand, releases that require a maintenance window, incidents diagnosed by reading logs across five consoles, and security reviews that cannot answer basic questions about what is exposed.",
        ],
      },
      {
        heading: "Attribution changes behaviour",
        paragraphs: [
          "The first useful step is not optimisation. It is attribution: which team, product and environment is responsible for which spend. Once cost is visible to the people who make architecture decisions, most waste is addressed without a central programme.",
          "Tagging alone is rarely sufficient. Account and subscription structure, shared platform costs and data transfer need an explicit allocation model. Without one, the finance conversation and the engineering conversation never connect.",
        ],
      },
      {
        heading: "Environments should be reproducible",
        paragraphs: [
          "Every manual change in a production environment is a small piece of undocumented state. Over time, environments diverge, and the only reliable description of production is production itself. This makes testing unreliable and recovery unpredictable.",
          "Infrastructure as code is not primarily about automation. It is about making the system legible: the environment definition becomes reviewable, diffable and recoverable. Drift detection keeps it honest.",
        ],
      },
      {
        heading: "Observability should follow the service",
        paragraphs: [
          "Host-level monitoring answers whether a machine is running. It does not answer whether customers can complete a payment. A useful observability model starts from the service and its objectives, then instruments the signals that indicate whether those objectives are being met.",
          "This also reduces cost. Most organisations collect far more telemetry than they use. Defining service objectives first makes it possible to retain the signal that matters and discard the rest.",
        ],
      },
      {
        heading: "The platform is a product",
        paragraphs: [
          "The most effective cloud programmes treat the platform as an internal product with users, a roadmap and an owner. Golden paths make the correct way the easy way: a new service gets logging, deployment, secrets and alerts by default rather than by effort.",
          "That is the difference between a cloud estate and a platform. One is a collection of resources. The other is a capability the business can rely on.",
        ],
      },
    ],
    takeaways: [
      "Measure cost by team, product and environment, not only in total.",
      "Reproducible environments reduce both risk and engineering overhead.",
      "Instrument services against objectives rather than hosts.",
      "Treat the platform as an internal product with an owner.",
    ],
  },
  {
    slug: "integration-layer-is-the-product",
    title: "The integration layer is the product",
    category: "Enterprise Architecture",
    date: "2026-06-05",
    readTime: "7 min read",
    excerpt:
      "Point-to-point connections accumulate into an estate nobody can change. A deliberate integration layer is what makes new capability possible.",
    dek:
      "Enterprises rarely suffer from a lack of systems. They suffer from the absence of a coherent way for those systems to exchange meaning.",
    author: "Tunnels Engineering",
    relatedService: "enterprise-software",
    sections: [
      {
        paragraphs: [
          "Integration is usually delivered as a side effect. A CRM needs customer data from an ERP, so a connector is written. A reporting tool needs order data, so a nightly export is added. Each decision is locally rational, delivered under time pressure, and owned by whoever needed it.",
          "Ten years later, the organisation has hundreds of connections, several of which are undocumented, some of which are load-bearing, and none of which share a data model. Launching a new product requires understanding all of them.",
        ],
      },
      {
        heading: "Point-to-point does not scale with change",
        paragraphs: [
          "The problem is not the number of connections. It is that each one encodes a translation: this system's customer is that system's account, this status maps to that stage, this identifier is authoritative here but not there.",
          "When the meaning is embedded per connection, a change in one system propagates unpredictably. When the meaning is defined once, in a canonical model with explicit contracts, change becomes a reviewable exercise.",
        ],
      },
      {
        heading: "Choose the interaction style deliberately",
        paragraphs: [
          "Request-response, events and batch all have legitimate uses. The mistake is choosing by habit. A pricing lookup is naturally synchronous. An order confirmation is naturally an event. A regulatory extract is naturally batch.",
          "What matters is that the choice is explicit and that failure behaviour is designed: retries, idempotency, ordering, dead-letter handling and replay. An integration that cannot describe what happens when a message is delivered twice is not finished.",
        ],
      },
      {
        heading: "Contracts are an organisational artefact",
        paragraphs: [
          "An API contract is a commitment between teams. That makes versioning, deprecation and documentation political as well as technical. Without an owner for the contract, consumers couple to implementation details and the interface becomes impossible to change.",
          "We treat contracts as products: versioned, documented, tested and reviewed by both producer and consumer. This is slower at the start and dramatically faster after the third consumer arrives.",
        ],
      },
      {
        heading: "Observability per flow",
        paragraphs: [
          "Aggregate uptime hides integration failure. A business needs to know that a specific flow — invoice to ledger, order to warehouse — is completing successfully and on time. That requires tracing across systems and ownership of each flow.",
          "When a flow fails, the question should be answerable in minutes: which message, which system, which version, and can it be replayed? If that question takes a day, the integration layer is not observable regardless of how much telemetry is collected.",
        ],
      },
    ],
    takeaways: [
      "Define shared meaning once rather than per connection.",
      "Choose interaction styles from the use case, not from habit.",
      "Treat API contracts as versioned products with owners.",
      "Monitor business flows end to end, not just system uptime.",
    ],
  },
  {
    slug: "designing-retrieval-that-holds-up",
    title: "Designing retrieval systems that hold up in production",
    category: "AI Implementation",
    date: "2026-04-16",
    readTime: "7 min read",
    excerpt:
      "Retrieval quality is determined by ingestion, permissions and evaluation — long before anyone tunes a model.",
    dek:
      "Most disappointing enterprise RAG systems are not model problems. They are information architecture problems with a language model attached.",
    author: "Tunnels Engineering",
    relatedService: "ai-intelligent-systems",
    sections: [
      {
        paragraphs: [
          "A retrieval-augmented system answers questions using your own content. The demonstration is easy: embed some documents, run a similarity search, pass the results to a model. Production is harder, because real content is messy, permissions are uneven and the questions people ask do not match the way documents are written.",
          "When such a system disappoints, the instinct is to change the model. Usually the more useful work is upstream.",
        ],
      },
      {
        heading: "Ingestion determines what can be found",
        paragraphs: [
          "Documents carry structure that naive ingestion destroys: headings, tables, defined terms, version history, cross-references. Flattening a policy document into uniform text chunks removes the context that makes a passage meaningful.",
          "Good ingestion preserves structure, records provenance, handles updates and deletions, and keeps the metadata needed for filtering. It is unglamorous and it accounts for more of the quality difference than most model choices.",
        ],
      },
      {
        heading: "Permissions must survive retrieval",
        paragraphs: [
          "In an enterprise, the same index usually serves users with different entitlements. If permissions are applied after retrieval, a system can leak the existence of a document even when it withholds the content. If they are ignored, it leaks the content.",
          "The reliable approach is to filter during retrieval using identity attributes derived from your existing access model, and to log both the query and the documents returned. This has to be designed with the index, not bolted on.",
        ],
      },
      {
        heading: "Evaluate retrieval separately from generation",
        paragraphs: [
          "When an answer is wrong, there are two possible causes: the right passage was not retrieved, or it was retrieved and misused. Measuring them together makes improvement guesswork.",
          "We evaluate retrieval on its own — recall of the correct passage for a set of real questions — and generation separately. That distinction usually reveals that the cheapest gains are in chunking, metadata and query expansion rather than in a larger model.",
        ],
      },
      {
        heading: "Design for the answer that should not be given",
        paragraphs: [
          "A useful enterprise knowledge system must decline well. It needs a path for questions outside its corpus, a way to signal low confidence, and a route to a human or a source document. Answers without provenance are difficult to trust and impossible to audit.",
          "The strongest systems we build show their sources by default. It changes user behaviour: people verify, correct and contribute, which improves the corpus over time.",
        ],
      },
    ],
    takeaways: [
      "Preserve document structure and provenance during ingestion.",
      "Apply permissions inside retrieval, not after it.",
      "Measure retrieval and generation as separate problems.",
      "Make declining and citing sources first-class behaviours.",
    ],
  },
  {
    slug: "reliability-is-an-engineering-discipline",
    title: "Reliability is an engineering discipline, not a monitoring tool",
    category: "Security & Reliability",
    date: "2026-02-24",
    readTime: "6 min read",
    excerpt:
      "Dashboards describe failure after it happens. Reliability comes from explicit objectives, controlled change and rehearsed recovery.",
    dek:
      "Buying observability does not make a system reliable. It makes its failures more visible, which is useful but not the same thing.",
    author: "Tunnels Engineering",
    relatedService: "cybersecurity-reliability",
    sections: [
      {
        paragraphs: [
          "Reliability work is often funded after an incident. The response is usually a monitoring upgrade: more dashboards, more alerts, a new tool. For a period, the organisation feels better informed. Then the next incident occurs in a place nobody instrumented, and the cycle repeats.",
          "The uncomfortable truth is that most reliability failures originate in change management, dependency assumptions and capacity, not in insufficient visibility.",
        ],
      },
      {
        heading: "Start from objectives",
        paragraphs: [
          "A service objective turns reliability from an opinion into a measurement. What proportion of requests must succeed? Within what latency? Over what window? Which journeys matter most to customers?",
          "Once those are agreed, prioritisation becomes possible. Work that protects a critical journey outranks work that improves a dashboard nobody uses. Error budgets also create a shared language between engineering and the business about how much change risk is acceptable.",
        ],
      },
      {
        heading: "Control change",
        paragraphs: [
          "Most outages are caused by a change. That makes deployment practice a reliability control: small batches, progressive rollout, automated rollback, schema changes decoupled from code, and a clear freeze policy for high-risk periods.",
          "Configuration deserves the same treatment. A manual production change is a deployment without review, rollback or history. Infrastructure as code closes that gap.",
        ],
      },
      {
        heading: "Rehearse recovery",
        paragraphs: [
          "A recovery plan that has never been executed is a hypothesis. Restore a database into a clean environment, time it, verify the data, and do it again next quarter. The first attempt usually reveals that the backup exists but the restore procedure depends on something that no longer does.",
          "The same applies to dependency failure. What happens when the payment provider is unavailable, the queue backs up, or the identity service is slow? These scenarios can be tested deliberately rather than discovered during an incident.",
        ],
      },
      {
        heading: "Security and reliability share foundations",
        paragraphs: [
          "Identity, least privilege, network boundaries and audit logging improve both. An environment where nobody has standing production access is easier to secure and easier to reason about during an incident. An environment with reproducible infrastructure is easier to recover and easier to audit.",
          "Treating them as one programme avoids duplicated work and the common failure where a security control is added that quietly makes recovery harder.",
        ],
      },
    ],
    takeaways: [
      "Define service objectives and error budgets before buying tools.",
      "Treat deployment and configuration change as reliability controls.",
      "Execute recovery procedures on a schedule, not on paper.",
      "Run security and reliability as one engineering programme.",
    ],
  },
  {
    slug: "operating-model-for-ai-in-production",
    title: "An operating model for AI systems in production",
    category: "AI Implementation",
    date: "2024-11-19",
    readTime: "11 min read",
    excerpt:
      "Launch is the point at which an AI system starts to change. What keeps it honest is an operating model: ownership, evaluation cadence, cost control and a defined path for change.",
    dek:
      "The engineering work to get a model into production is visible and funded. The work to keep it useful for the next two years usually is not, and that is where most programmes lose the value they built.",
    author: "Tunnels Engineering",
    relatedService: "ai-intelligent-systems",
    sections: [
      {
        paragraphs: [
          "An AI system in production is not a model with an endpoint. It is a pipeline of ingestion, retrieval or feature assembly, prompting, inference, post-processing, logging and human escalation, wrapped in a permission model and a cost budget. Every one of those parts can degrade independently, and most of them will.",
          "The operating model is the set of decisions that determines how the system is watched, who can change it, how changes are validated and who answers for its output. Teams that skip it tend to discover the gap slowly: quality falls, nobody can say when it started, and the only available response is to rebuild something that was working six months ago.",
        ],
      },
      {
        heading: "Accountability has to be a person",
        paragraphs: [
          "\"The business owns the model\" is not an owner. Neither is a steering committee. A production AI system needs one named accountable person who can answer three questions without preparation: what is this system for, how do we know it is working, and what happens when it is wrong.",
          "Ownership also needs a counterpart on the engineering side, because the failure modes are technical: retrieval drift after a content migration, a prompt that silently truncates long inputs, a provider changing default behaviour, a dependency upgrade altering output shape. These are ordinary operational concerns, and they are only managed if somebody is looking.",
        ],
      },
      {
        heading: "Three loops, running at different speeds",
        paragraphs: [
          "A healthy AI system runs three distinct feedback loops. The evaluation loop runs on every change and answers whether quality moved. The product loop runs weekly and answers whether people are using the output and correcting it. The change loop runs continuously and answers what is being altered, by whom, with what evidence.",
          "Conflating them is a common mistake. Teams that only measure usage ship confident-sounding systems nobody trusts; teams that only measure offline quality optimise for a test set that no longer resembles production traffic. The loops have different owners, different cadences and different artefacts, and each needs to exist explicitly.",
        ],
        list: [
          "Evaluation: a fixed set of representative cases, re-run on every model, prompt or retrieval change.",
          "Product: accept, edit and reject rates on real work, reviewed with the people doing that work.",
          "Change: a versioned record of prompts, model versions, retrieval configuration and the reason for each change.",
        ],
      },
      {
        heading: "Cost is a design constraint, not a finance surprise",
        paragraphs: [
          "Inference cost behaves unlike traditional infrastructure cost: it scales with usage, varies by input length, and can change under you when a provider re-prices or deprecates a model. A system whose unit economics were assumed at pilot scale can become unaffordable at adoption scale without any single decision being wrong.",
          "Treating cost as a design constraint means knowing the cost per unit of work from the first release, setting a budget per workflow, and instrumenting the system so the number is visible to the engineers who can influence it. Routing routine cases to a smaller model, caching deterministic outputs, batching offline work and capping context are engineering decisions with a direct financial effect.",
        ],
      },
      {
        heading: "Interfaces that assume the model can be wrong",
        paragraphs: [
          "The most reliable production AI systems are designed around the expectation of error. They show their sources, they separate draft from decision, they make editing cheap and they never present a generated statement as verified fact. The interface absorbs uncertainty instead of hiding it.",
          "This matters for adoption as much as for safety. People trust a system that is honest about its confidence and easy to correct far more than one that is confidently wrong. Designing for correction also produces the training signal that makes the next version better.",
        ],
      },
      {
        heading: "A ninety-day operating plan",
        paragraphs: [
          "The plan after launch is usually thinner than the plan before it. We ask for three things in the first ninety days: a baseline measurement of quality and cost on real traffic, a named owner with a weekly review, and a small set of changes shipped through the evaluation harness rather than directly to production.",
          "That is deliberately modest. It establishes the muscle the system needs for its second year, when the interesting work begins: expanding coverage to harder cases, retiring the manual steps the pilot worked around, and proving the benefit in terms the finance function already understands. Programmes that skip this stage rarely reach it.",
        ],
      },
    ],
    takeaways: [
      "Name one accountable owner and one engineering owner before launch.",
      "Run evaluation, product and change loops separately and on purpose.",
      "Publish cost per unit of work from the first release.",
      "Design interfaces that make correction cheap and confidence visible.",
    ],
  },
  {
    slug: "what-platform-engineering-actually-buys",
    title: "What platform engineering actually buys you",
    category: "Cloud & Infrastructure",
    date: "2023-08-07",
    readTime: "9 min read",
    excerpt:
      "A platform is worth building when it removes decisions, not when it adds tooling. The measure is how long it takes a team to ship something safely.",
    dek:
      "Most platform programmes start with a technology choice and end with an internal service nobody is required to use. The ones that work start from the queue of work teams are waiting on.",
    author: "Tunnels Engineering",
    relatedService: "cloud-platform-infrastructure",
    sections: [
      {
        paragraphs: [
          "Ask an engineering organisation what slows it down and the answers are rarely about compute. They are about waiting: waiting for an environment, a security review, a production access request, a database, a decision about which of four approved patterns to use. Platform engineering exists to remove that waiting, and everything else is secondary.",
          "This reframing matters because it changes what gets built. A platform justified by consolidation builds one place to do everything. A platform justified by waiting builds the shortest safe path to production for the most common kind of service, then measures whether the queue got shorter.",
        ],
      },
      {
        heading: "Golden paths beat gates",
        paragraphs: [
          "A golden path is a supported, opinionated route from an empty repository to a running service with logging, secrets, deployment, alerting and ownership metadata already in place. Teams can leave it, but leaving costs them the support that comes with it.",
          "Gates work in the opposite direction. They block until a checklist is satisfied, which produces compliance theatre and a queue. Golden paths make the correct thing the fastest thing, which is the only reliable way to get consistent practice across dozens of teams with different priorities.",
        ],
        list: [
          "A repository template that produces a deployable service in under an hour.",
          "Environments created from a definition, not a ticket.",
          "Logging, metrics and tracing wired in by default rather than by effort.",
          "Secrets and identity handled the same way for every service.",
          "An obvious, documented way to request an exception.",
        ],
      },
      {
        heading: "Draw the ownership boundary explicitly",
        paragraphs: [
          "Platform programmes fail when nobody can say where the platform ends and the product team begins. Does the platform own the database or provision it? The network or the service mesh? The pipeline or the test suite? Vague boundaries produce duplicated work and quiet resentment in both directions.",
          "A useful boundary is expressed as a contract: here is what you get, here is what you must do, here is what we will not do. Write it down, publish it, and revisit it when the support load changes. The document is less important than the argument it forces.",
        ],
      },
      {
        heading: "Measure the platform, not its adoption",
        paragraphs: [
          "Platform teams often report adoption because it is easy to count. Adoption says nothing about value. The measures that matter are the ones the platform is supposed to move: lead time from commit to production, deployment frequency, change failure rate and time to restore, split by team and by service tier.",
          "Two supporting numbers are worth tracking alongside them: the proportion of new services that start on a golden path, and the time a team spends on work the platform was meant to remove. If that second number is not falling, the platform is a side project with a roadmap.",
        ],
      },
      {
        heading: "Staff it as a product team",
        paragraphs: [
          "A platform needs engineers who enjoy building for other engineers, a product owner who can prioritise a queue of internal requests, and a support rota with time budgeted for it. Without the last one, the team spends its capacity answering questions and never improves the path that generated them.",
          "It also needs a way to hear from users that is not an escalation. Office hours, a public backlog and short interviews with the teams furthest from the golden path are cheap and consistently more informative than a survey.",
        ],
      },
      {
        heading: "Where these programmes go wrong",
        paragraphs: [
          "The predictable failures are worth naming. Building a platform before understanding the workload. Choosing a technology and reverse-engineering a rationale. Treating migration as the goal rather than the cost of getting to the goal. Measuring the platform by how much of the estate it controls.",
          "The most common failure is subtler: the platform team is funded to build and not to operate, so the second year is spent firefighting the first year's abstractions. Budget the operating cost before the first commit, and the programme has a chance of surviving its own success.",
        ],
      },
    ],
    takeaways: [
      "Start from the queue of work teams are waiting on.",
      "Prefer golden paths with a documented exception route to gates.",
      "Write the platform contract down so ownership is arguable, not assumed.",
      "Measure lead time, change failure and restore time, not adoption.",
    ],
  },
  {
    slug: "data-contracts-between-teams",
    title: "Data contracts: making meaning explicit between teams",
    category: "Enterprise Architecture",
    date: "2025-03-11",
    readTime: "10 min read",
    excerpt:
      "Most integration defects are semantic, not technical. A data contract turns an implicit assumption about a field into something a pipeline can test.",
    dek:
      "The expensive failures in a data estate are rarely schema mismatches. They are two teams holding different beliefs about what a value means, both of them reasonable, and nobody noticing for a quarter.",
    author: "Tunnels Engineering",
    relatedService: "enterprise-software",
    sections: [
      {
        paragraphs: [
          "A pipeline that runs successfully is not the same as a pipeline that is correct. The job can complete, the row count can look plausible, the dashboard can render, and the number can still be wrong because a field that used to contain a gross amount now contains a net one after a tax change nobody announced.",
          "These defects are expensive for a structural reason: they are found by a human noticing an odd result, usually weeks later, and the investigation has to reconstruct history across systems that each believe they were behaving correctly.",
        ],
      },
      {
        heading: "What a contract actually contains",
        paragraphs: [
          "A data contract is an agreement between a producer and a consumer about a dataset: its fields and types, the meaning and units of each field, its keys and uniqueness, its freshness and completeness expectations, its null semantics, and the process for changing it. It lives with the producing system, not in a wiki that drifts.",
          "The semantic clauses matter more than the schema. \"Amount in minor units, net of tax, excluding refunds, in the transaction currency\" is a contract. `amount: decimal` is a shape. Almost every painful defect lives in the gap between the two.",
        ],
        list: [
          "Ownership: which team produces the dataset and who approves changes.",
          "Semantics: units, currency, time zone, inclusion and exclusion rules.",
          "Keys: what uniquely identifies a row and how late-arriving data is handled.",
          "Freshness: expected latency and the threshold at which consumers should distrust the data.",
          "Change policy: notice period, versioning and deprecation route.",
        ],
      },
      {
        heading: "A contract is only real if it is tested",
        paragraphs: [
          "Documented contracts become archaeology. Enforced contracts change behaviour. The enforcement point is the producer's pipeline: validation that the schema matches, that keys are unique, that required fields are present, and that distribution and volume sit inside an agreed range.",
          "Distribution checks are the ones teams underrate. A field can be present, correctly typed and semantically wrong: an ID that suddenly contains a different prefix, a status that gains an unexpected value, a timestamp that shifts by an hour after a daylight-saving change. Statistical assertions catch these before a consumer does.",
        ],
      },
      {
        heading: "Governance without a committee",
        paragraphs: [
          "Data governance programmes often begin with a council, a catalogue and a policy. None of those prevent a defect. What prevents a defect is a producer who cannot publish a breaking change without going through a review that a consumer can see.",
          "Keep the governance light and put it where the change happens: a pull request on the contract, a test that fails loudly, and a deprecation window agreed between the two teams. Central standards are useful for naming and cross-cutting conventions, not for approving individual fields.",
        ],
      },
      {
        heading: "Introducing contracts into an existing estate",
        paragraphs: [
          "Nobody starts with a clean estate. The practical approach is to begin where damage is expensive: the datasets feeding regulated reporting, financial reconciliation or customer-facing promises. Document those first, with the people who currently answer questions about them.",
          "Expect the first pass to surface disagreement rather than to produce documentation. Two teams describing the same field differently is the finding, and resolving it is the value. Contracts introduced as paperwork rather than as conflict resolution tend to be abandoned within a quarter.",
        ],
      },
      {
        heading: "What changes when contracts exist",
        paragraphs: [
          "The visible benefit is fewer silent breakages. The structural benefit is that change becomes a conversation between named owners with an agreed process, instead of an incident. New consumers onboard faster because the meaning of the data is written down and tested rather than passed on verbally.",
          "There is a second-order effect worth planning for: once meaning is explicit, duplicated datasets become obvious, and the organisation can start retiring the copies that exist only because nobody trusted the original. That is where data contracts start paying for themselves.",
        ],
      },
    ],
    takeaways: [
      "Contracts describe meaning and freshness, not just schema.",
      "Enforce contracts in the producer's pipeline, including distribution checks.",
      "Start with datasets that feed regulated or financial reporting.",
      "Treat the first disagreement surfaced as the deliverable.",
    ],
  },
  {
    slug: "custom-reporting-estate-is-a-modernisation-problem",
    title: "The custom reporting estate is a modernisation problem",
    category: "Modernisation",
    date: "2024-04-23",
    readTime: "9 min read",
    excerpt:
      "Hundreds of reports, each with its own logic and its own owner, are an application estate. They need the same treatment as the systems they read from.",
    dek:
      "Reporting grows sideways because it is cheap to add and expensive to remove. Eventually the organisation cannot agree on a number, and the argument is really about whose query is authoritative.",
    author: "Tunnels Engineering",
    relatedService: "enterprise-software",
    sections: [
      {
        paragraphs: [
          "Every organisation has a set of reports that matter, a larger set that somebody asked for once, and an unknown number that run on a schedule because turning them off would require knowing who reads them. The first set is small. The other two consume most of the effort.",
          "This is not a tooling problem, although it is usually framed as one. Moving the same reports to a newer platform preserves the logic, the duplication and the disagreement. The problem is that reporting has been treated as an output rather than as an application estate with owners, contracts and a lifecycle.",
        ],
      },
      {
        heading: "Two numbers, two definitions, one argument",
        paragraphs: [
          "When finance, operations and commercial each maintain a version of revenue, the organisation does not have a data quality issue. It has three products with the same name. Meetings about which number is right are a symptom of missing definitions rather than of bad engineering.",
          "Making the definition explicit is unglamorous and slow, because it requires someone with authority to decide. But until it happens, every dashboard, extract and model built on the number inherits the ambiguity, and the cost compounds with each new consumer.",
        ],
      },
      {
        heading: "Separate metrics from reports",
        paragraphs: [
          "A metric is a definition with an owner, a grain, a set of inclusions and a documented lineage. A report is a presentation of one or more metrics for an audience. Most reporting estates confuse the two, so a change in a report requires re-deriving the logic and a change in a definition has to be chased through dozens of places.",
          "Defining a small set of trusted metrics and building reports on top of them is the single highest-leverage move in this work. It reduces duplication, makes reconciliation a one-time exercise and gives the business a vocabulary that survives tool changes.",
        ],
        list: [
          "Agree the definition with the accountable business owner, in writing.",
          "Assign one implementation as authoritative and publish its lineage.",
          "Test the metric against a known period before consumers migrate.",
          "Deprecate competing implementations with a date, not a suggestion.",
        ],
      },
      {
        heading: "Retire by usage, not by decree",
        paragraphs: [
          "Attempts to clean up reporting usually start with an inventory and a mandate. The inventory is inaccurate within weeks and the mandate creates a shadow estate as teams export what they need before it disappears. Both outcomes are predictable.",
          "Instrument usage first. Then move the reports people actually open onto the trusted metric layer, and let the rest expire with notice to their named consumers. Retirement works when the replacement is already better, not when the removal is enforced.",
        ],
      },
      {
        heading: "Sequence the work like any other migration",
        paragraphs: [
          "The pattern is the same as system modernisation: map what exists, find seams, replace incrementally, run old and new in parallel where the output is decision-critical, and define retirement conditions. Reporting is often the best place to start because it is lower risk than transactional systems and produces visible improvement quickly.",
          "It is also a useful rehearsal for the harder work. A team that can agree a shared definition of a metric, test it and migrate consumers has demonstrated the organisational capability that a core system replacement will demand.",
        ],
      },
    ],
    takeaways: [
      "Treat reports as an application estate with owners and a lifecycle.",
      "Resolve definitions before choosing a platform.",
      "Build reports on a small set of trusted, tested metrics.",
      "Retire by usage and replacement, not by inventory and mandate.",
    ],
  },
  {
    slug: "incident-response-is-a-rehearsed-capability",
    title: "Incident response is a rehearsed capability",
    category: "Security & Reliability",
    date: "2023-11-30",
    readTime: "8 min read",
    excerpt:
      "The difference between a bad hour and a bad week is rarely tooling. It is whether people already know their role, their channel and their authority.",
    dek:
      "Incident response is learned under pressure, which is exactly the wrong time to discover that nobody knows who can make the decision to fail over.",
    author: "Tunnels Engineering",
    relatedService: "cybersecurity-reliability",
    sections: [
      {
        paragraphs: [
          "During an incident an organisation reveals its real structure: who can act without approval, who has access, who is trusted to speak to customers, and which dependencies were never as independent as the diagram suggested. None of that is visible in a runbook that has not been exercised.",
          "The usual response to a bad incident is to buy something. The more effective response is to practise, because most of the delay in a serious incident is coordination rather than diagnosis, and coordination is a skill that compounds.",
        ],
      },
      {
        heading: "Roles before tools",
        paragraphs: [
          "A functioning response needs three roles filled explicitly: someone directing the response and making trade-off decisions, someone investigating and communicating technical findings, and someone owning external communication. On small teams one person may hold two, but the roles still have to be named out loud.",
          "Ambiguity here is expensive. Two engineers independently restarting services, nobody updating the status page and a decision-maker unavailable for approval are all failures of role clarity, not of engineering skill. They are also cheap to fix before an incident and nearly impossible to fix during one.",
        ],
      },
      {
        heading: "The first fifteen minutes",
        paragraphs: [
          "Early decisions set the tone: declare, assign, establish a channel, and start a timeline. Declaring an incident feels like an overreaction until it is obviously late, and the cost of declaring early is a short conversation. Many organisations optimise for not looking alarmist and pay for it in recovery time.",
          "A written timeline is worth more than it appears. It gives the responder team a shared record, prevents repeated investigation of the same hypothesis, and produces the material for a review that is about the system rather than about people's recollections.",
        ],
        list: [
          "Declare early, name a responder in charge, open one channel.",
          "Record times and decisions as they happen, not afterwards.",
          "Stabilise before diagnosing. Customer impact outranks root cause.",
          "Give every stakeholder a cadence for updates, and keep it even when there is no news.",
        ],
      },
      {
        heading: "Communication is a control",
        paragraphs: [
          "Support, sales and leadership will find out something is wrong within minutes. If they do not hear it from the response team, they will construct their own explanation, and that explanation will reach customers. A predictable update cadence, even one that says nothing has changed, is a control against that.",
          "For regulated or customer-facing services, the same discipline extends to legal and compliance obligations. Knowing in advance who must be notified and within what window turns a legal risk into a checklist item.",
        ],
      },
      {
        heading: "Learning without blame theatre",
        paragraphs: [
          "A review that ends with \"human error\" has taught nothing. The useful question is why the system made the error easy: why the console allowed a destructive action without confirmation, why the alert fired after the customer noticed, why the runbook assumed a step that no longer exists.",
          "Blameless does not mean consequence-free; it means looking at the conditions that produced the outcome. Reviews should end with a small number of owned changes with dates, and those changes should be treated as reliability work rather than as a backlog afterthought.",
        ],
      },
      {
        heading: "Practise, then practise the awkward parts",
        paragraphs: [
          "A tabletop exercise costs an afternoon and exposes the gaps that matter: who has production access at 3am, whether the failover has been tested since the last change, whether the status page credentials live with someone on holiday. Run one per quarter, rotate participants, and vary the scenario.",
          "Then rehearse the recovery procedures themselves. Restore a database, exercise the runbook, time the failover. The first attempt is always slower and more surprising than expected, which is exactly why it should not be the attempt that happens during an incident.",
        ],
      },
    ],
    takeaways: [
      "Name the three response roles before you need them.",
      "Declare early and stabilise before diagnosing.",
      "Keep a fixed update cadence, including when there is no news.",
      "Run tabletop exercises and rehearse recovery quarterly.",
    ],
  },
  {
    slug: "model-selection-is-an-engineering-decision",
    title: "Model selection is an engineering decision, not a leaderboard",
    category: "AI Implementation",
    date: "2025-06-17",
    readTime: "10 min read",
    excerpt:
      "Public benchmarks measure tasks you do not have. Choosing a model means defining your task, your tolerance and your operational envelope, then testing against all three.",
    dek:
      "Teams routinely pick a model from a ranking, build around it, and discover months later that a smaller, cheaper model performs identically on their actual work.",
    author: "Tunnels Engineering",
    relatedService: "ai-intelligent-systems",
    sections: [
      {
        paragraphs: [
          "Benchmarks are useful for the research community and nearly useless for procurement. They measure performance on standardised tasks with standardised inputs, scored automatically. Your work has domain vocabulary, long context, messy formats, internal conventions and a definition of acceptable error that no leaderboard encodes.",
          "This does not make model choice unimportant. It makes it an empirical question about your workload, which means the first deliverable is not a shortlist. It is a small, honest test set drawn from the work the system will actually do.",
        ],
      },
      {
        heading: "Define the task and the tolerance",
        paragraphs: [
          "Before comparing anything, write down what the system must do and how wrong it may be. Extracting a date from an invoice has a different tolerance from summarising a clinical note. Classification with a human reviewer downstream has a different tolerance from an automated decision.",
          "Tolerance also has a shape. Is a wrong answer worse than no answer? Is a plausible but unsupported claim worse than an incomplete one? These distinctions determine the prompt, the retrieval design and the evaluation criteria, and they usually narrow the model choice far more than a benchmark table does.",
        ],
      },
      {
        heading: "Build a harness you can trust",
        paragraphs: [
          "A useful harness has fifty to two hundred real cases with expected outcomes, including the difficult minority that the business cares about most. Score it with a mix of exact checks and rubric-based review by someone who does the work. Keep the set fixed so results are comparable as you change things.",
          "Resist the temptation to grow it endlessly. A modest set that is genuinely representative and consistently applied beats a large set that nobody has reviewed. The value comes from the stability of the measurement, not the volume.",
        ],
        list: [
          "Sample cases from real traffic, including failures and near-misses.",
          "Record a human baseline so you compare against current practice.",
          "Score the output the business will see, not an intermediate artefact.",
          "Re-run the same harness for every candidate and every prompt change.",
        ],
      },
      {
        heading: "The operational envelope decides more than quality",
        paragraphs: [
          "Quality differences between frontier models on a well-scoped task are often smaller than the differences in latency, cost, context limits, rate limits and data handling terms. A model that is two points better on your harness but twice as slow may be the wrong choice for an interactive workflow.",
          "Add the commercial and legal envelope: where inference runs, what is retained, what the provider commits to on availability, and how much notice deprecation requires. These are procurement questions with engineering consequences, and they are much cheaper to resolve before the integration is built.",
        ],
      },
      {
        heading: "Design for replacement",
        paragraphs: [
          "Every model you choose will be superseded, re-priced or retired. The systems that survive this treat the model as one component behind an interface: prompt templates are versioned, provider-specific features are isolated, the harness runs in CI, and switching is a configuration change with a measurable outcome.",
          "This is also a cost strategy. Routing easy cases to a smaller model, escalating hard ones, and caching deterministic outputs can reduce spend substantially without touching quality, but only if the architecture allows routing at all.",
        ],
      },
      {
        heading: "When the smaller model wins",
        paragraphs: [
          "In our experience the smaller model wins more often than teams expect, particularly for extraction, classification, formatting and retrieval-grounded answering. The gains from a larger model concentrate in open-ended reasoning and unusual inputs, which are often precisely the cases that need a human anyway.",
          "The practical conclusion is unglamorous: test two or three candidates against your own cases, measure cost and latency alongside quality, and keep the harness so the next decision takes days rather than months.",
        ],
      },
    ],
    takeaways: [
      "Write the task and the error tolerance before shortlisting models.",
      "Use a fixed harness of real cases with a human baseline.",
      "Weigh latency, cost, context and data terms alongside quality.",
      "Isolate the model behind an interface so replacement is routine.",
    ],
  },
];

export const insightsByDate = [...insights].sort((a, b) => b.date.localeCompare(a.date));

export const getInsight = (slug?: string) => insights.find((insight) => insight.slug === slug);

export const formatDate = (value: string) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
