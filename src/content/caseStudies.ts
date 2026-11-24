/**
 * Selected client work.
 *
 * Publication policy: product identity, description, interface and public
 * documentation are taken from the live product. Tunnels' role is stated
 * precisely for each record, including where the contribution was partial.
 * Internal architecture, infrastructure providers, contract values and
 * unaudited performance numbers are not published.
 */

export type CaseStudyCategory =
  | "Commerce & Marketplaces"
  | "Developer & Productivity Tools"
  | "Business Operations";

export interface CaseStudyBlock {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface CaseStudyDecision {
  decision: string;
  choice: string;
  tradeoff: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  category: CaseStudyCategory;
  /** Product name, as published by the product. */
  product: string;
  /** One-line description of what the product is. */
  productLine: string;
  title: string;
  shortTitle: string;
  summary: string;
  website: string;
  websiteLabel: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  /** True for the four projects presented first on the listing page. */
  featured: boolean;
  sector: string;
  platform: string;
  /** Short, factual statement of Tunnels' role. */
  role: string;
  roleSummary: string;
  /** Explicit boundary: what this record does and does not claim. */
  scopeNote: string;
  overview: CaseStudyBlock;
  context: CaseStudyBlock;
  challenge: CaseStudyBlock;
  constraints: string[];
  contribution: string[];
  architecture: { title: string; body: string }[];
  components: { layer: string; items: string[] }[];
  componentsNote: string;
  process: { phase: string; title: string; body: string }[];
  decisions: CaseStudyDecision[];
  results: { measure: string; status: string }[];
  resultsNote: string;
  lessons: string[];
  serviceSlugs: string[];
  solutionSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const caseStudyCategories: CaseStudyCategory[] = [
  "Commerce & Marketplaces",
  "Developer & Productivity Tools",
  "Business Operations",
];

const componentsNote =
  "Described from the product's public interface and documentation. Internal architecture, infrastructure providers and version details are not disclosed here.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "zura",
    number: "01",
    category: "Commerce & Marketplaces",
    product: "Zura",
    productLine: "AI-powered commerce on WhatsApp",
    title: "An AI commerce platform that sells inside the conversation customers already use",
    shortTitle: "Zura",
    summary:
      "A marketplace and seller operating system for African SMEs: buyers discover, compare and buy from multiple vendors in WhatsApp, and sellers run catalogue, orders and revenue from one dashboard.",
    website: "https://zura.africa",
    websiteLabel: "zura.africa",
    image: "/assets/work/zura.jpg",
    imageAlt: "Zura home page describing AI-powered commerce for African SMEs",
    imageCaption: "Zura home page, captured from the live product.",
    featured: true,
    sector: "Retail and SME commerce, Africa",
    platform: "Conversational marketplace, AI selling assistant and seller dashboard",
    role: "Product engineering and platform development",
    roleSummary:
      "Tunnels delivered the product engineering and platform development behind Zura: the buyer journey across WhatsApp, the seller dashboard, the assistant behaviour that turns a message into an order, and the order and payment records both sides depend on.",
    scopeNote:
      "This record covers the product engineering and platform development Tunnels delivered for Zura. Commercial performance figures quoted later are published by the product, not audited by Tunnels.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Zura is an AI-powered commerce platform for African SMEs. A buyer asks for what they need in a WhatsApp conversation, receives options from several vendors, compares prices and completes an order without installing an app. A seller gets a dashboard that carries catalogue, orders, payment status and sales reporting.",
        "Tunnels delivered the engineering behind that experience: the buyer surface, the seller tooling, the assistant integration and the commerce records underneath both.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "A large share of SME retail in African markets already runs on WhatsApp. The channel is where customers ask questions and where sellers negotiate, but it provides no catalogue, no order record and no way for a buyer to find a vendor they have not already heard of.",
        "The commercial case was therefore not to move sellers onto an app. It was to keep the conversation and build the missing commerce layer underneath it.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "The first constraint is behavioural: the buyer will not install anything. Discovery, comparison, variant selection and payment all have to work inside a chat thread.",
        "The second is data integrity. An assistant answering from a per-vendor catalogue has to reflect stock and price that change constantly, and it must not invent either. The third is order ownership: one buyer conversation can span several sellers, and each order must belong to exactly one of them, with its own payment state and fulfilment obligation.",
      ],
      list: [
        "Conversational discovery across a multi-vendor catalogue, with no app install.",
        "Assistant answers tied to current stock and price rather than plausible text.",
        "Order, payment and fulfilment state per seller, inside one buyer thread.",
        "Seller tooling simple enough to be used from a phone between other work.",
      ],
    },
    constraints: [
      "WhatsApp messaging rules: session windows and template messages constrain how a conversation starts and continues.",
      "Catalogue quality varies by seller, and price or stock often arrives incomplete.",
      "Payment and fulfilment remain the seller's responsibility, so the platform records state without owning the goods.",
      "Vendor data has to stay isolated: one seller must never see another's orders, margins or customer conversations.",
      "Any AI answer naming a price or stock level has to be traceable to catalogue data.",
    ],
    contribution: [
      "Buyer product surface: conversational discovery, comparison and ordering.",
      "Seller dashboard: catalogue management, order queue and revenue reporting.",
      "Assistant integration: replies grounded in live catalogue data, with order creation handled by deterministic code.",
      "Commerce model: per-seller order records, payment state and fulfilment tracking.",
      "Marketplace mechanics: seller onboarding, catalogue ingestion and cross-vendor search.",
    ],
    architecture: [
      {
        title: "The conversation is the storefront",
        body: "Discovery, comparison and checkout are conversation states rather than screens. The dashboard exists for the work a seller cannot do in chat: bulk catalogue edits, order triage and revenue review.",
      },
      {
        title: "Catalogue as the assistant's source of truth",
        body: "Product, price, variant and availability resolve from the seller's catalogue record at reply time. The assistant composes the answer; it does not supply the facts. Where stock is unset, the platform asks rather than assumes.",
      },
      {
        title: "One buyer thread, many seller orders",
        body: "A conversation belongs to the buyer; an order belongs to a seller. Separating those records keeps vendor isolation intact while allowing a single thread to produce several orders.",
      },
      {
        title: "Deterministic order creation",
        body: "The assistant proposes; order creation is an ordinary transactional write with validation, idempotency and a stored reference. A model response alone never changes order state.",
      },
      {
        title: "Reporting projected from orders",
        body: "Sales, pending orders and payment status are projections of order data, so the seller dashboard cannot drift from what actually happened.",
      },
      {
        title: "Payment and fulfilment handoff",
        body: "Payment intent and fulfilment status are tracked per order, with the seller responsible for delivery and the platform holding the record both parties rely on.",
      },
    ],
    components: [
      {
        layer: "Channel",
        items: ["WhatsApp Business messaging", "Session and template message handling", "Buyer identity per thread"],
      },
      {
        layer: "Buyer experience",
        items: ["Conversational product search", "Cross-vendor comparison", "Variant selection and order confirmation"],
      },
      {
        layer: "Seller tools",
        items: ["Catalogue and inventory management", "Order queue and triage", "Sales and payment reporting"],
      },
      {
        layer: "Commerce",
        items: ["Per-seller order records", "Payment state", "Fulfilment and delivery tracking"],
      },
      {
        layer: "Intelligence",
        items: ["Catalogue-grounded selling assistant", "Cross-vendor product retrieval", "Human handoff to the seller"],
      },
    ],
    componentsNote,
    process: [
      {
        phase: "01",
        title: "Model the vendor",
        body: "Seller onboarding and catalogue shape came before assistant work, because the assistant can only be as accurate as the catalogue behind it.",
      },
      {
        phase: "02",
        title: "Ground the assistant",
        body: "Retrieval over vendor catalogues, with price and stock resolved from records at reply time rather than carried in a prompt.",
      },
      {
        phase: "03",
        title: "Order path",
        body: "Order creation, payment state and fulfilment handoff were built and tested end to end before the buyer experience was tuned.",
      },
      {
        phase: "04",
        title: "Seller dashboard",
        body: "Reporting projections and order triage, designed around the phone use a seller actually has.",
      },
      {
        phase: "05",
        title: "Marketplace rollout",
        body: "Seller onboarding with support on catalogue quality, since discovery is only as good as the listings behind it.",
      },
    ],
    decisions: [
      {
        decision: "Conversation only, or conversation plus dashboard",
        choice: "Both: the conversation for buyers, the dashboard for seller operations.",
        tradeoff: "Two surfaces to maintain, in exchange for seller tooling that holds up at volume.",
      },
      {
        decision: "Let the assistant answer prices freely, or resolve them from records",
        choice: "Resolve every price and stock answer from catalogue records.",
        tradeoff: "More integration work and slightly less fluent replies, in exchange for answers that cannot misstate a price.",
      },
      {
        decision: "One marketplace cart, or orders owned per seller",
        choice: "Per-seller orders.",
        tradeoff: "A buyer may complete several payments in one conversation, in exchange for clean vendor ownership and settlement.",
      },
    ],
    results: [
      { measure: "Buyer discovery and ordering inside WhatsApp", status: "Live" },
      { measure: "Seller catalogue, order and revenue dashboard", status: "Live" },
      { measure: "Cross-vendor search within a single conversation", status: "Live" },
      {
        measure: "Response time and conversion improvements",
        status: "Published by Zura; varies by seller, not independently audited",
      },
    ],
    resultsNote:
      "Zura publishes its own performance figures on its site. They describe outcomes reported by sellers using the platform and are repeated here only as product-reported, not as audited results of this engagement.",
    lessons: [
      "In a conversational product, every deterministic step still has to exist behind the conversation. Fluency is the interface, not the system.",
      "Catalogue quality sets the ceiling on assistant quality, so onboarding sellers well is product work rather than operations overhead.",
      "Separating buyer and seller records early avoided a multi-tenant tangle later.",
      "If a seller cannot run the business from a phone, the platform has added to WhatsApp rather than replaced it.",
    ],
    serviceSlugs: ["ai-intelligent-systems", "enterprise-software", "cloud-platform-infrastructure"],
    solutionSlugs: ["enterprise-ai-implementation", "enterprise-systems-integration"],
    metaTitle: "Zura Case Study: AI Commerce on WhatsApp | Tunnels Global",
    metaDescription:
      "How Tunnels engineered Zura, an AI commerce platform where buyers discover and order from multiple vendors in WhatsApp and sellers run catalogue, orders and revenue from one dashboard.",
  },
  {
    slug: "postject",
    number: "02",
    category: "Developer & Productivity Tools",
    product: "Postject",
    productLine: "Email infrastructure and developer tools",
    title: "Email infrastructure that reports where every message actually landed",
    shortTitle: "Postject",
    summary:
      "A developer-first email API with inbox placement visibility, enforced authentication, dedicated sending infrastructure and a delivery trace for every message.",
    website: "https://postject.com",
    websiteLabel: "postject.com",
    image: "/assets/work/postject.jpg",
    imageAlt: "Postject home page with the headline that emails should reach the inbox",
    imageCaption: "Postject home page, captured from the live product.",
    featured: true,
    sector: "Developer tooling and email infrastructure",
    platform: "Sending API, delivery trace and deliverability dashboard",
    role: "Product engineering and platform development",
    roleSummary:
      "Tunnels delivered the product engineering and platform development: the sending API, the delivery trace pipeline, the stream model separating transactional from marketing mail, and the dashboards developers use to read placement and reputation.",
    scopeNote:
      "This record describes product engineering and platform development delivered by Tunnels. Latency and uptime figures quoted later are published by Postject for the service and are not audited by Tunnels.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Postject is email infrastructure for developers: an HTTP API for sending, and a record of where each message landed, which authentication checks it passed and how long delivery took.",
        "Tunnels delivered the engineering behind the sending path, the delivery trace, the stream model and the developer-facing reporting.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "Most email APIs report that a message was delivered and stop there. For a product team that answer is not actionable: a password reset can sit in spam while the API reports success, and diagnosing it means reading SMTP logs the provider does not expose.",
        "Postject was built on the position that deliverability is an engineering problem with observable inputs: authentication alignment, per-stream reputation and the receiving server's actual response.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "Placement is not one measurement. It is the result of DNS authentication, sending reputation, content and the receiving provider's filtering, and each of those fails differently. The platform had to capture enough of the SMTP exchange to explain an outcome rather than restate a status.",
        "The second problem is separation. A marketing campaign that damages sender reputation must not take password resets with it, which means streams with independent sending identity and independent reputation.",
      ],
      list: [
        "Explaining a delivery outcome, not only reporting success.",
        "Keeping transactional and marketing mail on separate reputation paths.",
        "Presenting protocol-level detail developers can act on within seconds.",
        "An API simple enough to integrate without shipping an SDK.",
      ],
    },
    constraints: [
      "Deliverability depends on DNS the customer controls, so the platform verifies rather than assumes.",
      "Per-message trace data is high volume and has to stay queryable.",
      "Sending reputation is per stream and per domain, so identity cannot be shared casually.",
      "Standard HTTP and JSON only, with no proprietary SDK requirement.",
      "An open sending API is an abuse target and needs controls from the first release.",
    ],
    contribution: [
      "Sending API: authentication, validation, acceptance and message identity.",
      "Delivery trace: MX resolution, SMTP conversation, authentication results and timing.",
      "Stream model: independent sending identity and reputation per mail class.",
      "Dashboard: placement, bounce, complaint and latency reporting per stream.",
      "Webhooks and event history for delivery outcomes.",
      "Developer experience: quickstart, documentation and message-level debugging.",
    ],
    architecture: [
      {
        title: "Send path separated from reporting",
        body: "The API accepts a message, resolves the recipient domain, performs the SMTP exchange and records the response. Reporting is a separate read path over those events, so a slow dashboard query cannot delay a send.",
      },
      {
        title: "Authentication verified per message",
        body: "DKIM signing, SPF alignment and DMARC policy are evaluated and recorded with the result. A misconfigured customer domain produces a visible failure instead of a silent spam placement.",
      },
      {
        title: "Streams as reputation boundaries",
        body: "Each stream has its own sending identity, so a marketing send cannot degrade the reputation transactional mail depends on. Limits and alerts are set per stream.",
      },
      {
        title: "Message identity as the unit of debugging",
        body: "Every accepted message carries an identifier linking its trace, authentication results, bounce or complaint and webhook delivery, which makes a single failure reproducible.",
      },
      {
        title: "Own sending infrastructure",
        body: "The platform operates its own SMTP sending rather than reselling another provider's capacity, which is what makes sender reputation and IP behaviour controllable.",
      },
      {
        title: "Placement visibility",
        body: "Inbox, promotions and spam outcomes are recorded per message and aggregated per stream, so a trend is visible before a customer reports missing mail.",
      },
    ],
    components: [
      {
        layer: "API",
        items: ["HTTP and JSON send endpoint", "API keys and scoped access", "Idempotent message identity"],
      },
      {
        layer: "Delivery",
        items: ["MX resolution", "SMTP exchange with retries", "Bounce and complaint handling"],
      },
      {
        layer: "Authentication",
        items: ["DKIM signing", "SPF alignment", "DMARC evaluation", "TLS transport"],
      },
      {
        layer: "Streams",
        items: ["Per-stream sending identity", "Per-stream limits", "Reputation monitoring"],
      },
      {
        layer: "Reporting",
        items: ["Delivery trace per message", "Placement, latency and bounce dashboards", "Webhooks"],
      },
      {
        layer: "Integrations",
        items: ["Documentation and quickstart", "MCP server for AI assistants"],
      },
    ],
    componentsNote,
    process: [
      {
        phase: "01",
        title: "Trace design",
        body: "The events captured per message were defined first, because every later feature reads from that record.",
      },
      {
        phase: "02",
        title: "Authentication",
        body: "DKIM, SPF and DMARC evaluation, with results surfaced per message rather than summarised at account level.",
      },
      {
        phase: "03",
        title: "Streams",
        body: "Separate sending identity, limits and reputation per mail class, tested against mixed transactional and campaign traffic.",
      },
      {
        phase: "04",
        title: "Developer surface",
        body: "API, documentation, quickstart and webhooks, written for a first send in minutes.",
      },
      {
        phase: "05",
        title: "Operations",
        body: "Abuse controls, reputation monitoring and alerting, with delivery incidents traceable to a message.",
      },
    ],
    decisions: [
      {
        decision: "Resell sending capacity or operate the sending path",
        choice: "Operate the sending infrastructure directly.",
        tradeoff: "Reputation management and abuse handling become permanent operational work, in exchange for control over placement and IP behaviour.",
      },
      {
        decision: "SDK-first or HTTP-first",
        choice: "HTTP and JSON first.",
        tradeoff: "Less ergonomic for some stacks, in exchange for integration without a dependency to maintain.",
      },
      {
        decision: "Report delivery status or placement",
        choice: "Record placement with the trace behind it.",
        tradeoff: "More data to store and present, in exchange for an answer a developer can act on.",
      },
    ],
    results: [
      { measure: "Send API with per-message delivery trace", status: "Live" },
      { measure: "Stream separation for transactional and marketing mail", status: "Live" },
      { measure: "Placement, latency and bounce reporting", status: "Live" },
      {
        measure: "Delivery latency and uptime",
        status: "Published by Postject for the service; not independently audited",
      },
    ],
    resultsNote:
      "Postject publishes latency and uptime targets on its own site. They are product-reported figures for the service rather than audited outcomes of this engagement.",
    lessons: [
      "Delivered is not a deliverability answer. The receiving server's decision is the only evidence that matters.",
      "Reputation separation has to be a product concept, not an operational habit.",
      "Protocol detail has to be readable in seconds, or developers go back to guessing.",
      "Operating your own sending path is a long-term commitment, not a launch decision.",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure", "cybersecurity-reliability"],
    solutionSlugs: ["cloud-platform-transformation", "technology-reliability-security"],
    metaTitle: "Postject Case Study: Email Infrastructure for Developers | Tunnels Global",
    metaDescription:
      "How Tunnels engineered Postject, a developer-first email API with inbox placement visibility, DKIM, SPF and DMARC verification, stream separation and a per-message delivery trace.",
  },  {
    slug: "listdem",
    number: "03",
    category: "Commerce & Marketplaces",
    product: "Listdem",
    productLine: "Digital classifieds and marketplace",
    title: "A classifieds marketplace built around posted intent, not just listings",
    shortTitle: "Listdem",
    summary:
      "A classifieds marketplace for Nigeria where people post what they need or what they have, browse by category and city, and connect with each other directly.",
    website: "https://listdem.com",
    websiteLabel: "listdem.com",
    image: "/assets/work/listdem.jpg",
    imageAlt: "Listdem marketplace home page with categories and recent listings",
    imageCaption: "Listdem marketplace, captured from the live product.",
    featured: true,
    sector: "Classifieds and local marketplace, Nigeria",
    platform: "Category-driven listings, search and moderation",
    role: "Product engineering and platform development",
    roleSummary:
      "Tunnels delivered the product engineering and platform development: listing creation across category schemas, location-aware discovery, ranking and sorting, and the moderation path that keeps the catalogue usable.",
    scopeNote:
      "This record covers product engineering and platform development delivered by Tunnels. Listing and transaction volumes are not published, and no marketplace performance figures are claimed.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Listdem is a digital classifieds marketplace for Nigeria. People post what they need or what they have, browse categories from vehicles and property to jobs and services, and contact each other directly.",
        "Tunnels delivered the engineering: the listing model, discovery and ranking, the moderation queue and the contact path between buyer and seller.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "Classifieds in the market are dominated by informal posting: social media groups, status updates and word of mouth. Discovery is poor, listings are duplicated, and a buyer cannot filter by city or category without scrolling.",
        "The platform's premise is that demand can be posted as well as supply. A buyer states what they are looking for, and sellers can respond to it.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "A two-sided marketplace starts cold. A buyer does not return without listings, and a seller does not post without an audience, so the first release had to make posting fast and make existing listings look credible.",
        "The second problem is quality. Categories, prices and locations arrive in inconsistent formats, and a marketplace without moderation fills with duplicates, contact spam and prohibited items.",
      ],
      list: [
        "Posting has to be quick enough to compete with a social media post.",
        "Category and location have to be structured, or filtering is impossible.",
        "Negotiable prices cannot be treated as clean numeric data.",
        "Moderation volume grows faster than a manual review team.",
      ],
    },
    constraints: [
      "Low-bandwidth devices and intermittent connectivity are the norm, not the exception.",
      "Listing media size and quality vary widely between sellers.",
      "Prices are often negotiable and stated as text, so filtering cannot assume a number.",
      "Location granularity differs by category: property is area-level, services may be city-wide.",
      "Contact details must not be exposed to scraping while still allowing a buyer to reach a seller.",
    ],
    contribution: [
      "Listing creation: per-category schema, media upload, price and location.",
      "Discovery: category browse, search, location filters and sort modes.",
      "Ranking: recommended, trending, newest and price ordering.",
      "Moderation: duplicate detection, prohibited categories and report handling.",
      "Contact path between buyer and seller.",
      "Marketplace operations tooling for review and category management.",
    ],
    architecture: [
      {
        title: "Category-driven schemas",
        body: "Each category carries the attributes that matter for it: year and mileage for vehicles, bedrooms and area for property, employment type for jobs. The listing form and the filters are generated from the same definition, so they cannot disagree.",
      },
      {
        title: "Location as a first-class filter",
        body: "Listings carry a city and, where the category supports it, a finer area. Discovery defaults to the buyer's city rather than the entire catalogue, which is what makes a national marketplace usable.",
      },
      {
        title: "Ranking separated from the listing record",
        body: "Recommended and trending are derived from engagement signals; newest and price are direct sorts. Keeping those paths separate means a ranking change never alters what a listing is.",
      },
      {
        title: "Moderation in the write path",
        body: "Listings are checked for duplicates, contact spam and prohibited items before they become visible. Reports route into the same queue, so patterns accumulate instead of being handled one at a time.",
      },
      {
        title: "Media sized for the grid",
        body: "Images are resized and served at the dimensions the browse view needs, which keeps discovery usable on slow connections.",
      },
      {
        title: "Direct contact, no escrow",
        body: "The platform connects buyer and seller; payment and delivery are arranged between them. Trust signals therefore carry more weight than a checkout flow would.",
      },
    ],
    components: [
      {
        layer: "Listings",
        items: ["Per-category schemas", "Media upload and processing", "Price and location", "Listing status"],
      },
      {
        layer: "Discovery",
        items: ["Search", "Category browse", "Location filters", "Recommended, trending, newest and price sorting"],
      },
      {
        layer: "Moderation",
        items: ["Duplicate detection", "Report handling", "Review queue", "Prohibited item rules"],
      },
      {
        layer: "Trust",
        items: ["Seller profile", "Listing history", "Report signals"],
      },
      {
        layer: "Contact",
        items: ["Buyer to seller messaging", "Controlled contact reveal"],
      },
      {
        layer: "Operations",
        items: ["Review tooling", "Category management"],
      },
    ],
    componentsNote,
    process: [
      {
        phase: "01",
        title: "Category model",
        body: "The category set and the attributes each one needs were agreed before the listing form existed, because the form and the filters both derive from them.",
      },
      {
        phase: "02",
        title: "Listing flow",
        body: "Posting, media handling and price entry, tested on the devices sellers actually use.",
      },
      {
        phase: "03",
        title: "Discovery and ranking",
        body: "Browse, search, location filters and the separate ranking paths, with relevance reviewed against real listings.",
      },
      {
        phase: "04",
        title: "Moderation",
        body: "Pre-publication checks and a review queue, with reporting wired into the same path.",
      },
      {
        phase: "05",
        title: "Launch and operations",
        body: "Category management and review tooling handed to the operating team, with the moderation policy written down alongside it.",
      },
    ],
    decisions: [
      {
        decision: "One generic listing schema or per-category attributes",
        choice: "Per-category attributes behind a shared listing record.",
        tradeoff: "More schema maintenance, in exchange for filters that are actually useful.",
      },
      {
        decision: "Rank by recency only or by engagement",
        choice: "Both, as separate ranking paths.",
        tradeoff: "More telemetry to collect, in exchange for surfacing listings a buyer is likely to want.",
      },
      {
        decision: "Moderate after publication or before",
        choice: "Before publication.",
        tradeoff: "Friction for sellers at posting time, in exchange for a catalogue buyers can trust.",
      },
    ],
    results: [
      { measure: "Listing creation across categories and cities", status: "Live" },
      { measure: "Search, category browse and location filtering", status: "Live" },
      { measure: "Moderation ahead of publication", status: "Live" },
      { measure: "Listing and transaction volumes", status: "Not disclosed" },
    ],
    resultsNote:
      "Listing and transaction volumes are not published. The platform is live and publicly browsable, which is the claim this record makes.",
    lessons: [
      "In classifieds the category model is the product; everything else is presentation.",
      "Moderation has to run before publication. Retrofitting it means rebuilding trust rather than adding a queue.",
      "Location filters do more for relevance in a local marketplace than ranking does.",
      "Direct contact keeps the platform light, but it moves trust work into profile and reporting design.",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure"],
    solutionSlugs: ["cloud-platform-transformation", "enterprise-systems-integration"],
    metaTitle: "Listdem Case Study: Classifieds Marketplace Engineering | Tunnels Global",
    metaDescription:
      "How Tunnels engineered Listdem, a Nigerian classifieds marketplace with per-category listing schemas, location-aware discovery, separated ranking paths and pre-publication moderation.",
  },
  {
    slug: "drawra",
    number: "04",
    category: "Developer & Productivity Tools",
    product: "Drawra",
    productLine: "Document and collaboration platform",
    title: "A permissioned workspace for assets, documents and credentials",
    shortTitle: "Drawra",
    summary:
      "A secure workspace where teams keep business assets, documents and credentials in structured drawers, with role-based access, an encrypted vault and a readable audit trail.",
    website: "https://drawra-frontend.pages.dev",
    websiteLabel: "drawra-frontend.pages.dev",
    image: "/assets/work/drawra.jpg",
    imageAlt: "Drawra home page describing secure asset management for modern teams",
    imageCaption: "Drawra home page, captured from the live product.",
    featured: true,
    sector: "Business operations and secure collaboration",
    platform: "Multi-tenant asset workspace, encrypted vault and audit trail",
    role: "Product engineering and platform development",
    roleSummary:
      "Tunnels delivered the product engineering and platform development: the workspace and permission model, the encrypted credential vault, the audit trail and the tenant isolation that lets one product serve many organisations.",
    scopeNote:
      "This record covers product engineering and platform development delivered by Tunnels. No security certification is claimed for Tunnels or for the product; the product's own security page is the source for its stated design position.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Drawra is a secure workspace for a team's business assets, documents and credentials. Assets live in structured drawers and folders, access is role-based, and secrets sit in an encrypted vault with controlled reveal.",
        "Tunnels delivered the engineering behind that model, including the isolation guarantees that make the product safe to sell to more than one organisation.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "Operations teams accumulate business-critical material across tools that were never designed to hold it: credentials in chat, documents in personal drives, and access granted by sharing a link. The result is a workspace nobody can audit.",
        "Drawra's position is that access control and traceability belong in the same product as the assets, not in a policy document beside them.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "Sensitive storage is easy to describe and difficult to make trustworthy. Encryption at rest, controlled reveal and audit logging are not features that can be bolted onto a workspace afterwards; they determine the data model.",
        "The second problem is tenancy. A product sold to many organisations has to guarantee that one tenant's data, permissions and audit history cannot be reached from another, including through search and sharing paths.",
      ],
      list: [
        "Credentials have to be encrypted at rest, with reveal access recorded.",
        "Permissions apply per resource and per action, not per workspace.",
        "Cross-tenant leakage is unacceptable in every code path, search included.",
        "External sharing must be scoped to specific resources rather than the whole workspace.",
        "Administrators need a readable record of who accessed what and when.",
      ],
    },
    constraints: [
      "Secrets are stored through a separate path from ordinary documents.",
      "Every reveal of a credential is an audited event.",
      "Role and resource together determine access, with least privilege as the default.",
      "Search must run inside the caller's tenant and permission scope.",
      "Audit records must be append-only and readable by an administrator.",
    ],
    contribution: [
      "Workspace model: drawers, nested folders, tags and metadata.",
      "Permission model: owner, admin and member roles evaluated per resource.",
      "Encrypted vault: storage, controlled reveal and reveal logging.",
      "Audit trail covering create, update, view and delete events.",
      "Tenant isolation across data access and search.",
      "Product surfaces: onboarding, invitations, search and activity views.",
    ],
    architecture: [
      {
        title: "Tenant identity on every record",
        body: "Every stored object belongs to an organisation, and access resolves from the authenticated session rather than a client-supplied identifier. Isolation is enforced in the data layer, not by filtering results afterwards.",
      },
      {
        title: "Permissions as policy, not conditionals",
        body: "Role and resource combine into one explicit decision per action. New surfaces ask the same question, so a permission rule cannot be bypassed by a newer endpoint.",
      },
      {
        title: "Secrets separated from documents",
        body: "Credentials are stored through a distinct path with their own encryption and reveal flow. Reveal is an audited event, which is the difference between a vault and an encrypted file.",
      },
      {
        title: "Audit trail as a product surface",
        body: "Access events are written as an append-only record and exposed to administrators, so logging is part of the asset model rather than an operational afterthought.",
      },
      {
        title: "Controlled sharing",
        body: "External access is granted per resource with an expiry, so a partner can be given one drawer without visibility into the workspace.",
      },
      {
        title: "Scoped search",
        body: "Search runs inside the caller's tenant and permission scope, so recall cannot become an access path.",
      },
    ],
    components: [
      {
        layer: "Workspace",
        items: ["Drawers, folders and tags", "Asset metadata", "Collaboration and activity"],
      },
      {
        layer: "Vault",
        items: ["Encrypted credential storage", "Controlled reveal", "Reveal audit"],
      },
      {
        layer: "Access",
        items: ["Owner, admin and member roles", "Per-resource permissions", "Invitations and external sharing"],
      },
      {
        layer: "Audit",
        items: ["Append-only activity history", "Administrator views"],
      },
      {
        layer: "Search",
        items: ["Tenant-scoped search across assets"],
      },
    ],
    componentsNote,
    process: [
      {
        phase: "01",
        title: "Model and permissions",
        body: "Tenant, resource and role model settled before interface work, because every later screen inherits those decisions.",
      },
      {
        phase: "02",
        title: "Vault",
        body: "Encrypted storage, the reveal flow and reveal logging, tested against an administrator's audit view.",
      },
      {
        phase: "03",
        title: "Workspace and search",
        body: "Drawers, folders, metadata and scoped search, with permission checks applied to every read path.",
      },
      {
        phase: "04",
        title: "Audit and administration",
        body: "Activity history, role management and external sharing, reviewed with the access model in front of us.",
      },
      {
        phase: "05",
        title: "Hardening and launch",
        body: "Isolation testing across tenants, then onboarding and account management for the first organisations.",
      },
    ],
    decisions: [
      {
        decision: "Single workspace per customer or a tenant-aware product",
        choice: "Tenant-aware from the first schema.",
        tradeoff: "More work in every query and index, in exchange for not rebuilding isolation later.",
      },
      {
        decision: "Show secrets on view or require an explicit reveal",
        choice: "Explicit reveal, recorded as an event.",
        tradeoff: "One extra action for the user, in exchange for an access trail that actually means something.",
      },
      {
        decision: "Share whole workspaces or individual resources",
        choice: "Individual resources with an expiry.",
        tradeoff: "More permission interface to design, in exchange for scoped external access.",
      },
    ],
    results: [
      { measure: "Tenant-aware workspace with per-resource permissions", status: "Live" },
      { measure: "Encrypted credential vault with logged reveal", status: "Live" },
      { measure: "Administrator-visible audit trail", status: "Live" },
      {
        measure: "Security certification",
        status: "None claimed; the product describes its design as structured for SOC 2, GDPR and ISO readiness",
      },
    ],
    resultsNote:
      "Readiness is a design position, not a certification. Neither Tunnels nor Drawra is presented here as certified.",
    lessons: [
      "Isolation is a data-layer property. Filtering by tenant in the interface is a bug waiting for a new endpoint.",
      "Logging a reveal is what makes a secret vault defensible rather than convenient.",
      "A permission policy has to be asked the same way from every surface.",
      "Selling to many organisations changes the schema, not only the pricing page.",
    ],
    serviceSlugs: ["enterprise-software", "cybersecurity-reliability", "cloud-platform-infrastructure"],
    solutionSlugs: ["technology-reliability-security", "cloud-platform-transformation"],
    metaTitle: "Drawra Case Study: Secure Asset and Credential Platform | Tunnels Global",
    metaDescription:
      "How Tunnels engineered Drawra, a multi-tenant workspace for business assets, documents and credentials, with per-resource permissions, an encrypted vault and an append-only audit trail.",
  },  {
    slug: "stitches-en-vogue",
    number: "05",
    category: "Commerce & Marketplaces",
    product: "Stitches En Vogue",
    productLine: "Fashion and digital commerce",
    title: "A luxury fashion house's storefront and bespoke commission flow",
    shortTitle: "Stitches En Vogue",
    summary:
      "A Lagos luxury fashion brand's online store: ready-to-wear collections, a bespoke couture enquiry path and styling consultation booking, built to carry the presentation standard of the house.",
    website: "https://sev.ng",
    websiteLabel: "sev.ng",
    image: "/assets/work/sev.jpg",
    imageAlt: "Stitches En Vogue storefront with the brand's editorial hero image",
    imageCaption: "Stitches En Vogue storefront, captured from the live site.",
    featured: false,
    sector: "Luxury fashion retail, Lagos",
    platform: "Brand storefront, collection commerce and bespoke enquiry",
    role: "Platform built by Tunnels for the client",
    roleSummary:
      "Tunnels built the platform for Stitches En Vogue as a client engagement: the storefront, collection and product presentation, the shopping bag and checkout path, and the bespoke and consultation enquiry flows. The brand, collection and imagery are the client's.",
    scopeNote:
      "This platform was built by Tunnels for the client. The fashion house, its collections, pricing and editorial imagery belong to Stitches En Vogue. Sales figures are not published.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Stitches En Vogue is a Lagos luxury fashion house working in ready-to-wear and bespoke couture. The site has to do two jobs: present collections to the standard the brand is judged by, and give a customer a clear route to buy or to commission.",
        "Tunnels built the storefront for the client, covering collection browsing, product presentation, the shopping bag and checkout path, and the bespoke and styling consultation enquiries.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "For a luxury label, an online store is judged as part of the brand rather than as a sales channel. Image quality, pacing and typography carry as much weight as the product grid, and a generic template undercuts the position the house has built.",
        "The commercial requirement is narrower but just as real: a customer who is ready to buy has to reach a bag and a checkout without the presentation getting in the way, and a customer who wants a commission needs a route that does not end in a contact form.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "Editorial presentation and commerce pull in opposite directions. Large imagery and slow transitions serve the brand; a customer on a phone wants a product, a size and a price quickly.",
        "The bespoke side is harder to model than the shop. A commission starts a conversation about fabric, fit and timeline, which is not a cart item. It needed its own path, distinct from ready-to-wear checkout, without splitting the site into two experiences.",
      ],
      list: [
        "Editorial imagery without a slow, unusable product journey.",
        "Clear separation between buying stock and commissioning a piece.",
        "Collections that can change with the season without a rebuild.",
        "A bag and checkout that behave predictably on mobile data.",
      ],
    },
    constraints: [
      "High-resolution editorial imagery has to stay fast on mobile connections.",
      "Collection structure changes seasonally and cannot require engineering work each time.",
      "Bespoke enquiries need enough detail to quote, without becoming a long form.",
      "The brand's typography and colour treatment are fixed by the client.",
    ],
    contribution: [
      "Storefront build: navigation, collection and product presentation.",
      "Commerce path: shopping bag, checkout and order confirmation.",
      "Bespoke and styling consultation enquiry flow.",
      "Content structure for seasonal collections and editorial imagery.",
      "Responsive behaviour and image delivery for mobile shoppers.",
    ],
    architecture: [
      {
        title: "Editorial shell, commerce inside",
        body: "The storefront leads with imagery, but product, size and price states are ordinary interface elements rather than part of the art direction. Presentation can change without touching the purchase path.",
      },
      {
        title: "Collections as content",
        body: "Collections are defined as content with their own imagery and ordering, so a seasonal change is an editorial task rather than a code change.",
      },
      {
        title: "Two intents, two paths",
        body: "Ready-to-wear goes to the bag; bespoke and consultations go to an enquiry that captures garment, occasion and timeline. The customer sees one brand either way.",
      },
      {
        title: "Imagery sized for the device",
        body: "Editorial images are delivered at the dimensions the layout needs, with the largest treatment reserved for the hero, which is where the brand benefit is highest and the cost is controlled.",
      },
    ],
    components: [
      { layer: "Storefront", items: ["Collection navigation", "Product pages", "Editorial hero and lookbook sections"] },
      { layer: "Commerce", items: ["Shopping bag", "Checkout", "Order confirmation"] },
      { layer: "Bespoke", items: ["Commission enquiry", "Styling consultation booking"] },
      { layer: "Content", items: ["Seasonal collections", "Product copy and imagery", "Brand pages"] },
      { layer: "Delivery", items: ["Responsive layouts", "Sized image delivery"] },
    ],
    componentsNote,
    process: [
      { phase: "01", title: "Brand and structure", body: "Navigation, collection structure and the presentation rules were agreed with the client before build." },
      { phase: "02", title: "Storefront", body: "Hero, collection and product presentation built against the brand's typography and imagery." },
      { phase: "03", title: "Commerce", body: "Bag, checkout and confirmation, tested on mobile devices and slow connections." },
      { phase: "04", title: "Bespoke", body: "Commission and consultation enquiries, with the questions needed to quote a piece." },
      { phase: "05", title: "Launch", body: "Content load, image preparation and a handover of the editorial workflow." },
    ],
    decisions: [
      {
        decision: "One blended journey or separate buy and commission paths",
        choice: "Separate paths from the same storefront.",
        tradeoff: "Two flows to maintain, in exchange for a checkout that stays simple and a commission process that captures what it needs.",
      },
      {
        decision: "Hard-code collections or model them as content",
        choice: "Collections as content.",
        tradeoff: "More structure up front, in exchange for seasonal changes without engineering time.",
      },
    ],
    results: [
      { measure: "Storefront with collection and product presentation", status: "Live at sev.ng" },
      { measure: "Shopping bag and checkout", status: "Live" },
      { measure: "Bespoke and consultation enquiries", status: "Live" },
      { measure: "Sales and traffic performance", status: "Client data; not published" },
    ],
    resultsNote:
      "Commercial figures for the store belong to the client and are not published here. The claim this record makes is that the platform is live and in use.",
    lessons: [
      "In luxury commerce, image weight is a design decision and a performance decision at the same time.",
      "A commission is not a cart item. Modelling it as one produces a worse experience for both.",
      "Seasonal content has to be editable by the people who run the brand.",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure"],
    solutionSlugs: ["cloud-platform-transformation", "enterprise-systems-integration"],
    metaTitle: "Stitches En Vogue Case Study: Luxury Fashion Commerce | Tunnels Global",
    metaDescription:
      "How Tunnels built the Stitches En Vogue platform: an editorial luxury storefront for ready-to-wear collections, a shopping and checkout path, and a bespoke couture enquiry flow.",
  },
  {
    slug: "okaneats",
    number: "06",
    category: "Commerce & Marketplaces",
    product: "okaneats",
    productLine: "Cloud restaurant and delivery",
    title: "A cloud restaurant where the menu, the order and the delivery are one system",
    shortTitle: "okaneats",
    summary:
      "A delivery-first restaurant platform: a menu built for home-style cooking, an ordering and checkout path, and delivery handled without a dining room to fall back on.",
    website: "https://okaneats.com.ng",
    websiteLabel: "okaneats.com.ng",
    image: "/assets/work/okaneats.jpg",
    imageAlt: "okaneats home page showing a spread of Nigerian dishes",
    imageCaption: "okaneats storefront, captured from the live site.",
    featured: false,
    sector: "Food service and delivery",
    platform: "Menu, ordering, checkout and delivery operations",
    role: "Platform built by Tunnels for the client",
    roleSummary:
      "Tunnels built the platform for okaneats as a client engagement: the menu and product presentation, the cart and checkout path, order capture and the delivery information the kitchen works from. The brand, recipes and food photography are the client's.",
    scopeNote:
      "This platform was built by Tunnels for the client. Menus, pricing, food photography and delivery operations belong to okaneats. Order volumes are not published.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "okaneats is a cloud restaurant: there is no dining room, so the website is the front of house. Customers browse the menu, build an order and have it delivered.",
        "Tunnels built the platform for the client, from menu presentation through cart and checkout, with the order captured in a form the kitchen and delivery side can work from.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "A delivery-only kitchen has no walk-in trade and no server to answer questions, which makes the site the entire customer experience. Menu clarity, portion and price information and a short checkout decide whether an order is completed.",
        "Without seating capacity as a constraint, demand can arrive faster than the kitchen can cook it. The platform has to represent what is actually available rather than accept every order and disappoint later.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "Food ordering is a high-intent, low-patience journey. The customer is hungry, often on a phone, and decides in a couple of minutes. Every extra step costs orders.",
        "The operational side is the harder half. An order has to reach the kitchen with enough detail to cook it, and delivery has to be arranged against availability, not against an optimistic promise made on the page.",
      ],
      list: [
        "A menu that reads well on a phone and answers portion and price questions immediately.",
        "A checkout short enough to complete one-handed.",
        "Order detail the kitchen can act on without a phone call.",
        "Delivery information that reflects the area served and the time actually needed.",
      ],
    },
    constraints: [
      "Menu items and availability change more often than a retail catalogue.",
      "Food photography is supplied by the client and has to remain the centre of the page.",
      "Delivery is limited by area and by kitchen capacity at the time of ordering.",
      "Orders arrive in bursts around meal times, so the order path has to stay simple under load.",
    ],
    contribution: [
      "Menu and product presentation, structured for quick scanning on mobile.",
      "Cart and checkout with delivery details and order confirmation.",
      "Order capture formatted for kitchen and delivery use.",
      "Content structure for menu categories, FAQs and reviews.",
      "Responsive layout and image delivery for phone-first ordering.",
    ],
    architecture: [
      {
        title: "Menu as the primary interface",
        body: "Categories, dishes, portions and prices are the navigation. Content is ordered for scanning rather than for browsing, because the customer arrives knowing roughly what they want.",
      },
      {
        title: "Short path from dish to order",
        body: "A dish can be added from the menu view, with quantity and notes edited in the cart. Checkout collects delivery details once and confirms the total before submission.",
      },
      {
        title: "Order detail the kitchen can use",
        body: "An order records items, quantities, notes and delivery information in one structure, so the kitchen and the delivery side read the same record rather than a forwarded message.",
      },
      {
        title: "Availability stated, not assumed",
        body: "The menu reflects what the kitchen is serving, and delivery information states the area served, so the page does not promise capacity the kitchen does not have.",
      },
    ],
    components: [
      { layer: "Menu", items: ["Categories and dishes", "Portions and pricing", "Availability"] },
      { layer: "Ordering", items: ["Cart", "Delivery details", "Checkout and confirmation"] },
      { layer: "Operations", items: ["Order record for the kitchen", "Delivery information"] },
      { layer: "Content", items: ["About", "FAQs", "Reviews", "Contact"] },
      { layer: "Delivery", items: ["Phone-first layout", "Sized food imagery"] },
    ],
    componentsNote,
    process: [
      { phase: "01", title: "Menu structure", body: "Categories, dish naming and portion information agreed with the client before build." },
      { phase: "02", title: "Ordering path", body: "Cart, delivery details and checkout, tested on the phones customers actually order from." },
      { phase: "03", title: "Kitchen record", body: "Order detail shaped with the kitchen, so an order arrives usable at peak service." },
      { phase: "04", title: "Content and launch", body: "Photography, FAQs and reviews loaded, with the menu editing workflow handed over." },
    ],
    decisions: [
      {
        decision: "Full restaurant site or an ordering surface",
        choice: "Menu-first, with brand content kept short.",
        tradeoff: "Less room for storytelling, in exchange for a path that gets to an order quickly.",
      },
      {
        decision: "Accept every order or state availability",
        choice: "State availability and delivery coverage.",
        tradeoff: "Some orders are lost at the page rather than after payment, in exchange for a kitchen that can meet what it accepts.",
      },
    ],
    results: [
      { measure: "Menu, cart and checkout", status: "Live at okaneats.com.ng" },
      { measure: "Order record usable by the kitchen", status: "Live" },
      { measure: "Delivery coverage and timing information", status: "Live" },
      { measure: "Order volume and repeat rate", status: "Client data; not published" },
    ],
    resultsNote:
      "Order volumes belong to the client and are not published. The claim this record makes is that the ordering platform is live and used for delivery orders.",
    lessons: [
      "For a delivery-only kitchen, the website is the dining room. Presentation and ordering carry the whole experience.",
      "Promising capacity the kitchen does not have costs more than stating availability plainly.",
      "The order record is a product surface for staff, not an internal detail.",
    ],
    serviceSlugs: ["enterprise-software", "cloud-platform-infrastructure"],
    solutionSlugs: ["cloud-platform-transformation", "enterprise-systems-integration"],
    metaTitle: "okaneats Case Study: Cloud Restaurant Ordering Platform | Tunnels Global",
    metaDescription:
      "How Tunnels built the okaneats platform for a delivery-only kitchen: a phone-first menu, a short cart and checkout path, and an order record the kitchen and delivery side work from.",
  },  {
    slug: "payrendr",
    number: "07",
    category: "Business Operations",
    product: "payrendr",
    productLine: "Payroll and HR suite",
    title: "A payroll and HR suite for businesses that have outgrown manual administration",
    shortTitle: "payrendr",
    summary:
      "A business operations suite covering payroll processing, staff management and inventory, delivered through a technical partnership with co-founder involvement rather than a single contracted build.",
    website: "https://payrendr.com",
    websiteLabel: "payrendr.com",
    image: "/assets/work/payrendr.jpg",
    imageAlt: "payrendr home page with payroll, staff management and supply chain sections",
    imageCaption: "payrendr home page, captured from the live product.",
    featured: false,
    sector: "Payroll, HR and business operations",
    platform: "Payroll processing, staff administration and inventory",
    role: "Technical partnership with co-founder involvement",
    roleSummary:
      "Tunnels' involvement in payrendr is a technical partnership with co-founder involvement, not a contracted build of the whole product. Engineering direction and platform work sit within that partnership; product ownership, commercial strategy and the wider operating team sit with the company.",
    scopeNote:
      "This record states a partnership rather than a vendor engagement. Business metrics, customer counts and payroll volumes are the company's and are not published here.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "payrendr is a payroll and HR suite for growing businesses: payroll processing with automated calculations and tax handling, staff management with attendance and performance tooling, and inventory and procurement alongside it.",
        "Tunnels participates as a technical partner with co-founder involvement. The relationship covers engineering direction and platform work rather than a defined delivery contract with a start and end date.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "Payroll is one of the few business functions where an error is both financial and personal. A late or incorrect salary damages trust immediately, and the reconciliation work that follows consumes the same people who should be running the business.",
        "Small and mid-sized employers usually start with spreadsheets and a bank file. That works until headcount, multiple pay components and statutory deductions make the spreadsheet unreviewable, and the person who built it becomes the only one who understands it.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "A payroll product is a correctness product. Calculations, deductions, approvals and payment files all have to agree, and the system has to show how a figure was reached when someone asks.",
        "The second problem is scope discipline. Payroll, attendance, performance and inventory are different problems that share a customer. Built as one undifferentiated application, each one is shallow; built as unrelated modules, the customer maintains the joins by hand.",
      ],
      list: [
        "Payroll runs that can be reviewed and reproduced, not just executed.",
        "Staff records that payroll, attendance and performance all read from.",
        "Approvals and audit detail for changes to pay.",
        "A module boundary that does not force the customer to reconcile by spreadsheet.",
      ],
    },
    constraints: [
      "Payroll calculations have to be deterministic and reproducible for a given period.",
      "Statutory deductions and tax rules change, so they cannot be scattered through the codebase.",
      "Salary and personal data are sensitive even inside a single customer organisation.",
      "Customers arrive with existing staff data in inconsistent formats.",
      "Businesses adopt modules at different speeds, so partial use has to remain coherent.",
    ],
    contribution: [
      "Technical direction for the platform, shared with the company's leadership as a co-founder partnership.",
      "Payroll run model: periods, components, deductions, review and approval.",
      "Staff record shared by payroll, attendance and performance.",
      "Rule handling for statutory deductions kept separate from payroll execution.",
      "Platform architecture spanning payroll, staff management and inventory.",
    ],
    architecture: [
      {
        title: "A payroll run is a record, not an action",
        body: "Each period produces a stored run with its inputs, component breakdown and approvals. A figure can be explained afterwards because the run that produced it still exists.",
      },
      {
        title: "One staff record, several consumers",
        body: "Payroll, attendance and performance read from the same staff record. The alternative, a copy per module, is where reconciliation work comes from.",
      },
      {
        title: "Rules separated from execution",
        body: "Statutory deductions and tax treatment are held as versioned rules applied by the payroll engine. A rate change is a rule update, not a code change scattered across the product.",
      },
      {
        title: "Approvals before money moves",
        body: "A run is reviewed and approved before payment, with the approver, time and changes recorded. Payroll that cannot be reviewed is a liability regardless of how fast it is.",
      },
      {
        title: "Modules with a shared core",
        body: "Inventory and procurement sit beside payroll rather than inside it, sharing the organisation, user and permission core. A customer can adopt one module without being forced through the others.",
      },
    ],
    components: [
      { layer: "Payroll", items: ["Pay periods and components", "Deductions and tax rules", "Review, approval and payment file"] },
      { layer: "People", items: ["Staff records", "Attendance tracking", "Performance reviews"] },
      { layer: "Operations", items: ["Inventory management", "Procurement", "Supply chain views"] },
      { layer: "Platform", items: ["Organisation and role model", "Audit detail on pay changes", "Trial onboarding"] },
    ],
    componentsNote,
    process: [
      { phase: "01", title: "Payroll correctness", body: "The run model and calculation path came first, because nothing else in the product matters if payroll cannot be trusted." },
      { phase: "02", title: "Staff record", body: "A single staff record designed for payroll, attendance and performance at once." },
      { phase: "03", title: "Rules layer", body: "Statutory rules separated from execution and versioned so a change is reviewable." },
      { phase: "04", title: "Adjacent modules", body: "Inventory and procurement built on the shared core, adoptable independently." },
      { phase: "05", title: "Onboarding", body: "Trial signup and data import, since most customers arrive with a spreadsheet to migrate." },
    ],
    decisions: [
      {
        decision: "Single application or modular platform",
        choice: "Modules on a shared organisation and permission core.",
        tradeoff: "More interface work to keep modules coherent, in exchange for customers adopting what they need.",
      },
      {
        decision: "Calculate on demand or store the run",
        choice: "Store every run with its inputs and breakdown.",
        tradeoff: "More data retained, in exchange for payroll that can be explained and audited after the fact.",
      },
      {
        decision: "Hard-code statutory rules or version them",
        choice: "Versioned rules applied by the engine.",
        tradeoff: "An extra layer to maintain, in exchange for rate changes that do not require a release across the product.",
      },
    ],
    results: [
      { measure: "Payroll processing with automated calculation", status: "Live at payrendr.com" },
      { measure: "Staff management, attendance and performance tooling", status: "Live" },
      { measure: "Inventory and procurement modules", status: "Live" },
      { measure: "Customer count and payroll volume", status: "Reported by the company; not published here" },
    ],
    resultsNote:
      "The product displays its own customer count on its site. It is a company-reported figure and is not treated here as an audited outcome of Tunnels' involvement.",
    lessons: [
      "A payroll product is judged on the one run that goes wrong, so reproducibility matters more than speed.",
      "Statutory rules change constantly. Keeping them out of the execution path is what makes that survivable.",
      "A co-founder partnership needs a different rhythm from a delivery contract: decisions are shared, so the engineering case has to be made in commercial terms.",
    ],
    serviceSlugs: ["enterprise-software", "technology-advisory"],
    solutionSlugs: ["enterprise-systems-modernisation", "strategic-engineering-partnerships"],
    metaTitle: "payrendr Case Study: Payroll and HR Platform Partnership | Tunnels Global",
    metaDescription:
      "Tunnels' technical partnership and co-founder involvement in payrendr, a payroll and HR suite covering payroll runs, staff management, attendance, performance and inventory.",
  },
  {
    slug: "rendezvouscare",
    number: "08",
    category: "Business Operations",
    product: "Rendezvouscare",
    productLine: "Wellness and lifestyle platform",
    title: "Contributing engineering capacity to a luxury wellness platform",
    shortTitle: "Rendezvouscare",
    summary:
      "A luxury lifestyle and well-being platform bringing therapy, life coaching, travel and events together in one place, where Tunnels contributed to the main engineering over a 12-month period.",
    website: "https://rendezvouscare.com",
    websiteLabel: "rendezvouscare.com",
    image: "/assets/work/rendezvouscare.jpg",
    imageAlt: "Rendezvouscare lifestyle imagery from the platform",
    imageCaption: "Rendezvouscare platform imagery, from the live site.",
    featured: false,
    sector: "Wellness and luxury lifestyle services",
    platform: "Service catalogue, booking and affiliate platform",
    role: "Partial engineering contribution over a 12-month period",
    roleSummary:
      "Tunnels contributed to the platform's main engineering over a 12-month period. This was a partial contribution to a wider engineering effort, not the delivery of the entire platform, and the platform's reported reach is not attributable to Tunnels alone.",
    scopeNote:
      "This record describes a partial engineering contribution over 12 months. The platform's reported 10,000+ users is platform-wide reach, not a metric attributable solely to Tunnels.",
    overview: {
      heading: "Project overview",
      paragraphs: [
        "Rendezvouscare is a luxury lifestyle and well-being platform. Services span therapy and life coaching through to travel, events and gifting, presented as one destination rather than a set of unrelated directories.",
        "Tunnels contributed engineering capacity to the platform's main build over a 12-month period, working within a wider engineering effort rather than owning the whole system.",
      ],
      list: [
        "Twelve months of engineering contribution inside an existing platform team.",
        "Work on the main platform rather than a side project or a single isolated feature.",
        "No claim of sole authorship, and no attribution of platform-wide reach to Tunnels.",
      ],
    },
    context: {
      heading: "Business context",
      paragraphs: [
        "Wellness and lifestyle services are usually sold through separate providers with their own booking, payment and communication. A customer assembling a gift or an occasion has to coordinate several of them.",
        "A platform that brings them together has to hold a broad catalogue while keeping each service's scheduling, pricing and provider details accurate, which is a data modelling problem before it is a design problem.",
      ],
    },
    challenge: {
      heading: "The problem",
      paragraphs: [
        "The catalogue is heterogeneous. A therapy session, a coaching programme, a trip and an event ticket do not share a shape, yet a customer needs to browse and buy them in one place.",
        "The second problem is operational: providers, availability and pricing change independently of the platform release cycle, so the catalogue has to be maintained by the business rather than by engineers.",
      ],
      list: [
        "One catalogue spanning services with genuinely different structures.",
        "Booking and enquiry paths that fit each service type.",
        "Provider-side maintenance without engineering involvement.",
        "Affiliate and waitlist flows alongside direct customer accounts.",
      ],
    },
    constraints: [
      "Work had to integrate with an existing codebase and a team already in flight.",
      "Service types differ enough that a single rigid booking model would not fit all of them.",
      "Health-adjacent services carry a higher bar for handling personal information.",
      "Content and catalogue changes are frequent and business-owned.",
    ],
    contribution: [
      "Engineering contribution to the platform's main build over a 12-month period.",
      "Work within the platform's existing architecture and release process.",
      "Feature delivery alongside the client's own engineering team.",
      "Technical input on catalogue and booking structure as the service range grew.",
    ],
    architecture: [
      {
        title: "A flexible service model",
        body: "Services are represented with a shared base and type-specific detail, so therapy, coaching, travel and events can sit in one catalogue without forcing identical fields onto all of them.",
      },
      {
        title: "Booking per service type",
        body: "Scheduling, enquiry and purchase behaviour follow the service type. The customer sees a consistent journey; the underlying flow matches what is being bought.",
      },
      {
        title: "Business-maintained catalogue",
        body: "Catalogue and content are edited by the operating team, which keeps the platform current without a release for every provider change.",
      },
      {
        title: "Accounts, affiliate and waitlist as separate paths",
        body: "Direct customers, affiliates and waitlist signups are distinct relationships with distinct permissions, which keeps marketing flows out of the customer record.",
      },
    ],
    components: [
      { layer: "Catalogue", items: ["Service categories", "Provider and location detail", "Pricing and availability"] },
      { layer: "Booking", items: ["Service-specific scheduling and enquiry", "Gifting and occasion flows"] },
      { layer: "Accounts", items: ["Customer accounts", "Affiliate programme", "Waitlist"] },
      { layer: "Content", items: ["Editorial and lifestyle sections", "Brand and partner content"] },
    ],
    componentsNote,
    process: [
      { phase: "01", title: "Codebase orientation", body: "Understanding the existing architecture, release process and conventions before contributing, so the work fitted rather than forked." },
      { phase: "02", title: "Catalogue and booking work", body: "Feature delivery on the main platform, reviewed through the client's own engineering process." },
      { phase: "03", title: "Ongoing contribution", body: "Twelve months of capacity alongside the client's team, with knowledge staying with the platform rather than with us." },
    ],
    decisions: [
      {
        decision: "Rebuild the catalogue model or extend it incrementally",
        choice: "Extend incrementally within the existing platform.",
        tradeoff: "Some structural compromises, in exchange for continuous delivery and no migration programme.",
      },
      {
        decision: "Single booking flow or per-service flows",
        choice: "Per-service flows behind a consistent customer journey.",
        tradeoff: "More flow variants to maintain, in exchange for bookings that match how each service is actually sold.",
      },
    ],
    results: [
      { measure: "Engineering contribution to the main platform", status: "Delivered over a 12-month period" },
      { measure: "Platform-wide registered users", status: "10,000+ reported by the platform; platform-wide reach, not attributable to Tunnels" },
      { measure: "Features delivered within the client's release process", status: "Shipped by the platform team" },
    ],
    resultsNote:
      "The 10,000+ user figure describes the platform's total reach. It is not a measure of Tunnels' contribution, and this record does not attribute it to Tunnels.",
    lessons: [
      "Contributing inside another team's codebase is a different discipline from building greenfield: conventions and review matter more than preference.",
      "Heterogeneous service catalogues need a shared base plus typed detail, not one universal record.",
      "Attribution matters. On a partial contribution, the honest claim is the work delivered, not the platform's total reach.",
    ],
    serviceSlugs: ["enterprise-software", "technology-advisory"],
    solutionSlugs: ["strategic-engineering-partnerships", "enterprise-systems-modernisation"],
    metaTitle: "Rendezvouscare Case Study: Wellness Platform Engineering | Tunnels Global",
    metaDescription:
      "Tunnels' partial engineering contribution over 12 months to Rendezvouscare, a luxury wellness and lifestyle platform spanning therapy, coaching, travel and events.",
  },
];

export const getCaseStudy = (slug?: string) => caseStudies.find((study) => study.slug === slug);

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export const caseStudiesForService = (serviceSlug: string) =>
  caseStudies.filter((study) => study.serviceSlugs.includes(serviceSlug));

export const caseStudiesForSolution = (solutionSlug: string) =>
  caseStudies.filter((study) => study.solutionSlugs.includes(solutionSlug));
