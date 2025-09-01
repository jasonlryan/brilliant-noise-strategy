"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  AlertTriangle,
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  Users,
  Target,
  Bell,
  CheckCircle,
  XCircle,
  ArrowRight,
  BarChart3,
  FileText
} from "lucide-react"

// Risk monitoring data
const riskData = {
  overall_risk_score: 3.2,
  risk_level: "MODERATE",
  active_risks: 3,
  high_priority_risks: 1,
  medium_priority_risks: 2,
  low_priority_risks: 0,
  reputation_score: 78,
  crisis_signals: 2,
  avg_response_time: 4.2
}

const activeRisks = [
  {
    id: "risk-001",
    title: "AI Content Generation Policy Violation",
    description: "Marketing AI tool generated content that may violate brand guidelines",
    severity: "high",
    category: "Content Risk",
    detected: "2 hours ago",
    status: "active",
    impact_score: 8.5,
    probability: 75,
    business_impact: "Brand reputation, regulatory exposure",
    owner: "Marketing Team",
    due_date: "Today"
  },
  {
    id: "risk-002", 
    title: "Data Privacy Compliance Gap",
    description: "AI customer service bot accessing PII without proper consent framework",
    severity: "medium",
    category: "Privacy Risk",
    detected: "1 day ago", 
    status: "investigating",
    impact_score: 6.2,
    probability: 60,
    business_impact: "GDPR violation risk, customer trust",
    owner: "Legal Team",
    due_date: "Tomorrow"
  },
  {
    id: "risk-003",
    title: "Bias Detection in Recruitment AI",
    description: "Potential discriminatory patterns detected in AI-powered candidate screening",
    severity: "medium",
    category: "Bias Risk",
    detected: "3 days ago",
    status: "mitigating",
    impact_score: 7.1,
    probability: 45,
    business_impact: "Legal liability, diversity goals",
    owner: "HR Team", 
    due_date: "This week"
  }
]

const crisisSignals = [
  {
    id: "signal-001",
    title: "Social Media Sentiment Decline",
    description: "15% drop in AI-related brand sentiment over past 48 hours",
    urgency: "medium",
    source: "Social Monitoring",
    detected: "6 hours ago",
    trend: "declining"
  },
  {
    id: "signal-002",
    title: "Regulatory Inquiry Received",
    description: "Data protection authority requesting AI governance documentation",
    urgency: "high", 
    source: "Legal Dept",
    detected: "1 day ago",
    trend: "stable"
  }
]

const riskCategories = [
  {
    name: "Content & Brand Risk",
    count: 1,
    trend: "increasing",
    score: 7.2,
    color: "text-red-600"
  },
  {
    name: "Privacy & Data Risk", 
    count: 1,
    trend: "stable",
    score: 6.2,
    color: "text-amber-600"
  },
  {
    name: "Bias & Discrimination",
    count: 1,
    trend: "decreasing", 
    score: 5.8,
    color: "text-amber-600"
  },
  {
    name: "Regulatory Compliance",
    count: 0,
    trend: "stable",
    score: 4.1,
    color: "text-green-600"
  }
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "text-red-600"
    case "medium":
      return "text-amber-600"  
    case "low":
      return "text-green-600"
    default:
      return "text-gray-600"
  }
}

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "outline"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <AlertTriangle className="h-4 w-4 text-red-600" />
    case "investigating":
      return <Eye className="h-4 w-4 text-blue-600" />
    case "mitigating":
      return <Activity className="h-4 w-4 text-amber-600" />
    case "resolved":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    default:
      return <Clock className="h-4 w-4 text-gray-600" />
  }
}

export default function RiskExposurePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <h1 className="text-4xl font-bold text-foreground">Risk Exposure Center</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Real-time AI risk monitoring and reputation management for communications leadership
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-red-200 text-red-700">
            <AlertTriangle className="h-3 w-3" />
            {riskData.active_risks} Active Risks
          </Badge>
          <Badge variant="outline" className="gap-2 border-amber-200 text-amber-700">
            <Activity className="h-3 w-3" />
            {riskData.crisis_signals} Crisis Signals
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Shield className="h-3 w-3" />
            {riskData.reputation_score}% Reputation Score
          </Badge>
        </div>
      </div>

      {/* Risk Overview Dashboard */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Overall Risk Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-amber-600">{riskData.risk_level}</div>
              <div className="text-sm text-muted-foreground">Score: {riskData.overall_risk_score}/10</div>
              <Progress value={riskData.overall_risk_score * 10} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Risks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">{riskData.active_risks}</div>
              <div className="text-sm text-muted-foreground">
                {riskData.high_priority_risks} high, {riskData.medium_priority_risks} medium
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Reputation Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">{riskData.reputation_score}%</div>
              <Progress value={riskData.reputation_score} className="h-2" />
              <div className="text-sm text-muted-foreground">Industry average: 71%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">{riskData.avg_response_time}h</div>
              <div className="text-sm text-muted-foreground">Average response time</div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingDown className="h-3 w-3" />
                Improving
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="active-risks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active-risks">Active Risks</TabsTrigger>
          <TabsTrigger value="crisis-signals">Crisis Signals</TabsTrigger>
          <TabsTrigger value="risk-categories">Risk Categories</TabsTrigger>
          <TabsTrigger value="reputation">Reputation Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="active-risks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Risk Portfolio</CardTitle>
              <CardDescription>
                Current AI-related risks requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeRisks.map((risk) => (
                  <Card key={risk.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(risk.status)}
                            <CardTitle className="text-lg">{risk.title}</CardTitle>
                            <Badge variant={getSeverityBadge(risk.severity)} className="text-xs">
                              {risk.severity.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {risk.category}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {risk.description}
                          </CardDescription>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Business Impact:</span>
                              <p className="text-muted-foreground">{risk.business_impact}</p>
                            </div>
                            <div>
                              <span className="font-medium">Owner:</span>
                              <p className="text-muted-foreground">{risk.owner}</p>
                            </div>
                            <div>
                              <span className="font-medium">Due:</span>
                              <p className="text-muted-foreground">{risk.due_date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Impact Score:</span>
                              <Badge variant="outline">{risk.impact_score}/10</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Probability:</span>
                              <Badge variant="outline">{risk.probability}%</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Detected {risk.detected}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crisis-signals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crisis Signal Detection</CardTitle>
              <CardDescription>
                Early warning indicators of potential reputation risks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crisisSignals.map((signal) => (
                  <Card key={signal.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-amber-600" />
                            <CardTitle className="text-lg">{signal.title}</CardTitle>
                            <Badge 
                              variant={signal.urgency === "high" ? "destructive" : "secondary"} 
                              className="text-xs"
                            >
                              {signal.urgency.toUpperCase()}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {signal.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Source: {signal.source}</span>
                            <span>Detected: {signal.detected}</span>
                            <div className="flex items-center gap-1">
                              Trend: 
                              {signal.trend === "declining" ? (
                                <TrendingDown className="h-3 w-3 text-red-600" />
                              ) : (
                                <TrendingUp className="h-3 w-3 text-gray-600" />
                              )}
                              <span>{signal.trend}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Investigate
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk-categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Categories Overview</CardTitle>
              <CardDescription>
                AI risk exposure across different categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {riskCategories.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <Badge variant="outline">{category.count} active</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Risk Score:</span>
                          <span className={`text-sm font-bold ${category.color}`}>
                            {category.score}/10
                          </span>
                        </div>
                        <Progress value={category.score * 10} className="h-2" />
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          Trend: 
                          {category.trend === "increasing" ? (
                            <TrendingUp className="h-3 w-3 text-red-600" />
                          ) : category.trend === "decreasing" ? (
                            <TrendingDown className="h-3 w-3 text-green-600" />
                          ) : (
                            <Target className="h-3 w-3 text-gray-600" />
                          )}
                          <span>{category.trend}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reputation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reputation Monitoring Dashboard</CardTitle>
              <CardDescription>
                AI-related brand sentiment and reputation tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">78%</div>
                  <p className="text-sm font-medium">Overall Score</p>
                  <p className="text-xs text-muted-foreground">vs 71% industry avg</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">+5.2%</div>
                  <p className="text-sm font-medium">30-Day Change</p>
                  <p className="text-xs text-muted-foreground">Positive trend</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-amber-600">2</div>
                  <p className="text-sm font-medium">Alert Triggers</p>
                  <p className="text-xs text-muted-foreground">Requiring attention</p>
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
              <Bell className="h-5 w-5" />
              Configure Alerts
            </CardTitle>
            <CardDescription>
              Set up automated risk notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Manage Alerts
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate Risk Report
            </CardTitle>
            <CardDescription>
              Create executive risk summary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Risk Team Coordination
            </CardTitle>
            <CardDescription>
              Coordinate with risk management teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Contact Teams
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}