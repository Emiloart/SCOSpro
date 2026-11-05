# ADR-0004: Staged Model and Inference Independence

**Status:** Proposed  
**Date:** 2026-11-05

## Context

SCOS aims to become an independent AI platform while cooperating with external model providers. Training a broad foundation model immediately would be an expensive distraction before product workloads, data rights, evaluation requirements, and compute economics are established.

## Decision

Pursue independence in stages:
1. own orchestration, policy, memory, model gateway, evaluation, and execution
2. self-host selected open-weight models
3. own curated datasets and model adaptation pipelines
4. develop proprietary specialist models
5. consider broad foundation-model pretraining only with a dedicated research, safety, compute, and capital programme

External models remain interchangeable collaborators and independent evaluators.

## Consequences

- Provider neutrality is an architectural requirement.
- Model routing is policy-aware and data-residency-aware.
- Every model is benchmarked on representative SCOS workloads.
- Training data requires provenance, licensing/consent, privacy, and deletion controls.
- No claim of proprietary foundation-model capability before a trained and evaluated model exists.

## Alternatives considered

- Single-provider dependence: rejected as a strategic and operational lock-in.
- Immediate large-scale pretraining: rejected until capability and economic requirements are demonstrated.
- External APIs only: rejected as a permanent independence strategy.

## Review triggers

Review when workload metrics, model gaps, privacy constraints, or inference economics justify the next independence stage.
