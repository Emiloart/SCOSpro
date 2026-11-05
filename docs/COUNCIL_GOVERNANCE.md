# Governance Councils and Deliberation Protocol

**Status:** Proposed architecture  
**Purpose:** Define how SCOS Pro uses multiple independent perspectives to reach defensible decisions without creating an unaccountable agent hierarchy.

## 1. Design Objective

SCOS Pro should not rely on one model's first answer for important decisions. It should convene task-appropriate councils whose members have different mandates, evidence requirements, and failure sensitivities.

The councils share one objective: determine the best course of action consistent with the user's or organization's intent, law, policy, available evidence, and risk tolerance.

They are not political governments and do not possess sovereign authority. They are bounded computational governance bodies.

## 2. Council Types

### Intent and Context Council
Determines what the user or organization is actually trying to achieve.

Responsibilities:
- interpret explicit and implied objectives
- identify ambiguity and missing constraints
- distinguish desired outcomes from proposed methods
- detect conflicting instructions and stakeholders
- identify whose intent has legitimate authority

### Strategy and Outcomes Council
Evaluates whether proposed actions advance the objective.

Responsibilities:
- compare strategic options
- model downstream consequences
- consider timing, opportunity cost, and dependencies
- test short- and long-term outcomes

### Technical and Feasibility Council
Assesses whether an option can be delivered.

Responsibilities:
- architecture and implementation feasibility
- system dependencies and integration constraints
- reliability, performance, and operational complexity
- build-versus-buy and delegation decisions

### Safety, Security and Privacy Council
Challenges unsafe, insecure, privacy-invasive, or adversarial paths.

Responsibilities:
- threat modelling
- prompt-injection and tool-abuse analysis
- privacy and data-residency review
- reversibility and blast-radius assessment
- identify unacceptable risk

This council may issue a policy veto only through a separately defined, machine-enforceable policy rule or an authorized human decision. Its model output alone is not a veto.

### Legal, Compliance and Governance Council
Identifies jurisdiction, contractual, regulatory, employment, and organizational governance concerns.

It flags where qualified human or professional review is required. It must not represent model output as legal advice or verified compliance.

### Finance and Resource Council
Evaluates cost, budget, return, resource allocation, and economic sustainability.

### User and Stakeholder Impact Council
Evaluates usability, accessibility, fairness, affected parties, communication needs, and unintended consequences.

### Adversarial Review Council
Attempts to falsify the preferred recommendation.

Responsibilities:
- construct the strongest counterargument
- identify hidden assumptions
- seek disconfirming evidence
- test failure scenarios
- identify manipulation and conflicts of interest

### Synthesis Council
Produces the final deliberation record from the evidence and council submissions.

It cannot erase dissent, fabricate consensus, override policy, or authorize execution.

## 3. Dynamic Composition

Not every task needs every council.

A task classifier proposes the required councils based on:
- impact
- uncertainty
- irreversibility
- financial exposure
- external parties affected
- legal or privacy sensitivity
- novelty
- time criticality

Policy defines minimum required review. The classifier cannot downgrade mandatory review.

Routine low-risk tasks may use a compact review. High-impact tasks require expanded deliberation, adversarial review, and explicit human authorization.

## 4. Independence of Perspectives

Council diversity must be substantive, not cosmetic.

Use:
- different model families where useful
- independently authored role instructions
- separate evidence retrieval or evidence views
- different evaluation rubrics
- isolated first-pass opinions before cross-examination
- independent adversarial review
- deterministic policy checks outside all model calls

Do not ask five instances of the same model the same question and call that governance.

Where model diversity is unavailable, record the limitation and reduce confidence. Council members must disclose shared model/provider lineage where known.

## 5. Deliberation Protocol

```text
Intent envelope
    ↓
Evidence packet and provenance
    ↓
Independent first-pass assessments
    ↓
Cross-examination and challenge
    ↓
Option generation and comparison
    ↓
Adversarial falsification
    ↓
Synthesis and dissent record
    ↓
Policy evaluation
    ↓
Human approval when required
    ↓
Durable execution workflow
    ↓
Independent outcome verification
```

### Stage A: Intent framing
Create a versioned intent envelope. State objective, constraints, stakeholders, deadline, success conditions, and unresolved questions.

### Stage B: Evidence preparation
Gather relevant internal context and external research. Label source, timestamp, trust level, scope, and freshness. Untrusted content remains data, never instructions.

### Stage C: Independent assessments
Each council submits structured findings before seeing other councils' conclusions where practical. This reduces anchoring.

### Stage D: Cross-examination
Councils challenge assumptions, evidence gaps, and consequences. The system preserves original submissions and subsequent revisions.

### Stage E: Options
Generate materially different options, including no-op, defer, ask, delegate, and execute where applicable.

### Stage F: Adversarial review
Attempt to disprove the leading option and identify credible failure paths.

### Stage G: Synthesis
Rank options against explicit criteria. Explain trade-offs and preserve dissent.

### Stage H: Policy and authority
A deterministic policy engine evaluates permissions, action risk, scope, budget, jurisdiction, and approval requirements. A council recommendation is not an authorization.

### Stage I: Execution and verification
Temporal workflows execute authorized actions. Independent checks verify provider state and real outcomes.

## 6. Decision Record Schema

Every material decision should record:

- decision_id and version
- tenant and principal
- intent_id
- timestamp and expiry/review date
- objective and constraints
- evidence references and freshness
- council membership and model lineage
- each council's recommendation and rationale
- alternatives considered
- dissent and unresolved questions
- option scoring and criteria
- confidence with calibration metadata
- risk classification
- policy result and policy version
- human approver where required
- execution workflow reference
- verification result

## 7. Decision Rules

- Consensus is not mandatory when evidence supports a clear option.
- Majority vote is not a substitute for policy or evidence.
- Safety concerns must be investigated, not blindly accepted or dismissed.
- A single critical unknown may require clarification or a pause.
- Contradictory evidence lowers confidence and may block execution.
- Time pressure may change the available options, never silently erase authority requirements.
- If the best option is to do nothing, say so and explain why.
- Decisions must have review triggers when assumptions may change.

## 8. Avoiding Governance Theater

Measure:
- whether councils identify distinct risks
- whether adversarial review finds real defects
- decision quality against later outcomes
- calibration of confidence
- rate of reversed decisions
- unnecessary deliberation latency and cost
- missed escalations
- false escalations
- user correction rate

Remove or redesign councils that add no measurable value. The objective is better decisions, not more agents.

## 9. Separation from Execution

Council agents receive no general-purpose production credentials.

They may request a proposed action through a typed interface. The policy engine evaluates it. The workflow system executes it. The verifier checks it. The audit service records it.

No council can directly send email, transfer money, modify production infrastructure, or mutate connected accounts merely because it recommends doing so.


## 10. Structural Independence and Shared Context

Council diversity arises from distinct mandates, evidence needs, evaluation criteria and, where useful, different model/provider lineages. Persona wording alone is insufficient.

Every governor receives a common decision context: objective, proposed action, scope, affected assets or stakeholders, relevant constraints and evidence references. It may additionally receive mandate-specific evidence, such as IAM and threat evidence for security, dependency and test evidence for architecture, or budget and success measures for value assessment.

Context asymmetry is not deliberate blindness. A governor must receive enough common context to understand the matter. No governor is required to disagree; manufactured dissent is a defect.

## 11. Structured, Verifiable Arguments

A material argument identifies its premise, retrievable evidence reference and provenance, rule or reasoning principle, applicability, conclusion or objection, attack target and resolution state.

A structured assertion is not automatically true. The submitting governor does not establish its own evidence. Independent verification checks evidence integrity, source authority, freshness and rule applicability where feasible.

Argument attacks distinguish:
- **Premise challenge:** disputes the underlying fact or evidence.
- **Rebuttal:** supplies a competing claim or conclusion.
- **Undercut:** challenges the inference link or applicability of a rule.

Original submissions, verification results, counterarguments and revisions are preserved.

## 12. Disagreement Classification

The verification stage classifies disagreements as:
1. **Factual:** claims about the state of the world conflict.
2. **Inferential:** accepted facts are interpreted differently or a rule's applicability is disputed.
3. **Objective:** facts and defensible inferences coexist, but legitimate goals compete.

Argumentation frameworks can resolve premise and inference attacks. They do not decide the priority of unrelated objectives. Objective conflicts use the active, authorized SPM or escalate to the appropriate human decision-maker.

## 13. Four-Stage Resolution

1. **Independent assessment:** task-appropriate governors assess common and mandate-specific context.
2. **Evidence and argument verification:** validate provenance, freshness, factual claims, rule applicability and dispute category.
3. **Authority and policy resolution:** enforce mandatory constraints, evaluate trusted scope and action-risk profile, then apply active policy and delegated authority.
4. **Disposition:** authorize only within valid delegation; otherwise return for revision, request evidence, defer, reject or escalate.

No majority vote overrides a mandatory invariant, permission denial, tenant boundary, invalid state transition or required approval.

## 14. Deterministic Findings and Veto Classification

A deterministic result is not automatically a hard veto. Mandatory invariant failures, identity or permission denials, tenant violations, invalid contracts and prohibited state transitions block the affected action. Advisory static-analysis findings, heuristic anomalies and non-blocking warnings are classified under policy and may require investigation rather than an absolute stop.

The blocking/advisory classification is policy-owned and testable. Model consensus cannot change it.

## 15. Non-Consent and Incomplete Deliberation

Council outputs distinguish support, objection, conditional support, insufficient evidence, out-of-scope and unavailable. Verification distinguishes verified, partially verified, contradicted, stale and unresolved.

Silence, timeout, unavailable governors or missing evidence never constitute approval. If required review cannot be completed, the policy's explicit defer, reject or escalation route applies.

## 16. Objective Resolution and Risk

Objective conflicts use approved scope-specific precedence, invariant floors and permitted trade-off envelopes. An unranked or unmapped trade-off is presented to an authorized human; synthesis must not infer a preference.

Risk is a deterministic, evidence-backed profile covering impact, scope, reversibility, exposure, sensitivity, duration and authority. It informs review and authorization but does not grant permission.

See [Strategic Policy, Authority and Scope Governance](STRATEGIC_POLICY_GOVERNANCE.md) for the normative model and Tier A, B and C examples.
