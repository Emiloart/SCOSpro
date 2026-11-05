# ADR-0001: Modular Control Plane and Five Logical Planes

**Status:** Proposed  
**Date:** 2026-11-05

## Context

SCOS Pro must coordinate intelligence, councils, specialist systems, execution, and user/organizational authority. A premature microservice fleet would create operational overhead before domain boundaries are proven.

## Decision

Use five logical planes: Experience, Control, Intelligence, Execution, and Trust. Begin with a modular architecture and explicit package/service boundaries. Extract independently deployable services only when isolation, scaling, reliability, security, or team ownership justifies it.

## Consequences

- Domain contracts precede service decomposition.
- Policy and authorization remain independent of model reasoning.
- Durable workflows own long-running execution.
- Observability and tenant context propagate across boundaries.
- Infrastructure is introduced in response to measured requirements.

## Alternatives considered

- One monolithic application with no domain boundaries: rejected because authority and execution concerns become entangled.
- Microservice-per-agent architecture from day one: rejected due to premature operational complexity.

## Review triggers

Revisit when independent scaling, data residency, security isolation, or team ownership requires service extraction.
