"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Clock,
  Shield,
  Target,
  Users,
  FileText,
  Download,
  Calendar,
  ArrowRight
} from "lucide-react"

// Simple metrics aligned with actual PRD targets
interface Metric {
  id: string
  name: string
  current_status: string
  target: string
  description: string
  category: "foundation" | "coverage" | "efficiency" | "quality"
}

const coreMetrics: Metric[] = [
  {
    id: "ai_coverage",
    name: "AI Initiative Coverage",
    current_status: "Setup Phase",
    target: "100% within 90 days",
    description: "Track all AI initiatives through Radar workflow",
    category: "coverage"
  },
  {
    id: "ttfa",
    name: "Time to First Approval",
    current_status: "Workflow Active",
    target: "≤7 days for 90% of initiatives",
    description: "Standard initiative approval timeline",
    category: "efficiency"
  },
  {
    id: "exception_rate",
    name: "Exception Rate",
    current_status: "Monitoring Active",
    target: "<5% for routine processes",
    description: "Governance process quality indicator",
    category: "quality"
  },
  {
    id: "gate_a_foundation",
    name: "Gate A Foundation",
    current_status: "AMBER",
    target: "GREEN status required",
    description: "Binary pass/fail for 8 security/legal criteria",
    category: "foundation"
  }
]

const playCardStatus = [
  { name: "AI-Guided Search", status: "Available", level: "L1" },
  { name: "Prompt Analysis", status: "Available", level: "L1" },
  { name: "Compliance Bots", status: "Available", level: "L1" },
  { name: "Content Generation", status: "Available", level: "L1" },
  { name: "Performance Tracking", status: "Available", level: "L1" }
]

const getStatusColor = (status: string) => {
  if (status.includes("Complete") || status.includes("GREEN")) return "text-green-600"
  if (status.includes("AMBER") || status.includes("Progress")) return "text-amber-600"
  if (status.includes("RED")) return "text-red-600"
  return "text-blue-600"
}

const getStatusIcon = (status: string) => {
  if (status.includes("Complete") || status.includes("GREEN")) {
    return <CheckCircle className="h-4 w-4 text-green-500" />
  }
  if (status.includes("AMBER") || status.includes("Progress")) {
    return <Clock className="h-4 w-4 text-amber-500" />
  }
  return <Target className="h-4 w-4 text-blue-500" />
}

export default function AnalyticsKPIDashboard() {
  const foundationMetrics = coreMetrics.filter(m => m.category === "foundation")
  const coverageMetrics = coreMetrics.filter(m => m.category === "coverage")
  const efficiencyMetrics = coreMetrics.filter(m => m.category === "efficiency")
  const qualityMetrics = coreMetrics.filter(m => m.category === "quality")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics & Success Tracking</h1>
              <p className="text-muted-foreground">AI Risk & Trust Radar core metrics aligned with strategy</p>
            </div>
            <div className="flex items-center gap-4">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate QBR
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Core Success Criteria from PRD */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Success Criteria (from PRD)
              </CardTitle>
              <CardDescription>
                Primary goals for AI Risk & Trust Radar implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {coreMetrics.map((metric) => (
                <div key={metric.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{metric.name}</div>
                    <div className="text-xs text-muted-foreground">{metric.description}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${getStatusColor(metric.current_status)}`}>
                      {metric.current_status}
                    </div>
                    <div className="text-xs text-muted-foreground">Target: {metric.target}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Play Cards Status
              </CardTitle>
              <CardDescription>
                5 core play cards from methodology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {playCardStatus.map((card) => (
                <div key={card.name} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{card.name}</div>
                    <div className="text-xs text-muted-foreground">Level: {card.level}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {card.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Literacy Ladder Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Literacy Ladder Progress
            </CardTitle>
            <CardDescription>
              L0 → L1 → L2 → L3 progression with 12-week sprints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">L0</div>
                <div className="text-sm text-muted-foreground">AI Unaware</div>
                <div className="text-xs text-muted-foreground">Starting point</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">L1</div>
                <div className="text-sm text-muted-foreground">AI Competent</div>
                <div className="text-xs text-muted-foreground">12-week sprint</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">L2</div>
                <div className="text-sm text-muted-foreground">AI Advanced</div>
                <div className="text-xs text-muted-foreground">6-month program</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">L3</div>
                <div className="text-sm text-muted-foreground">AI Tool-Maker</div>
                <div className="text-xs text-muted-foreground">12-month program</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Foundation Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Gate A Foundation Status
            </CardTitle>
            <CardDescription>
              Binary pass/fail system for 8 security/legal criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">AMBER</div>
                <p className="text-sm text-muted-foreground">2 items pending completion</p>
              </div>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>MSA + IP Addendum Active</span>
                  <span className="text-amber-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct-to-Prod Monitoring</span>
                  <span className="text-amber-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Controls</span>
                  <span className="text-green-600">Complete</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal & IP Controls</span>
                  <span className="text-green-600">Complete</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                QBR Generation
              </CardTitle>
              <CardDescription>
                Generate quarterly business review
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
                <FileText className="h-5 w-5" />
                Initiative Tracking
              </CardTitle>
              <CardDescription>
                View initiative workflow status
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
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Foundation Status
              </CardTitle>
              <CardDescription>
                Check Gate A criteria status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Foundation
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}