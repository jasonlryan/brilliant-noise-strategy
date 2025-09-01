"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  Users,
  Clock,
  BarChart3,
  Award,
  Activity,
  Download,
  RefreshCw,
  CheckCircle,
  Briefcase,
  Calendar,
  Star,
  Zap,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react"

// Business Impact Data
const businessMetrics = {
  total_roi: 240,
  target_roi: 400,
  cost_savings_annual: 2850000,
  revenue_impact: 1200000,
  efficiency_gain: 78,
  time_saved_monthly: 1240,
  productivity_increase: 45,
  risk_reduction: 85,
  market_position_percentile: 78
}

const roiBreakdown = [
  {
    category: "Process Automation",
    savings: 1200000,
    percentage: 42,
    timeframe: "Annual",
    description: "Automated approval workflows and compliance checking"
  },
  {
    category: "Risk Mitigation",
    savings: 850000,
    percentage: 30,
    timeframe: "Annual", 
    description: "Avoided compliance penalties and reputation damage"
  },
  {
    category: "Productivity Gains",
    savings: 500000,
    percentage: 18,
    timeframe: "Annual",
    description: "Faster decision-making and reduced manual work"
  },
  {
    category: "Strategic Insights", 
    savings: 300000,
    percentage: 10,
    timeframe: "Annual",
    description: "Data-driven strategic planning and market positioning"
  }
]

const businessOutcomes = [
  {
    metric: "Revenue Impact",
    current: "$1.2M",
    growth: "+15%",
    trend: "up",
    description: "Additional revenue from faster time-to-market",
    target: "$1.5M"
  },
  {
    metric: "Cost Reduction",
    current: "$2.85M", 
    growth: "+28%",
    trend: "up",
    description: "Annual cost savings from automation",
    target: "$3.2M"
  },
  {
    metric: "Risk Exposure",
    current: "85%",
    growth: "-15%", 
    trend: "down",
    description: "Reduction in regulatory and reputation risk",
    target: "90%"
  },
  {
    metric: "Market Position",
    current: "78th %ile",
    growth: "+12%",
    trend: "up", 
    description: "Industry percentile ranking",
    target: "85th %ile"
  }
]

const industryComparison = [
  {
    metric: "AI Governance Maturity",
    yourValue: 78,
    industryAvg: 62,
    topQuartile: 75,
    leaders: 92,
    unit: "%"
  },
  {
    metric: "Response Time",
    yourValue: 4.2,
    industryAvg: 6.8,
    topQuartile: 5.2,
    leaders: 3.1,
    unit: "days"
  },
  {
    metric: "ROI Achievement",
    yourValue: 240,
    industryAvg: 180,
    topQuartile: 220,
    leaders: 320,
    unit: "%"
  },
  {
    metric: "Risk Reduction",
    yourValue: 85,
    industryAvg: 65,
    topQuartile: 78,
    leaders: 95,
    unit: "%"
  }
]

const monthlyTrends = [
  { month: "Oct 2024", roi: 180, savings: 185000, efficiency: 65 },
  { month: "Nov 2024", roi: 210, savings: 225000, efficiency: 71 },
  { month: "Dec 2024", roi: 235, savings: 265000, efficiency: 75 },
  { month: "Jan 2025", roi: 240, savings: 285000, efficiency: 78 }
]

const executiveHighlights = [
  {
    title: "Record ROI Achievement",
    value: "240%",
    change: "+20% vs target",
    status: "success",
    description: "Exceeded ROI target by 20% through strategic automation"
  },
  {
    title: "Industry Leadership",
    value: "78th percentile",
    change: "+16% vs avg",
    status: "success",
    description: "Outperforming industry average across all key metrics"
  },
  {
    title: "Risk Mitigation",
    value: "$850K",
    change: "avoided penalties",
    status: "success", 
    description: "Prevented regulatory fines through proactive compliance"
  },
  {
    title: "Efficiency Transformation",
    value: "1,240 hours",
    change: "saved monthly",
    status: "success",
    description: "Equivalent to 7 full-time employees of productivity gain"
  }
]

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-600" />
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-600" />
    default:
      return <Minus className="h-4 w-4 text-gray-600" />
  }
}

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "up":
      return "text-green-600"
    case "down":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function BusinessImpactDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BarChart3 className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl font-bold text-foreground">Business Impact Dashboard</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Track ROI, efficiency gains, and business value from your AI governance transformation
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <DollarSign className="h-3 w-3" />
            {businessMetrics.total_roi}% ROI Achieved
          </Badge>
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <TrendingUp className="h-3 w-3" />
            {businessMetrics.market_position_percentile}th Industry Percentile
          </Badge>
          <Badge variant="outline" className="gap-2 border-purple-200 text-purple-700">
            <Award className="h-3 w-3" />
            ${(businessMetrics.cost_savings_annual / 1000000).toFixed(1)}M Annual Savings
          </Badge>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {executiveHighlights.map((highlight, index) => (
          <Card key={index} className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">{highlight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-600">{highlight.value}</div>
                <div className="text-sm font-medium text-green-700">{highlight.change}</div>
                <p className="text-xs text-muted-foreground">{highlight.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ROI Overview */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Return on Investment Analysis
          </CardTitle>
          <CardDescription>
            Comprehensive ROI breakdown and financial impact assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-green-600">{businessMetrics.total_roi}%</div>
                <p className="text-lg font-medium">Current ROI</p>
                <div className="flex items-center justify-center gap-2">
                  <Progress value={(businessMetrics.total_roi / businessMetrics.target_roi) * 100} className="w-32 h-3" />
                  <span className="text-sm text-muted-foreground">Target: {businessMetrics.target_roi}%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ${(businessMetrics.cost_savings_annual / 1000000).toFixed(1)}M
                  </div>
                  <p className="text-sm text-muted-foreground">Annual Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    ${(businessMetrics.revenue_impact / 1000000).toFixed(1)}M
                  </div>
                  <p className="text-sm text-muted-foreground">Revenue Impact</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">ROI Breakdown by Category</h4>
              {roiBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm font-bold">${(item.savings / 1000000).toFixed(1)}M</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="business-outcomes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="business-outcomes">Business Outcomes</TabsTrigger>
          <TabsTrigger value="industry-benchmarks">Industry Benchmarks</TabsTrigger>
          <TabsTrigger value="trend-analysis">Trend Analysis</TabsTrigger>
          <TabsTrigger value="executive-summary">Executive Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="business-outcomes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Business Outcomes</CardTitle>
              <CardDescription>
                Measurable business impact across critical performance areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {businessOutcomes.map((outcome, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{outcome.metric}</CardTitle>
                        <div className="flex items-center gap-1">
                          {getTrendIcon(outcome.trend)}
                          <span className={`text-sm font-medium ${getTrendColor(outcome.trend)}`}>
                            {outcome.growth}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-green-600">{outcome.current}</div>
                        <p className="text-sm text-muted-foreground">{outcome.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span>Target: {outcome.target}</span>
                          <span className="text-green-600">On track</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry-benchmarks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry Performance Benchmarking</CardTitle>
              <CardDescription>
                How your organization compares to industry standards and leaders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {industryComparison.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{item.metric}</h4>
                      <Badge variant="outline" className="text-xs">
                        {item.yourValue > item.industryAvg ? "Above Average" : "Below Average"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{item.yourValue}{item.unit}</div>
                        <p className="text-xs text-muted-foreground">Your Value</p>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{item.industryAvg}{item.unit}</div>
                        <p className="text-xs text-muted-foreground">Industry Avg</p>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{item.topQuartile}{item.unit}</div>
                        <p className="text-xs text-muted-foreground">Top Quartile</p>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-green-600">{item.leaders}{item.unit}</div>
                        <p className="text-xs text-muted-foreground">Leaders</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={75} className="h-2" />
                      <div className="absolute top-0 left-0 w-full h-2 flex items-center">
                        <div 
                          className="h-4 w-1 bg-blue-600 rounded" 
                          style={{ marginLeft: `${(item.yourValue / item.leaders) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trend-analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>
                Monthly progression of key business metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {monthlyTrends.map((trend, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-sm font-medium">{trend.month}</div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-green-600">{trend.roi}%</div>
                        <p className="text-xs text-muted-foreground">ROI</p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">${(trend.savings / 1000).toFixed(0)}K</div>
                        <p className="text-xs text-muted-foreground">Savings</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-green-600 flex items-center justify-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Consistent upward trend across all metrics</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="executive-summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
              <CardDescription>
                Board-ready summary of business impact and strategic value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-green-600">240%</div>
                    <p className="text-sm font-medium">ROI Achieved</p>
                    <p className="text-xs text-muted-foreground">Target exceeded by 20%</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-blue-600">$4.05M</div>
                    <p className="text-sm font-medium">Total Value Created</p>
                    <p className="text-xs text-muted-foreground">Revenue + Cost savings</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-purple-600">78th</div>
                    <p className="text-sm font-medium">Industry Percentile</p>
                    <p className="text-xs text-muted-foreground">Top quartile performance</p>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Exceeded ROI targets by 20% through strategic AI governance automation</li>
                    <li>Achieved industry-leading position (78th percentile) in AI governance maturity</li>
                    <li>Generated $4.05M in total business value ($2.85M savings + $1.2M revenue)</li>
                    <li>Reduced operational risk exposure by 85% through proactive compliance</li>
                    <li>Increased organizational efficiency by 78% with 1,240 hours saved monthly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download ROI Report
            </CardTitle>
            <CardDescription>
              Generate comprehensive ROI analysis for stakeholders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Board Presentation
            </CardTitle>
            <CardDescription>
              Present business impact results to board members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Schedule Meeting
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Update Projections
            </CardTitle>
            <CardDescription>
              Refresh forecasts and targets based on current performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Update Targets
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}