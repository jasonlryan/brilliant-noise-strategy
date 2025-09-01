"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Eye,
  Clock,
  CheckCircle,
  Shield,
  Users,
  Building,
  Globe,
  Database,
  FileText,
  Zap,
  Star
} from "lucide-react"

const benchmarkFramework = [
  {
    category: "Coverage Metrics",
    description: "Percentage of communications activities governed by AI-assisted processes",
    metrics: [
      { name: "AI Coverage %", definition: "(AI-enabled initiatives ÷ Total initiatives) × 100", source: "Radar initiative data" },
      { name: "Tile Coverage", definition: "% of Heat Map tiles with active L1+ implementations", source: "Play Card deployment data" },
      { name: "Department Coverage", definition: "% of relevant departments using Trust OS", source: "User access analytics" }
    ]
  },
  {
    category: "Efficiency Metrics", 
    description: "Speed and effectiveness of AI governance processes",
    metrics: [
      { name: "Time to First Approval (TTFA)", definition: "Days from initiative submission to first approval", source: "Workflow timestamps" },
      { name: "Approval SLA Achievement", definition: "% of approvals completed within target SLA", source: "SLA tracking system" },
      { name: "Exception Resolution Time", definition: "Average hours to resolve governance exceptions", source: "Exception management data" }
    ]
  },
  {
    category: "Quality Metrics",
    description: "Accuracy and reliability of AI governance outcomes", 
    metrics: [
      { name: "Exception Rate", definition: "% of initiatives triggering governance exceptions", source: "Exception logs" },
      { name: "Compliance Score", definition: "% of initiatives meeting all compliance requirements", source: "Compliance audits" },
      { name: "Stakeholder Satisfaction", definition: "Average satisfaction score from key stakeholders", source: "Quarterly surveys" }
    ]
  },
  {
    category: "Maturity Metrics",
    description: "Organizational AI governance sophistication level",
    metrics: [
      { name: "Literacy Level Distribution", definition: "% of team at each literacy level (L0-L3)", source: "Personal AI Scorecards" },
      { name: "Governance Sophistication", definition: "Complexity and automation of governance processes", source: "Process analysis" },
      { name: "Innovation Index", definition: "Rate of new AI capability adoption and development", source: "Feature adoption tracking" }
    ]
  }
]

const industryBenchmarks = {
  participation: "42 organizations",
  industries: ["Technology", "Financial Services", "Healthcare", "Professional Services", "Retail"],
  dataPoints: "180k+ governance decisions analyzed",
  updateFrequency: "Quarterly with annual deep dive"
}

const benchmarkValue = [
  {
    stakeholder: "Participants",
    benefits: [
      "Understand competitive position and identify improvement opportunities",
      "Access peer insights and governance best practices",
      "Validate governance investments with industry data",
      "Receive quarterly benchmark reports and insights"
    ]
  },
  {
    stakeholder: "Industry",
    benefits: [
      "Establish governance maturity standards and best practices",
      "Create shared knowledge base for AI governance evolution", 
      "Influence regulatory guidance with evidence-based insights",
      "Foster community of practice around AI governance"
    ]
  },
  {
    stakeholder: "BN Trust OS",
    benefits: [
      "Demonstrate Trust OS value with comparative data",
      "Inform product development with usage patterns",
      "Build data moat through unique industry insights",
      "Establish thought leadership in AI governance space"
    ]
  }
]

const currentBenchmarkData = {
  avgCoverage: 62,
  avgTTFA: 8.3,
  avgExceptionRate: 4.2,
  avgComplianceScore: 84,
  topPerformerCoverage: 89,
  topPerformerTTFA: 3.1,
  industryRange: "15% - 89%"
}

const benchmarkPrinciples = [
  {
    principle: "Anonymized Aggregation",
    description: "All client data is de-identified before analysis",
    implementation: "Automated PII removal and data masking"
  },
  {
    principle: "Opt-in Participation", 
    description: "Clients voluntarily contribute to benchmarks",
    implementation: "Explicit consent with granular data sharing controls"
  },
  {
    principle: "Mutual Value",
    description: "Participants receive enhanced insights and industry position",
    implementation: "Quarterly reports and peer comparison dashboards"
  },
  {
    principle: "Continuous Improvement",
    description: "Benchmarks evolve with industry best practices", 
    implementation: "Regular methodology updates and metric refinement"
  }
]

export default function BenchmarksPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Benchmark System</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Industry-first AI governance benchmarking methodology and data insights
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Building className="h-3 w-3" />
            {industryBenchmarks.participation} Organizations
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Database className="h-3 w-3" />
            {industryBenchmarks.dataPoints} Decisions Analyzed
          </Badge>
        </div>
      </div>

      {/* Benchmark Philosophy */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Benchmark Philosophy
          </CardTitle>
          <CardDescription>
            Core principles governing our benchmarking approach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {benchmarkPrinciples.map((principle, index) => (
              <div key={index} className="space-y-2">
                <h5 className="font-semibold">{principle.principle}</h5>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
                <p className="text-xs text-blue-600">{principle.implementation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Industry Position */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Current Industry Benchmarks
          </CardTitle>
          <CardDescription>
            Latest governance performance data across {industryBenchmarks.participation} organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-600">{currentBenchmarkData.avgCoverage}%</div>
              <p className="text-sm font-medium">Avg AI Coverage</p>
              <p className="text-xs text-muted-foreground">Range: {currentBenchmarkData.industryRange}</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-green-600">{currentBenchmarkData.avgTTFA}d</div>
              <p className="text-sm font-medium">Avg TTFA</p>
              <p className="text-xs text-muted-foreground">Top: {currentBenchmarkData.topPerformerTTFA}d</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-amber-600">{currentBenchmarkData.avgExceptionRate}%</div>
              <p className="text-sm font-medium">Avg Exception Rate</p>
              <p className="text-xs text-muted-foreground">Target: &lt;5%</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-purple-600">{currentBenchmarkData.avgComplianceScore}%</div>
              <p className="text-sm font-medium">Avg Compliance</p>
              <p className="text-xs text-muted-foreground">Target: 95%+</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benchmark Framework */}
      <Tabs defaultValue="framework" className="space-y-4">
        <TabsList>
          <TabsTrigger value="framework">Framework</TabsTrigger>
          <TabsTrigger value="value">Value Proposition</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
        </TabsList>

        <TabsContent value="framework" className="space-y-4">
          <div className="space-y-6">
            {benchmarkFramework.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <Card key={metricIndex} className="border-l-4 border-l-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg">{metric.name}</CardTitle>
                          <CardDescription>{metric.definition}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">Source: {metric.source}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="value" className="space-y-4">
          <div className="space-y-6">
            {benchmarkValue.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Value for {value.stakeholder}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {value.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="methodology" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data Collection & Analysis
              </CardTitle>
              <CardDescription>
                How we gather, process, and analyze benchmark data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold">Data Sources</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-blue-500" />
                      Trust OS platform usage analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-500" />
                      Initiative and approval workflow data
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-500" />
                      Performance and efficiency metrics
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-500" />
                      Quarterly client survey responses
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-semibold">Analysis Methods</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Statistical aggregation and percentile ranking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cohort analysis by industry and organization size
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Trend analysis and predictive modeling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Best practice identification and pattern recognition
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Industry Participation
              </CardTitle>
              <CardDescription>
                Current benchmark participant profile and coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h5 className="font-semibold">Participating Industries</h5>
                  <ul className="space-y-1 text-sm">
                    {industryBenchmarks.industries.map((industry, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Building className="h-3 w-3 text-blue-500" />
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold">Data Volume</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Organizations:</span>
                      <span className="font-bold">{industryBenchmarks.participation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Data Points:</span>
                      <span className="font-bold text-green-600">{industryBenchmarks.dataPoints}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Update Frequency:</span>
                      <span className="font-bold">{industryBenchmarks.updateFrequency}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold">Coverage Quality</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Data Completeness:</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Update Recency:</span>
                      <span className="font-bold">&lt;30 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Statistical Confidence:</span>
                      <span className="font-bold text-blue-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Deliverables & Outputs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Benchmark Deliverables</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quarterly Reports
              </CardTitle>
              <CardDescription>
                Regular benchmark insights and industry position updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Individual organization performance vs. industry
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Peer group comparison and ranking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Trend analysis and improvement recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Best practice sharing and case studies
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Annual State Report
              </CardTitle>
              <CardDescription>
                Comprehensive "State of AI Governance in Communications" publication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Industry-wide governance maturity assessment
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Regulatory compliance landscape analysis
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Emerging trend identification and implications
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Thought leadership and market positioning
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Live Benchmark Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Live Industry Benchmarks
          </CardTitle>
          <CardDescription>
            Current performance distribution across participating organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-semibold">Coverage Performance</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Industry Average:</span>
                  <div className="flex items-center gap-2">
                    <Progress value={currentBenchmarkData.avgCoverage} className="w-20 h-2" />
                    <span className="font-bold">{currentBenchmarkData.avgCoverage}%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Top Performer:</span>
                  <div className="flex items-center gap-2">
                    <Progress value={currentBenchmarkData.topPerformerCoverage} className="w-20 h-2" />
                    <span className="font-bold text-green-600">{currentBenchmarkData.topPerformerCoverage}%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Your Position:</span>
                  <Badge variant="outline" className="text-green-600">78th percentile</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold">Efficiency Performance</h5>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Industry Avg TTFA:</span>
                  <span className="font-bold">{currentBenchmarkData.avgTTFA} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Top Performer TTFA:</span>
                  <span className="font-bold text-green-600">{currentBenchmarkData.topPerformerTTFA} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Your TTFA:</span>
                  <Badge variant="outline" className="text-green-600">4.2 days</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Your Ranking:</span>
                  <Badge variant="outline" className="text-green-600">Top 25%</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}