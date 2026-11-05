# ADR-0002: Structured Multi-Council Deliberation

**Status:** Proposed  
**Date:** 2026-11-05

## Context

Important SCOS decisions require more than a single model response. Multiple perspectives must expose trade-offs and disconfirm weak recommendations, while remaining subordinate to explicit authority and deterministic policy.

## Decision

Implement task-dependent governance councils with distinct mandates, independent first-pass assessments, cross-examination, adversarial review, synthesis, and preserved dissent. Council output is a recommendation artefact, not an authorization.

## Consequences

- Council membership is dynamically selected using risk and impact.
- Diversity is measured by mandate, model lineage, evidence, and evaluation, not agent count.
- No council receives general production credentials.
- Policy decisions and human approvals are separate from council outputs.
- Deliberation quality, cost, latency, calibration, and decision outcomes are evaluated.

## Alternatives considered

- Single supervisor model: insufficient perspective diversity.
- Majority vote among identical agents: rejected as pseudo-consensus.
- Autonomous councils with execution authority: rejected as an authority-boundary failure.

## Review triggers

Revisit council composition and protocol when evaluation shows low marginal value, systematic correlated failures, or excessive decision latency.
