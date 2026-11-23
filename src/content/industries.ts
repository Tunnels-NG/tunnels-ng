export interface Industry {
  slug: string;
  name: string;
  summary: string;
  context: string[];
  relevant: string[];
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Payment flows, ledger systems, reporting and customer platforms where correctness and auditability are not negotiable.",
    context: [
      "Core systems that cannot be changed without regulatory and operational review.",
      "Data spread across payment providers, ledgers, risk tools and reporting environments.",
      "Third-party integrations where failure has an immediate customer impact.",
    ],
    relevant: [
      "Transaction and ledger platform engineering",
      "Integration between core systems and external providers",
      "Cloud security and access architecture",
      "Reconciliation automation and data quality",
    ],
  },
  {
    slug: "healthcare-health-technology",
    name: "Healthcare & Health Technology",
    summary:
      "Clinical and administrative systems where availability, confidentiality and data provenance carry direct consequences.",
    context: [
      "Sensitive data that must be segmented and access-controlled by role.",
      "Clinical workflows supported by software that was never designed to interoperate.",
      "Reporting obligations across providers, payers and regulators.",
    ],
    relevant: [
      "Secure integration between clinical and administrative systems",
      "Document intelligence for unstructured clinical and claims data",
      "High-availability architecture and recovery planning",
      "Access control and audit logging",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Operational technology, production data and supply systems where software reliability maps directly to uptime.",
    context: [
      "Plant and operational systems separated from enterprise IT by design and history.",
      "Production data available in volume but rarely in a usable, timely form.",
      "Legacy applications embedded in processes that cannot stop.",
    ],
    relevant: [
      "Operational data integration and event pipelines",
      "Legacy application modernisation without production stoppage",
      "Edge and cloud infrastructure design",
      "Reliability engineering for critical systems",
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    summary:
      "Movement, inventory and fulfilment systems that depend on timely, consistent data across partners.",
    context: [
      "Multiple carriers, warehouses and partners with different data models and service levels.",
      "Event tracking that is delayed, duplicated or lost between systems.",
      "Customer-facing visibility built on top of batch processes.",
    ],
    relevant: [
      "Event-driven integration across partners",
      "Tracking and reconciliation systems",
      "API platforms for partner and customer access",
      "Forecasting and operational data pipelines",
    ],
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    summary:
      "Infrastructure, metering and field operations where long asset lifecycles meet modern data expectations.",
    context: [
      "Asset and telemetry data distributed across generations of systems.",
      "Regulated reporting with strict accuracy and retention requirements.",
      "Field operations that depend on connectivity and offline capability.",
    ],
    relevant: [
      "Telemetry ingestion and operational data platforms",
      "Modernisation of long-lived enterprise applications",
      "Secure cloud and network architecture",
      "Resilience and recovery engineering",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Client delivery, knowledge and billing systems where utilisation and institutional knowledge drive margin.",
    context: [
      "Knowledge held in documents, inboxes and individual experience.",
      "Time, billing and delivery systems that do not share a data model.",
      "Growth constrained by manual coordination rather than demand.",
    ],
    relevant: [
      "Private knowledge systems with permission-aware retrieval",
      "Practice management and billing integration",
      "Workflow automation for delivery operations",
      "Data platforms for utilisation and margin reporting",
    ],
  },
];
