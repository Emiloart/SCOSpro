# SCOS Pro Canonical Contracts

This directory contains versioned, language-neutral contracts shared by SCOS services and federated collaborators.

## Rules

- JSON Schema Draft 2020-12 is the initial contract format.
- Schema filenames use `<domain>.v<major>.schema.json`.
- Breaking changes require a new major schema version.
- Additive compatible changes may be made only after compatibility review.
- Producers must validate before publishing; consumers must validate before acting.
- Unknown fields are rejected at trust boundaries unless a schema explicitly permits extensions.
- Contract changes require examples, positive and negative validation tests, and a migration note.
- Contracts describe data shape. They do not grant authority.

## Initial contracts

- `intent-envelope.v1`: the objective and mandate SCOS is asked to pursue.
- `council-assessment.v1`: an independent council's evidence-backed assessment.
- `decision-record.v1`: synthesized recommendation, dissent, policy reference, and decision state.
- `capability-manifest.v1`: a provider's declared interoperable capabilities.
- `policy-decision.v1`: deterministic authorization result from the policy boundary.
- `execution-receipt.v1`: verifiable result of an executed action.

## Trust rule

A valid schema does not make content trustworthy. Authentication, authorization, provenance, tenant isolation, policy evaluation, and semantic validation remain mandatory.


## Governance architecture references

The governance model is specified in:
- [Strategic Policy, Authority and Scope Governance](../docs/STRATEGIC_POLICY_GOVERNANCE.md)
- [Council Governance and Deliberation](../docs/COUNCIL_GOVERNANCE.md)

The existing six JSON Schemas are an initial contract foundation. They do not yet encode the complete structured-argument, evidence-verification, scope-classification, risk-profile, SPM-ratification or policy-composition model. Those contract extensions must be designed and versioned before a runtime policy resolver is treated as authoritative.

Do not infer that these contracts or services exist because their architecture is documented. A schema is not an authorization grant, and a policy decision payload is not proof that a real enforcement point checked the underlying permissions.
