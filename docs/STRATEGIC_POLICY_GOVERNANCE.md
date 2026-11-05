# Strategic Policy, Authority and Scope Governance

**Status:** Proposed normative architecture  
**Version:** 0.1  
**Date:** 2026-11-05  
**Applies to:** Personal and organizational SCOS deployments

## 1. Purpose

SCOS must discover problems, question assumptions, compare strategic alternatives and recommend changes to objectives. It must not silently rewrite the authority, constraints or priorities under which it operates.

This document defines the boundary between human intent and autonomous operation. It does not constitute an approved policy for Emilo Labs or any future customer.

> **SCOS may autonomously discover, investigate, challenge and recommend changes to objectives. Adoption of a changed objective, authority boundary or policy requires the appropriate human principal to authorize it.**

## 2. Four distinct sources of governance

### 2.1 Constitutional constraints

The highest-level non-waivable requirements governing SCOS and its deployment. Examples include identity and authorization integrity, tenant isolation, privacy obligations, prohibition of self-granted permissions, audit integrity, and applicable legal or contractual restrictions.

A lower-level policy, strategic objective, preference or model recommendation cannot waive a constitutional constraint.

### 2.2 Strategic objectives

Human-authored statements of what an individual or organization is trying to achieve, including priorities, acceptable trade-offs, time horizons and success conditions.

Objectives may change, conflict, become obsolete or prove infeasible. SCOS may identify and recommend changes, but cannot adopt them solely from model inference, repeated preferences or observed outcomes.

### 2.3 Operational policies and the SPM

The Strategic Policy Manifest (SPM) is a versioned, machine-readable expression of approved operational policy. It records scoped precedence rules, invariant floors, permitted trade-off envelopes, exception conditions, escalation routes and effective scope.

The SPM is not authority independent of its signatory. It is the machine-readable expression of authority delegated by the relevant human or organizational policy owner.

### 2.4 Delegated authority

A permission grant states who or what may authorize or perform a particular action, over which resources, within which limits, for how long and subject to which conditions.

A strategic priority does not grant permission. A permitted trade-off does not itself authorize execution. A council recommendation cannot create a delegation.

## 3. Authority hierarchy

1. Applicable law, binding obligations and deployment constitutional constraints.
2. Authenticated principal identity, tenant boundary and non-waivable access controls.
3. Approved, effective policy manifests and mandatory domain invariants.
4. Explicit delegated authority and action-specific authorization conditions.
5. Approved strategic objective precedence and permitted trade-off rules.
6. Human authorization for unresolved or out-of-delegation decisions.
7. Model and council recommendations as advisory inputs only.

A lower layer cannot override a higher layer. Where applicable policies conflict and precedence is undefined, SCOS halts the affected action and escalates to the policy owner.

## 4. SPM lifecycle and ratification

An SPM release identifies its manifest ID and version, issuing organization or individual, authenticated policy owner, ratification record, tenant and scope selectors, parent manifests, effective and expiry times, constitutional references, objective profiles, invariant definitions, trade-off envelopes, exception roles, escalation behavior, change rationale, superseded version and integrity/signature reference.

A draft, candidate or unratified manifest has no runtime authority. The policy engine rejects expired, unsigned, untrusted, malformed or inactive manifests.

Policy change proceeds through:
1. Observe changed conditions, recurring trade-offs or policy gaps.
2. Recommend a versioned change with evidence, alternatives and affected scopes.
3. Review through the required domain, security, privacy, legal, finance and stakeholder reviewers.
4. Ratify the exact version and scope by the designated human policy owner.
5. Validate schema, signatures, references, scope compatibility and constitutional non-regression.
6. Activate through an auditable event.
7. Monitor and, where necessary, roll back through an authorized process.

Repeated human choices, model-generated labels and successful outcomes never automatically promote a candidate. Ratification power may be delegated only to an identified role under bounded conditions.

A one-time decision is not a policy amendment. It authorizes only the specified decision and scope unless a separate policy-change process is explicitly initiated.

## 5. Trusted scope classification and policy composition

A model may suggest a classification but cannot establish or downgrade authoritative scope.

Trusted inputs include authenticated tenant/principal identity, resource ID and ownership, actual deployment target, environment registry, account/workspace/project IDs, data classification, residency, action type, connector capability, trusted resource tags and effective delegation.

Scope is multidimensional: principal mode, tenant and organizational unit, domain, environment, resource, data class, action category, jurisdiction/residency and autonomy level. A single label cannot erase other applicable dimensions.

Classification outcomes:
- **Resolved:** trusted metadata identifies scope.
- **Ambiguous:** apply the most restrictive compatible constraints and escalate if authorization depends on the unresolved choice.
- **Untrusted:** required metadata cannot be authenticated; do not grant the action.
- **Conflicting:** authoritative sources disagree; halt the affected action and route the conflict to the policy owner.

All applicable constitutional and mandatory constraints are cumulative. A child or environment policy cannot weaken a parent constraint unless the parent explicitly defines a lawful, authorized exception. Policy composition is deterministic and testable.

## 6. Objective conflict resolution

Objective conflicts arise when facts are sufficiently verified and competing inferences are defensible, but legitimate goals point toward different options. Argumentation frameworks can expose attacks on premises and inference links; they do not rank unrelated objectives. The SPM supplies that authority.

### Tier A — Scope-specific lexicographic precedence

A ratified precedence profile defines objective order within a scope. Lexicographic ordering is deliberately magnitude-blind between tiers: a lower-ranked benefit cannot override a higher-ranked objective merely because a model assigns it a larger score.

A policy may define eligibility and materiality thresholds within an objective tier. A claim that an action affects security, resilience or another higher-ranked objective must meet the policy's evidence, severity and materiality conditions before invoking that tier's precedence. Thresholds are policy-owner-defined and measured by approved methods. Governors cannot invent them at runtime.

If a threshold is unspecified and could change the outcome, record the uncertainty and escalate.

### Tier B — Invariant floors

Invariant floors define non-negotiable minimums, maximums or prohibited states. Examples may include recovery capability for a critical service, prohibited sensitive-data handling, required identity verification or approval requirements for a financial action.

Thresholds are specific to the service, resource, jurisdiction and domain. Illustrative values are not global defaults. A mandatory invariant violation blocks the affected action. Advisory findings do not automatically become hard vetoes.

### Permitted trade-off envelopes

An envelope identifies the objectives that may be traded, scope, measurable preconditions, bounds, evidence requirements, permitted action classes, duration, monitoring and required authorization.

An envelope cannot waive constitutional constraints, mandatory floors, access controls or required approvals. AUTO_APPROVE is not a permission: automatic execution also requires a separate valid delegation covering the exact action and risk profile.

### Tier C — Unranked or unmapped conflict

If options satisfy mandatory constraints but no approved precedence or envelope selects a winner, SCOS does not infer a preference. It prepares a briefing with verified facts, evidence, competing objectives, options, consequences, uncertainty, applicable policy versions, missing rule, affected stakeholders, required decision-maker and deadline.

The action is held pending authorization by the policy owner or delegated decision-maker. Silence, timeout, missing governors and unavailable approvers never constitute consent.

## 7. Worked resolution paths

These are architecture examples, not approved Emilo Labs policy.

### 7.1 Tier A: precedence selects an option

Two production-service options satisfy every mandatory security, privacy, integrity and recovery floor. Option A improves resilience but increases operating cost. Option B reduces cost but does not improve resilience.

The active policy ranks resilience above efficiency for this service, and evidence meets its materiality conditions. The policy engine selects Option A as policy-preferred. Execution still requires a valid delegation covering the action, resource, cost and risk profile.

### 7.2 Tier B: invariant blocks an option

A proposal removes a required secondary recovery capability. The service's approved policy defines it as a mandatory floor, and independent verification confirms the violation. The policy engine blocks the action. Model consensus and efficiency benefits cannot override the floor. Constitutional constraints remain non-waivable.

### 7.3 Tier C: human resolves an unranked trade-off

An organization must choose between delaying a launch to improve maintainability or launching on schedule with bounded temporary technical debt. Both satisfy mandatory floors, but policy does not rank the objectives.

SCOS presents the evidence and options to the authorized decision-maker. The human's approval applies only to that decision and scope; it does not silently change the strategic hierarchy.

## 8. Deterministic action-risk profile

Risk is represented as an evidence-backed multidimensional profile, not initially compressed into a model-generated scalar:
- **Impact:** severity of plausible adverse outcomes.
- **Scope:** people, records, systems, funds or organizations affected.
- **Reversibility:** whether and how reliably the action can be undone.
- **Exposure:** external visibility, connectivity and attack surface.
- **Sensitivity:** classification and sensitivity of affected data or resources.
- **Duration:** persistence and time to detect or contain effects.
- **Authority:** whether the action falls within identity, delegation, limits and approval scope.

Each dimension has policy-defined categories, evidence sources and deterministic mapping rules where measurable. Missing or stale inputs remain unknown, not low risk.

The profile informs review, authorization, safeguards, monitoring and recovery. It does not replace policy evaluation or grant permission. A scalar may later support analytics but is not the sole authorization control.

## 9. Mandatory versus advisory deterministic findings

Not every deterministic result is a hard veto.

- Mandatory invariant failure: block the affected action.
- Identity, permission, tenant or scope denial: block the affected action.
- Invalid contract or state transition: reject the invalid operation.
- Verified critical condition explicitly designated as blocking by policy: block or escalate as specified.
- Advisory static-analysis warning, heuristic anomaly or non-blocking test finding: classify and investigate under policy; do not automatically equate it with an authorization denial.

The blocking/advisory classification is policy-owned, versioned and testable. Models cannot change it.

## 10. Non-consent and incomplete deliberation

Council outcomes distinguish support, object, conditional support, insufficient evidence, out-of-scope and unavailable. Verification distinguishes verified, partially verified, contradicted, stale and unresolved.

No response, timeout, unavailable governor or missing evidence is not approval. If required review cannot be completed, the explicit defer, reject or escalation route applies.

## 11. Objective challenge without self-amendment

SCOS may identify persistent failure against success measures, changed external conditions, obsolete assumptions, contradictory objectives and alternative strategies. It may challenge a strategy, recommend a policy revision and monitor whether an approved strategy remains effective.

It may not silently rewrite objectives, promote a candidate SPM, expand permissions, reinterpret one-time approval as standing delegation or treat repeated choices as policy ratification.

**Objective discovery is autonomous. Objective adoption remains governed.**

## 12. Relationship to SCOS records

The process uses three independently lifecycle-managed records:
1. **Decision Record:** observations, evidence references, assessments, argument status, alternatives, recommendation, policy references and disposition.
2. **Execution Record:** authorization reference, workflow, tool/provider actions, inputs, outputs, receipts, state changes, failures and recovery.
3. **Learning Record:** subsequent evidence about decision quality, evidence quality, execution correctness and real-world outcomes.

They are linked but not interchangeable. Failed execution does not automatically prove a bad decision; success does not prove that the decision was justified. Unknown attribution remains valid.

## 13. Policy ownership

In personal mode, the policy owner is the authenticated individual or a person explicitly delegated to administer the relevant policy. In organization mode, ownership is determined by the authenticated organizational authority graph. The account holder is not automatically authorized to change every department's objectives.

A policy change identifies the owner and authority basis, exact manifest version and scope, reviewers, approvals, effective date, expiry/review trigger, migration/rollback plan and immutable ratification/activation evidence. A model, council, workflow or learning subsystem cannot be the policy owner.

## 14. Architecture versus deployment policy content

Architectural requirements include separate governance layers, human-ratified SPM, trusted scope classification, cumulative policy composition, disagreement taxonomy, explicit precedence/floors/envelopes, multidimensional risk, no implicit approval and no automatic policy promotion.

Actual objective rankings, numerical thresholds, domain invariants, exception roles and autonomy grants are deployment-specific policy content. This repository does not invent those values.

## 15. Implementation boundary

This document specifies intended architecture. It does not mean the scope classifier, SPM parser, policy engine, argument verifier, risk classifier, approval service or runtime enforcement exists. Production use requires schemas, deterministic rules, positive/negative tests, threat modelling, audit evidence, policy-owner review and end-to-end verification.
