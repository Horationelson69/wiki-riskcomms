---
publish: true
title: The GATE Model
description: A governance framework for AI-assisted crisis, emergency, and risk communication
created: 2026-03-10
modified: 2026-06-17
tags:
  - framework
  - ai-governance
  - crisis-communication
  - emergency-communication
  - risk-communication
  - human-authority
  - verification
---

# The GATE Model

## Definition

The **GATE Model** (Gather, Analyse, Test, Execute) is a four-stage governance framework designed to integrate AI into crisis, emergency, and risk communication workflows while preserving human authority at the critical moment of publication. Developed by Philippe Borremans at RiskComms FZCO, it addresses a specific and underserved gap: not the ethics of AI, but the operational decision structure that sits between an AI-generated draft and a public release.

The framework is anchored by a single governance principle: _AI accelerates preparation. Humans remain responsible for publication._

## The 4 Stages

| **Stage** | **Purpose** | **AI Role** | **Human Role** | **Risk Level** | **Governance Requirement** |
| ----------- | ------------- | -------------- | ------------------ | ----------------- | ------------------------------- |
| **G — Gather** | Collect signals from the communication environment | Signal detection, media monitoring, social media scanning, narrative mapping, sentiment tracking | Interpret signals; determine what requires escalation | Low | Minimal — log AI tools used (name, scope) for post-incident review |
| **A — Analyse** | Structure and interpret information to support decisions | Summarise sitreps, cluster information, identify narrative patterns, flag potential misinformation | Assess credibility and operational relevance of AI outputs; treat summaries as drafts, not decisions | Moderate | Professional review before AI outputs inform decisions; particular scrutiny of statistics, locations, named sources |
| **T — Test** | Verify critical claims before public release — the human decision gate | Not applicable — AI output enters this stage as a draft only | Mandatory human verification against authoritative operational sources | High | No Tier 3 or Tier 4 communication proceeds without completed verification; record must be created |
| **E — Execute** | Release and disseminate verified, authorised communication | Channel scheduling, distribution automation, translation support for approved content | Final approval, authority coordination, release timing, channel selection, post-release monitoring | High (life-safety content) | Every Tier 3 and Tier 4 release attributable to a named individual with defined authority |

## When to Apply

- Any crisis communication workflow that incorporates AI-generated or AI-assisted outputs
- Organisations deploying AI for monitoring, drafting, translation, or sentiment analysis in incident conditions
- Pre-incident governance design — tier classification, authority mapping, verification protocol design
- Post-incident review of AI-assisted communication decisions

## Risk-Proportionate Governance Tiers

The GATE Model introduces four communication tiers. Organisations must map these to their own governance structures before an incident, not during one.

| **Tier** | **Communication Type** | **Governance Requirement** |
| ---------- | ------------------------- | -------------------------------- |
| 1 | Internal analysis and monitoring summaries | Minimal oversight — professional review recommended |
| 2 | Routine public updates, background information | Communication lead review and approval |
| 3 | Crisis statements, media responses | Leadership review; legal clearance where required |
| 4 | Life-safety communication, protective action guidance | Operational authority confirmation; mandatory claim verification |

Tier 4 requires the full Test stage verification process. A wrong protective action message issued quickly causes more harm than a correct one issued sixty seconds later.

## The Three Verification Questions (Test Stage)

Every Tier 3 and Tier 4 communication must pass through three questions before release:

1. Are the key claims verified against an authoritative operational source?
2. Does the appropriate authority approve release?
3. If any claim in this message is incorrect, what harm results?

## Conceptual Foundations

The GATE Model draws on three established frameworks, applied to the specific challenge of AI-assisted communication.

The [[ooda-loop]] (Boyd) maps directly onto the four stages: AI accelerates Observe (Gather) and Orient (Analyse), creating competitive advantage — but if that acceleration compresses or eliminates the Decide stage, human judgement is bypassed at the moment it matters most. GATE reinstates the decision gate explicitly.

The [[incident-command-system]] provides the structural principle: clear authority chains, defined roles, and span-of-control limits. In communication terms, this means a designated publication authority — a named person who approves what goes out.

The [[cerc-framework]] (CDC) provides the communication principle: accurate, actionable guidance, quickly. Speed is operationally valuable. Accuracy is non-negotiable. GATE is designed to preserve both.

## Key Risks Addressed

The framework is a direct response to six governance failure modes documented in AI-assisted crisis communication environments:

- **Confabulation and factual error** — AI systems produce plausible, incorrectly stated claims; the Test stage exists to catch these before publication
- **Premature publication** — AI accelerates drafting; without a structured checkpoint, speed becomes a risk rather than an advantage
- **Misinformation amplification** — monitoring systems may surface and re-circulate false narratives; professional review breaks the loop
- **Accountability gaps** — automated drafting can obscure the approval chain; GATE reinstates named accountability at every tier
- **Cultural misinterpretation** — AI sentiment and audience analysis tools carry training dataset limitations; human translators and cultural advisers must be integrated into the Analyse and Test stages
- **Credibility erosion through perceived automation** — drawing on Sandman's Risk = Hazard + Outrage model, the framework recognises that the outrage risk of perceived automation can be severe even where the underlying output quality is acceptable

## Implementation Prerequisites

1. Tier classification mapped to organisational communication outputs before an incident
2. Publication authority defined for each tier, with named deputies documented
3. Claim verification protocol established — which claims require verification, against which authoritative sources
4. AI tool inventory maintained and reviewed at least quarterly
5. Test stage rehearsed in tabletop exercises, with verification timings benchmarked
6. Minimal documentation habit built into the Test stage: claim verified, source, verifier name, approver name

## Common Failure Modes

- **Deferring governance to the incident** — The framework cannot be designed under pressure; if tier classification and authority structures are not agreed in advance, they will not be resolved before the communication window closes
- **Treating AI summaries as decisions** — Analysis outputs are drafts; the human role in the Analyse stage is to assess, not to transmit
- **Skipping documentation** — The Test stage record is the accountability structure post-incident review requires; without it, neither accountability nor institutional learning can be established
- **Ignoring outrage dynamics** — Governance frameworks that address only technical accuracy miss half the problem; perceived automation carries its own risk profile independent of output quality

## Downloadable Resources

- [GATE Model White Paper (PDF)](https://riskcomms.com/resources/gate-model-whitepaper.pdf) — Full framework documentation, March 2026
- [GATE Pre-Release Decision Checklist](https://riskcomms.com/resources/gate-checklist) — 8-step operational checklist, target 30–60 seconds (routine) / under 2 minutes (life-safety)

## Related Frameworks

- [[cnf-framework]] — Borremans' community narrative framework; operates in parallel with GATE at the Analyse and Execute stages
- [[golden-hour-response]] — Speed-focused response framework; the Test stage of GATE provides the verification structure the Golden Hour assumes
- [[stakeholder-mapping]] — Feeds the Gather and Analyse stages; stakeholder map should be current before an incident
- [[narrative-control]] — Counter-messaging strategy; informed by GATE's Analyse stage outputs

## Sources

- European Commission — AI Act: Regulation on Artificial Intelligence. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- WHO/Europe & University of Zurich — Responsible AI Use in Risk Communication and Infodemic Management (BMJ Global Health, 2025). https://www.who.int/europe/news/item/23-05-2025-responsible-ai-use-can-advance-risk-communication-and-infodemic-management-in-emergencies--new-study-shows
- NIST — Artificial Intelligence Risk Management Framework: Generative AI Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- ISO 22361:2022 — Security and Resilience: Crisis Management Guidelines. https://www.iso.org/standard/50267.html
- Sandman, P. — Risk Communication: Facing Public Outrage (EPA Journal, 1987). https://www.psandman.com/articles/facing.htm
- Edelman Trust Barometer 2025. https://www.edelman.com/trust/2025/trust-barometer
- Boyd, J. — The OODA Loop. The Decision Lab. https://thedecisionlab.com/reference-guide/computer-science/the-ooda-loop
- FEMA — Incident Command System Organisational Structure and Elements. https://training.fema.gov/emiweb/is/icsresource/assets/ics%20organizational%20structure%20and%20elements.pdf
- CDC — Crisis and Emergency Risk Communication (CERC). https://www.cdc.gov/cerc/php/about/index.html

---

_This framework is proprietary to RiskComms FZCO. © 2026 RiskComms FZCO. All rights reserved. | [riskcomms.com](https://riskcomms.com)_
