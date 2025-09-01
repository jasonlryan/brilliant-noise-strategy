"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  TrendingUp, 
  TrendingDown,
  Target,
  Users,
  Clock,
  Shield,
  DollarSign,
  BarChart3,
  LineChart,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Activity,
  Award,
  Briefcase,
  Calendar
} from "lucide-react"

// Analytics Types
interface KPIMetric {
  id: string
  name: string
  current_value: number | string
  target_value: number | string
  unit: string
  trend: "up" | "down" | "stable"
  trend_percentage: number
  status: "good" | "warning" | "critical"
  category: "foundation" | "coverage" | "efficiency" | "quality" | "value"
  benchmark_percentile?: number
  last_updated: string
}

interface BenchmarkData {
  metric: string
  your_value: number
  industry_avg: number
  top_quartile: number
  leaders: number
  percentile: number
}

interface TimeSeriesData {
  period: string
  ai_coverage: number
  ttfa: number
  exception_rate: number
  maturity_score: number
}

// Mock data for demonstration
const kpiMetrics: KPIMetric[] = [
  {
    id: "ai_coverage",
    name: "AI Coverage Percentage",
    current_value: 78,
    target_value: 85,
    unit: "%",
    trend: "up",
    trend_percentage: 12,
    status: "good",
    category: "coverage",
    benchmark_percentile: 75,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "ttfa",
    name: "Time to First Approval",
    current_value: 4.2,
    target_value: 5.0,
    unit: "days",
    trend: "down",
    trend_percentage: 18,
    status: "good",
    category: "efficiency",
    benchmark_percentile: 82,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "exception_rate",
    name: "Exception Rate",
    current_value: 2.8,
    target_value: 3.0,
    unit: "%",
    trend: "down",
    trend_percentage: 5,
    status: "good",
    category: "quality",
    benchmark_percentile: 78,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "maturity_score",
    name: "Governance Maturity Score",
    current_value: 73,
    target_value: 80,
    unit: "/100",
    trend: "up",
    trend_percentage: 8,
    status: "good",
    category: "foundation",
    benchmark_percentile: 68,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "automation_rate",
    name: "Automation Rate",
    current_value: 45,
    target_value: 60,
    unit: "%",
    trend: "up",
    trend_percentage: 15,
    status: "warning",
    category: "efficiency",
    benchmark_percentile: 65,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "dept_penetration",
    name: "Department Penetration",
    current_value: 83,
    target_value: 90,
    unit: "%",
    trend: "up",
    trend_percentage: 7,
    status: "good",
    category: "coverage",
    benchmark_percentile: 85,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "roi",
    name: "Return on Investment",
    current_value: 240,
    target_value: 200,
    unit: "%",
    trend: "up",
    trend_percentage: 22,
    status: "good",
    category: "value",
    benchmark_percentile: 88,
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "time_savings",
    name: "Monthly Time Savings",
    current_value: 1240,
    target_value: 1000,
    unit: "hours",
    trend: "up",
    trend_percentage: 18,
    status: "good",
    category: "value",
    benchmark_percentile: 79,
    last_updated: "2025-01-15T12:00:00Z"
  }
]

const benchmarkData: BenchmarkData[] = [
  {
    metric: "AI Coverage",
    your_value: 78,
    industry_avg: 62,
    top_quartile: 75,
    leaders: 89,
    percentile: 75
  },
  {
    metric: "TTFA",
    your_value: 4.2,
    industry_avg: 6.8,
    top_quartile: 5.2,
    leaders: 3.1,
    percentile: 82
  },
  {
    metric: "Exception Rate",
    your_value: 2.8,
    industry_avg: 4.2,
    top_quartile: 3.1,
    leaders: 1.9,
    percentile: 78
  },
  {
    metric: "Maturity Score",
    your_value: 73,
    industry_avg: 58,
    top_quartile: 72,
    leaders: 85,
    percentile: 68
  }
]

const timeSeriesData: TimeSeriesData[] = [
  { period: "Oct 2024", ai_coverage: 45, ttfa: 8.2, exception_rate: 5.1, maturity_score: 52 },
  { period: "Nov 2024", ai_coverage: 58, ttfa: 6.8, exception_rate: 4.2, maturity_score: 61 },
  { period: "Dec 2024", ai_coverage: 69, ttfa: 5.4, exception_rate: 3.6, maturity_score: 67 },
  { period: "Jan 2025", ai_coverage: 78, ttfa: 4.2, exception_rate: 2.8, maturity_score: 73 }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "good":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-amber-500" />
    case "critical":
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    default:
      return <Activity className="h-4 w-4 text-gray-500" />
  }
}

const getTrendIcon = (trend: string, percentage: number) => {
  const isPositiveTrend = trend === "up"
  const Icon = isPositiveTrend ? TrendingUp : TrendingDown
  const color = isPositiveTrend ? "text-green-500" : "text-red-500"
  
  return (
    <div className={`flex items-center gap-1 ${color}`}>
      <Icon className="h-3 w-3" />
      <span className="text-xs">{percentage}%</span>
    </div>
  )
}

const getPercentileColor = (percentile: number) => {
  if (percentile >= 80) return "text-green-600"
  if (percentile >= 60) return "text-amber-600"
  return "text-red-600"
}


export default function AnalyticsKPIDashboard() {
  const foundationMetrics = kpiMetrics.filter(m => m.category === "foundation")
  const coverageMetrics = kpiMetrics.filter(m => m.category === "coverage")
  const efficiencyMetrics = kpiMetrics.filter(m => m.category === "efficiency")
  const qualityMetrics = kpiMetrics.filter(m => m.category === "quality")
  const valueMetrics = kpiMetrics.filter(m => m.category === "value")

  const avgPercentile = Math.round(
    kpiMetrics.filter(m => m.benchmark_percentile).reduce((acc, m) => acc + (m.benchmark_percentile || 0), 0) / 
    kpiMetrics.filter(m => m.benchmark_percentile).length
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics & KPI Dashboard</h1>
              <p className="text-muted-foreground">Comprehensive performance metrics and business value tracking</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="30d">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Executive Summary */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Overall Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">{avgPercentile}th</span>
                <Award className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Industry percentile</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">AI Governance ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">240%</span>
                <DollarSign className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Return on investment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Monthly Time Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">1,240h</span>
                <Clock className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Equivalent to 7.4 FTE</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Foundation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-amber-600">AMBER</span>
                <Shield className="h-4 w-4 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Gate A: 2 items pending</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Core KPIs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpiMetrics.slice(0, 8).map((metric) => (
                <Card key={metric.id} className="shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                      {getStatusIcon(metric.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          {metric.current_value}{metric.unit}
                        </span>
                        {getTrendIcon(metric.trend, metric.trend_percentage)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Target: {metric.target_value}{metric.unit}
                      </div>
                      {metric.benchmark_percentile && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">Industry: </span>
                          <span className={getPercentileColor(metric.benchmark_percentile)}>
                            {metric.benchmark_percentile}th percentile
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Category Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Foundation & Security
                  </CardTitle>
                  <CardDescription>
                    Gate A status and operational readiness metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {foundationMetrics.map((metric) => (
                    <div key={metric.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{metric.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Target: {metric.target_value}{metric.unit}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{metric.current_value}{metric.unit}</div>
                        {getTrendIcon(metric.trend, metric.trend_percentage)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Business Value
                  </CardTitle>
                  <CardDescription>
                    ROI, cost savings, and efficiency improvements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {valueMetrics.map((metric) => (
                    <div key={metric.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{metric.name}</div>
                        <div className="text-xs text-muted-foreground">
                          Target: {metric.target_value}{metric.unit}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{metric.current_value}{metric.unit}</div>
                        {getTrendIcon(metric.trend, metric.trend_percentage)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Coverage Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Coverage & Adoption
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {coverageMetrics.map((metric) => (
                    <div key={metric.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.name}</span>
                        <span className="font-medium">{metric.current_value}{metric.unit}</span>
                      </div>
                      <Progress value={Number(metric.current_value)} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Efficiency Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Efficiency & Speed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {efficiencyMetrics.map((metric) => (
                    <div key={metric.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.name}</span>
                        <span className="font-medium">{metric.current_value}{metric.unit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={Number(metric.current_value)} className="h-2 flex-1" />
                        {getTrendIcon(metric.trend, metric.trend_percentage)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quality Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Quality & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {qualityMetrics.map((metric) => (
                    <div key={metric.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.name}</span>
                        <span className="font-medium">{metric.current_value}{metric.unit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={Number(metric.current_value)} className="h-2 flex-1" />
                        {getTrendIcon(metric.trend, metric.trend_percentage)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benchmarks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Industry Benchmark Comparison
                </CardTitle>
                <CardDescription>
                  Your performance compared to industry averages and market leaders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {benchmarkData.map((data) => (
                    <div key={data.metric} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{data.metric}</span>
                        <span className={`font-bold ${getPercentileColor(data.percentile)}`}>
                          {data.percentile}th percentile
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{data.your_value}</div>
                          <div className="text-xs text-muted-foreground">You</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-600">{data.industry_avg}</div>
                          <div className="text-xs text-muted-foreground">Industry Avg</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-amber-600">{data.top_quartile}</div>
                          <div className="text-xs text-muted-foreground">Top 25%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{data.leaders}</div>
                          <div className="text-xs text-muted-foreground">Leaders</div>
                        </div>
                      </div>
                      <Progress value={data.percentile} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Performance Trends
                </CardTitle>
                <CardDescription>
                  Progress over time showing implementation maturity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">AI Coverage Growth</h4>
                      <div className="space-y-2">
                        {timeSeriesData.map((data) => (
                          <div key={data.period} className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{data.period}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={data.ai_coverage} className="h-2 w-20" />
                              <span className="text-sm font-medium">{data.ai_coverage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium">TTFA Improvement</h4>
                      <div className="space-y-2">
                        {timeSeriesData.map((data, index) => (
                          <div key={data.period} className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{data.period}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{data.ttfa}d</span>
                              {index > 0 && data.ttfa < timeSeriesData[index - 1].ttfa && (
                                <TrendingDown className="h-3 w-3 text-green-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Items */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                QBR Report
              </CardTitle>
              <CardDescription>
                Generate quarterly business review with all metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Generate QBR
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Executive Summary
              </CardTitle>
              <CardDescription>
                High-level performance summary for leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Summary
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5" />
                Improvement Plan
              </CardTitle>
              <CardDescription>
                Recommendations to reach next performance level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}