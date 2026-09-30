# SCOS Pro

**SCOS Pro (Smart Chief of Staff Pro)** is a persistent autonomous operating layer for a person's digital life.

It is designed to move beyond reactive AI assistants. SCOS Pro continuously understands the user's operational context, identifies what requires attention, plans work, executes permitted actions across connected systems, and escalates decisions that require human judgment.

> **The user becomes the supervisor, not the operator.**

## Vision

Professional digital life is fragmented across email, calendars, documents, communication systems, subscriptions, finances, research tools, and SaaS applications.

SCOS Pro is being built as the orchestration layer above those systems.

It should be able to:

- manage and triage email
- coordinate calendars and meetings
- prepare and maintain documents
- conduct continuous research
- monitor subscriptions and recurring commitments
- analyze financial activity
- identify inefficient patterns
- prepare decisions and recommendations
- execute authorized operational tasks
- maintain persistent context across workflows
- ask for human intervention only when policy, risk, or uncertainty requires it

SCOS Pro is not intended to be another chat interface with integrations attached. The core product is **persistent context + durable workflows + controlled autonomy + cross-system execution**.

## Product Model

SCOS Pro operates through five layers:

1. **Observe** — ingest permitted signals from the user's digital environment.
2. **Understand** — construct current context, memory, relationships, priorities, and constraints.
3. **Plan** — determine what should happen and why.
4. **Act** — execute approved actions through typed, scoped tools and durable workflows.
5. **Escalate** — request human approval when the action exceeds policy, risk, confidence, or authority thresholds.

This creates a continuous operating loop rather than a prompt-response loop.

## Core Principles

### Persistent, not session-bound

The system maintains durable operational context across days, weeks, and long-running workflows.

### Autonomous, not merely assistive

SCOS Pro is expected to complete work, not simply describe how a user could complete it.

### Policy before action

No model should have unrestricted authority over a user's connected accounts.

Every consequential action passes through explicit authorization, policy, risk, and audit controls.

### Human control remains explicit

Users define what SCOS Pro may observe, recommend, draft, execute automatically, or execute only after approval.

### Provider-independent intelligence

The system is designed around a model router rather than a single model vendor.

### Global from the beginning

The architecture assumes multi-region deployment, international users, enterprise identity, data residency requirements, localization, and regional provider differences.

## Target Capabilities

| Domain | Initial capability |
| --- | --- |
| Email | Triage, prioritization, drafting, follow-ups, thread intelligence |
| Calendar | Scheduling, rescheduling, conflict resolution, meeting preparation |
| Documents | Drafting, review, transformation, organization, artifact generation |
| Research | Continuous monitoring, synthesis, source tracking, intelligence briefs |
| Finance | Subscription monitoring, recurring-cost analysis, financial summaries |
| Tasks | Planning, prioritization, delegation, execution tracking |
| Memory | Preferences, decisions, relationships, episodic and semantic context |
| Automation | Durable multi-step workflows with retries and approval gates |
| Intelligence | Pattern detection, anomaly identification, operational recommendations |
| Governance | Policies, permissions, approvals, audit history, action ledger |

## Architecture

SCOS Pro is organized into three major planes.

### Experience Plane

- Next.js
- React
- TypeScript
- React Native + Expo
- Browser extension
- Approval inbox
- Notifications
- User-facing activity and audit views

### Control Plane

- Identity and tenant management
- Connector authorization
- Policy engine
- Approval engine
- Workflow orchestration
- Model routing
- Memory management
- Audit and action ledger
- Billing and entitlements

### Execution Plane

- Provider connectors
- Email workers
- Calendar workers
- Document processing
- Research workers
- Financial analysis workers
- Browser automation where permitted
- AI inference
- Retrieval
- Background jobs

See [docs/BUILD.md](docs/BUILD.md) for the complete architecture and implementation plan.

## Technology Baseline

| Layer | Technology |
| --- | --- |
| Web | Next.js, React, TypeScript |
| Mobile | React Native, Expo |
| Browser | Plasmo, TypeScript |
| Edge | Cloudflare |
| Cloud | AWS |
| Compute | Kubernetes / Amazon EKS |
| Workflow | Temporal Cloud |
| Event bus | NATS JetStream |
| Cache | Redis |
| Primary database | CockroachDB |
| Object storage | Amazon S3 |
| Full-text search | OpenSearch |
| Vector retrieval | Qdrant |
| Analytics | ClickHouse Cloud |
| Observability | OpenTelemetry, Grafana, Sentry |
| Identity | WorkOS + application authorization layer |
| Billing | Stripe |
| AI | Multi-model routing: OpenAI, Anthropic, Google |
| Infrastructure | Terraform/OpenTofu, Helm, Argo CD |
| CI | GitHub Actions |

The stack is intentionally modular. Individual infrastructure providers can be replaced behind internal interfaces without redesigning the product.

## Security Model

SCOS Pro will treat connected accounts as high-value security boundaries.

The platform will use:

- scoped OAuth grants
- encrypted credential/token storage
- KMS-backed envelope encryption
- tenant isolation
- region-aware data placement
- explicit action policies
- approval gates for consequential actions
- immutable audit records
- idempotent action execution
- workflow-level retries and compensation
- tool allowlists
- structured tool schemas
- model output validation
- continuous security testing

The AI model does not receive unrestricted credentials and does not directly own business authority.

**Models propose. Policies authorize. Workflows execute. Audit records prove what happened.**

## Autonomy Levels

SCOS Pro will support progressive autonomy:

- **Observe** — read and analyze, no external action.
- **Draft** — prepare an action without executing it.
- **Approve** — propose an action and wait for the user.
- **Bounded autonomy** — automatically execute actions explicitly covered by policy.
- **Delegated autonomy** — execute multi-step workflows within defined financial, operational, temporal, and system boundaries.

Autonomy is therefore a configurable security boundary, not a model setting.

## Repository Direction

The project is currently at the architecture-definition stage. The implementation will be developed incrementally around stable domain boundaries.

Planned top-level structure:

```text
SCOSpro/
├── apps/
│   ├── web/
│   ├── mobile/
│   └── extension/
├── services/
│   ├── api/
│   ├── router/
│   ├── policy/
│   ├── memory/
│   ├── search/
│   ├── workflow-worker/
│   ├── research/
│   ├── document-intelligence/
│   └── connectors/
│       ├── google/
│       └── microsoft/
├── packages/
│   ├── domain/
│   ├── sdk/
│   ├── ui/
│   └── config/
├── infra/
│   ├── terraform/
│   ├── kubernetes/
│   └── helm/
├── docs/
│   └── BUILD.md
└── .github/
    └── workflows/
```

## Development Philosophy

SCOS Pro will be built as infrastructure, not as a collection of AI demos.

That means:

- domain contracts before UI coupling
- deterministic workflows around nondeterministic models
- explicit state machines for consequential operations
- provider adapters behind stable interfaces
- tests around every autonomous action
- observability attached to every workflow
- reproducible infrastructure
- security controls designed before integrations become deeply coupled
- model providers treated as replaceable dependencies

## Status

**Architecture / foundation phase**

The repository currently contains the project definition and technical architecture. Implementation will proceed from the contracts and infrastructure documented in [docs/BUILD.md](docs/BUILD.md).

## Long-Term Direction

SCOS Pro is intended to become a general-purpose **personal operational layer** for knowledge workers and organizations.

The long-term system should not require users to constantly ask:

> "What should I do next?"

It should understand the operational state of their digital environment, identify what matters, execute what it is authorized to execute, and bring the user only the decisions that genuinely require them.

---

**SCOS Pro**  
Persistent intelligence. Controlled autonomy. One operational layer.
