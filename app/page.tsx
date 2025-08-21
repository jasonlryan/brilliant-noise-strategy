"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Target, Users, Cog, Shield, TrendingUp } from "lucide-react"

interface StrategySection {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  content: string[]
  metrics?: string[]
}

const strategyData: StrategySection[] = [
  {
    id: "roof",
    title: "The Roof: Overarching Strategy",
    description: "Transform into a scalable, product-led SaaS powerhouse",
    icon: <Building2 className="h-6 w-6" />,
    content: [
      "Transform from project-based services to scalable SaaS business",
      "Move from technology company misconception to true product company",
      "Achieve predictable, recurring revenue with exponential growth potential",
      'Ultimate goal: Become a "SaaS Unicorn" with strategic service augmentation',
    ],
    metrics: ["Target: £8m+ ARR by Year 3", "Goal: 85%+ Net Revenue Retention", "Funding: £1.5m convertible note"],
  },
  {
    id: "pillar1",
    title: "Product-Led Innovation & Scalability",
    description: "Develop coherent, data-driven SaaS product suite",
    icon: <Target className="h-6 w-6" />,
    content: [
      'MVP: "AI Risk & Trust Radar" - addresses urgent market need from EU AI Act',
      "Leverages core strengths: C-suite relationships and strategic advice",
      'Modular expansion with "Comms Maturity Benchmark" and progressive AI modules',
      "Data-driven development using usage insights for market relevance",
      "Competitive positioning as premier AI governance solution for communications",
    ],
    metrics: [
      "Target Market: Chief Communications Officers",
      'Product Type: "Painkiller" solution',
      "Expansion: Progressive AI transformation journey",
    ],
  },
  {
    id: "pillar2",
    title: "Customer Transformation & Value Expansion",
    description: "Implement robust Customer Success methodology",
    icon: <Users className="h-6 w-6" />,
    content: [
      '"Automate → Augment → Transform" framework as organizing principle',
      'Position as "always-on innovation partner" through AI maturity stages',
      'Dedicated "AI Success Manager" role with commercial background',
      "Analytics-first instrumentation for ROI demonstration",
      "Systematic client contact with monthly reviews and QBRs",
      'Address "Project Cul-de-Sac Problem" with consistent value capture',
    ],
    metrics: [
      "Target NRR: 85%+",
      "Success Metric: Customer Lifetime Value growth",
      "Framework: 3-stage AI maturity progression",
    ],
  },
  {
    id: "pillar3",
    title: "Strategic Market Positioning & Commercialization",
    description: "Leverage C-suite relationships for market capture",
    icon: <TrendingUp className="h-6 w-6" />,
    content: [
      "Leverage existing C-suite trust from training 250+ senior leaders",
      "Proprietary, high-intent customer acquisition channel",
      'Recruit "Founding Member Council" for MVP validation',
      'Transition to subscription-based "Toolbox Membership" model',
      "Tiered pricing with clear upsell paths for predictable ARR",
      "Orient organization around SaaS KPIs: ARR, NRR, LTV/CAC",
    ],
    metrics: [
      "Asset: 250+ trained senior leaders",
      "Model: Subscription-based membership",
      "KPIs: ARR, NRR, LTV/CAC ratios",
    ],
  },
  {
    id: "foundation1",
    title: "Technical Excellence & Scalable Infrastructure",
    description: 'Address "foundation of sand" with disciplined development',
    icon: <Cog className="h-6 w-6" />,
    content: [
      "Establish standardized dev, staging, and live environments",
      "Move away from direct-to-production deployments",
      "Hire dedicated DevOps talent for secure CI/CD pipeline",
      "Implement analytics-first approach for all new tools",
      'Replicate "gorgeous" analytics from MHA tool across platform',
      "Build comprehensive usage tracking and feedback loops",
    ],
    metrics: [
      "Infrastructure: Dev/Staging/Live environments",
      "Analytics: Usage tracking by design",
      "DevOps: Dedicated talent acquisition",
    ],
  },
  {
    id: "foundation2",
    title: "Strategic IP Management & Protection",
    description: "Comprehensive IP audit and protection strategy",
    icon: <Shield className="h-6 w-6" />,
    content: [
      "Conduct thorough audit of all existing codebases and client agreements",
      "Classify IP: Brilliant Noise Core, Licensed Components, Client-Specific",
      "Implement standardized Master Services Agreements (MSA)",
      "Create modular IP Addendums for future statements of work",
      "Retain ownership of pre-existing IP and general methodologies",
      "Establish usage data and success methodologies as core IP",
    ],
    metrics: [
      "Risk Level: Immediate and existential threat",
      "Priority: Prerequisites for funding",
      "Value: Usage data > individual tools",
    ],
  },
  {
    id: "foundation3",
    title: "Organizational Culture & Talent Evolution",
    description: "Shift from services-centric to product-first mindset",
    icon: <Users className="h-6 w-6" />,
    content: [
      'Overcome "cultural civil war" between bespoke and standardized approaches',
      "Re-engineer incentive structures to reward product-centric behaviors",
      'Import key "product DNA" from outside the organization',
      "Acquire missing SaaS roles: Product Managers, SaaS Marketers, Customer Success",
      "Transition existing team members into new product-focused roles",
      "Shift financial nervous system from billable hours to SaaS metrics",
    ],
    metrics: [
      "Culture Shift: Services → Product mindset",
      "New Roles: PM, Marketing, Customer Success",
      "Metrics: Hours → ARR/NRR/LTV/CAC",
    ],
  },
]

export default function StrategyHouse() {
  const roofSection = strategyData.find((s) => s.id === "roof")
  const pillarSections = strategyData.filter((s) => s.id.startsWith("pillar"))
  const foundationSections = strategyData.filter((s) => s.id.startsWith("foundation"))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Brilliant Noise Strategy House</h1>
              <p className="text-muted-foreground">SaaS Transformation Strategy Visualization</p>
            </div>
            <Button variant="secondary" className="gap-2">
              <Shield className="h-4 w-4" />
              Download Full Strategy
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Strategy House Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* The Roof */}
          {roofSection && (
            <div className="mb-8">
              <Card className="shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <div className="flex items-center gap-3">
                    {roofSection.icon}
                    <div>
                      <CardTitle className="text-xl">{roofSection.title}</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        {roofSection.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Strategic Objectives</h4>
                      <ul className="space-y-2">
                        {roofSection.content.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Metrics</h4>
                      <div className="space-y-2">
                        {roofSection.metrics?.map((metric, index) => (
                          <Badge key={index} variant="secondary" className="block w-fit">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* The Walls - Strategic Pillars */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center">The Walls: Strategic Pillars</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillarSections.map((section) => (
                <Card key={section.id} className="shadow-lg">
                  <CardHeader className="bg-secondary text-secondary-foreground">
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <CardDescription className="text-secondary-foreground/80 text-sm">
                          {section.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Initiatives</h4>
                        <ul className="space-y-1">
                          {section.content.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {section.metrics && (
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Success Metrics</h4>
                          <div className="space-y-1">
                            {section.metrics.map((metric, index) => (
                              <Badge key={index} variant="outline" className="text-xs block w-fit">
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Foundation */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">The Foundation: Foundational Enablers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {foundationSections.map((section) => (
                <Card key={section.id} className="shadow-lg">
                  <CardHeader className="bg-muted">
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <CardDescription className="text-sm">{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Implementation Areas</h4>
                        <ul className="space-y-1">
                          {section.content.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {section.metrics && (
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Critical Factors</h4>
                          <div className="space-y-1">
                            {section.metrics.map((metric, index) => (
                              <Badge key={index} variant="outline" className="text-xs block w-fit">
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                <p className="text-muted-foreground mb-4">
                  To ensure alignment across senior leadership, consider developing a visual representation of this
                  Strategy House and conducting a workshop to gather feedback and build consensus.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button variant="default">Schedule Strategy Workshop</Button>
                  <Button variant="outline">Download Implementation Guide</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
