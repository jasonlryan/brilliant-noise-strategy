"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users,
  TrendingUp,
  Calendar,
  Target,
  Award,
  CheckCircle,
  Clock,
  Star,
  Zap,
  ArrowRight,
  DollarSign,
  BarChart3,
  MessageCircle,
  Phone,
  Video,
  FileText,
  BookOpen,
  Settings,
  Bell,
  Activity,
  Briefcase
} from "lucide-react"

// Customer Success Data
const customerSuccessData = {
  onboarding_progress: 85,
  value_realization: 240,
  health_score: 92,
  adoption_rate: 88,
  time_to_value: 12, // days
  nrr: 125, // Net Revenue Retention
  expansion_opportunities: 3,
  success_manager: "Sarah Chen"
}

const valueRealizationMetrics = [
  {
    category: "ROI Achievement",
    target: 200,
    achieved: 240,
    status: "exceeded",
    impact: "$2.85M annual savings",
    progress: 120
  },
  {
    category: "Risk Reduction",
    target: 75,
    achieved: 85,
    status: "exceeded", 
    impact: "15% compliance improvement",
    progress: 113
  },
  {
    category: "Efficiency Gains",
    target: 60,
    achieved: 78,
    status: "exceeded",
    impact: "1,240 hours saved monthly",
    progress: 130
  },
  {
    category: "Market Position",
    target: 70,
    achieved: 78,
    status: "exceeded",
    impact: "78th industry percentile",
    progress: 111
  }
]

const upcomingQBRs = [
  {
    id: "qbr-q1-2025",
    quarter: "Q1 2025",
    date: "March 15, 2025",
    status: "scheduled",
    focus: ["ROI Performance Review", "Transformation Progress", "Q2 Strategy Planning"],
    attendees: 8,
    preparation_status: 75
  },
  {
    id: "qbr-q4-2024",
    quarter: "Q4 2024", 
    date: "December 20, 2024",
    status: "completed",
    focus: ["Year-end Results", "2025 Planning", "Success Stories"],
    attendees: 12,
    outcomes: ["240% ROI achieved", "Q1 targets set", "Expansion approved"]
  }
]

const onboardingMilestones = [
  {
    milestone: "Platform Setup & Configuration",
    status: "completed",
    completion_date: "Nov 15, 2024",
    description: "Initial platform configuration and admin setup"
  },
  {
    milestone: "Team Training & Enablement", 
    status: "completed",
    completion_date: "Dec 10, 2024",
    description: "L1 literacy training for core team members"
  },
  {
    milestone: "Process Integration",
    status: "completed",
    completion_date: "Jan 5, 2025",
    description: "Integration with existing governance workflows"
  },
  {
    milestone: "Advanced Features Activation",
    status: "in_progress",
    target_date: "Feb 20, 2025",
    description: "Predictive analytics and advanced reporting"
  },
  {
    milestone: "Full Transformation Readiness",
    status: "planned",
    target_date: "Mar 30, 2025", 
    description: "Ready for Augment stage progression"
  }
]

const expansionOpportunities = [
  {
    title: "Advanced Predictive Analytics",
    description: "Upgrade to premium analytics with ML-powered insights",
    value: "$45K ARR",
    timeline: "Q2 2025",
    probability: 85,
    stage: "proposal_sent"
  },
  {
    title: "Multi-Department Rollout",
    description: "Expand to Marketing and Legal departments",
    value: "$30K ARR",
    timeline: "Q3 2025", 
    probability: 70,
    stage: "discovery"
  },
  {
    title: "Custom Integration Package",
    description: "Bespoke integrations with legacy systems",
    value: "$25K ARR",
    timeline: "Q2 2025",
    probability: 60,
    stage: "qualification"
  }
]

const successMetrics = [
  {
    metric: "Customer Health Score",
    value: customerSuccessData.health_score,
    target: 90,
    status: "healthy",
    trend: "up"
  },
  {
    metric: "Adoption Rate", 
    value: customerSuccessData.adoption_rate,
    target: 85,
    status: "healthy",
    trend: "up"
  },
  {
    metric: "Time to Value",
    value: customerSuccessData.time_to_value,
    target: 30,
    status: "excellent",
    trend: "down", // lower is better
    unit: "days"
  },
  {
    metric: "Net Revenue Retention",
    value: customerSuccessData.nrr,
    target: 115,
    status: "excellent", 
    trend: "up",
    unit: "%"
  }
]

const recentActivities = [
  {
    type: "qbr_completed",
    title: "Q4 2024 QBR Completed",
    description: "Reviewed 240% ROI achievement and set Q1 targets",
    date: "Dec 20, 2024",
    icon: Calendar
  },
  {
    type: "training_session",
    title: "Advanced Features Training",
    description: "Team training on predictive analytics features",
    date: "Jan 10, 2025",
    icon: BookOpen
  },
  {
    type: "expansion_proposal",
    title: "Analytics Upgrade Proposed", 
    description: "Premium analytics package proposal sent",
    date: "Jan 18, 2025",
    icon: TrendingUp
  },
  {
    type: "health_check",
    title: "Monthly Health Check",
    description: "Customer health score: 92% (Excellent)",
    date: "Jan 15, 2025",
    icon: Activity
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "healthy":
    case "excellent": 
    case "completed":
    case "exceeded":
      return "text-green-600"
    case "warning":
    case "in_progress":
      return "text-amber-600"
    case "critical":
    case "at_risk":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "healthy":
    case "excellent":
    case "completed":
    case "exceeded":
      return "default"
    case "warning":
    case "in_progress":
      return "secondary"
    case "critical":
    case "at_risk":
      return "destructive"
    default:
      return "outline"
  }
}

export default function CustomerSuccessPortal() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Customer Success Portal</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Track value realization, manage success metrics, and drive expansion opportunities
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Star className="h-3 w-3" />
            {customerSuccessData.health_score}% Health Score
          </Badge>
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <TrendingUp className="h-3 w-3" />
            {customerSuccessData.nrr}% NRR
          </Badge>
          <Badge variant="outline" className="gap-2 border-purple-200 text-purple-700">
            <Award className="h-3 w-3" />
            {customerSuccessData.value_realization}% ROI Achieved
          </Badge>
        </div>
      </div>

      {/* Success Overview Dashboard */}
      <div className="grid md:grid-cols-4 gap-4">
        {successMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                  {metric.value}{metric.unit || "%"}
                </div>
                <div className="text-sm text-muted-foreground">
                  Target: {metric.target}{metric.unit || "%"}
                </div>
                <Badge variant={getStatusBadge(metric.status)} className="text-xs">
                  {metric.status.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success Manager Contact */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Your Success Manager
          </CardTitle>
          <CardDescription>
            Dedicated support for your transformation journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">{customerSuccessData.success_manager}</h3>
                <p className="text-sm text-muted-foreground">Senior Customer Success Manager</p>
                <p className="text-xs text-muted-foreground">AI Governance Specialist</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Message
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Video className="h-4 w-4" />
                Meet
              </Button>
              <Button size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="value-realization" className="space-y-4">
        <TabsList>
          <TabsTrigger value="value-realization">Value Realization</TabsTrigger>
          <TabsTrigger value="qbr-management">QBR Management</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding Progress</TabsTrigger>
          <TabsTrigger value="expansion">Expansion Opportunities</TabsTrigger>
        </TabsList>

        <TabsContent value="value-realization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Value Realization Tracking</CardTitle>
              <CardDescription>
                Monitor achievement of business outcomes and ROI targets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {valueRealizationMetrics.map((metric, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{metric.category}</h4>
                      <Badge variant={getStatusBadge(metric.status)} className="text-xs">
                        {metric.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Target</p>
                        <p className="text-lg font-medium">{metric.target}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Achieved</p>
                        <p className="text-lg font-bold text-green-600">{metric.achieved}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Business Impact</p>
                        <p className="text-sm font-medium">{metric.impact}</p>
                      </div>
                    </div>
                    <Progress value={metric.progress > 100 ? 100 : metric.progress} className="h-2" />
                    <p className="text-xs text-green-600">
                      {metric.progress > 100 ? `Exceeded target by ${metric.progress - 100}%` : `${metric.progress}% of target achieved`}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qbr-management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Business Reviews</CardTitle>
              <CardDescription>
                Schedule and manage strategic review sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {upcomingQBRs.map((qbr) => (
                  <Card key={qbr.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <CardTitle className="text-lg">{qbr.quarter} QBR</CardTitle>
                            <Badge 
                              variant={qbr.status === "completed" ? "default" : "secondary"} 
                              className="text-xs"
                            >
                              {qbr.status.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {qbr.status === "completed" ? "Completed on" : "Scheduled for"} {qbr.date}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Focus Areas:</h4>
                            <ul className="text-sm space-y-1">
                              {qbr.focus.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {qbr.outcomes && (
                            <div className="space-y-2">
                              <h4 className="font-medium text-sm">Outcomes:</h4>
                              <ul className="text-sm space-y-1">
                                {qbr.outcomes.map((outcome, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <Star className="h-3 w-3 text-yellow-500" />
                                    {outcome}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {qbr.preparation_status && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Preparation Progress:</span>
                                <span className="text-sm">{qbr.preparation_status}%</span>
                              </div>
                              <Progress value={qbr.preparation_status} className="h-2" />
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {qbr.status === "scheduled" && (
                            <>
                              <Button variant="outline" size="sm">
                                Prepare
                              </Button>
                              <Button size="sm">
                                Join Meeting
                              </Button>
                            </>
                          )}
                          {qbr.status === "completed" && (
                            <Button variant="outline" size="sm">
                              View Summary
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="onboarding" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Onboarding Progress</CardTitle>
                  <CardDescription>
                    Track your transformation journey milestones
                  </CardDescription>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{customerSuccessData.onboarding_progress}%</div>
                  <p className="text-sm text-muted-foreground">Complete</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {onboardingMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {milestone.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : milestone.status === "in_progress" ? (
                        <Clock className="h-5 w-5 text-blue-600" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{milestone.milestone}</h4>
                        <Badge variant={getStatusBadge(milestone.status)} className="text-xs">
                          {milestone.status.replace("_", " ").toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {milestone.completion_date ? 
                          `Completed: ${milestone.completion_date}` : 
                          `Target: ${milestone.target_date}`
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expansion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expansion Opportunities</CardTitle>
              <CardDescription>
                Identified opportunities to expand your AI governance capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expansionOpportunities.map((opportunity, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {opportunity.probability}% PROBABILITY
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {opportunity.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Value: {opportunity.value}</span>
                            <span>Timeline: {opportunity.timeline}</span>
                            <span>Stage: {opportunity.stage.replace("_", " ")}</span>
                          </div>
                          <Progress value={opportunity.probability} className="w-full h-2" />
                        </div>
                        <Button variant="outline" size="sm">
                          Discuss
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Total expansion potential: <strong>$100K ARR</strong>
                </p>
                <Button>
                  Schedule Expansion Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            Latest interactions and milestone updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Check-in
            </CardTitle>
            <CardDescription>
              Book a session with your success manager
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Schedule Meeting
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Request Custom Report
            </CardTitle>
            <CardDescription>
              Generate specialized success metrics report
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Request Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Update Preferences
            </CardTitle>
            <CardDescription>
              Customize your success tracking preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Manage Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}