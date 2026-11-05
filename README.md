# SCOS Pro

**An independent intelligence and execution platform for individuals and organizations.**

SCOS Pro is being built as a persistent operating layer that understands intent, observes authorized environments, conducts research, deliberates across distinct perspectives, coordinates specialist agents and models, executes permitted work, verifies outcomes, and proactively communicates what matters.

It is not a chatbot with integrations attached. The conversational interface is one surface of a larger autonomous system.

> **Understand the objective. Deliberate on the best course. Coordinate the work. Verify the outcome. Surface what matters.**

## Product Direction

SCOS Pro is designed to operate across a person's and an organization's digital life, not a narrow productivity category.

It should be able to:

- manage email, calendars, meetings, documents, tasks, and subscriptions
- analyze financial and operational information within authorized boundaries
- conduct and continuously refresh research
- identify patterns, risks, inconsistencies, opportunities, and bottlenecks
- interpret business objectives and turn them into executable plans
- commission software and application development through specialist engineering systems
- coordinate people, models, agents, tools, and enterprise applications
- deliberate through multiple governance councils with different analytical mandates
- make evidence-backed recommendations and decisions
- execute authorized workflows and independently verify their outcomes
- proactively communicate with the user or the responsible person in an organization without waiting to be summoned

Software development is one delegated capability, not the product boundary.

## Independence and Interoperability

SCOS Pro is intended to become an independent AI platform with ownership of its orchestration, governance, policy, memory, model gateway, evaluation, execution, and eventually proprietary model research and inference.

Independence does not mean isolation. SCOS Pro must cooperate with external model providers and specialist systems while retaining control of the objective, authority, and overall workflow.

- **Celetixo** is the specialist autonomous software-engineering system. SCOS can delegate bounded software objectives, receive progress and artefacts, and independently validate delivery.
- **UTB** is the specialist continuous research and intelligence system. SCOS can commission research, subscribe to monitored topics, and consume source-backed findings and change alerts.
- **External models** provide bounded capabilities such as reasoning, coding, multimodal analysis, extraction, and independent critique. They are interchangeable providers, not SCOS's governing authority.

These remain distinct systems connected through explicit, versioned capability contracts.

## Multi-Council Deliberation

Important decisions must not depend on one model's first response.

SCOS convenes task-appropriate councils with different mandates, such as:

- intent and context
- strategy and outcomes
- technical feasibility
- safety, security, and privacy
- legal and compliance review
- finance and resource allocation
- user and stakeholder impact
- adversarial challenge
- synthesis

The councils share the goal of finding the best justified course of action. They independently assess evidence, challenge assumptions, compare options, preserve dissent, and produce a structured decision record.

Councils recommend. They do not grant themselves authority or execute production actions.

## The Operating Loop

```text
Observe → Detect → Interpret → Investigate → Deliberate
   → Decide → Authorize → Coordinate → Execute
   → Verify → Communicate → Learn
```

Proactive operation is a core capability. SCOS should identify material developments and route them to the right person, with evidence, urgency, recommended action, and clear authority boundaries.

## Core Architecture

SCOS is organized around:

1. **Experience:** web, mobile, browser, command interface, approvals, briefings.
2. **Control:** identity, tenancy, intent, governance, policy, model routing, capability registry, audit.
3. **Intelligence:** models, councils, research, memory, retrieval, evaluation, proprietary model lifecycle.
4. **Execution:** durable workflows, specialist agents, connectors, browser workers, notifications.
5. **Trust:** authorization, privacy, security, verification, provenance, and compliance controls.

## Technology Direction

The current proposed baseline is:

| Area | Direction |
| --- | --- |
| Web | Next.js, React, TypeScript |
| Mobile | React Native, Expo |
| Browser | TypeScript extension |
| Core services | TypeScript for product/control APIs; Python for research, model lifecycle, and data/AI workloads; Rust or Go only where measured requirements justify them |
| Cloud and edge | AWS foundation with Cloudflare edge |
| Durable workflows | Temporal |
| Events | NATS JetStream, introduced when asynchronous fan-out requires it |
| Transactional state | PostgreSQL-compatible relational system; final engine selected through workload and regional-consistency tests |
| Object storage | S3-compatible object storage |
| Search | lexical + vector hybrid retrieval, selected behind internal interfaces |
| Model gateway | internally owned, multi-provider and self-hosted capable |
| Inference | external APIs initially; self-hosted open-weight inference as an independence milestone |
| Model research | Python ecosystem, reproducible datasets, training/evaluation pipelines, GPU orchestration |
| Observability | OpenTelemetry with vendor-neutral traces, metrics, and logs |
| Identity | OIDC/OAuth, passkeys, enterprise SSO/SCIM integration |
| Infrastructure | Terraform/OpenTofu, containers, Kubernetes when justified by workload scale |
| CI | GitHub Actions |

This is a direction, not a mandate to deploy every named technology on day one. Infrastructure choices must be validated against operational complexity, regional requirements, cost, and measured workload.

## Authority and Safety

SCOS Pro enforces a strict separation:

- **Models and agents propose.**
- **Councils deliberate and recommend.**
- **Policy and authorized human principals determine permission.**
- **Durable workflows execute.**
- **Independent verifiers establish outcomes.**
- **Audit records preserve evidence.**

Autonomy is progressive and policy-gated. Connected credentials are never handed to models as unrestricted authority. Untrusted emails, documents, websites, and agent outputs remain data, not instructions.

## Repository

The repository is the source of truth for the product constitution, architecture, governance, integration contracts, and implementation milestones.

- [Product Constitution](docs/PRODUCT_CONSTITUTION.md)
- [Build Architecture](docs/BUILD.md)
- [Council Governance](docs/COUNCIL_GOVERNANCE.md)
- [Interoperability](docs/INTEROPERABILITY.md)
- [Proactive Operations](docs/PROACTIVE_OPERATIONS.md)
- [Audit and Execution Roadmap](docs/EXECUTION_ROADMAP.md)

## Current Status

**Architecture correction and foundation execution.**

The repository began as a documentation-only baseline. The current milestone is to formalize the expanded product direction and establish versioned domain contracts before building services. No production capability should be described as implemented until code, tests, operational evidence, and acceptance criteria demonstrate it.

## Long-Term Objective

SCOS Pro should become a trusted independent intelligence and execution platform: capable of developing its own models, collaborating with the strongest external systems, coordinating multiple perspectives, and carrying authorized objectives through to verified outcomes.

**Independent in its core. Interoperable by design. Proactive by mandate. Governed at every action.**
