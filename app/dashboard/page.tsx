"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Activity,
  BookOpen,
  BarChart3,
  FileText,
  CheckCircle,
  TrendingUp,
  Award,
  DollarSign,
  ArrowRight,
  AlertTriangle,
  Users,
  Navigation,
} from "lucide-react"

// Dashboard business metrics
const dashboardMetrics = {
  eu_ai_act_compliance: 75,
  active_risks: 3,
  high_priority_risks: 1,
  team_readiness: 88,
  avg_response_time: 4.2,
  roi_percentage: 240,
  industry_percentile: 78,
  monthly_savings: 1240,
  compliance_deadline_days: 45
}

const quickStats = [
  {
    title: "Literacy Baseline",
    value: "Not Set",
    subtitle: "Complete diagnostics to establish",
    icon: BookOpen,
    color: "text-blue-600",
    href: "/diagnostics"
  },
  {
    title: "Time to First Evidence",
    value: "7 days",
    subtitle: "Target: ≤10 days",
    icon: CheckCircle,
    color: "text-green-600",
    href: "/board-pack"
  },
  {
    title: "Compliance Deadline",
    value: "45 days",
    subtitle: "EU AI Act Article 4",
    icon: Shield,
    color: "text-red-600",
    href: "/board-pack"
  },
  {
    title: "Heatmap Coverage",
    value: "0%",
    subtitle: "Audience × Domain visibility",
    icon: Activity,
    color: "text-purple-600",
    href: "/literacy-map"
  }
]

// Five-level maturity journey (Story #26)
const journeyLevels = [
  {
    level: 0,
    label: "L0 - Stuck",
    description: "Dark: No visibility, shadow AI, anxiety",
    color: "bg-slate-900 text-white border-slate-900",
    icon: "⚫",
    scoreRange: "0-19%",
    nextAction: "Take diagnostics to establish baseline"
  },
  {
    level: 1,
    label: "L1 - Visible",
    description: "Baseline awareness, training started",
    color: "bg-red-100 text-red-900 border-red-200",
    icon: "🔴",
    scoreRange: "20-39%",
    nextAction: "Build literacy heatmap and identify gaps"
  },
  {
    level: 2,
    label: "L2 - Evidenced",
    description: "Proving value, governance forming",
    color: "bg-amber-100 text-amber-900 border-amber-200",
    icon: "🟡",
    scoreRange: "40-59%",
    nextAction: "Generate Board Pack and pilot workflows"
  },
  {
    level: 3,
    label: "L3 - Learning",
    description: "Systematic improvement, workflows scaling",
    color: "bg-blue-100 text-blue-900 border-blue-200",
    icon: "🔵",
    scoreRange: "60-79%",
    nextAction: "Activate Risk Radar and scale governance"
  },
  {
    level: 4,
    label: "L4 - Orchestrated",
    description: "Coordinated intelligence, competitive advantage",
    color: "bg-green-100 text-green-900 border-green-200",
    icon: "🟢",
    scoreRange: "80-100%",
    nextAction: "Optimize orchestration and measure ROI"
  }
]

const platformSections = [
  {
    title: "Diagnostics",
    description: "10-question baseline assessment to establish literacy and readiness",
    icon: BookOpen,
    href: "/diagnostics",
    status: "Start here - establish your baseline",
    color: "border-blue-200",
    stage: "STEP 1",
    features: ["10-minute assessment", "Role-based questions", "Instant scoring", "Baseline literacy level"]
  },
  {
    title: "Literacy Heatmap",
    description: "Audience × Domain grid showing readiness across your organization",
    icon: Activity,
    href: "/literacy-map",
    status: "Reflects diagnostics baseline",
    color: "border-green-200",
    stage: "STEP 2",
    features: ["Audience segmentation", "Domain coverage", "Level 0-4 visibility", "Export to CSV/PNG"]
  },
  {
    title: "Board Pack Generator",
    description: "EU AI Act Article 4 evidence with baseline, KPIs, and compliance mapping",
    icon: FileText,
    href: "/board-pack",
    status: "7-day time to first evidence",
    color: "border-purple-200",
    stage: "STEP 3",
    features: ["Article 4 compliance", "KPI dashboard", "Print to PDF", "Governance evidence"]
  },
  {
    title: "Resources Library",
    description: "Role-based learning materials from business plan folders",
    icon: BookOpen,
    href: "/resources",
    status: "12 resources available",
    color: "border-amber-200",
    stage: "ONGOING",
    features: ["Leaders content", "Practitioner guides", "Technical docs", "Searchable by role/domain"]
  },
  {
    title: "Transformation Journey",
    description: "Five-level maturity: Stuck → Visible → Evidenced → Learning → Orchestrated",
    icon: TrendingUp,
    href: "/transformation",
    status: "Track your progress",
    color: "border-blue-200",
    stage: "ONGOING",
    features: ["Maturity levels", "Journey mapping", "Success criteria", "Next steps guidance"]
  }
]

export default function TrustOSDashboard() {
  const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null)
  const [currentLevel, setCurrentLevel] = useState<number>(0)

  useEffect(() => {
    // Load diagnostic data from localStorage
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('diagnosticData')
      if (storedData) {
        try {
          const data = JSON.parse(storedData)
          setDiagnosticScore(data.score)
          // Calculate level from score
          const score = data.score
          const level = score < 20 ? 0 : score < 40 ? 1 : score < 60 ? 2 : score < 80 ? 3 : 4
          setCurrentLevel(level)
        } catch (e) {
          console.error('Failed to load diagnostic data:', e)
        }
      }
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Literacy-First Intelligence Platform</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Make AI literacy visible, coordinate human + machine intelligence, and prove outcomes with evidence.
          From stuck to orchestrated in weeks, not months.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <CheckCircle className="h-3 w-3" />
            7-Day Time to First Evidence
          </Badge>
          <Badge variant="outline" className="gap-2 border-red-200 text-red-700">
            <AlertTriangle className="h-3 w-3" />
            EU AI Act: 45 Days to Deadline
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Award className="h-3 w-3" />
            Article 4 Ready
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {quickStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Journey Stepper (Story #26) */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Your Literacy Journey
          </CardTitle>
          <CardDescription>
            {diagnosticScore !== null
              ? `Current level: ${journeyLevels[currentLevel].label} (${diagnosticScore}%) - ${journeyLevels[currentLevel].description}`
              : "Complete diagnostics to see your current maturity level"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Journey Stepper Visual */}
            <div className="flex items-center justify-between gap-2">
              {journeyLevels.map((level, index) => (
                <div key={level.level} className="flex-1">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-full py-3 px-2 rounded-lg border-2 text-center transition-all ${
                        level.level === currentLevel
                          ? `${level.color} ring-4 ring-blue-200 scale-105 shadow-lg`
                          : level.level < currentLevel
                          ? `${level.color} opacity-60`
                          : "bg-gray-50 text-gray-400 border-gray-200 opacity-40"
                      }`}
                    >
                      <div className="text-2xl mb-1">{level.icon}</div>
                      <div className="text-xs font-bold">{level.label}</div>
                      <div className="text-xs mt-1 opacity-75">{level.scoreRange}</div>
                    </div>
                    {index < journeyLevels.length - 1 && (
                      <div className="w-full h-1 bg-gray-200 -mt-6 z-0">
                        <div
                          className={`h-full ${
                            level.level < currentLevel ? "bg-green-500" : "bg-gray-200"
                          }`}
                          style={{ width: level.level < currentLevel ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Level Details */}
            {diagnosticScore !== null ? (
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                <div className="space-y-3">
                  <h4 className="font-semibold">Current Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{journeyLevels[currentLevel].label}:</strong>{" "}
                        {journeyLevels[currentLevel].description}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Diagnostic score: <strong>{diagnosticScore}%</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Recommended Next Actions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{journeyLevels[currentLevel].nextAction}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Review tailored resources and assign guardians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Set up governance guardrails in Risk Radar</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 border-t">
                <p className="text-muted-foreground">
                  Run the diagnostics to reveal your literacy baseline and unlock tailored recommendations.
                </p>
                <Link href="/diagnostics">
                  <Button className="mt-3">
                    Start Diagnostics
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* KPI Tracking */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Fast Three KPIs
          </CardTitle>
          <CardDescription>
            Track implementation momentum: TTFE (Time to First Evidence), Literacy, Compliance readiness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <CheckCircle className="h-5 w-5" />
                  Time to First Evidence (TTFE)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                    7 days
                  </div>
                  <p className="text-sm text-blue-700/80 dark:text-blue-200/80">
                    Target: ≤ 10 days for first board evidence
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Latest evidence:
                    <br />
                    <strong>Board Pack generated and shared with Exec</strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                  <TrendingUp className="h-5 w-5" />
                  Literacy Momentum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
                    L1 Visible
                  </div>
                  <p className="text-sm text-emerald-700/80 dark:text-emerald-200/80">
                    Next target: reach L2 Evidenced within 4 weeks
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Drivers:
                    <ul className="list-disc ml-4 mt-1 space-y-1">
                      <li>Diagnostics completion ETA: 70%</li>
                      <li>Heatmap coverage: 35%</li>
                      <li>Literacy champions identified</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <AlertTriangle className="h-5 w-5" />
                  Compliance Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                    45 days
                  </div>
                  <p className="text-sm text-orange-700/80 dark:text-orange-200/80">
                    Deadline: EU AI Act Literacy Obligations (Article 4)
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Next actions:
                    <ul className="list-disc ml-4 mt-1 space-y-1">
                      <li>Complete diagnostics baseline</li>
                      <li>Run literacy heatmap export</li>
                      <li>Prepare Article 4 evidence binder</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* ROI Snapshot */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            ROI Snapshot
          </CardTitle>
          <CardDescription>
            Demonstrate financial impact from back-office AI automation and literacy uplift
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Monthly savings</span>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    Trending up
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-green-600">£1,240</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Back-office automation from literacy-first AI workflows (operations and finance).
                </p>
              </div>

              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Industry percentile</span>
                  <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                    Top quartile
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-blue-600">78th percentile</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Relative to Communications sector peers using literacy-first intelligence platforms.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">ROI percentage</span>
                  <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
                    12-week run rate
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-purple-600">240%</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Based on literacy uplift, back-office automation, and agency reduction.
                </p>
              </div>

              <div className="rounded-lg border bg-muted/40 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Team readiness</span>
                  <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                    Literacy uplift
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-teal-600">88%</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Literacy and readiness index across Executive, Practitioner, Technical roles.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Sections */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Platform Overview</h2>
        <div className="grid gap-6">
          {platformSections.map((section) => {
            const Icon = section.icon
            return (
              <Card key={section.title} className={`${section.color} hover:shadow-md transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-foreground" />
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs font-medium">
                          {section.stage}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {section.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {section.description}
                      </CardDescription>
                    </div>
                    <Link href={section.href}>
                      <Button className="gap-2">
                        Open
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {section.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Take Diagnostics
            </CardTitle>
            <CardDescription>
              Establish your AI literacy baseline in 10 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/diagnostics">
              <Button className="w-full">
                Start Assessment
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate Board Pack
            </CardTitle>
            <CardDescription>
              Export Article 4 evidence and compliance report
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/board-pack">
              <Button variant="outline" className="w-full">
                Create Report
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              View Literacy Map
            </CardTitle>
            <CardDescription>
              See Audience × Domain readiness heatmap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/literacy-map">
              <Button variant="outline" className="w-full">
                Open Heatmap
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
