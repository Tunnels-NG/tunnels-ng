/**
 * Industry relevance.
 *
 * These pages describe where our engineering capabilities apply. They do not
 * assert completed sector engagements, regulatory approvals or certifications.
 * `experience` is deliberately explicit and must stay "none-published" until a
 * verifiable, client-approved sector engagement exists.
 */

export type SectorEvidence = "none-published" | "demonstrated";

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  context: string[];
  /** Technical capabilities we can apply to this sector's constraints. */
  capability: string[];
  /** Application areas that would need to be validated against the client's environment. */
  applications: string[];
  experience: SectorEvidence;
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Payment flows, ledger systems, reporting and customer platforms where correctness and auditability are not negotiable, and where change must survive regulatory and operational review.",
    context: [
      "Core systems that cannot be changed without regulatory and operational review.",
      "Data spread across payment providers, ledgers, risk tools and reporting environments.",
      "Third-party integrations where failure has an immediate customer impact.",
      "Reconciliation obligations that expose any inconsistency between systems.",
    ],
    capability: [
      "Transaction and ledger platform engineering",
      "Integration between core systems and external providers",
      "Cloud security and access architecture",
      "Reconciliation automation and data quality controls",
      "Audit-grade event history and change evidence",
    ],
    applications: [
      "Consolidating reconciliation across multiple payment providers",
      "Modernising reporting extracts without replacing the core ledger",
      "Introducing controlled automation into document-heavy onboarding",
    ],
    experience: "none-published",
  },
  {
    slug: "healthcare-health-technology",
    name: "Healthcare & Health Technology",
    summary:
      "Clinical and administrative systems where availability, confidentiality and data provenance carry direct consequences for patients and for the organisations accountable for their care.",
    context: [
      "Sensitive data that must be segmented and access-controlled by role.",
      "Clinical workflows supported by software that was never designed to interoperate.",
      "Reporting obligations across providers, payers and regulators.",
      "Availability expectations that leave little room for unplanned maintenance.",
    ],
    capability: [
      "Secure integration between clinical and administrative systems",
      "Document intelligence for unstructured clinical and claims content",
      "High-availability architecture and recovery planning",
      "Role-based access control and audit logging",
    ],
    applications: [
      "Permission-aware retrieval over clinical policy and protocol documents",
      "Extraction and validation of claims or referral documentation",
      "Decommissioning an end-of-life administrative system with a parallel-run period",
    ],
    experience: "none-published",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Operational technology, production data and supply systems where software reliability maps directly to uptime, and where the plant cannot pause for an IT change window.",
    context: [
      "Plant and operational systems separated from enterprise IT by design and history.",
      "Production data available in volume but rarely in a usable, timely form.",
      "Legacy applications embedded in processes that cannot stop.",
      "Vendor and machine interfaces with long replacement cycles.",
    ],
    capability: [
      "Operational data integration and event pipelines",
      "Legacy application modernisation without production stoppage",
      "Edge and cloud infrastructure design",
      "Reliability engineering for critical systems",
    ],
    applications: [
      "Streaming production events into an operational reporting platform",
      "Replacing a batch reconciliation process with an event-driven flow",
      "Introducing infrastructure as code for plant-adjacent environments",
    ],
    experience: "none-published",
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    summary:
      "Movement, inventory and fulfilment systems that depend on timely, consistent data across partners who each operate a different data model and service level.",
    context: [
      "Multiple carriers, warehouses and partners with different data models and service levels.",
      "Event tracking that is delayed, duplicated or lost between systems.",
      "Customer-facing visibility built on top of batch processes.",
      "Seasonal volume that exposes capacity assumptions in integration layers.",
    ],
    capability: [
      "Event-driven integration across partners",
      "Tracking and reconciliation systems",
      "API platforms for partner and customer access",
      "Forecasting and operational data pipelines",
    ],
    applications: [
      "Canonical shipment events with replay and dead-letter handling",
      "Partner-facing API with versioning and rate limits",
      "Operational dashboards fed by near-real-time events rather than overnight batches",
    ],
    experience: "none-published",
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    summary:
      "Infrastructure, metering and field operations where long asset lifecycles meet modern data expectations, and where reporting accuracy has regulatory consequences.",
    context: [
      "Asset and telemetry data distributed across generations of systems.",
      "Regulated reporting with strict accuracy and retention requirements.",
      "Field operations that depend on connectivity and offline capability.",
      "Security exposure across operational and enterprise networks.",
    ],
    capability: [
      "Telemetry ingestion and operational data platforms",
      "Modernisation of long-lived enterprise applications",
      "Secure cloud and network architecture",
      "Resilience and recovery engineering",
    ],
    applications: [
      "Retaining telemetry history in a queryable, cost-controlled store",
      "Modernising a reporting application while the source system remains in place",
      "Testing and documenting recovery for a regulated reporting service",
    ],
    experience: "none-published",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Client delivery, knowledge and billing systems where utilisation and institutional knowledge drive margin, and where growth is often constrained by coordination rather than demand.",
    context: [
      "Knowledge held in documents, inboxes and individual experience.",
      "Time, billing and delivery systems that do not share a data model.",
      "Growth constrained by manual coordination rather than demand.",
      "Client confidentiality requirements that limit what can be shared internally.",
    ],
    capability: [
      "Private knowledge systems with permission-aware retrieval",
      "Practice management and billing integration",
      "Workflow automation for delivery operations",
      "Data platforms for utilisation and margin reporting",
    ],
    applications: [
      "Internal knowledge assistant restricted to documents a user may already read",
      "Automated reconciliation between delivery records and billing",
      "Operational reporting that combines time, pipeline and delivery data",
    ],
    experience: "none-published",
  },
];

export const industryEvidenceLabels: Record<SectorEvidence, string> = {
  "none-published": "No sector engagement published",
  demonstrated: "Demonstrated sector experience",
};

export const industryDisclaimer =
  "Descriptions on this page distinguish between the capabilities we can apply and the sector engagements we can evidence. Where no verifiable engagement exists, the page says so rather than implying client experience.";
