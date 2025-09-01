# BN Trust OS Metrics Schema

## Overview
This document defines the complete metrics schema for BN Trust OS, including event tracking, KPI calculations, and data structures used across the platform for measurement, benchmarking, and reporting.

## Core Metrics Categories

### Coverage Metrics
**Definition:** Measurement of AI governance adoption and penetration across communications activities

#### AI Coverage Percentage
```json
{
  "metric_id": "coverage_ai_percentage",
  "calculation": "(ai_enabled_initiatives / total_initiatives) * 100",
  "data_type": "percentage",
  "update_frequency": "real_time",
  "benchmark_tiers": {
    "leaders": "> 85%",
    "fast_followers": "60-84%", 
    "adopters": "35-59%",
    "starters": "< 35%"
  }
}
```

#### Heat Map Tile Coverage
```json
{
  "metric_id": "coverage_heatmap_tiles",
  "calculation": "(active_tiles / 5_total_tiles) * 100",
  "dimensions": ["Discovery", "Analysis", "Creation", "Governance", "Measurement"],
  "data_type": "percentage",
  "update_frequency": "daily"
}
```

### Time to First Approval (TTFA)
**Definition:** Time from initiative submission to first approval

#### Overall TTFA
```json
{
  "metric_id": "ttfa_overall",
  "calculation": "median(approval_timestamp - submission_timestamp)",
  "unit": "days",
  "target": "≤ 7 days",
  "data_type": "duration",
  "update_frequency": "real_time",
  "percentiles": {
    "p90": "2.5 days",
    "p75": "5 days", 
    "p50": "8 days",
    "p25": "14 days"
  }
}
```

#### TTFA by Priority
```json
{
  "metric_id": "ttfa_by_priority",
  "dimensions": {
    "critical": {"target": "≤ 3 days"},
    "high": {"target": "≤ 5 days"},
    "medium": {"target": "≤ 7 days"},
    "low": {"target": "≤ 14 days"}
  },
  "calculation": "median(approval_timestamp - submission_timestamp) GROUP BY priority",
  "unit": "days"
}
```

### Exception Rates
**Definition:** Frequency of governance process exceptions requiring escalation

#### Process Exception Rate
```json
{
  "metric_id": "exception_rate_process",
  "calculation": "(process_exceptions / total_initiatives) * 100",
  "data_type": "percentage",
  "quality_bands": {
    "good": "< 2%",
    "acceptable": "2-5%",
    "poor": "> 5%"
  }
}
```

#### Compliance Exception Rate
```json
{
  "metric_id": "exception_rate_compliance", 
  "calculation": "(compliance_exceptions / total_approvals) * 100",
  "data_type": "percentage",
  "quality_bands": {
    "good": "< 1%",
    "acceptable": "1-3%", 
    "poor": "> 3%"
  }
}
```

### Approval SLA Performance
**Definition:** Percentage of approvals meeting defined service level agreements

#### SLA Achievement Rate
```json
{
  "metric_id": "sla_achievement_rate",
  "calculation": "(approvals_within_sla / total_approvals) * 100",
  "dimensions": {
    "critical": {"target": "95%"},
    "standard": {"target": "90%"},
    "bulk": {"target": "98%"}
  },
  "data_type": "percentage"
}
```

## Event Schema

### Initiative Events
```json
{
  "event_type": "initiative_created",
  "timestamp": "ISO_8601_UTC",
  "user_id": "string",
  "initiative_id": "uuid",
  "properties": {
    "tile": "enum[Discovery|Analysis|Creation|Governance|Measurement]",
    "play_card": "string",
    "priority": "enum[critical|high|medium|low]",
    "estimated_effort": "integer", 
    "department": "string",
    "campaign_id": "uuid"
  }
}
```

### Approval Events
```json
{
  "event_type": "approval_completed",
  "timestamp": "ISO_8601_UTC", 
  "user_id": "string",
  "initiative_id": "uuid",
  "properties": {
    "approver_role": "string",
    "approval_stage": "string",
    "decision": "enum[approved|rejected|escalated]",
    "ttfa_hours": "integer",
    "sla_met": "boolean",
    "exception_raised": "boolean"
  }
}
```

### Exception Events
```json
{
  "event_type": "exception_raised",
  "timestamp": "ISO_8601_UTC",
  "user_id": "string", 
  "initiative_id": "uuid",
  "properties": {
    "exception_type": "enum[process|compliance|data_quality|technical]",
    "severity": "enum[low|medium|high|critical]",
    "description": "string",
    "assigned_to": "string",
    "resolution_target": "ISO_8601_UTC"
  }
}
```

### Usage Events
```json
{
  "event_type": "play_card_used",
  "timestamp": "ISO_8601_UTC",
  "user_id": "string",
  "properties": {
    "play_card_id": "string",
    "tile": "string", 
    "literacy_level": "enum[L1|L2|L3]",
    "success_outcome": "boolean",
    "duration_minutes": "integer",
    "roi_impact": "string"
  }
}
```

### Training Events
```json
{
  "event_type": "literacy_progression",
  "timestamp": "ISO_8601_UTC",
  "user_id": "string",
  "properties": {
    "from_level": "enum[L0|L1|L2]",
    "to_level": "enum[L1|L2|L3]",
    "scorecard_score": "integer",
    "training_hours": "integer",
    "certification_earned": "boolean"
  }
}
```

## Data Aggregation Patterns

### Real-time Metrics
**Update Frequency:** Event-driven, sub-second
**Metrics:** TTFA, Exception Alerts, SLA Breaches
**Storage:** Time-series database (InfluxDB)

### Daily Aggregations  
**Update Frequency:** Daily at 00:00 UTC
**Metrics:** Coverage percentages, Exception rates, Completion statistics
**Storage:** OLAP cube (ClickHouse)

### Monthly Aggregations
**Update Frequency:** First day of month
**Metrics:** Benchmark comparisons, Trend analysis, QBR preparation
**Storage:** Data warehouse (Snowflake)

### Quarterly Aggregations
**Update Frequency:** Quarterly business reviews
**Metrics:** Strategic KPIs, Market benchmarks, ROI calculations  
**Storage:** Business intelligence (Tableau/PowerBI)

## Data Quality Standards

### Completeness Requirements
- **Initiative Data:** 100% required fields completed
- **Approval Data:** Timestamp accuracy ±1 second
- **User Data:** Role classification 95% accuracy
- **Exception Data:** Resolution tracking 100% coverage

### Validation Rules
```sql
-- TTFA cannot be negative
CONSTRAINT ttfa_positive CHECK (ttfa_hours >= 0)

-- Exception severity must align with priority
CONSTRAINT severity_priority_alignment 
CHECK (
  (priority = 'critical' AND severity IN ('high', 'critical')) OR
  (priority = 'high' AND severity IN ('medium', 'high', 'critical')) OR
  (priority IN ('medium', 'low') AND severity IN ('low', 'medium', 'high'))
)

-- SLA targets must be realistic
CONSTRAINT sla_realistic CHECK (sla_target_hours > 0 AND sla_target_hours <= 168)
```

## Privacy & Anonymization

### Personal Data Handling
- **User IDs:** Hashed before storage in analytics database
- **IP Addresses:** Truncated to /24 subnet for location analysis
- **Session Data:** Anonymized after 30 days
- **Audit Logs:** Personal data redacted for benchmark usage

### Benchmark Anonymization
```json
{
  "anonymization_rules": {
    "client_name": "removed",
    "user_names": "hashed", 
    "ip_addresses": "truncated",
    "timestamps": "rounded_to_hour",
    "small_counts": "suppressed_if_n_less_than_5"
  }
}
```

## API Schema

### Metrics Endpoint
```
GET /api/v1/metrics/{metric_id}
```

**Response Schema:**
```json
{
  "metric_id": "string",
  "value": "number",
  "unit": "string", 
  "timestamp": "ISO_8601_UTC",
  "benchmark": {
    "percentile": "number",
    "industry_average": "number",
    "your_position": "enum[leader|fast_follower|adopter|starter]"
  },
  "trend": {
    "direction": "enum[up|down|stable]",
    "percentage_change": "number",
    "period": "string"
  }
}
```

---

*This metrics schema serves as the foundation for all measurement, benchmarking, and reporting within BN Trust OS. All product teams must adhere to this schema for consistent data collection and analysis.*