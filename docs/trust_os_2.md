1. BN Trust OS — with Foundation Inside (overview)

Positioning (unchanged, stronger):
BN Trust OS is the governance spine for AI‑assisted communications—combining a SaaS platform (Radar), a proven transformation method (Literacy Ladder + Play Cards), benchmark data for boards, and a built‑in Foundation layer (IP + Security + SDLC) that makes it safe, repeatable, and diligence‑ready.

What’s new: “Fortify the Foundation” is now the Trust OS Foundation layer with a hard gate (Gate A) that controls what can ship to customers.

2. Updated Bill of Materials (BoM)

Product (SaaS): AI Risk & Trust Radar

Core: inventory → assessments → approvals → audit bundles → exceptions.

Adapters: CSV/webhooks for owned/earned signals; QBR export.

Modules: EU AI‑Act Checklist; Quarterly Expert Review.

Foundation hook: Radar releases are blocked unless Gate A is green and SDLC checks pass.

Method (Consulting IP): Literacy Ladder + Play Cards

L0→L1→L2 Tool‑maker, 12‑week sprint + Personal AI Scorecard.

Play Cards that map Heat‑Map tiles to literacy gates and governance gates.

Foundation hook: every Play Card includes a Foundation dependencies line (e.g., “Requires: Gate A green; Exceptions enabled”).

Data (Benchmark IP): Comms Governance Benchmarks

Anonymised metrics: coverage %, TTFA, exceptions, SLAs, incident patterns.

Quarterly and annual “State of AI Governance in Comms.”

Foundation hook: benchmarks only aggregate Foundation‑compliant tenants (so data is defensible).

Enablement (Repeatable Services)

Founding Member Council, onboarding sprints, QBRs, Executive Board Pack, Agency Enablement Kit.

Foundation hook: all services delivered in‑product and under new MSA/IP Addendum.

Trust Pack (Assurance/IP/Security assets) — now includes Foundation

SOC2 scope & policies, DPAs/sub‑processors, IP register, SBOM/OSS licenses, model cards & DPIAs.

Fortify the Foundation: IP crisis resolution + SDLC/CI‑CD + Security minimums + restore/rollback proof.

3. Gate A — the binary control that keeps the package coherent

Gate A (Foundation green) is required before any customer data, pilots, or paid tiers go live.

Binary criteria:

Legal/IP: 100% new SOWs on MSA + IP Addendum + DPA; contractors under IP assignment; sub‑processors published.

SDLC: No direct‑to‑prod; dev→staging→prod CI/CD with manual prod approval, smoke tests, rollback proven.

Security: SSO/MFA enforced; secrets centralized; logging/retention set; backup + restore test evidenced.

Where this lives:
/security/_, /legal/_, /ops/runbooks.md, /ops/release-process.md and flagged in each monthly Trust OS release.

4. Pricing & tiers (unchanged but gated)

Assess (£3–5k/mo): Radar core + L1 Play Cards + QBR export.

Assure (£8–12k/mo): + Exceptions, SSO, adapters + L2 Play Cards + Benchmarks v1.

Assure+ (custom): Multi‑entity, L3 pilots, Quarterly Expert Review, Agency Enablement.

Rule: No subscription, no project. And no tier activation until Gate A is green.

5. Repo & Notion structure (baked‑in Foundation)

Add a top‑level “foundation” index and wire it everywhere.

bn-trust-os/
├─ strategy/
│ ├─ strategy-house.md
│ └─ operating-model.md
├─ foundation/ # NEW: Phase 0, Gate A, status
│ ├─ program-charter.md # scope, owners, timeline, risks
│ ├─ gate-a-checklist.md # binary criteria + evidence links
│ └─ status.md # traffic-light; last review; blockers
├─ product/
│ ├─ prd/
│ │ └─ radar-v0.1.md
│ ├─ roadmap.md
│ └─ metrics-schema.md
├─ method/
│ ├─ literacy-ladder.md
│ ├─ sprint-12w.md
│ └─ play-cards/
│ ├─ ai-guided-search.md
│ ├─ prompt-analysis.md
│ └─ ...
├─ data/
│ ├─ benchmark-method.md
│ └─ kpi-definitions.md
├─ enablement/
│ ├─ founding-council-pack.md
│ ├─ qbr-pack-template.md
│ └─ agency-enablement-kit.md
├─ legal/
│ ├─ msa.md
│ ├─ ip-addendum.md
│ ├─ dpa-template.md
│ └─ sub-processors.md
├─ security/
│ ├─ access-control-policy.md
│ ├─ secure-sdlc-policy.md
│ ├─ logging-monitoring.md
│ ├─ incident-response.md
│ └─ bcp-dr-policy.md
└─ ops/
├─ runbooks.md # SDLC, change-control, rollback, backups
├─ release-process.md # Trust OS monthly release
└─ okrs.md

Notion / Confluence front door (mirror this):
Start Here → Foundation (Phase 0) → Strategy House → Product → Method → Data → Trust Pack → Sales/CS.
Every page links back to its source file in the repo.

6. Template updates (Foundation lines added)
   A) Play Card (add a Foundation box)

Add to YAML front‑matter:

foundation:
requires_gate_a: true
controls: ["Exceptions Enabled","Audit Bundles On","Approver Roles Assigned"]
data_emits: ["assessment_created","approval_granted","exception_opened"]

In the body, add a Foundation dependencies line under “Where it runs”.

B) PRD (acceptance criteria include Foundation checks)

Non‑functional AC: passes CI checks, emits events per /product/metrics-schema.md, respects RBAC, audit log, error budget.

Security AC: sub‑processor list unchanged or updated; DPIA not required / completed; secrets managed.

Release AC: tagged release, rollback plan tested in staging.

C) QBR pack

Add a Trust panel: Gate A status, exceptions trend, approvals SLA, last restore test, sub‑processor changes.

D) SOW / Order Form

One line under “Assumptions & Dependencies”:
“Services are delivered on BN Trust OS. Foundation Gate A must be green prior to any client data ingest or production use.”

7. Release cadence (Foundation integrated)

Tag releases monthly: Trust OS rYYYY.MM.

Release note sections: Product / Method / Data / Trust (Foundation) / GTM / Buyer Signal.

Gate A status appears at the top; if it flips amber/red, the release cannot move customer‑facing items to “Available”.

8. Governance & RACI (Foundation added)
   Area Accountable Responsible Consulted Informed
   Foundation programme CEO Security Lead, Legal, DevOps Head of Product, CSM Lead Exec/Board
   Gate A sign‑off (monthly) CEO Security Lead Legal, DevOps All
   Trust OS release Head of Product Editors: Product/CSM/PMM/Security/Legal CEO All
9. KPIs (roll up in every Trust OS release)

Foundation: Gate A (green/amber/red), backup+restore (pass/fail), 0 direct‑to‑prod events, MFA/SSO coverage 100%, % revenue on new MSA.

Product: TTFA, coverage %, exceptions rate, WAU (approvers).

Method: Play Cards activated, Literacy score lifts, QBR completion.

Data: tenants included in benchmarks, KPI glossary changes.

GTM: CAC payback, NRR, partner‑sourced %.

10. 14‑day integration sprint (to make it real)

Days 1–3

Create /foundation folder (charter, Gate A checklist, status).

Update Play Card and PRD templates with Foundation lines.

Add Gate A paragraph to SOW + QBR templates.

Days 4–7

Run Gate A mini‑audit; populate /foundation/status.md with evidence links (MSA/IP, CI/CD run, restore test).

Prepare Trust OS r2025.09 release note with a clear Trust section.

Days 8–14

Flip Founding Member pilot SOWs to new paper; confirm Gate A dependencies in each Play Card selected.

Announce internally: “Foundation is in the package—no customer‑facing work proceeds without Gate A green.”
