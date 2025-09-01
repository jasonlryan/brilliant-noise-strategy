"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DollarSign,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Crown,
  Star,
  Award,
  ArrowRight,
  Zap,
  Shield,
  Building,
  Globe,
  Briefcase,
  Clock
} from "lucide-react"

const commercialTiers = [
  {
    name: "Assess",
    price: "£3–5k/mo",
    target: "Organizations beginning AI governance journey",
    status: "Generally Available",
    color: "border-green-500",
    features: [
      "Radar core platform",
      "L1 Play Cards library", 
      "QBR export functionality",
      "Basic approval workflows",
      "Personal AI Scorecard system"
    ],
    valueProps: [
      "Speed: Reduce approval cycles from weeks to days",
      "Visibility: Real-time governance dashboard",
      "Learning: Structured literacy development"
    ],
    successMetrics: [
      "Time to First Approval < 7 days",
      "100% initiative coverage", 
      "L1 literacy achievement by all users"
    ]
  },
  {
    name: "Assure",
    price: "£8–12k/mo", 
    target: "Organizations scaling AI governance practices",
    status: "Generally Available",
    color: "border-blue-500",
    features: [
      "Everything in Assess",
      "Exception management system",
      "SSO integration (SAML, OIDC)",
      "CSV/webhook adapters for owned/earned signals",
      "L2 Play Cards (Discovery Bots, Compliance Bots)",
      "First benchmark data cut",
      "Advanced approval SLA tracking"
    ],
    valueProps: [
      "Automation: Exception handling and escalation",
      "Integration: Connect existing workflows", 
      "Benchmarking: Industry position insights"
    ],
    successMetrics: [
      "Exception rate < 5%",
      "Benchmark position in top 50th percentile",
      "L2 capability deployment"
    ]
  },
  {
    name: "Assure+",
    price: "Custom pricing",
    target: "Enterprise organizations with complex AI governance needs",
    status: "Limited Availability (Pilot)",
    color: "border-purple-500",
    features: [
      "Everything in Assure",
      "Multi-entity deployment architecture",
      "L3 pilot program (Tool-maker capabilities)",
      "Quarterly Expert Review service",
      "Agency Enablement Kit",
      "Custom integration development"
    ],
    valueProps: [
      "Scale: Multi-brand, multi-region deployment",
      "Innovation: Cutting-edge AI governance practices",
      "Partnership: Strategic advisory relationship"
    ],
    successMetrics: [
      "Multi-entity governance harmony",
      "Industry thought leadership",
      "L3 innovation pilot success"
    ]
  }
]

const financialTargets = {
  year1: { arr: "£500k", customers: 15, avg_deal: "£33k" },
  year2: { arr: "£2.5m", customers: 60, avg_deal: "£42k" },
  year3: { arr: "£8m+", customers: 150, avg_deal: "£53k" }
}

const salesMotion = {
  approach: "Land with Assess, expand through value demonstration",
  stages: [
    { stage: "1. 3-month Assess pilot", duration: "Month 1-3", focus: "Value demonstration" },
    { stage: "2. Measure impact (TTFA, coverage, literacy)", duration: "Month 3", focus: "ROI validation" },
    { stage: "3. Demonstrate ROI case for Assure", duration: "Month 4", focus: "Upgrade presentation" },
    { stage: "4. Strategic partnership discussion for Assure+", duration: "Month 6+", focus: "Enterprise expansion" }
  ]
}

const buyerPersonas = [
  {
    role: "Chief Communications Officer", 
    type: "Primary",
    description: "Senior communications leader seeking AI governance control",
    pain_points: ["Regulatory exposure", "Reputational risk", "Board reporting needs"],
    motivations: ["Career protection", "Innovation leadership", "Operational efficiency"]
  },
  {
    role: "Chief Risk Officer",
    type: "Economic", 
    description: "Budget holder focused on enterprise risk management",
    pain_points: ["AI governance gaps", "Compliance blind spots", "Audit readiness"],
    motivations: ["Risk mitigation", "Regulatory compliance", "Due diligence"]
  },
  {
    role: "Comms Ops Lead",
    type: "Technical",
    description: "Operational leader implementing day-to-day processes",
    pain_points: ["Manual workflows", "Tool fragmentation", "Reporting overhead"],
    motivations: ["Process efficiency", "Tool integration", "Team productivity"]
  },
  {
    role: "Progressive Marketing Leader",
    type: "Champion",
    description: "Forward-thinking leader advocating for AI innovation",
    pain_points: ["Slow approval cycles", "Conservative culture", "Competitive disadvantage"],
    motivations: ["Innovation advantage", "Market leadership", "Team empowerment"]
  }
]

const competitiveDiff = [
  {
    factor: "Only integrated solution",
    description: "Product + Method + Data + Trust Pack combined",
    advantage: "No competitor offers complete package"
  },
  {
    factor: "Proven methodology",
    description: "Literacy Ladder with measurable progression",
    advantage: "Systematic approach vs. ad-hoc tools"
  },
  {
    factor: "Benchmark advantage", 
    description: "Industry-first governance benchmarking",
    advantage: "Unique data moat and peer insights"
  },
  {
    factor: "Board-ready",
    description: "Executive reporting and governance artifacts",
    advantage: "C-suite focused vs. operational tools"
  }
]

export default function CommercialStrategyPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <DollarSign className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Commercial Strategy</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tiered pricing, market positioning, and sales approach for Trust OS growth
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Target className="h-3 w-3" />
            £8m ARR Target
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <TrendingUp className="h-3 w-3" />
            Land & Expand Model
          </Badge>
        </div>
      </div>

      {/* Financial Targets */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Financial Trajectory
          </CardTitle>
          <CardDescription>
            Three-year revenue and customer growth targets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">{financialTargets.year1.arr}</div>
              <p className="text-sm font-medium">Year 1 ARR</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>{financialTargets.year1.customers} customers</p>
                <p>{financialTargets.year1.avg_deal} avg deal size</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">{financialTargets.year2.arr}</div>
              <p className="text-sm font-medium">Year 2 ARR</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>{financialTargets.year2.customers} customers</p>
                <p>{financialTargets.year2.avg_deal} avg deal size</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-600">{financialTargets.year3.arr}</div>
              <p className="text-sm font-medium">Year 3 ARR</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>{financialTargets.year3.customers} customers</p>
                <p>{financialTargets.year3.avg_deal} avg deal size</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tiered Pricing */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tiered Toolbox Membership</h2>
        <div className="grid gap-6">
          {commercialTiers.map((tier, index) => (
            <Card key={index} className={`${tier.color} border-l-4`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {tier.price}
                      </Badge>
                      <Badge variant={tier.status === "Generally Available" ? "default" : "secondary"}>
                        {tier.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {tier.target}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="features" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="value">Value Props</TabsTrigger>
                    <TabsTrigger value="success">Success Metrics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="features">
                    <ul className="space-y-2 text-sm">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="value">
                    <ul className="space-y-2 text-sm">
                      {tier.valueProps.map((prop, propIndex) => (
                        <li key={propIndex} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-amber-500" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="success">
                    <ul className="space-y-2 text-sm">
                      {tier.successMetrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-500" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sales Motion */}
      <Tabs defaultValue="motion" className="space-y-4">
        <TabsList>
          <TabsTrigger value="motion">Sales Motion</TabsTrigger>
          <TabsTrigger value="personas">Buyer Personas</TabsTrigger>
          <TabsTrigger value="competitive">Competitive Advantage</TabsTrigger>
        </TabsList>

        <TabsContent value="motion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Primary Sales Motion: Land & Expand
              </CardTitle>
              <CardDescription>
                {salesMotion.approach}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {salesMotion.stages.map((stage, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{stage.stage}</CardTitle>
                      <CardDescription>{stage.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">{stage.focus}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personas" className="space-y-4">
          <div className="grid gap-6">
            {buyerPersonas.map((persona, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-xl">{persona.role}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {persona.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {persona.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-medium text-red-600">Pain Points</h5>
                      <ul className="space-y-1 text-sm">
                        {persona.pain_points.map((pain, painIndex) => (
                          <li key={painIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-green-600">Motivations</h5>
                      <ul className="space-y-1 text-sm">
                        {persona.motivations.map((motivation, motivationIndex) => (
                          <li key={motivationIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            {motivation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5" />
                Competitive Differentiation
              </CardTitle>
              <CardDescription>
                Key advantages that give BN Trust OS "right to win"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitiveDiff.map((diff, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{diff.factor}</CardTitle>
                      <CardDescription>{diff.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">{diff.advantage}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Strategic Rules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Strategic Rules
          </CardTitle>
          <CardDescription>
            Non-negotiable principles governing commercial execution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border border-blue-500 rounded-lg">
                <h5 className="font-semibold text-blue-600">Rule 1: Product-Led Growth</h5>
                <p className="text-sm text-muted-foreground">No subscription → no project (method always runs on the product)</p>
              </div>
              <div className="p-4 border border-green-500 rounded-lg">
                <h5 className="font-semibold text-green-600">Rule 2: Platform-Native Delivery</h5>
                <p className="text-sm text-muted-foreground">All delivery in-product (briefs, approvals, evidence); no off-platform tools</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-purple-500 rounded-lg">
                <h5 className="font-semibold text-purple-600">Rule 3: Data Moat Protection</h5>
                <p className="text-sm text-muted-foreground">Method and usage data structured for benchmarks; client-specific outputs stay theirs</p>
              </div>
              <div className="p-4 border border-amber-500 rounded-lg">
                <h5 className="font-semibold text-amber-600">Rule 4: Foundation Gate Control</h5>
                <p className="text-sm text-muted-foreground">No tier activation until Gate A is green - Foundation controls must pass</p>
              </div>
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
              Revenue Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Target NRR:</span>
                <span className="font-bold text-green-600">85%+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Assess → Assure:</span>
                <span className="font-bold">30% upgrade rate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Average Deal Size:</span>
                <span className="font-bold">£42k ARR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sales Cycle:</span>
                <span className="font-bold">3-6 months</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Customer Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Trained Leaders:</span>
                <span className="font-bold text-purple-600">250+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Active Customers:</span>
                <span className="font-bold">25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Founding Members:</span>
                <span className="font-bold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Renewal Rate:</span>
                <span className="font-bold text-green-600">95%+</span>
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
                <span className="text-sm">Market Category:</span>
                <span className="font-bold">AI Governance</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Target Ranking:</span>
                <span className="font-bold text-green-600">Top 3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Vertical Focus:</span>
                <span className="font-bold">Communications</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Positioning:</span>
                <span className="font-bold text-blue-600">Painkiller</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}