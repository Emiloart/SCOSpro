# ADR-0007: Trusted Scope Classification and Deterministic Risk Profiles

**Status:** Proposed architectural baseline  
**Date:** 2026-11-05  
**Related:** ADR-0001, ADR-0005, ADR-0006, STRATEGIC_POLICY_GOVERNANCE.md

## Context

Policy precedence and autonomy depend on knowing which tenant, domain, environment, resource, data class and action are involved. If a model or untrusted input can assign that scope, it may select a more permissive policy.

A single model-generated blast-radius score hides materially different risk characteristics and introduces calibration problems into authorization.

## Decision

Scope classification derives from authenticated, trusted system metadata. Models may suggest classifications but cannot establish or downgrade authoritative scope.

Scope is multidimensional. Applicable policies compose cumulatively. Ambiguous or conflicting classification cannot result in a permissive downgrade; the system applies the most restrictive compatible constraints and escalates or halts when authorization depends on the unresolved classification.

Action risk is an evidence-backed profile including impact, scope, reversibility, exposure, sensitivity, duration and authority. Policy maps the profile to required review, authorization, safeguards, monitoring and recovery. A scalar may be derived for analytics but is not the sole authorization control.

## Consequences

- Resource and environment registries are security-critical sources.
- Classification records retain source references, matched selectors, policy versions and ambiguity state.
- User labels and model assertions cannot override trusted resource metadata.
- Cross-domain actions may inherit several policies.
- Unknown risk inputs cannot be silently treated as low risk.
- Action permission remains separate from risk classification.

## Alternatives considered

- Model-inferred environment and domain labels: rejected because scope can be misclassified or manipulated.
- One scalar blast-radius score as authorization input: rejected because it hides non-comparable risk dimensions.
- One policy selected from a single environment label: rejected because actions cross tenants, domains, resources and data classifications.

## Review triggers

Review after threat modelling and tests of resource metadata integrity, policy composition, ambiguous classification and risk-to-authorization mappings.
