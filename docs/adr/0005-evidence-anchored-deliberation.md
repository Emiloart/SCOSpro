# ADR-0005: Evidence-Anchored Deliberation and Non-Majority Resolution

**Status:** Proposed architectural baseline  
**Date:** 2026-11-05  
**Related:** ADR-0002, COUNCIL_GOVERNANCE.md, STRATEGIC_POLICY_GOVERNANCE.md

## Context

Multi-agent agreement is not reliable authority. Similar models can share blind spots, converge through anchoring, or produce confident but unsupported arguments. Different mandates alone do not guarantee valid conclusions. A structured argument can still contain a false premise or inapplicable rule.

Simple majority voting cannot distinguish mandatory constraints from advisory findings or resolve legitimate conflicts between objectives.

## Decision

SCOS uses four stages: independent assessment; evidence and argument verification; deterministic authority and policy resolution; and disposition (authorize within delegation, revise, request evidence, escalate, defer or reject).

Each governor receives a common decision context plus mandate-specific evidence and criteria. Context asymmetry must not withhold information needed to understand the objective, affected assets, stakeholders or threat model. Governors are not required to disagree.

Arguments identify premises, evidence references, rules, applicability, claims, attacks and resolution states. Evidence references identify retrievable, provenance-bearing source material. Where possible, premise and rule application are independently checked.

Disputes are classified as factual, inferential or objective conflicts. Argumentation frameworks may resolve attacks on premises and inference links. They do not rank unrelated objectives. Objective conflicts are resolved only through approved policy or human escalation.

Deterministic controls distinguish mandatory invariant failures from advisory findings. Model consensus cannot override a mandatory invariant, identity or permission denial, tenant boundary, invalid contract or prohibited state transition.

## Consequences

- Council composition is selected by decision needs, not fixed agent count.
- Common and mandate-specific context are separately defined.
- No manufactured dissent or consensus requirement.
- No governor establishes the truth of its own evidence claims.
- No majority vote authorizes an action.
- Unknown, unavailable and insufficient-evidence states remain explicit.
- Dissent and revisions are preserved.
- Policy and execution authority remain outside deliberation.

## Alternatives considered

- Same prompt to multiple model instances: rejected as insufficient independence.
- Persona prompts as primary diversity: rejected as cosmetic.
- Majority voting: rejected because it cannot override policy or adjudicate objective hierarchy.
- All deterministic findings as hard vetoes: rejected because advisory findings differ from mandatory invariants.
- Argumentation graphs to rank every trade-off: rejected because contradiction resolution does not establish strategic priorities.

## Review triggers

Review after measured council evaluations, evidence-verification false-positive/false-negative analysis, systematic correlated failures, or operational evidence of unnecessary latency without decision improvement.
