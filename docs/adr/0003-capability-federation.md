# ADR-0003: Capability-Based Agent and Model Federation

**Status:** Proposed  
**Date:** 2026-11-05

## Context

SCOS must be independently capable while collaborating with specialist systems such as Celetixo, UTB, external model providers, and enterprise applications.

## Decision

Integrate collaborators through versioned capability manifests and typed task/result contracts. Use MCP, A2A, OpenAPI, and event protocols where appropriate, behind SCOS-owned adapters, trust evaluation, authorization, and audit.

SCOS owns the objective, intent, policy, overall workflow, and acceptance decision. A specialist retains its internal implementation and state authority.

## Consequences

- External systems receive least-privilege delegation packages.
- Provider output is untrusted until validated.
- Delegation is durable, cancellable, observable, and idempotent where possible.
- Model providers can be substituted without changing domain workflows.
- Celetixo and UTB remain separate products, not internal modules.

## Alternatives considered

- Hard-coded direct API calls throughout the product: rejected due to coupling.
- Absorbing specialist systems into SCOS: rejected because it duplicates mature domain authority and weakens modularity.

## Review triggers

Revisit protocol adapters as interoperability standards and collaborator interfaces mature.
