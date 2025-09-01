"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Download,
  FileText,
  Calendar,
  TrendingUp,
  Target,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Zap,
  Star,
  ArrowRight,
  Mail,
  Share2,
  Printer
} from "lucide-react"

// QBR Data Interfaces
interface QBRData {
  period: string
  client: string
  tier: string
  executive_summary: {
    highlights: string[]
    trust_os_adoption: number
    literacy_level: string
    next_quarter_focus: string
    foundation_status: "green" | "amber" | "red"
    last_backup_test: string
    security_incidents: number
    direct_to_prod_events: number
  }
  coverage_metrics: {
    total_initiatives: number
    ai_enabled: number
    ai_percentage: number
    heat_map_coverage: HeatMapCoverage[]
    department_penetration: DepartmentPenetration[]
  }
  ttfa_analysis: {
    average_ttfa: number
    improvement_vs_last_quarter: number
    best_performing_tile: string
    initiative_performance: InitiativePerformance[]
    bottlenecks: string[]
  }
  benchmark_comparison: {
    overall_percentile: number
    metrics: BenchmarkMetric[]
  }
  value_realization: {
    efficiency_gains: EfficiencyGain[]
    quality_improvements: QualityImprovement[]
    business_impact: BusinessImpact[]
  }
  recommendations: {
    immediate_actions: string[]
    next_quarter_roadmap: string[]
    investment_priorities: string[]
  }
}

interface HeatMapCoverage {
  tile: string
  coverage: number
  status: string
  trend: string
}

interface DepartmentPenetration {
  department: string
  percentage: number
}

interface InitiativePerformance {
  type: string
  avg_ttfa: number
  volume: number
  vs_target: string
}

interface BenchmarkMetric {
  metric: string
  your_value: number | string
  industry_avg: number | string
  leaders: number | string
  gap: string
}

interface EfficiencyGain {
  metric: string
  value: string
  improvement: string
}

interface QualityImprovement {
  metric: string
  value: string
  improvement: string
}

interface BusinessImpact {
  metric: string
  value: string
  description: string
}

// Mock QBR Data
const qbrData: QBRData = {
  period: "Q1 2025",
  client: "Brilliant Noise Limited",
  tier: "Assure+",
  executive_summary: {
    highlights: [
      "Achieved 78% AI coverage across all communications initiatives",
      "Reduced TTFA to 4.2 days, beating 5-day target by 18%", 
      "Completed L1 implementation across 4 of 5 governance tiles",
      "Generated 240% ROI with 1,240 hours monthly time savings",
      "Maintained 96% compliance score with zero critical incidents"
    ],
    trust_os_adoption: 85,
    literacy_level: "L1 achieved by 88% of users",
    next_quarter_focus: "L2 rollout and automation expansion",
    foundation_status: "amber",
    last_backup_test: "2025-01-10",
    security_incidents: 0,
    direct_to_prod_events: 0
  },
  coverage_metrics: {
    total_initiatives: 47,
    ai_enabled: 37,
    ai_percentage: 78,
    heat_map_coverage: [
      { tile: "Discovery", coverage: 85, status: "Active", trend: "+12%" },
      { tile: "Analysis", coverage: 70, status: "Building", trend: "Stable" },
      { tile: "Creation", coverage: 95, status: "Active", trend: "+18%" },
      { tile: "Governance", coverage: 60, status: "Active", trend: "+8%" },
      { tile: "Measurement", coverage: 45, status: "Planning", trend: "-" }
    ],
    department_penetration: [
      { department: "Marketing", percentage: 95 },
      { department: "Communications", percentage: 88 },
      { department: "Legal/Compliance", percentage: 75 },
      { department: "Other", percentage: 42 }
    ]
  },
  ttfa_analysis: {
    average_ttfa: 4.2,
    improvement_vs_last_quarter: 18,
    best_performing_tile: "Creation",
    initiative_performance: [
      { type: "AI-Guided Search", avg_ttfa: 3.8, volume: 12, vs_target: "On track" },
      { type: "Content Generation", avg_ttfa: 5.2, volume: 18, vs_target: "Needs attention" },
      { type: "Compliance Review", avg_ttfa: 3.1, volume: 8, vs_target: "On track" },
      { type: "Performance Analysis", avg_ttfa: 4.5, volume: 9, vs_target: "On track" }
    ],
    bottlenecks: [
      "Brand review stage averaging 2.1 days",
      "Legal department at capacity during month-end",
      "Manual compliance checks causing 15% of delays"
    ]
  },
  benchmark_comparison: {
    overall_percentile: 78,
    metrics: [
      { metric: "AI Coverage", your_value: "78%", industry_avg: "62%", leaders: "89%", gap: "+16%" },
      { metric: "TTFA", your_value: "4.2d", industry_avg: "6.8d", leaders: "3.1d", gap: "-2.6d" },
      { metric: "Exception Rate", your_value: "2.8%", industry_avg: "4.2%", leaders: "1.9%", gap: "-1.4%" },
      { metric: "Maturity Score", your_value: "73", industry_avg: "58", leaders: "85", gap: "+15" }
    ]
  },
  value_realization: {
    efficiency_gains: [
      { metric: "Time Saved", value: "1,240 hours/month", improvement: "35% increase" },
      { metric: "Cost Avoidance", value: "£180k", improvement: "Through automation" },
      { metric: "Productivity", value: "28% increase", improvement: "In output" }
    ],
    quality_improvements: [
      { metric: "Error Reduction", value: "45% fewer", improvement: "Compliance issues" },
      { metric: "Brand Consistency", value: "92% improvement", improvement: "Across channels" },
      { metric: "Speed to Market", value: "38% faster", improvement: "Campaign launch" }
    ],
    business_impact: [
      { metric: "Revenue Attribution", value: "£2.4M", description: "Influenced by AI initiatives" },
      { metric: "Risk Mitigation", value: "12 incidents", description: "Potential issues prevented" },
      { metric: "Innovation", value: "8 capabilities", description: "New capabilities unlocked" }
    ]
  },
  recommendations: {
    immediate_actions: [
      "Expand Creation tile to achieve 100% L1 coverage",
      "Address brand review bottleneck with automation",
      "Train 12 additional users to achieve L1 certification"
    ],
    next_quarter_roadmap: [
      "L2 rollout for Discovery and Creation tiles",
      "Integration with CRM for enhanced automation",
      "Achieve top 20% benchmark position in TTFA"
    ],
    investment_priorities: [
      "Automation platform upgrade for brand compliance",
      "40 hours additional training for legal team",
      "Process optimization for approval workflows"
    ]
  }
}

const getStatusBadge = (status: string) => {
  const colors = {
    green: "bg-green-100 text-green-800 border-green-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200",
    red: "bg-red-100 text-red-800 border-red-200"
  }
  
  return (
    <Badge className={`${colors[status as keyof typeof colors]} font-semibold`}>
      {status.toUpperCase()}
    </Badge>
  )
}

const getTrendIcon = (trend: string) => {
  if (trend.startsWith("+")) {
    return <TrendingUp className="h-3 w-3 text-green-500" />
  }
  return <div className="h-3 w-3 rounded-full bg-gray-400" />
}

export default function QBRReportGenerator() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">QBR Report Generator</h1>
              <p className="text-muted-foreground">Quarterly Business Review - {qbrData.period}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Report Header */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Quarterly Business Review</CardTitle>
            <CardDescription className="text-lg">
              {qbrData.period} • {qbrData.client} • {qbrData.tier} Tier
            </CardDescription>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Badge variant="outline" className="gap-2">
                <Calendar className="h-3 w-3" />
                Generated: {new Date().toLocaleDateString()}
              </Badge>
              <Badge variant="outline" className="gap-2">
                <FileText className="h-3 w-3" />
                BN Trust OS v2025.01
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Quarter Highlights</h3>
              <ul className="space-y-2">
                {qbrData.executive_summary.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Strategic Progress</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Trust OS Adoption:</span>
                    <span className="font-medium">{qbrData.executive_summary.trust_os_adoption}% complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Literacy Level:</span>
                    <span className="font-medium">{qbrData.executive_summary.literacy_level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Quarter Focus:</span>
                    <span className="font-medium">{qbrData.executive_summary.next_quarter_focus}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Foundation Trust Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Gate A Status:</span>
                    {getStatusBadge(qbrData.executive_summary.foundation_status)}
                  </div>
                  <div className="flex justify-between">
                    <span>Last Backup Test:</span>
                    <span className="font-medium">{qbrData.executive_summary.last_backup_test} - ✅ PASS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Incidents:</span>
                    <span className="font-medium">{qbrData.executive_summary.security_incidents} (Target: 0)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct-to-Prod Events:</span>
                    <span className="font-medium">{qbrData.executive_summary.direct_to_prod_events} (Target: 0)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coverage Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Coverage Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">AI Adoption Coverage</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{qbrData.coverage_metrics.total_initiatives}</div>
                  <div className="text-sm text-muted-foreground">Total Initiatives</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{qbrData.coverage_metrics.ai_enabled}</div>
                  <div className="text-sm text-muted-foreground">AI-Enabled</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{qbrData.coverage_metrics.ai_percentage}%</div>
                  <div className="text-sm text-muted-foreground">Coverage Rate</div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Coverage by Heat Map Tile</h3>
              <div className="space-y-3">
                {qbrData.coverage_metrics.heat_map_coverage.map((tile) => (
                  <div key={tile.tile} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{tile.tile}</span>
                      <Badge variant="outline" className="text-xs">{tile.status}</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {getTrendIcon(tile.trend)}
                        <span className="text-sm">{tile.trend}</span>
                      </div>
                      <span className="font-bold">{tile.coverage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Department Penetration</h3>
              <div className="space-y-3">
                {qbrData.coverage_metrics.department_penetration.map((dept) => (
                  <div key={dept.department} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{dept.department}</span>
                      <span className="font-medium">{dept.percentage}%</span>
                    </div>
                    <Progress value={dept.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TTFA Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              TTFA (Time to First Approval) Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{qbrData.ttfa_analysis.average_ttfa}d</div>
                <div className="text-sm text-muted-foreground">Average TTFA</div>
                <div className="text-xs text-green-600">Target: ≤7 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{qbrData.ttfa_analysis.improvement_vs_last_quarter}%</div>
                <div className="text-sm text-muted-foreground">Improvement vs Q4</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{qbrData.ttfa_analysis.best_performing_tile}</div>
                <div className="text-sm text-muted-foreground">Best Performing Tile</div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">TTFA by Initiative Type</h3>
              <div className="space-y-3">
                {qbrData.ttfa_analysis.initiative_performance.map((perf) => (
                  <div key={perf.type} className="flex items-center justify-between">
                    <span className="font-medium">{perf.type}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <span>{perf.avg_ttfa} days</span>
                      <span>{perf.volume} initiatives</span>
                      <Badge variant={perf.vs_target === "On track" ? "default" : "destructive"} className="text-xs">
                        {perf.vs_target === "On track" ? "✅" : "⚠️"} {perf.vs_target}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Bottleneck Analysis</h3>
              <ul className="space-y-2">
                {qbrData.ttfa_analysis.bottlenecks.map((bottleneck, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{bottleneck}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Benchmark Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Benchmark Comparison
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{qbrData.benchmark_comparison.overall_percentile}th</div>
              <div className="text-sm text-muted-foreground">Industry Percentile</div>
            </div>

            <Separator />

            <div className="space-y-4">
              {qbrData.benchmark_comparison.metrics.map((metric) => (
                <div key={metric.metric} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.metric}</span>
                    <span className="text-sm text-green-600">{metric.gap}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-center">
                    <div>
                      <div className="font-semibold text-blue-600">{metric.your_value}</div>
                      <div className="text-xs text-muted-foreground">You</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-600">{metric.industry_avg}</div>
                      <div className="text-xs text-muted-foreground">Industry Avg</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">{metric.leaders}</div>
                      <div className="text-xs text-muted-foreground">Leaders</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Value Realization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Value Realization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Efficiency Gains</h3>
                <div className="space-y-3">
                  {qbrData.value_realization.efficiency_gains.map((gain) => (
                    <div key={gain.metric}>
                      <div className="font-medium text-sm">{gain.metric}</div>
                      <div className="text-lg font-bold text-green-600">{gain.value}</div>
                      <div className="text-xs text-muted-foreground">{gain.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Quality Improvements</h3>
                <div className="space-y-3">
                  {qbrData.value_realization.quality_improvements.map((improvement) => (
                    <div key={improvement.metric}>
                      <div className="font-medium text-sm">{improvement.metric}</div>
                      <div className="text-lg font-bold text-blue-600">{improvement.value}</div>
                      <div className="text-xs text-muted-foreground">{improvement.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Business Impact</h3>
                <div className="space-y-3">
                  {qbrData.value_realization.business_impact.map((impact) => (
                    <div key={impact.metric}>
                      <div className="font-medium text-sm">{impact.metric}</div>
                      <div className="text-lg font-bold text-purple-600">{impact.value}</div>
                      <div className="text-xs text-muted-foreground">{impact.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Quarter Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Next Quarter Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Immediate Actions (Next 30 days)</h3>
              <ul className="space-y-2">
                {qbrData.recommendations.immediate_actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Q2 2025 Roadmap</h3>
              <ul className="space-y-2">
                {qbrData.recommendations.next_quarter_roadmap.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Investment Priorities</h3>
              <ul className="space-y-2">
                {qbrData.recommendations.investment_priorities.map((priority, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{priority}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Report Footer */}
        <Card>
          <CardContent className="text-center py-6">
            <div className="text-sm text-muted-foreground">
              Generated by BN Trust OS | {new Date().toLocaleDateString()} | v2025.01
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share Report
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Next QBR
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}