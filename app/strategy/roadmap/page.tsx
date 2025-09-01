"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Map,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Users,
  Rocket,
  Target,
  TrendingUp,
  Shield,
  Code,
  Database,
  Smartphone,
  Award,
  Brain
} from "lucide-react"

const roadmapPhases = [
  {
    quarter: "Q4 2024",
    theme: "Platform Maturity",
    subtitle: "Scale & Reliability",
    status: "in_progress",
    progress: 75,
    color: "border-blue-500",
    initiatives: [
      { name: "Enhanced Analytics Engine", status: "completed", icon: Database },
      { name: "Advanced Workflow Builder", status: "in_progress", icon: Code },
      { name: "API Gateway v2", status: "pending", icon: Shield },
      { name: "L2 Play Card Expansion", status: "in_progress", icon: Brain }
    ]
  },
  {
    quarter: "Q1 2025", 
    theme: "AI Innovation",
    subtitle: "Next-Generation AI Capabilities",
    status: "planned",
    progress: 0,
    color: "border-green-500",
    initiatives: [
      { name: "L3 Tool-Maker Platform", status: "planned", icon: Rocket },
      { name: "Advanced Governance Features", status: "planned", icon: Shield },
      { name: "Integration Ecosystem", status: "planned", icon: Globe },
      { name: "Mobile Application", status: "planned", icon: Smartphone }
    ]
  },
  {
    quarter: "Q2 2025",
    theme: "Market Expansion", 
    subtitle: "Industry Specialization",
    status: "future",
    progress: 0,
    color: "border-purple-500",
    initiatives: [
      { name: "Vertical Solutions", status: "future", icon: Target },
      { name: "Global Expansion", status: "future", icon: Globe },
      { name: "Advanced Benchmarking", status: "future", icon: TrendingUp },
      { name: "Multi-language Support", status: "future", icon: Users }
    ]
  },
  {
    quarter: "Q3 2025",
    theme: "Ecosystem & Community",
    subtitle: "Platform Evolution", 
    status: "future",
    progress: 0,
    color: "border-orange-500",
    initiatives: [
      { name: "Community Platform", status: "future", icon: Users },
      { name: "Partner Ecosystem", status: "future", icon: Globe },
      { name: "Advanced Analytics", status: "future", icon: Database },
      { name: "Certification Program", status: "future", icon: Award }
    ]
  }
]

const currentFeatures = [
  {
    tier: "Assess (£3-5k/mo)",
    status: "Generally Available",
    features: [
      "Radar core platform",
      "L1 Play Cards library", 
      "QBR export functionality",
      "Basic approval workflows",
      "Personal AI Scorecard"
    ]
  },
  {
    tier: "Assure (£8-12k/mo)",
    status: "Generally Available", 
    features: [
      "Exception management system",
      "SSO integration",
      "CSV/webhook adapters",
      "L2 Play Cards",
      "Benchmark data"
    ]
  },
  {
    tier: "Assure+ (Custom)",
    status: "Limited Availability",
    features: [
      "Multi-entity deployment",
      "L3 pilot program",
      "Quarterly Expert Review",
      "Agency Enablement Kit",
      "Custom integrations"
    ]
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "in_progress": 
      return <Clock className="h-4 w-4 text-blue-600" />
    case "planned":
      return <Target className="h-4 w-4 text-purple-600" />
    case "future":
      return <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "in_progress":
      return "text-blue-600"
    case "planned": 
      return "text-purple-600"
    case "future":
      return "text-gray-600"
    default:
      return "text-gray-600"
  }
}

export default function StrategyRoadmapPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Map className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Product Roadmap</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Multi-phase development plan from MVP to market leadership
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Clock className="h-3 w-3" />
            Q4 2024: Platform Maturity
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Target className="h-3 w-3" />
            4 Quarters Planned
          </Badge>
        </div>
      </div>

      {/* Current Status */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Current Product Status
          </CardTitle>
          <CardDescription>
            Available tiers and feature rollout status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {currentFeatures.map((tier, index) => (
              <div key={index} className="space-y-3">
                <div className="space-y-1">
                  <h4 className="font-semibold">{tier.tier}</h4>
                  <Badge variant={tier.status === "Generally Available" ? "default" : "secondary"} className="text-xs">
                    {tier.status}
                  </Badge>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Development Timeline</h2>
        {roadmapPhases.map((phase, index) => (
          <Card key={index} className={`${phase.color} border-l-4`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{phase.quarter}</h3>
                    <Badge variant="outline" className={`text-xs ${getStatusColor(phase.status)}`}>
                      {phase.status.toUpperCase()}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{phase.theme}</CardTitle>
                  <CardDescription className="text-base">
                    {phase.subtitle}
                  </CardDescription>
                  {phase.status === "in_progress" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{phase.progress}%</span>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {phase.initiatives.map((initiative, initIndex) => {
                  const Icon = initiative.icon
                  return (
                    <div key={initIndex} className="flex items-center gap-3 p-3 rounded-lg border">
                      {getStatusIcon(initiative.status)}
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{initiative.name}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success Metrics */}
      <Tabs defaultValue="platform" className="space-y-4">
        <TabsList>
          <TabsTrigger value="platform">Platform Metrics</TabsTrigger>
          <TabsTrigger value="business">Business Metrics</TabsTrigger>
          <TabsTrigger value="innovation">Innovation Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="platform" className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Uptime SLA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-xs text-muted-foreground">Target availability</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Page Load Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">&lt;2s</div>
                <div className="text-xs text-muted-foreground">Dashboard target</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Feature Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">80%</div>
                <div className="text-xs text-muted-foreground">Within 6 months</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">NPS 50+</div>
                <div className="text-xs text-muted-foreground">Target score</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">40% YoY</div>
                <div className="text-xs text-muted-foreground">Recurring revenue</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Market Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">Top 3</div>
                <div className="text-xs text-muted-foreground">AI governance category</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Client Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">95%+</div>
                <div className="text-xs text-muted-foreground">Net revenue retention</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Tier Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">30%</div>
                <div className="text-xs text-muted-foreground">Assess → Assure upgrade</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="innovation" className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Patent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">2+</div>
                <div className="text-xs text-muted-foreground">Per quarter</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Research Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-xs text-muted-foreground">Academic references</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Speaking Ops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-xs text-muted-foreground">Major conferences/yr</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Thought Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">Annual</div>
                <div className="text-xs text-muted-foreground">Benchmark reports</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Feature Prioritization Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Feature Prioritization Framework
          </CardTitle>
          <CardDescription>
            How we decide what to build next
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h4 className="font-semibold">Tier 1: Must Have</h4>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Client-requested features (>50% adoption potential)</li>
                <li>• Regulatory compliance requirements</li>
                <li>• Security and reliability improvements</li>
                <li>• Tier expansion enablers</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <h4 className="font-semibold">Tier 2: Should Have</h4>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Competitive differentiation features</li>
                <li>• Operational efficiency improvements</li>
                <li>• Advanced analytics capabilities</li>
                <li>• Integration expansion</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h4 className="font-semibold">Tier 3: Nice to Have</h4>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Innovation experiments</li>
                <li>• Emerging technology exploration</li>
                <li>• Niche use case solutions</li>
                <li>• Future market preparation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}