"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Map,
  Shield,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Settings,
  BarChart3,
  FileText,
  Award,
  Briefcase,
  Clock,
  Building
} from "lucide-react"

const strategyPillars = [
  {
    title: "Product-Led Growth",
    description: "BN Trust OS as governance spine for AI-assisted communications",
    icon: Shield,
    color: "text-blue-600",
    href: "/strategy/commercial",
    metrics: "£8m+ ARR target by year 3"
  },
  {
    title: "Three-Stage Journey",
    description: "Automate → Augment → Transform progression framework",
    icon: TrendingUp,
    color: "text-green-600",
    href: "/strategy/methodology",
    metrics: "L0→L1→L2→L3 literacy ladder"
  },
  {
    title: "Market Entry MVP",
    description: "AI Risk & Trust Radar as beachhead product",
    icon: Target,
    color: "text-purple-600",
    href: "/strategy/roadmap",
    metrics: "CCO-focused painkiller solution"
  },
  {
    title: "Foundation Controls",
    description: "Gate A controls ensuring production readiness",
    icon: Settings,
    color: "text-amber-600",
    href: "/strategy/foundation",
    metrics: "Legal + SDLC + Security gates"
  }
]

const strategySections = [
  {
    title: "Product Roadmap",
    description: "Multi-phase development plan from MVP to market leadership",
    icon: Map,
    href: "/strategy/roadmap",
    status: "Q4 2024 - Platform Maturity",
    color: "border-blue-200",
    features: ["Q4 2024: Scale & Reliability", "Q1 2025: AI Innovation", "Q2 2025: Market Expansion", "Q3 2025: Ecosystem & Community"]
  },
  {
    title: "Operating Model",
    description: "Team structure, cadence, and decision-making framework",
    icon: Users,
    href: "/strategy/operating-model",
    status: "Weekly/Monthly/Quarterly rhythms",
    color: "border-green-200",
    features: ["Product Council", "CS/GTM Sync", "Release Reviews", "Strategy Reviews"]
  },
  {
    title: "Commercial Strategy",
    description: "Tiered pricing, market positioning, and sales approach",
    icon: DollarSign,
    href: "/strategy/commercial",
    status: "Assess £3-5k → Assure+ custom",
    color: "border-purple-200",
    features: ["Assess tier", "Assure tier", "Assure+ tier", "Land & expand motion"]
  },
  {
    title: "Foundation Status",
    description: "Gate A controls and production readiness indicators",
    icon: Shield,
    href: "/strategy/foundation", 
    status: "AMBER - In Progress",
    color: "border-amber-200",
    features: ["Legal & IP controls", "SDLC controls", "Security controls", "Binary gate system"]
  },
  {
    title: "Methodology Framework",
    description: "Literacy Ladder and Play Cards implementation approach",
    icon: BookOpen,
    href: "/strategy/methodology",
    status: "L1 88% completion rate",
    color: "border-indigo-200",
    features: ["L0→L3 progression", "Personal AI Scorecard", "12-week sprints", "Play Cards library"]
  },
  {
    title: "Benchmark System",
    description: "Industry benchmarking methodology and data approach",
    icon: BarChart3,
    href: "/strategy/benchmarks",
    status: "Method defined, implementation pending",
    color: "border-orange-200",
    features: ["Coverage metrics", "Efficiency metrics", "Quality metrics", "Maturity scoring"]
  }
]

const currentPhase = {
  phase: "Phase 1: Build the Beachhead",
  timeline: "Months 3-9",
  description: "Launch AI Risk & Trust Radar MVP and validate with early customers",
  progress: 65,
  milestones: [
    { name: "MVP Scoping", status: "completed" },
    { name: "Founding Member Council", status: "in_progress" },
    { name: "Commercial Launch", status: "pending" },
    { name: "Customer Success Framework", status: "pending" }
  ]
}

export default function StrategyOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Map className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Strategy Overview</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From consultancy to AI transformation engine: Our roadmap to £8m+ ARR SaaS leadership
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Building className="h-3 w-3" />
            Phase 1: Build the Beachhead
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Target className="h-3 w-3" />
            £8m ARR Target
          </Badge>
          <Badge variant="outline" className="gap-2 border-purple-200 text-purple-700">
            <Award className="h-3 w-3" />
            AI Transformation Engine
          </Badge>
        </div>
      </div>

      {/* Current Phase Progress */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Current Phase: {currentPhase.phase}
          </CardTitle>
          <CardDescription>
            {currentPhase.description} ({currentPhase.timeline})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Phase Progress</span>
                <span>{currentPhase.progress}%</span>
              </div>
              <Progress value={currentPhase.progress} className="h-2" />
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {currentPhase.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  {milestone.status === "completed" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : milestone.status === "in_progress" ? (
                    <Clock className="h-4 w-4 text-amber-600" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                  )}
                  <span className={milestone.status === "completed" ? "text-green-600" : ""}>{milestone.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategy Pillars */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Strategic Pillars</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {strategyPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${pillar.color}`} />
                        <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {pillar.description}
                      </CardDescription>
                      <div className="text-sm font-medium text-muted-foreground">
                        {pillar.metrics}
                      </div>
                    </div>
                    <Link href={pillar.href}>
                      <Button variant="outline" size="sm" className="gap-2">
                        View
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Strategy Sections */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Strategy Deep Dive</h2>
        <div className="grid gap-6">
          {strategySections.map((section) => {
            const Icon = section.icon
            return (
              <Card key={section.title} className={`${section.color} hover:shadow-md transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-foreground" />
                        <CardTitle className="text-xl">{section.title}</CardTitle>
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
                  <div>
                    <h4 className="font-medium mb-2">Key Elements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {section.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Three Phase Transformation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Three-Phase Transformation Roadmap
          </CardTitle>
          <CardDescription>
            Strategic progression from consultancy to SaaS leadership
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="font-semibold">Phase 0: Fortify Foundation</h4>
                <Badge variant="outline" className="text-xs">COMPLETE</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Resolve IP crisis, establish engineering discipline (Months 0-3)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• IP audit & new MSAs</li>
                <li>• SDLC implementation</li>
                <li>• DevOps professional hired</li>
                <li>• Gate A controls active</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h4 className="font-semibold">Phase 1: Build Beachhead</h4>
                <Badge variant="secondary" className="text-xs">IN PROGRESS</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Launch Radar MVP, validate with early customers (Months 3-9)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Radar MVP launch</li>
                <li>• Founding Member Council</li>
                <li>• AI Success Manager hire</li>
                <li>• Framework development</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <h4 className="font-semibold">Phase 2: Scale Engine</h4>
                <Badge variant="outline" className="text-xs">PLANNED</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Growth, funding, team expansion (Months 9-24)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Product module expansion</li>
                <li>• £1.5m seed funding</li>
                <li>• Sales/marketing build-out</li>
                <li>• Customer success scaling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Success Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Financial Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Year 1 ARR:</span>
                <span className="font-bold">£500k</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Year 2 ARR:</span>
                <span className="font-bold">£2.5m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Year 3 ARR:</span>
                <span className="font-bold text-green-600">£8m+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Target NRR:</span>
                <span className="font-bold">85%+</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Market Position
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Trained Leaders:</span>
                <span className="font-bold">250+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Target Market:</span>
                <span className="font-bold">CCOs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Positioning:</span>
                <span className="font-bold">Painkiller</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Differentiation:</span>
                <span className="font-bold text-blue-600">Only integrated solution</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Competitive Advantage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">C-Suite Access:</span>
                <span className="font-bold text-green-600">Trusted</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Expertise:</span>
                <span className="font-bold">Comms + AI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">IP Moat:</span>
                <span className="font-bold">Data + Method</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Market Gap:</span>
                <span className="font-bold text-purple-600">Vertical-specific</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}