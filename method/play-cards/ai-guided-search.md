---
id: pc-ai-guided-search
version: 1.2.0
heatmap: Discovery
level: L1
literacy_gate: ["Responsible Prompting", "PII & IP Basics", "Governance 101"]
scorecard_threshold: 70
governance_gate: ["Initiative Registered", "12Q Assessment", "Approver Sign-off", "Evidence Bundle", "Exceptions On"]
owners:
  sponsor: "CCO / Head of Comms"
  product: "Comms Ops Lead"
  approver: "Legal/Compliance"
  bn: "CSM"
kpis:
  - "TTFA ≤ 7 days"
  - "Discovery cycle-time −30%"
  - "Exceptions < 5%"
expansion_trigger: "3 consecutive briefs hitting time target → Discovery Bots (L2)"
status: "Approved"
license: "BN Core IP – Internal Use License to client for embedded assets"
foundation:
  requires_gate_a: true
  controls: ["Exceptions Enabled", "Approver Roles Assigned"]
  data_emits: ["assessment_created", "approval_granted", "exception_opened"]
---

# AI-Guided Search (L1 · Discovery)

**Business outcome:** Reduce short-list time by 30–40% and increase candidate relevance through AI-assisted search capabilities.

**Where it runs:** Radar → Briefs & Discovery (prompt library + results capture).

**Foundation:** Requires Gate A green status for deployment.

## Setup (Week 1–2)

1. **Load brand guardrails & red-flags**
   - Import company brand guidelines and tone of voice documentation
   - Define prohibited terms, competitor mentions, and sensitive topics
   - Configure compliance flags for regulated content

2. **Upload prompt kits**
   - Install BN-approved discovery prompt templates
   - Customize prompts for specific use cases (influencer search, journalist outreach, etc.)
   - Set up prompt versioning and approval workflows

3. **Connect listening CSV export**
   - Configure data ingestion from social listening tools
   - Map CSV fields to Radar schema
   - Set up automated import schedule

## Process

### Week 1: Foundation
- Complete literacy gate modules (4 hours self-paced)
- Register initiative in Radar with business justification
- Assign roles and set up approval chain

### Week 2-3: Configuration
- Import historical search data for baseline metrics
- Configure AI search parameters and thresholds
- Run test searches with known good outcomes

### Week 4+: Operation
- Daily: Review AI-suggested candidates against brief requirements
- Weekly: Check exception reports and adjust parameters
- Monthly: Export metrics for QBR reporting

## Controls & Risks

### Primary Controls
- **Prompt approval workflow**: All custom prompts require Legal/Compliance sign-off
- **PII masking**: Automatic detection and redaction of personal information
- **Audit trail**: Complete log of all searches, results, and decisions

### Key Risks
- **Bias in results**: Monitor for demographic skewing; implement diversity checks
- **Data leakage**: Ensure search queries don't expose confidential strategies
- **Over-reliance**: Maintain human review for all AI recommendations

### Exception Handling
- False positives in compliance flags → Review and whitelist
- Search quality degradation → Retrain with approved examples
- API rate limits → Implement queuing and batch processing

## Integrations

### Inputs
- **CSV/webhook**: Social listening data, media databases, internal CRM
- **API connections**: Optional direct integrations with Brandwatch, Cision, Meltwater

### Outputs
- **Brief export**: Formatted candidate lists with relevance scores
- **QBR pack**: Monthly metrics on search efficiency and quality
- **Evidence bundle**: Compliance artifacts for audit

## Success Metrics

1. **Efficiency Gains**
   - Baseline: Average 16 hours per brief research
   - Target: < 10 hours (37% reduction)
   - Measurement: Time tracking in Radar

2. **Quality Improvement**
   - Baseline: 40% candidate acceptance rate
   - Target: > 65% acceptance rate
   - Measurement: Brief outcome tracking

3. **Compliance**
   - Target: < 5% exception rate
   - Zero critical compliance breaches
   - 100% audit trail coverage

## Expansion Path

Upon achieving L1 success metrics for 3 consecutive months:
- Unlock L2 "Discovery Bots" for automated candidate monitoring
- Access advanced ML models for predictive candidate scoring
- Enable multi-market search capabilities

## Support Resources

- **Training**: 2-hour onboarding workshop included
- **Documentation**: Radar Help Center → AI-Guided Search
- **Office Hours**: Weekly drop-in sessions with BN team
- **Slack Channel**: #bn-radar-discovery for peer support