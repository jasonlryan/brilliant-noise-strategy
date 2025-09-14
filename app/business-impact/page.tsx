"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Target,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Calendar,
  Users,
  ArrowRight,
  BookOpen
} from "lucide-react"

// Simple business goals aligned with PRD
const businessGoals = [
  {
    title: "Governance Automation",
    description: "Reduce manual governance overhead while maintaining compliance standards",
    target: "60% reduction in manual work",
    status: "In Progress"
  },
  {
    title: "Risk Visibility", 
    description: "Provide real-time visibility into AI usage and associated risks",
    target: "Real-time AI usage tracking",
    status: "Planned"
  },
  {
    title: "Process Standardization",
    description: "Establish repeatable workflows for AI initiative approval",
    target: "Standardized approval workflows",
    status: "Active"
  },
  {
    title: "Compliance Readiness",
    description: "Generate audit-ready documentation for regulatory requirements",
    target: "<2 hours to generate audit reports",
    status: "Planned"
  }
]

const successCriteria = [
  {
    metric: "Time to First Approval (TTFA)",
    target: "≤7 days for 90% of initiatives",
    current_status: "Workflow implemented",
    description: "Standard approval process efficiency"
  },
  {
    metric: "Coverage",
    target: "100% of AI initiatives tracked within 90 days", 
    current_status: "Registration system active",
    description: "Complete governance coverage"
  },
  {
    metric: "Quality",
    target: "<5% exception rate for routine approvals",
    current_status: "Exception tracking enabled",
    description: "Process quality indicator"
  }
]

const implementationPhases = [
  {
    phase: "Phase 1: Core Platform",
    timeline: "Weeks 1-8",
    focus: "User authentication, initiative registration, basic approval workflow",
    status: "In Progress"
  },
  {
    phase: "Phase 2: Enhanced Workflows", 
    timeline: "Weeks 9-16",
    focus: "Advanced approval routing, exception management, basic reporting",
    status: "Planned"
  },
  {
    phase: "Phase 3: Analytics & Insights",
    timeline: "Weeks 17-24", 
    focus: "QBR automation, benchmark data, trend analysis",
    status: "Future"
  },
  {
    phase: "Phase 4: Polish & Scale",
    timeline: "Weeks 25-32",
    focus: "Performance optimization, security features, documentation",
    status: "Future"
  }
]

const getStatusColor = (status: string) => {
  if (status === "Active" || status === "In Progress") return "text-blue-600"
  if (status === "Planned") return "text-amber-600"  
  if (status === "Future") return "text-gray-600"
  return "text-green-600"
}

const getStatusIcon = (status: string) => {
  if (status === "Active" || status === "In Progress") {
    return <Clock className="h-4 w-4 text-blue-500" />
  }
  if (status === "Planned") {
    return <Target className="h-4 w-4 text-amber-500" />
  }
  return <CheckCircle className="h-4 w-4 text-gray-500" />
}

export default function BusinessImpactDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Target className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Business Impact & Goals</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Track progress against PRD goals and success criteria for AI Risk & Trust Radar
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Clock className="h-3 w-3" />
            Implementation Active
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Shield className="h-3 w-3" />
            Foundation Controls
          </Badge>
        </div>
      </div>

      {/* PRD Business Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Business Goals (from PRD)</CardTitle>
          <CardDescription>
            Core objectives for AI Risk & Trust Radar implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {businessGoals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(goal.status)}`}
                    >
                      {goal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                    <div className="text-sm">
                      <span className="font-medium">Target: </span>
                      {goal.target}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Criteria */}
      <Card>
        <CardHeader>
          <CardTitle>Success Criteria</CardTitle>
          <CardDescription>
            Measurable targets from product requirements document
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {successCriteria.map((criteria, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-medium">{criteria.metric}</div>
                  <div className="text-sm text-muted-foreground">{criteria.description}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{criteria.target}</div>
                  <div className="text-sm text-muted-foreground">{criteria.current_status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Roadmap</CardTitle>
          <CardDescription>
            4-phase rollout plan from PRD (32-week timeline)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {implementationPhases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(phase.status)}
                      <Badge variant="outline" className="text-xs">
                        {phase.timeline}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              View Full PRD
            </CardTitle>
            <CardDescription>
              Complete product requirements document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Open PRD
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Initiative Dashboard
            </CardTitle>
            <CardDescription>
              Track initiative approvals and workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Initiatives
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Methodology Guide
            </CardTitle>
            <CardDescription>
              Literacy ladder and play cards documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Guide
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}