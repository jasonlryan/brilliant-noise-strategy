---
id: pc-compliance-bots
version: 1.1.0
heatmap: Governance
level: L1
literacy_gate: ["Regulatory Fundamentals", "Risk Assessment", "Audit Readiness"]
scorecard_threshold: 80
governance_gate: ["Legal Review Complete", "Risk Register Updated", "Compliance Training Done", "Audit Trail Active", "Exceptions On"]
owners:
  sponsor: "Chief Compliance Officer"
  product: "Risk & Compliance Lead"
  approver: "General Counsel"
  bn: "CSM"
kpis:
  - "Compliance check < 2 hours"
  - "False positive rate < 10%"
  - "Audit readiness score > 90%"
expansion_trigger: "20 consecutive compliant campaigns → Automated Compliance (L2)"
status: "Approved"
license: "BN Core IP – Internal Use License to client for embedded assets"
foundation:
  requires_gate_a: true
  controls: ["Exceptions Enabled", "Approver Roles Assigned"]
  data_emits: ["assessment_created", "approval_granted", "exception_opened"]
---

# Compliance Bots (L1 · Governance)

**Business outcome:** Reduce compliance review time by 75% while maintaining 100% regulatory coverage through AI-assisted checking.

**Where it runs:** Radar → Compliance Center (automated checks + exception handling).

**Foundation:** Requires Gate A green status for deployment.

## Setup (Week 1–2)

1. **Load regulatory frameworks**
   - Import industry regulations (FTC, ASA, GDPR, sector-specific)
   - Configure jurisdiction-specific rules
   - Set up update notifications for regulatory changes

2. **Define risk parameters**
   - Map compliance requirements to content types
   - Set risk scoring thresholds
   - Configure escalation pathways

3. **Connect to content pipeline**
   - API integration with content management systems
   - Pre-publication check workflows
   - Post-publication monitoring setup

## Process

### Week 1: Regulatory Mapping
- Document all applicable regulations
- Create compliance check matrices
- Get legal approval on automation scope

### Week 2-3: System Training
- Process 50+ historical campaigns through compliance bots
- Validate against manual compliance reviews
- Tune sensitivity settings

### Week 4+: Live Operation
- Real-time: Pre-publication compliance checks
- Daily: Exception report review
- Weekly: False positive analysis and tuning

## Controls & Risks

### Primary Controls
- **Human-in-the-loop**: High-risk content requires manual review
- **Regulatory updates**: Monthly regulation refresh cycle
- **Audit logging**: Immutable record of all compliance decisions

### Key Risks
- **Regulatory lag**: New rules not immediately captured → Weekly legal sync
- **False negatives**: Missed violations → Quarterly manual audits
- **Over-blocking**: Excessive caution impeding work → Tunable thresholds

### Exception Handling
- Ambiguous compliance status → Route to legal team
- New content types → Create provisional rules pending review
- Multi-jurisdiction conflicts → Apply most restrictive rule

## Integrations

### Inputs
- **Content sources**: CMS, DAM, social scheduling tools
- **Regulatory feeds**: Thomson Reuters, law firm updates, trade bodies
- **Historical data**: Past violations, enforcement actions, internal policies

### Outputs
- **Compliance certificates**: Timestamped approval records
- **Risk reports**: Heat maps of potential issues
- **Audit packages**: Complete evidence bundles for regulators

## Success Metrics

1. **Efficiency Gains**
   - Baseline: 8 hours average compliance review
   - Target: < 2 hours (75% reduction)
   - Measurement: Review cycle time tracking

2. **Accuracy Performance**
   - Target: < 10% false positive rate
   - Zero missed material violations
   - Measurement: Quarterly compliance audits

3. **Coverage & Readiness**
   - 100% of content checked pre-publication
   - > 90% audit readiness score
   - Measurement: Monthly compliance dashboard

## Compliance Frameworks

### Pre-configured Rules
- **Advertising Standards**: Claims substantiation, disclaimers, age-gating
- **Data Protection**: PII handling, consent management, right to erasure
- **Financial Promotions**: Risk warnings, past performance, authorization
- **Healthcare**: Off-label, adverse event reporting, HCP interactions
- **Sustainability**: Green claims, carbon neutral verification, ESG

### Custom Rule Builder
- Natural language rule definition
- A/B testing for threshold optimization
- Cross-team rule sharing

### Multi-jurisdiction Handling
- Automatic geo-detection
- Layered compliance (local + global)
- Conflict resolution protocols

## Expansion Path

After 20 consecutive compliant campaigns:
- Unlock L2 "Automated Compliance" with ML-based prediction
- Access regulatory change prediction models
- Enable cross-brand compliance benchmarking

## Support Resources

- **Training**: 4-hour compliance automation certification
- **Playbooks**: Jurisdiction-specific implementation guides
- **Legal Network**: Quarterly regulatory update briefings
- **Emergency Hotline**: 24/7 compliance escalation support