# Proactive Operations and Organizational Communication

**Status:** Proposed architecture

## 1. Objective

SCOS Pro must operate continuously within an explicit mandate. It should not wait for the user to ask what has changed, what needs attention, or what should happen next.

Proactivity means detecting material developments, evaluating them, deciding whether intervention is justified, and communicating with the correct person at the correct time.

It does not mean sending frequent low-value notifications or taking unapproved actions.

## 2. Proactive Sources

Potential signals include:
- connected email, calendar, files, tasks, and enterprise applications
- provider webhooks and change feeds
- scheduled research and UTB intelligence updates
- Celetixo delegation progress and completion events
- deadlines, recurring commitments, and workflow timers
- approved external data sources
- internal system health and operational metrics

Each signal must carry tenant, source, timestamp, permissions, sensitivity, and provenance.

## 3. Detection Pipeline

```text
Signal ingestion
   ↓
Normalization and trust labeling
   ↓
Event correlation
   ↓
Context and memory retrieval
   ↓
Change / anomaly / opportunity detection
   ↓
Evidence validation
   ↓
Council deliberation when material
   ↓
Policy and urgency evaluation
   ↓
Recipient resolution
   ↓
Communication or authorized workflow
   ↓
Outcome tracking
```

## 4. What Deserves Surfacing

A candidate insight should be scored on:
- relevance to an active goal or mandate
- expected impact
- urgency and time sensitivity
- confidence and evidence quality
- novelty compared with what the recipient already knows
- actionability
- cost of interruption
- privacy and role authorization

A useful alert should answer:
1. What changed?
2. Why does it matter?
3. What evidence supports it?
4. What are the options?
5. What do we recommend?
6. Who needs to act, and by when?

## 5. Recipient Resolution

For personal mode, the recipient is normally the user, subject to their communication settings.

For organization mode, resolve the responsible person through:
- ownership of the affected project or process
- department and role
- delegated decision authority
- escalation chain
- sensitivity and need-to-know
- absence and availability policies

Do not broadcast sensitive information to a whole organization because a routing decision is uncertain. Escalate to a designated administrator or ask for clarification.

## 6. Communication Channels

The notification layer should support:
- in-product activity and inbox
- mobile push
- email
- approved enterprise messaging integrations
- scheduled briefings
- urgent escalation channels

Channel choice depends on urgency, sensitivity, user preference, and organizational policy.

## 7. Interruption Policy

Support:
- quiet hours by user and locale
- urgency classes
- batching and digesting
- duplicate suppression
- escalation timers
- acknowledgement tracking
- rate limits
- emergency exceptions defined by the user or organization

No model may invent an emergency exception.

## 8. Proactive Autonomy Boundaries

The system may autonomously:
- observe permitted sources
- create internal summaries and candidate tasks
- run approved research
- prepare drafts
- notify an authorized recipient within configured rules
- execute explicitly pre-authorized low-risk workflows

The system must request approval for consequential external actions unless a precise delegation policy explicitly authorizes them.

## 9. Feedback and Learning

Recipients can mark an alert:
- useful
- irrelevant
- premature
- incorrect
- already handled
- wrong recipient
- requires escalation

These labels feed evaluation and policy tuning. They do not automatically rewrite permissions.

## 10. Metrics

Measure:
- precision of surfaced insights
- missed material events
- time-to-detection
- time-to-recipient
- recipient correctness
- acknowledgement and resolution time
- interruption burden
- duplicate rate
- false urgency rate
- actions prevented by policy
- user trust and correction rates
