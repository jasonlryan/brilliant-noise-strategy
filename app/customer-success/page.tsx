"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users,
  CheckCircle,
  Clock,
  Target,
  Calendar,
  BookOpen,
  FileText,
  MessageCircle,
  Shield,
  ArrowRight
} from "lucide-react"

// Simple implementation milestones aligned with strategy
const implementationMilestones = [
  {
    milestone: "Platform Setup & Configuration",
    status: "completed",
    description: "Initial Radar setup and Gate A foundation prep"
  },
  {
    milestone: "Team Literacy Assessment", 
    status: "in_progress",
    description: "Personal AI Scorecard baseline for L0→L1 progression"
  },
  {
    milestone: "Play Card Selection",
    status: "planned",
    description: "Choose appropriate L1 play cards for organization"
  },
  {
    milestone: "12-Week Sprint Launch",
    status: "planned", 
    description: "Begin structured literacy progression program"
  }
]

const availableSupport = [
  {
    title: "Methodology Guide",
    description: "Complete guide to literacy ladder and 12-week sprints",
    type: "documentation"
  },
  {
    title: "Play Card Library",
    description: "Access to 5 core L1 play cards",
    type: "resources"
  },
  {
    title: "QBR Template",
    description: "Quarterly business review generation",
    type: "reporting"
  }
]

const nextSteps = [
  {
    action: "Complete Gate A Foundation",
    timeline: "Next 2 weeks",
    owner: "Security/Legal teams",
    priority: "high"
  },
  {
    action: "Begin L1 Literacy Sprint",
    timeline: "Following Gate A completion", 
    owner: "Communications team",
    priority: "medium"
  },
  {
    action: "Select Initial Play Cards",
    timeline: "Week 2 of sprint",
    owner: "Team lead",
    priority: "medium"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-600"
    case "in_progress":
      return "text-blue-600"
    case "planned":
      return "text-amber-600"
    default:
      return "text-gray-600"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in_progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "planned":
      return <Target className="h-4 w-4 text-amber-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-500" />
  }
}

const getPriorityColor = (priority: string) => {
  if (priority === "high") return "border-red-200 text-red-700"
  if (priority === "medium") return "border-amber-200 text-amber-700"
  return "border-green-200 text-green-700"
}

export default function CustomerSuccessPortal() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Implementation Progress</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Track your AI Risk & Trust Radar implementation and literacy progression
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Clock className="h-3 w-3" />
            Setup Phase
          </Badge>
          <Badge variant="outline" className="gap-2 border-amber-200 text-amber-700">
            <Shield className="h-3 w-3" />
            Foundation: AMBER
          </Badge>
        </div>
      </div>

      {/* Implementation Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Milestones</CardTitle>
          <CardDescription>
            Key steps in your AI governance transformation journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {implementationMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(milestone.status)}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{milestone.milestone}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(milestone.status)}`}
                    >
                      {milestone.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Support */}
      <Card>
        <CardHeader>
          <CardTitle>Available Support Resources</CardTitle>
          <CardDescription>
            Documentation and resources for your implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {availableSupport.map((support, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{support.title}</CardTitle>
                  <CardDescription>{support.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs mb-3">
                    {support.type.toUpperCase()}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Immediate Next Steps</CardTitle>
          <CardDescription>
            Priority actions to advance your implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{step.action}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`gap-2 ${getPriorityColor(step.priority)}`}
                    >
                      {step.priority.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Timeline: </span>
                      {step.timeline}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Owner: </span>
                      {step.owner}
                    </div>
                  </div>
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
              <BookOpen className="h-5 w-5" />
              Methodology Guide
            </CardTitle>
            <CardDescription>
              Complete literacy ladder documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              View Guide
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Play Cards
            </CardTitle>
            <CardDescription>
              Access available L1 play cards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Cards
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Foundation Status
            </CardTitle>
            <CardDescription>
              Check Gate A criteria progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}