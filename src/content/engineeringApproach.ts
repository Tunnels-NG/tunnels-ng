/**
 * The Tunnels engineering method.
 *
 * These are described as practices, not certifications. Nothing here should be
 * read as an accreditation, a guarantee or an audit attestation.
 */

export interface ApproachStage {
  key: string;
  number: string;
  name: string;
  promise: string;
  body: string[];
  activities: string[];
  artefacts: string[];
  exit: string;
}

export const approachStages: ApproachStage[] = [
  {
    key: "discover",
    number: "01",
    name: "Discover",
    promise: "Establish what is actually true before proposing anything.",
    body: [
      "We start with the business context and the system as it exists: objectives, constraints, incident history, delivery process and the commercial reason the work is being funded. Recommendations made without that evidence are opinions with a delivery plan attached.",
      "Discovery is scoped to the decision at hand. For a contained problem it may be two weeks of code and infrastructure review. For a transformation programme it includes stakeholder interviews, dependency mapping and an assessment of the operating model that will have to run the result.",
    ],
    activities: [
      "Structured interviews with business, operations and engineering stakeholders",
      "Code, schema and dependency review",
      "Infrastructure, identity and access inspection",
      "Incident, change and delivery history analysis",
      "Constraint mapping: regulatory, contractual, operational, budgetary",
    ],
    artefacts: [
      "Current-state system and data-flow map",
      "Risk and constraint register with owners",
      "Options paper with cost, risk and reversibility",
      "Discovery findings presentation for decision-makers",
    ],
    exit: "A written, evidence-based view of the problem that the client accepts as accurate, including the parts we cannot yet determine.",
  },
  {
    key: "architect",
    number: "02",
    name: "Architect",
    promise: "Decide the expensive things deliberately.",
    body: [
      "Architecture is where irreversible decisions are made cheaply. We define boundaries, integration contracts, data ownership, infrastructure shape and the sequence of delivery, and we record why each choice was made and what it costs.",
      "The output is not a diagram set. It is a target design with a migration path from the current state, a set of decision records, and an explicit statement of what has been deferred and what that deferral will cost later.",
    ],
    activities: [
      "Domain and service boundary definition",
      "Integration and data contract design",
      "Infrastructure and environment topology",
      "Security, identity and access architecture",
      "Migration sequencing and coexistence strategy",
      "Non-functional requirements: performance, availability, recovery",
    ],
    artefacts: [
      "Target architecture and current-to-target transition plan",
      "Architecture decision records for consequential choices",
      "Integration contract specifications",
      "Delivery roadmap with dependencies and decision points",
      "Risk-adjusted estimate by phase",
    ],
    exit: "An architecture and roadmap signed off by the client's technical owner, with trade-offs documented rather than implied.",
  },
  {
    key: "engineer",
    number: "03",
    name: "Engineer",
    promise: "Build in increments that can be verified and reversed.",
    body: [
      "Delivery is structured so the system stays operable throughout. New components are introduced behind interfaces, legacy paths are retired deliberately, and each increment produces something that can be reviewed against real requirements.",
      "Engineering standards are agreed at the start and applied through review: domain boundaries respected, contracts versioned, tests written for behaviour that matters, and no configuration living only in someone's console history.",
    ],
    activities: [
      "Application, integration and data engineering",
      "Infrastructure as code for every environment",
      "Legacy modernisation and coexistence implementation",
      "Model, retrieval and evaluation implementation for AI systems",
      "Peer review, static analysis and dependency management",
      "Incremental demonstrations against agreed acceptance criteria",
    ],
    artefacts: [
      "Working software in version control with reviewed changes",
      "Infrastructure definitions and pipeline configuration",
      "Test suites covering critical behaviour",
      "Updated decision records and interface documentation",
      "Demonstration notes and acceptance evidence per increment",
    ],
    exit: "Each increment passes its acceptance criteria in a production-like environment before the next is started.",
  },
  {
    key: "validate",
    number: "04",
    name: "Validate",
    promise: "Test the failure modes, not only the happy path.",
    body: [
      "Validation covers functional correctness, performance under realistic load, security posture, recovery behaviour and operational readiness. Where an AI component is involved, quality is measured against a representative evaluation set rather than judged by demonstration.",
      "We are explicit about what has been tested and what has not. A system handed over with untested recovery is a system with an unknown recovery time.",
    ],
    activities: [
      "Functional and regression testing against acceptance criteria",
      "Performance and capacity testing at expected and peak load",
      "Security review: access paths, dependencies, secrets, exposure",
      "Failure-mode testing: dependency loss, partial writes, retries",
      "Backup and restore rehearsal with recorded timings",
      "AI evaluation against the agreed test set and error taxonomy",
      "Operational readiness review with the receiving team",
    ],
    artefacts: [
      "Test evidence and defect log with resolution status",
      "Performance results against defined thresholds",
      "Security findings with severity and remediation state",
      "Restore rehearsal record including actual elapsed time",
      "Evaluation report for AI-enabled components",
      "Signed operational readiness checklist",
    ],
    exit: "Acceptance criteria are met and evidenced, or the remaining gaps are explicitly accepted by the client with an owner and a date.",
  },
  {
    key: "deploy",
    number: "05",
    name: "Deploy",
    promise: "Release under control, with a way back.",
    body: [
      "Deployment is a planned operation with defined authority, communication and rollback. Changes move through environments in a repeatable pipeline, and production access follows least privilege with an audit trail.",
      "For migrations, cutover is rehearsed. For new systems, launch is staged with a defined observation period. In both cases, the decision to proceed sits with a named person who has the evidence in front of them.",
    ],
    activities: [
      "Environment promotion through the delivery pipeline",
      "Migration execution with reconciliation checkpoints",
      "Controlled cutover with a rehearsed rollback",
      "Change communication to operational and support teams",
      "Post-deployment verification against service objectives",
    ],
    artefacts: [
      "Deployment and rollback runbook",
      "Cutover plan with decision gates and owners",
      "Reconciliation report for data migrations",
      "Post-deployment verification record",
      "Change record and release notes",
    ],
    exit: "The system is live, verified against its acceptance criteria, and the rollback path remains available for the agreed stabilisation period.",
  },
  {
    key: "operate",
    number: "06",
    name: "Operate & Improve",
    promise: "Own the system, or leave someone equipped to.",
    body: [
      "Operational ownership is agreed before launch: who is alerted, who can change what, how incidents are escalated and what the service objectives are. Where Tunnels operates the system, that responsibility is contractual and measured. Where the client operates it, we hand over with evidence and stay available through a defined support period.",
      "Improvement is driven by measurement: incident patterns, error budgets, cost per unit of work and change failure rate. Work is prioritised against those signals rather than against the loudest request.",
    ],
    activities: [
      "Monitoring, alerting and service objective tracking",
      "Incident response with defined severity and escalation",
      "Capacity and cost review",
      "Patch, dependency and platform lifecycle management",
      "Quarterly reliability and delivery review",
      "Knowledge transfer and documentation maintenance",
    ],
    artefacts: [
      "Service objectives and alert routing",
      "Incident records and post-incident reviews",
      "Cost and capacity reports",
      "Maintained runbooks and architecture documentation",
      "Improvement backlog with owners",
    ],
    exit: "A named owner, a measured baseline and an agreed review cadence. Ownership is never left implicit.",
  },
];

export interface Discipline {
  title: string;
  body: string;
}

export const disciplines: Discipline[] = [
  {
    title: "Architecture documentation",
    body: "A living description of the system as built: context, containers, data flows, external dependencies and known limitations. Written for the engineer who joins in eighteen months, not for a slide.",
  },
  {
    title: "Technical decision records",
    body: "Consequential decisions are recorded with context, options considered, the choice made and its consequences. Records are dated and never rewritten; a reversal is a new record.",
  },
  {
    title: "Code quality",
    body: "Consistent conventions, small reviewed changes, explicit error handling and no hidden coupling. Quality is judged by how safely the code can be changed, not by stylistic preference.",
  },
  {
    title: "Automated testing",
    body: "Tests are written for behaviour the business depends on: contracts, calculations, permission rules and failure paths. Coverage percentage is a weak proxy and is not treated as a target.",
  },
  {
    title: "CI/CD",
    body: "Every change builds, tests and deploys through a pipeline. Environment promotion, artefact versioning and rollback are properties of the pipeline rather than of individual discipline.",
  },
  {
    title: "Security considerations",
    body: "Least privilege, short-lived credentials, input validation, dependency review and secrets management are design inputs. We do not claim certification or offer formal penetration testing; independent testing is scoped and acted on where required.",
  },
  {
    title: "Observability",
    body: "Logs, metrics and traces are designed alongside the feature, with service objectives tied to user-visible behaviour. Alerting routes to a named owner, and an alert without an action is removed.",
  },
  {
    title: "Infrastructure as Code",
    body: "Environments are declared, reviewed and reproducible. Console changes are treated as drift to be reconciled, and an environment that cannot be rebuilt from code is an incident waiting to happen.",
  },
  {
    title: "Deployment governance",
    body: "Production change has an owner, a window, a verification step and a rollback. Approval is proportionate to risk: a routine release should not require a board, and a schema migration should not be routine.",
  },
  {
    title: "Disaster recovery",
    body: "Recovery objectives are agreed with the business, and restores are executed and timed. A documented plan that has never been run is treated as untested, because it is.",
  },
  {
    title: "Documentation and knowledge transfer",
    body: "Runbooks, architecture notes, decision records and onboarding material are deliverables. Handover includes pairing on real operational tasks, not a read-only walkthrough.",
  },
  {
    title: "Ongoing engineering ownership",
    body: "Every system has a named technical owner for as long as it runs. Ownership covers change approval, dependency lifecycle and the decision to retire the system.",
  },
];

export const scopingNote =
  "Engagements can be scoped around a single stage, such as an assessment or an architecture review, or delivered as an integrated programme across all six. The sequence stays the same; the depth of each stage is set by the decision the client needs to take.";
