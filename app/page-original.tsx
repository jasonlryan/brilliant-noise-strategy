"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  Activity, 
  BookOpen, 
  BarChart3, 
  FileText,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  Award,
  DollarSign,
  Target,
  ArrowRight,
  Zap
} from "lucide-react"

// Dashboard overview data
const dashboardMetrics = {
  foundation_status: "amber" as const,
  active_initiatives: 12,
  blocked_initiatives: 1,
  play_cards_active: 4,
  l1_completion: 88,
  avg_ttfa: 4.2,
  roi_percentage: 240,
  industry_percentile: 78,
  monthly_savings: 1240
}

const quickStats = [
  {
    title: "Foundation Status",
    value: "AMBER",
    subtitle: "2 criteria pending",
    icon: Shield,
    color: "text-amber-600",
    href: "/foundation"
  },
  {
    title: "Active Initiatives", 
    value: dashboardMetrics.active_initiatives,
    subtitle: `${dashboardMetrics.blocked_initiatives} blocked`,
    icon: Activity,
    color: "text-blue-600",
    href: "/initiatives"
  },
  {
    title: "L1 Literacy",
    value: `${dashboardMetrics.l1_completion}%`,
    subtitle: "Team completion",
    icon: BookOpen,
    color: "text-green-600", 
    href: "/play-cards"
  },
  {
    title: "ROI Achievement",
    value: `${dashboardMetrics.roi_percentage}%`,
    subtitle: "vs 200% target",
    icon: DollarSign,
    color: "text-purple-600",
    href: "/analytics"
  }
]

const platformSections = [
  {
    title: "Foundation Status",
    description: "Gate A operational readiness and security controls",
    icon: Shield,
    href: "/foundation",
    status: "AMBER - 2 pending",
    color: "border-amber-200",
    features: ["Gate A criteria tracking", "Security metrics", "Compliance evidence", "Operational readiness"]
  },
  {
    title: "Initiative Management",
    description: "Track AI governance initiatives through approval workflows",
    icon: Activity,
    href: "/initiatives", 
    status: "12 active, 1 blocked",
    color: "border-blue-200",
    features: ["Approval pipelines", "TTFA tracking", "Exception handling", "Foundation integration"]
  },
  {
    title: "Play Card Center",
    description: "AI governance methodology and literacy progression",
    icon: BookOpen,
    href: "/play-cards",
    status: "4/5 L1 active",
    color: "border-green-200",
    features: ["Heat map visualization", "Literacy ladder", "Implementation guides", "Usage analytics"]
  },
  {
    title: "Analytics & KPIs",
    description: "Performance metrics and industry benchmarking",
    icon: BarChart3,
    href: "/analytics",
    status: "78th percentile",
    color: "border-purple-200",
    features: ["Executive dashboards", "Benchmark comparison", "Trend analysis", "ROI tracking"]
  },
  {
    title: "QBR Reports",
    description: "Quarterly business reviews and executive reporting",
    icon: FileText,
    href: "/qbr",
    status: "Q1 2025 ready",
    color: "border-orange-200",
    features: ["Executive summaries", "Value realization", "Benchmark positioning", "Recommendations"]
  }
]

export default function TrustOSDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">BN Trust OS Radar</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          AI governance platform for communications - Foundation layer, methodology implementation, 
          and acquisition-ready operational maturity
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2">
            <Zap className="h-3 w-3" />
            v2025.01 - Trust OS v2
          </Badge>
          <Badge variant="outline" className="gap-2">
            <Award className="h-3 w-3" />
            78th Industry Percentile
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

      {/* Executive Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Executive Summary - Q1 2025
          </CardTitle>
          <CardDescription>
            Current performance and acquisition readiness status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Business Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AI Coverage:</span>
                  <span className="font-medium text-green-600">78% (target: 85%)</span>
                </div>
                <div className="flex justify-between">
                  <span>TTFA:</span>
                  <span className="font-medium text-green-600">4.2 days (target: ≤7d)</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Savings:</span>
                  <span className="font-medium text-blue-600">1,240 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className="font-medium text-purple-600">240%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Governance Maturity</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Foundation Status:</span>
                  <Badge variant="secondary" className="text-xs">AMBER</Badge>
                </div>
                <div className="flex justify-between">
                  <span>L1 Completion:</span>
                  <span className="font-medium">88% of users</span>
                </div>
                <div className="flex justify-between">
                  <span>Exception Rate:</span>
                  <span className="font-medium text-green-600">2.8% (target: &lt;3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Compliance Score:</span>
                  <span className="font-medium">96%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Market Position</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Industry Percentile:</span>
                  <span className="font-medium text-green-600">78th</span>
                </div>
                <div className="flex justify-between">
                  <span>vs Industry Avg:</span>
                  <span className="font-medium text-green-600">+16% AI coverage</span>
                </div>
                <div className="flex justify-between">
                  <span>vs Leaders:</span>
                  <span className="font-medium text-amber-600">-11% gap</span>
                </div>
                <div className="flex justify-between">
                  <span>Trend:</span>
                  <span className="font-medium text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Improving
                  </span>
                </div>
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
              <Activity className="h-5 w-5" />
              Start New Initiative
            </CardTitle>
            <CardDescription>
              Launch a new AI governance initiative
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/initiatives">
              <Button className="w-full">
                Create Initiative
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Generate QBR
            </CardTitle>
            <CardDescription>
              Create quarterly business review report
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/qbr">
              <Button variant="outline" className="w-full">
                Generate Report
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </CardTitle>
            <CardDescription>
              Access performance metrics and KPIs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/analytics">
              <Button variant="outline" className="w-full">
                Open Analytics
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}