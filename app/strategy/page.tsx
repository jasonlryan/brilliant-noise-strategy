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
    title: "Literacy-First Intelligence",
    description: "Cross the GenAI Divide through visible literacy, trusted governance, orchestrated outcomes",
    icon: BookOpen,
    color: "text-blue-600",
    href: "/strategy/methodology",
    metrics: "95% of AI pilots fail - we fix the learning gap"
  },
  {
    title: "Back-Office ROI Beachhead",
    description: "$2-10M savings opportunity in back-office operations (BPO elimination, agency reduction)",
    icon: DollarSign,
    color: "text-green-600",
    href: "/strategy/commercial",
    metrics: "CFO/COO buyers, 2-4 month payback"
  },
  {
    title: "Partnership Success Model",
    description: "External partnerships succeed at 66% vs 33% for internal builds (MIT validation)",
    icon: Users,
    color: "text-purple-600",
    href: "/strategy/operating-model",
    metrics: "Trusted partner, not vendor or consultant"
  },
  {
    title: "Risk & Governance Layer",
    description: "Risk Radar embedded in workflows: guarded execution, compliance, audit trails",
    icon: Shield,
    color: "text-red-600",
    href: "/strategy/foundation",
    metrics: "Article 4 ready, human-in-the-loop by default"
  }
]

const strategySections = [
  {
    title: "Product Roadmap",
    description: "Three-tier architecture rollout: Literacy foundation → Governance/Risk → Orchestration",
    icon: Map,
    href: "/strategy/roadmap",
    status: "Phase 1 - 76% Complete",
    color: "border-blue-200",
    features: ["Phase 1: Diagnostics, Heatmap, Board Pack", "Phase 2: Guarded Workflows, Risk Radar", "Phase 3: Multi-agent orchestration", "Phase 4: Enterprise scale"]
  },
  {
    title: "Methodology Framework",
    description: "Five-level maturity model: Stuck → Visible → Evidenced → Learning → Orchestrated",
    icon: BookOpen,
    href: "/strategy/methodology",
    status: "Literacy-first approach validated",
    color: "border-indigo-200",
    features: ["L0-L4 progression rubric", "Audience × Domain heatmap", "Role-based curricula", "Article 4 compliance"]
  },
  {
    title: "Risk & Governance Layer",
    description: "Risk Radar: Trust at scale through embedded governance and real-time monitoring",
    icon: Shield,
    href: "/literacy-map",
    status: "Layer 2 - Phase 2 Deployment",
    color: "border-red-200",
    features: ["Guarded workflows (human-in-loop)", "Risk monitoring & alerts", "Compliance enforcement", "Full audit trails"]
  },
  {
    title: "Commercial Strategy",
    description: "Value-based pricing tied to $2-10M back-office ROI potential",
    icon: DollarSign,
    href: "/strategy/commercial",
    status: "CFO/COO buyer focus",
    color: "border-green-200",
    features: ["Literacy Sprint: Foundation entry", "Trust Layer: £100-300k retainer", "Platform integration: £200-400k+", "2-4 month payback period"]
  },
  {
    title: "Operating Model",
    description: "Partnership-led delivery (66% success rate vs 33% internal builds)",
    icon: Users,
    href: "/strategy/operating-model",
    status: "Hybrid: 70% services, 30% platform",
    color: "border-purple-200",
    features: ["Fractional CTO partnership", "Three-role client model", "Product squad + CS team", "12-person target by Q1'26"]
  },
  {
    title: "Foundation Status",
    description: "Gate A controls and production readiness (Phase 0 complete)",
    icon: Settings,
    href: "/strategy/foundation",
    status: "GREEN - Phase 0 Complete",
    color: "border-emerald-200",
    features: ["Legal & IP controls ✓", "SDLC controls ✓", "Security controls ✓", "Platform development initiated"]
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
          Literacy-First Intelligence Platform: Cross the GenAI Divide through visible literacy, trusted governance, and orchestrated intelligence
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <BookOpen className="h-3 w-3" />
            Literacy Foundation
          </Badge>
          <Badge variant="outline" className="gap-2 border-red-200 text-red-700">
            <Shield className="h-3 w-3" />
            Risk & Governance
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <TrendingUp className="h-3 w-3" />
            Orchestrated Intelligence
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

      {/* Three-Tier Platform Architecture */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Three-Tier Platform Architecture
          </CardTitle>
          <CardDescription>
            Literacy-first foundation → Governance & risk → Orchestrated intelligence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3 p-4 border border-blue-200 rounded-lg bg-blue-50/50">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Layer 1: Human Intelligence</h4>
              </div>
              <p className="text-sm text-blue-800">
                Diagnose and frame opportunities through visible literacy
              </p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• <strong>Diagnostics:</strong> 10-question baseline assessment</li>
                <li>• <strong>Literacy Heatmap:</strong> Audience × Domain visibility</li>
                <li>• <strong>Resources:</strong> Role-based curricula and learning paths</li>
                <li>• <strong>Evidence:</strong> Board Pack with Article 4 compliance</li>
              </ul>
              <div className="pt-2 text-xs font-medium text-blue-900">
                ✓ Phase 1 - 76% Complete
              </div>
            </div>

            <div className="space-y-3 p-4 border border-red-200 rounded-lg bg-red-50/50">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-900">Layer 2: Governance & Risk</h4>
              </div>
              <p className="text-sm text-red-800">
                Trust at scale through embedded risk monitoring and controls
              </p>
              <ul className="text-xs space-y-1 text-red-700">
                <li>• <strong>Risk Radar:</strong> Real-time monitoring and alerts</li>
                <li>• <strong>Guarded Workflows:</strong> Human-in-the-loop approvals</li>
                <li>• <strong>Compliance:</strong> EU AI Act Article 4 enforcement</li>
                <li>• <strong>Audit Trails:</strong> Full governance evidence chain</li>
              </ul>
              <div className="pt-2 text-xs font-medium text-red-900">
                → Phase 2 - Workflow Pilots
              </div>
            </div>

            <div className="space-y-3 p-4 border border-green-200 rounded-lg bg-green-50/50">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Layer 3: Agent Orchestration</h4>
              </div>
              <p className="text-sm text-green-800">
                Solve and prove value through coordinated intelligence
              </p>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• <strong>Multi-Agent Systems:</strong> Coordinated workflows</li>
                <li>• <strong>Telemetry:</strong> Outcomes tied to literacy progression</li>
                <li>• <strong>Learning Systems:</strong> Continuous improvement loops</li>
                <li>• <strong>Orchestration:</strong> Predictable, scaled outcomes</li>
              </ul>
              <div className="pt-2 text-xs font-medium text-green-900">
                → Phase 3-4 - Scale & Orchestrate
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 text-sm">The Prototype Paradox</h4>
                <p className="text-xs text-amber-800 mt-1">
                  MIT research validates our thesis: 95% of AI pilots fail because organizations can't learn fast enough.
                  Our three-tier architecture fixes this by making literacy visible (Layer 1), embedding governance early (Layer 2),
                  and orchestrating proven workflows (Layer 3). External partnerships succeed at 66% vs 33% for internal builds.
                </p>
              </div>
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
            Three-Phase Business Transformation
          </CardTitle>
          <CardDescription>
            Strategic progression: Foundation → Beachhead → Scale (Hybrid consultancy → Platform)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="font-semibold">Phase 0: Fortify Foundation</h4>
                <Badge variant="outline" className="text-xs">✓ COMPLETE</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                IP controls, SDLC discipline, production readiness (Months 0-3)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ IP audit & new MSAs</li>
                <li>✓ SDLC implementation</li>
                <li>✓ Lee Davies (fractional CTO)</li>
                <li>✓ Gate A controls GREEN</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h4 className="font-semibold">Phase 1: Literacy Foundation</h4>
                <Badge variant="secondary" className="text-xs">76% DONE</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Vertical slice: Diagnostics → Heatmap → Board Pack (Months 3-9)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>✓ Diagnostics (10-question baseline)</li>
                <li>✓ Literacy Heatmap (Audience × Domain)</li>
                <li>✓ Board Pack (Article 4 evidence)</li>
                <li>→ Guarded workflow pilots (Phase 2)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <h4 className="font-semibold">Phase 2: Risk & Governance</h4>
                <Badge variant="outline" className="text-xs">NEXT</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Risk Radar deployment, workflow automation (Months 9-15)
              </p>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Risk Radar (Layer 2)</li>
                <li>• Guarded workflows (2-3 pilots)</li>
                <li>• Compliance automation</li>
                <li>• Multi-tenant SaaS skeleton</li>
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
              Financial & ROI Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Client ROI Range:</span>
                <span className="font-bold text-green-600">$2-10M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Payback Period:</span>
                <span className="font-bold">2-4 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Revenue Mix (H1'26):</span>
                <span className="font-bold">70/30 services/platform</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Year 3 ARR Target:</span>
                <span className="font-bold text-blue-600">£8m+</span>
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
                <span className="text-sm">Primary Buyers:</span>
                <span className="font-bold">CFO/COO/CRO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Beachhead:</span>
                <span className="font-bold">Back-office ops</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Market Window:</span>
                <span className="font-bold text-red-600">18 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Differentiation:</span>
                <span className="font-bold text-blue-600">Literacy-first approach</span>
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
                <span className="text-sm">MIT Validation:</span>
                <span className="font-bold text-green-600">95% failure rate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Partnership Success:</span>
                <span className="font-bold">66% vs 33%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Proprietary IP:</span>
                <span className="font-bold">Prototype Paradox</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Technical Moat:</span>
                <span className="font-bold text-purple-600">3-tier architecture</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}