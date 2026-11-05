# SCOS Pro Audit and Execution Roadmap

**Baseline date:** 2026-11-05  
**Repository baseline:** documentation-only repository; no application implementation was present at the time of audit.

## 1. Audit Findings

### Existing
- README describing a personal autonomous operating layer.
- BUILD document covering an initial stack, workflows, connectors, memory, security, and phases.
- Git repository with two documentation commits.

### Missing
- explicit independence and proprietary model strategy
- council-based multi-perspective deliberation
- formal intent and decision records
- agent/capability federation
- explicit Celetixo integration contract
- explicit UTB research integration contract
- proactive detection and recipient routing
- organizational authority and department-level routing
- model research, training, post-training, and inference infrastructure
- measurable safety and decision-quality programme
- executable monorepo, application code, CI, tests, and infrastructure

### Architecture corrections
1. Treat the former stack as a proposal, not a final bill of materials. CockroachDB, OpenSearch, Qdrant, ClickHouse, NATS, Redis, EKS, and Temporal should be introduced only where their independent operational value is demonstrated. Do not launch with unnecessary distributed-system overhead.
2. Separate SCOS product independence from provider interoperability. Build an internal model gateway and model lifecycle capability while retaining external model adapters.
3. Make councils structured deliberation components, not an unbounded swarm of agents.
4. Make policy and authorization deterministic and external to model reasoning.
5. Make proactive communication an event-driven product capability with recipient authorization and interruption controls.
6. Keep Celetixo and UTB independent specialist systems behind versioned contracts.
7. Treat foundation-model training as a staged R&D programme with evidence gates, not an early branding claim.

## 2. Target System Domains

- Experience and command surfaces
- Identity, tenancy, and organization graph
- Intent and mandate management
- Context ingestion and normalization
- Memory and knowledge
- Model gateway and model lifecycle
- Council orchestration and deliberation
- Policy, authorization, and approval
- Capability registry and federation
- Durable workflow orchestration
- Execution and connectors
- Verification and evaluation
- Proactive detection and communication
- Audit, observability, and governance
- Billing, metering, and commercial controls

## 3. Independence Strategy

### Stage I — Independence of control
Own the product's contracts, agent orchestration, council system, policy, memory, routing, evaluation, and execution. External models can provide inference, but SCOS retains control of the process.

### Stage II — Independence of inference
Operate open-weight models on owned or controlled infrastructure for selected tasks. Establish model serving, routing, quantization, batching, safety evaluation, and cost/performance benchmarks.

### Stage III — Model adaptation
Build proprietary datasets and evaluation suites. Perform domain adaptation, fine-tuning, preference optimization, tool-use training, and distillation where justified.

### Stage IV — Proprietary model families
Research and train models with clearly defined capability targets. Start with narrow specialist models and progress only when data, compute, evaluation, and economics justify it.

### Stage V — Foundation-model programme
Pursue pretraining and broad model capability only after a dedicated research, data governance, compute, safety, and financing plan is approved. This is a separate major programme, not a prerequisite for shipping SCOS.

At every stage, external models remain available as collaborators and independent evaluators.

## 4. Implementation Sequence

### M0 — Product and architecture correction
- establish product constitution
- define councils and deliberation protocol
- define federation and interoperability contracts
- define proactive operations
- revise README and BUILD
- establish architecture decision records

### M1 — Executable engineering foundation
- monorepo and package boundaries
- lint, format, typecheck, tests
- CI
- environment and configuration validation
- typed domain contracts
- API service skeleton
- health/readiness endpoints
- structured logging and OpenTelemetry interfaces

### M2 — Core control plane
- identity and tenant boundaries
- user/org/role/mandate model
- intent envelope
- capability registry
- model gateway interface
- policy decision interface
- audit event schema

### M3 — Deliberation engine
- council registry
- council task contracts
- evidence packet
- independent assessments
- cross-examination
- synthesis and dissent
- decision record
- council evaluation suite

### M4 — Durable execution
- Temporal integration
- action proposal and authorization
- approval inbox
- idempotent execution
- verification and compensation
- workflow observability

### M5 — Specialist federation
- Celetixo adapter
- UTB adapter
- model provider adapters
- MCP/A2A and HTTP/event bridges as appropriate
- contract tests and provider conformance

### M6 — Context and memory
- connector framework
- Google and Microsoft read integrations
- event ingestion
- evidence/provenance model
- memory compiler
- hybrid retrieval

### M7 — Proactive intelligence
- subscriptions and monitoring
- change detection
- prioritization
- recipient resolution
- notification policy
- daily/weekly briefings

### M8 — First delegated outcomes
- software project delegation to Celetixo
- research monitoring and evidence update via UTB
- one personal workflow end-to-end
- one organization workflow end-to-end
- measured acceptance and reliability

### M9 — Model independence
- self-hosted inference
- model benchmarking and routing
- curated datasets
- fine-tuning and distillation
- proprietary specialist models

### M10 — Global readiness
- region-aware deployment
- residency enforcement
- enterprise identity and administration
- localization and international billing
- resilience and disaster recovery
- independent security and compliance assessment

## 5. First Vertical Slice

The first vertical slice should prove the distinctive SCOS thesis rather than build a generic chat interface.

**Scenario:** An organization is considering a new internal application.

1. A user or authorized signal creates an objective.
2. SCOS resolves the sponsor, stakeholders, mandate, constraints, and success criteria.
3. UTB is asked to research the domain, users, competitors, regulations, and existing solutions.
4. Councils independently evaluate intent, strategy, feasibility, safety/privacy, cost, and stakeholder impact.
5. The adversarial council attempts to falsify the preferred option.
6. Synthesis produces a decision record with evidence and dissent.
7. Policy checks authority, budget, data access, and approval requirements.
8. If approved, SCOS delegates a bounded engineering package to Celetixo.
9. Celetixo reports progress, commits, tests, verification, and risks.
10. SCOS independently validates delivery against acceptance criteria.
11. SCOS communicates material decisions and blockers to the sponsor and designated stakeholders.
12. Outcome data is recorded for future evaluation.

This tests research, deliberation, federation, authorization, software delivery, proactive communication, and verification in one coherent workflow.

## 6. Quality Gates

No milestone is complete merely because code exists.

Each milestone requires:
- architecture and threat-model review
- tests and contract tests
- observability
- failure and recovery behaviour
- tenant and permission isolation
- documented limitations
- reproducible local setup
- acceptance criteria
- a committed, reviewable milestone

## 7. Metrics

### Intelligence
- intent interpretation accuracy
- evidence relevance and freshness
- research source coverage
- inference calibration
- contradiction detection

### Governance
- decision quality against outcomes
- useful dissent rate
- adversarial defect discovery
- policy false-allow and false-deny rates
- escalation precision

### Execution
- workflow completion
- verified success
- duplicate action rate
- recovery success
- external provider reliability

### Proactivity
- material-event detection precision/recall
- correct recipient rate
- time-to-surface
- interruption burden
- missed escalation rate

### Independence
- percentage of critical workflows executable without external model APIs
- self-hosted inference quality/cost/latency
- model-provider substitution time
- internally owned evaluation coverage

## 8. Immediate Next Engineering Step

Implement M1 only after the domain contracts in this repository are reviewed and stable enough to encode. Start with the control-plane contracts and a minimal API service. Do not begin with a large agent swarm, all integrations, or a multi-region Kubernetes deployment.

The first goal is a small, testable, observable core that can represent intent, evidence, deliberation, policy decisions, capability delegation, and verified outcomes.


## 9. Governance Foundation Work Before Runtime Authorization

These are prerequisites and acceptance gates, not claims of completed runtime capability.

### G0 — Policy authority and manifest specification

- Separate constitutional constraints from strategic objectives.
- Define SPM ownership, ratification, activation, expiry and rollback.
- Define policy composition and conflict behavior.
- Define trusted scope-classification sources and ambiguity handling.
- Define multidimensional risk profile and policy mapping.
- Define non-consent, unavailable and insufficient-evidence states.
- Document Tier A precedence, Tier B invariant and Tier C unranked trade-off examples.
- Define policy-change proposal and human ratification process.

**Exit criteria:** policy owners, scope sources, composition rules and manifest structure are reviewed. No invented organization-wide priority values are treated as approved policy.

### G1 — Governance contracts and deterministic test vectors

Before runtime policy resolution, specify versioned contracts for common decision context, mandate-specific evidence references, structured arguments, verification results, disagreement classification, trusted scope, risk profiles, SPM, approvals, exceptions and policy activation evidence.

Add positive, negative, ambiguous, conflicting and stale-evidence test vectors. Prove that model consensus, missing responses and unratified policy cannot authorize actions.

### Dependency and sequencing correction

The scope registry, policy ownership and constitutional constraints must exist before the policy resolver can be authoritative. An SPM must be ratified before deployment-specific objective hierarchies are used for live decisions. Deliberation may be prototyped with advisory outputs before enforcement exists, but it must not execute consequential actions.

G0 and G1 refine the acceptance gates of M1–M5; they do not imply that the control plane, verification engine or policy resolver already exists.
