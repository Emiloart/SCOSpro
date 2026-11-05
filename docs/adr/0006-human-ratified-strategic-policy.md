# ADR-0006: Human-Ratified Strategic Policy Manifest

**Status:** Proposed architectural baseline  
**Date:** 2026-11-05  
**Related:** PRODUCT_CONSTITUTION.md, STRATEGIC_POLICY_GOVERNANCE.md, ADR-0005

## Context

SCOS must resolve legitimate conflicts between strategic objectives without inferring priorities from whichever model argues most convincingly. A policy mechanism cannot create the authority it enforces.

A configuration mixing constitutional constraints, objectives, operational rules and permissions risks allowing a lower-level preference to weaken a higher-level obligation.

## Decision

Introduce a version-controlled Strategic Policy Manifest (SPM) as the machine-readable expression of approved, scoped operational policy.

Keep four distinct governance concepts: constitutional constraints, strategic objectives, operational policies/SPM, and delegated authority.

The SPM may define scope-specific lexicographic precedence, invariant floors, permitted trade-off envelopes, exception requirements, escalation routes and effective dates. It cannot grant permissions by itself or waive constitutional constraints.

An active SPM must be attributable to an authorized policy owner, ratified for its exact version and scope, schema-valid, integrity-protected and effective. Candidate manifests have no runtime authority.

SCOS may recommend changes based on evidence and repeated outcomes. Promotion requires explicit ratification by the authorized policy owner. A one-time decision or exception does not silently amend standing policy.

Unmapped objective conflicts are escalated. Silence, timeout or missing review is never approval.

## Consequences

- Objective hierarchies are explicit, scoped and versioned.
- Personal and organizational deployments express different priorities without changing the core engine.
- Policy ownership is resolved through authenticated principal or organizational authority records.
- Policy composition and conflicts are deterministic.
- The repository does not invent Emilo Labs' actual objective hierarchy or numeric thresholds.
- Policy change requires review, ratification, activation evidence and rollback.

## Alternatives considered

- Synthesis model infers priorities at runtime: rejected due to policy drift and model variance.
- Learning policy directly from repeated human choices: rejected because preference observation is not ratification.
- One-time approval permanently changes policy: rejected because decision and policy-authoring authority differ.
- Permissions embedded inside objective ranks: rejected because preference does not grant execution authority.

## Review triggers

Review when personal and organizational policy requirements, policy composition, exception governance or operational experience require additional manifest capabilities.
