---
id: pc-prompt-analysis
version: 1.0.0
heatmap: Analysis
level: L1
literacy_gate: ["Responsible Prompting", "Bias Detection", "Output Validation"]
scorecard_threshold: 75
governance_gate: ["Initiative Registered", "12Q Assessment", "Prompt Library Approved", "Quality Checks Active", "Exceptions On"]
owners:
  sponsor: "Head of Insights"
  product: "Analytics Lead"
  approver: "Legal/Compliance"
  bn: "CSM"
kpis:
  - "Analysis accuracy > 85%"
  - "Time-to-insight −40%"
  - "Prompt reuse rate > 60%"
expansion_trigger: "5 successful campaign analyses → Predictive Analytics (L2)"
status: "Approved"
license: "BN Core IP – Internal Use License to client for embedded assets"
foundation:
  requires_gate_a: true
  controls: ["Exceptions Enabled", "Approver Roles Assigned"]
  data_emits: ["assessment_created", "approval_granted", "exception_opened"]
---

# Prompt Analysis (L1 · Analysis)

**Business outcome:** Transform raw communications data into actionable insights 40% faster using structured AI prompt workflows.

**Where it runs:** Radar → Analysis Studio (prompt chains + insight capture).

**Foundation:** Requires Gate A green status for deployment.

## Setup (Week 1–2)

1. **Configure analysis frameworks**
   - Import BN analysis prompt templates (sentiment, themes, gaps, opportunities)
   - Customize for brand voice and industry context
   - Set up output format standards

2. **Connect data sources**
   - Link campaign performance data
   - Import social listening feeds
   - Configure competitor monitoring inputs

3. **Establish quality baselines**
   - Run parallel analysis (AI vs. traditional) on 3 recent campaigns
   - Document accuracy benchmarks
   - Set acceptable variance thresholds

## Process

### Week 1: Foundation
- Complete literacy gate training (5 hours)
- Review and sign off on analysis frameworks
- Set up team access and permissions

### Week 2-3: Calibration
- Process historical campaign data through AI analysis
- Compare outputs with known outcomes
- Fine-tune prompts for accuracy

### Week 4+: Production
- Daily: Review automated insight generation
- Weekly: Validate high-stakes analyses
- Monthly: Optimize prompt library based on usage

## Controls & Risks

### Primary Controls
- **Dual validation**: High-impact insights require human verification
- **Confidence scoring**: AI outputs include certainty levels
- **Version control**: All prompt modifications tracked and reversible

### Key Risks
- **Hallucination**: AI inventing data points → Implement fact-checking protocols
- **Context drift**: Analysis missing nuance → Regular prompt updates
- **Over-automation**: Loss of human judgment → Mandatory review gates

### Exception Handling
- Low confidence scores → Escalate to senior analyst
- Conflicting insights → Run alternative prompt chains
- Data quality issues → Flag and exclude from analysis

## Integrations

### Inputs
- **Real-time feeds**: Social platforms, news monitoring, internal metrics
- **Batch imports**: Campaign reports, survey data, competitor intelligence
- **API streams**: Google Analytics, Adobe Analytics, native platform insights

### Outputs
- **Insight reports**: Automated executive summaries with key findings
- **Trend alerts**: Real-time notifications for significant shifts
- **QBR analytics**: Comprehensive performance analysis pack

## Success Metrics

1. **Speed Improvement**
   - Baseline: 8 hours average analysis time
   - Target: < 5 hours (37.5% reduction)
   - Measurement: Time from data to insight

2. **Accuracy Validation**
   - Target: > 85% alignment with expert analysis
   - Zero material errors in executive reporting
   - Measurement: Quarterly accuracy audits

3. **Adoption & Reuse**
   - Target: > 60% prompt reuse rate
   - 100% of analysts certified
   - Measurement: Radar usage analytics

## Advanced Capabilities

### Prompt Chaining
- Sequential analysis workflows (gather → analyze → synthesize)
- Conditional logic based on initial findings
- Multi-perspective analysis (brand, competitor, market)

### Custom Frameworks
- Industry-specific analysis templates
- Regional/cultural adaptation layers
- Crisis vs. BAU analysis modes

### Integration Recipes
- Campaign ROI calculator connections
- Automated slide deck generation
- Executive dashboard feeds

## Expansion Path

After achieving 5 successful campaign analyses with > 85% accuracy:
- Unlock L2 "Predictive Analytics" for trend forecasting
- Access advanced NLP models for emotion detection
- Enable cross-campaign pattern recognition

## Support Resources

- **Training**: 3-hour analysis methodology workshop
- **Templates**: 20+ pre-built analysis prompt chains
- **Best Practices**: Monthly webinar series
- **Expert Network**: Access to BN data science team