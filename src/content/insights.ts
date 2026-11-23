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
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
  takeaways: string[];
  relatedService?: string;
  featured?: boolean;
}

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
];

export const getInsight = (slug?: string) => insights.find((insight) => insight.slug === slug);

export const formatDate = (value: string) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
