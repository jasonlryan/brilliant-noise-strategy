"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Calendar,
  Users,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  BookOpen
} from "lucide-react"

// EU AI Act compliance data
const complianceData = {
  overall_readiness: 75,
  days_until_deadline: 45,
  deadline_date: "February 2, 2025",
  completed_requirements: 12,
  total_requirements: 16,
  high_risk_systems: 3,
  documentation_complete: 8,
  documentation_total: 10
}

const complianceRequirements = [
  {
    id: "risk-assessment",
    title: "AI System Risk Assessment",
    description: "Comprehensive risk evaluation of all AI systems",
    status: "completed",
    priority: "high",
    deadline: "Dec 15, 2024",
    owner: "Risk Team"
  },
  {
    id: "documentation",
    title: "Technical Documentation Package",
    description: "Detailed technical documentation for high-risk AI systems",
    status: "in_progress",
    priority: "high", 
    deadline: "Jan 10, 2025",
    owner: "Technical Team"
  },
  {
    id: "quality-management",
    title: "Quality Management System",
    description: "Establish QMS procedures for AI development",
    status: "pending",
    priority: "medium",
    deadline: "Jan 20, 2025",
    owner: "Compliance Team"
  },
  {
    id: "data-governance",
    title: "Data Governance Framework",
    description: "Training data management and bias assessment",
    status: "completed",
    priority: "high",
    deadline: "Completed",
    owner: "Data Team"
  },
  {
    id: "human-oversight",
    title: "Human Oversight Procedures",
    description: "Human supervision mechanisms for AI decisions",
    status: "in_progress", 
    priority: "high",
    deadline: "Jan 15, 2025",
    owner: "Operations Team"
  },
  {
    id: "transparency",
    title: "Transparency & Explainability",
    description: "AI decision transparency for end users",
    status: "pending",
    priority: "medium",
    deadline: "Jan 25, 2025",
    owner: "Product Team"
  }
]

const documentationTemplates = [
  {
    title: "AI System Registration Template",
    description: "Official template for AI system registration with authorities",
    type: "template",
    status: "ready"
  },
  {
    title: "Risk Assessment Framework",
    description: "Comprehensive risk evaluation methodology",
    type: "framework",
    status: "ready" 
  },
  {
    title: "Technical Documentation Guide",
    description: "Step-by-step guide for technical documentation",
    type: "guide",
    status: "ready"
  },
  {
    title: "Board Compliance Report Template",
    description: "Executive summary template for board presentations",
    type: "template",
    status: "ready"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-600"
    case "in_progress":
      return "text-blue-600"
    case "pending":
      return "text-amber-600"
    default:
      return "text-gray-600"
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return "default"
    case "in_progress":
      return "secondary"
    case "pending":
      return "outline"
    default:
      return "outline"
  }
}

export default function EUAIActCompliancePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">EU AI Act Compliance Center</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Regulatory readiness tracking and compliance management for the EU AI Act (February 2, 2025)
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-red-200 text-red-700">
            <Clock className="h-3 w-3" />
            {complianceData.days_until_deadline} Days Remaining
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <CheckCircle className="h-3 w-3" />
            {complianceData.overall_readiness}% Ready
          </Badge>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Overall Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">{complianceData.overall_readiness}%</div>
              <Progress value={complianceData.overall_readiness} className="h-2" />
              <p className="text-xs text-muted-foreground">On track for compliance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Requirements Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">
                {complianceData.completed_requirements}/{complianceData.total_requirements}
              </div>
              <Progress value={(complianceData.completed_requirements / complianceData.total_requirements) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">4 requirements remaining</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">High-Risk Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-amber-600">{complianceData.high_risk_systems}</div>
              <p className="text-xs text-muted-foreground">Requiring enhanced compliance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Documentation Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">
                {complianceData.documentation_complete}/{complianceData.documentation_total}
              </div>
              <Progress value={(complianceData.documentation_complete / complianceData.documentation_total) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">2 documents pending</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Countdown Timer */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            EU AI Act Enforcement Deadline
          </CardTitle>
          <CardDescription>
            Mandatory compliance required by {complianceData.deadline_date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{complianceData.days_until_deadline}</div>
              <p className="text-sm text-muted-foreground">Days Remaining</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">4</div>
              <p className="text-sm text-muted-foreground">Critical Tasks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">75%</div>
              <p className="text-sm text-muted-foreground">Compliance Ready</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Requirements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Compliance Requirements Checklist</h2>
        <div className="space-y-4">
          {complianceRequirements.map((requirement) => (
            <Card key={requirement.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {requirement.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : requirement.status === "in_progress" ? (
                        <Clock className="h-5 w-5 text-blue-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      )}
                      <CardTitle className="text-lg">{requirement.title}</CardTitle>
                      <Badge variant={getStatusBadge(requirement.status)} className="text-xs">
                        {requirement.status.replace("_", " ").toUpperCase()}
                      </Badge>
                      {requirement.priority === "high" && (
                        <Badge variant="destructive" className="text-xs">
                          HIGH PRIORITY
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {requirement.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Due: {requirement.deadline}</span>
                      <span>Owner: {requirement.owner}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Documentation Templates */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Documentation Templates & Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {documentationTemplates.map((template, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {template.title}
                </CardTitle>
                <CardDescription>
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {template.type.toUpperCase()}
                  </Badge>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule Board Briefing
            </CardTitle>
            <CardDescription>
              Present compliance status to board members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Schedule Briefing
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Request Expert Consultation
            </CardTitle>
            <CardDescription>
              Get expert guidance on complex requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Book Consultation
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Generate Compliance Report
            </CardTitle>
            <CardDescription>
              Create executive summary for stakeholders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}