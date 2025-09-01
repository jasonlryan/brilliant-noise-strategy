"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users,
  Calendar,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  Activity,
  BarChart3,
  FileText,
  Settings,
  MessageSquare,
  Award,
  AlertTriangle,
  RefreshCw
} from "lucide-react"

const operatingRhythms = [
  {
    frequency: "Weekly",
    meetings: [
      {
        name: "Product Council",
        time: "Tuesday, 10:00-11:00 AM",
        attendees: ["Product Lead", "Engineering Lead", "CS Lead", "Data Lead"],
        purpose: "Review adoption dashboard, prioritize blockers, make feature decisions",
        artifacts: ["Weekly adoption dashboard", "Blocker prioritization matrix", "Feature decision log"]
      },
      {
        name: "CS/GTM Sync", 
        time: "Thursday, 2:00-3:00 PM",
        attendees: ["Customer Success", "Sales", "Marketing", "Implementation"],
        purpose: "Review Play Cards, prepare QBRs, assess renewal risk",
        artifacts: ["Play Card deployment status", "QBR preparation checklist", "Renewal risk assessment"]
      }
    ]
  },
  {
    frequency: "Monthly",
    meetings: [
      {
        name: "Release Review",
        time: "Last Friday, 3:00-4:30 PM", 
        attendees: ["All team leads", "Select client stakeholders"],
        purpose: "Publish release notes, update documentation, gather feedback",
        artifacts: ["Monthly release notes", "Updated documentation links", "Feature adoption metrics"]
      }
    ]
  },
  {
    frequency: "Quarterly",
    meetings: [
      {
        name: "Strategy Review",
        time: "First week of each quarter",
        attendees: ["Leadership team", "Key advisors"],
        purpose: "Review benchmarks, assess roadmap, validate pricing, set OKRs",
        artifacts: ["Quarterly strategy deck", "Updated roadmap", "Pricing analysis", "OKR commitments"]
      }
    ]
  }
]

const teamStructure = [
  {
    category: "Product Council",
    roles: [
      { title: "Product Lead", responsibility: "Feature prioritization, roadmap ownership" },
      { title: "Engineering Lead", responsibility: "Technical feasibility, architecture decisions" },
      { title: "CS Lead", responsibility: "Client feedback synthesis, adoption insights" },
      { title: "Data Lead", responsibility: "Benchmark methodology, analytics strategy" }
    ]
  },
  {
    category: "Go-to-Market Team", 
    roles: [
      { title: "Sales Lead", responsibility: "Pipeline management, deal strategy" },
      { title: "Marketing Lead", responsibility: "Content strategy, demand generation" },
      { title: "Customer Success Manager", responsibility: "Client relationship, value realization" },
      { title: "Implementation Specialist", responsibility: "Onboarding, training delivery" }
    ]
  },
  {
    category: "Advisory Roles",
    roles: [
      { title: "Legal Counsel", responsibility: "IP strategy, contract review" },
      { title: "Compliance Expert", responsibility: "Regulatory interpretation, risk assessment" },
      { title: "Industry Advisor", responsibility: "Market trends, competitive intelligence" }
    ]
  }
]

const successMetrics = [
  {
    category: "Team Performance",
    metrics: [
      { name: "Feature Adoption Rate", target: "% of clients using new features within 30 days", current: "78%" },
      { name: "Technical Debt Ratio", target: "Engineering hours on maintenance vs. new features", current: "25:75" },
      { name: "Client Satisfaction", target: "Monthly NPS scores from active users", current: "NPS 42" }
    ]
  },
  {
    category: "Customer Success",
    metrics: [
      { name: "Implementation Speed", target: "Average time from contract to L1 deployment", current: "14 days" },
      { name: "Value Realization", target: "Client-reported ROI within first 6 months", current: "240%" },
      { name: "Renewal Rate", target: "Gross and net revenue retention by cohort", current: "95%" }
    ]
  },
  {
    category: "Business Performance", 
    metrics: [
      { name: "Monthly Recurring Revenue", target: "Growth rate and cohort analysis", current: "+15% MoM" },
      { name: "Market Position", target: "Benchmark participation rate and industry recognition", current: "78th percentile" },
      { name: "Team Efficiency", target: "Revenue per team member trending", current: "£180k/person" }
    ]
  }
]

const healthChecks = [
  {
    frequency: "Weekly",
    indicators: [
      "All critical systems operational (>99.5% uptime)",
      "Client escalations resolved within SLA", 
      "Team capacity utilization within optimal range (70-85%)"
    ]
  },
  {
    frequency: "Monthly",
    indicators: [
      "Financial performance vs. targets",
      "Team satisfaction and retention metrics",
      "Client health scores and renewal pipeline"
    ]
  },
  {
    frequency: "Quarterly",
    indicators: [
      "Market position vs. competitors", 
      "Product-market fit indicators",
      "Strategic goal progress assessment"
    ]
  }
]

const decisionLevels = [
  {
    level: "Level 1: Operational",
    decider: "Individual team leads",
    examples: "Daily prioritization, tactical execution, client communications",
    escalation: "To Product Council if cross-functional impact"
  },
  {
    level: "Level 2: Product", 
    decider: "Product Council consensus",
    examples: "Feature prioritization, technical architecture, client onboarding changes",
    escalation: "To Leadership if strategic implications"
  },
  {
    level: "Level 3: Strategic",
    decider: "Leadership team",
    examples: "Pricing changes, market positioning, partnership strategy", 
    escalation: "Strategy review minutes, decision rationale"
  }
]

export default function OperatingModelPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Operating Model</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Team structure, rhythms, and decision-making framework for Trust OS execution
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Calendar className="h-3 w-3" />
            Weekly/Monthly/Quarterly Cadence
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Users className="h-3 w-3" />
            12 Core Team Members
          </Badge>
        </div>
      </div>

      {/* Operating Cadence */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Operating Cadence</h2>
        {operatingRhythms.map((rhythm, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {rhythm.frequency} Rhythms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rhythm.meetings.map((meeting, meetingIndex) => (
                  <Card key={meetingIndex} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-lg">{meeting.name}</CardTitle>
                          <CardDescription>
                            {meeting.time} • {meeting.attendees.join(", ")}
                          </CardDescription>
                          <p className="text-sm">{meeting.purpose}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h5 className="font-medium mb-2">Key Artifacts:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {meeting.artifacts.map((artifact, artifactIndex) => (
                            <li key={artifactIndex} className="flex items-center gap-2">
                              <FileText className="h-3 w-3 text-green-500" />
                              {artifact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Structure */}
      <Tabs defaultValue="structure" className="space-y-4">
        <TabsList>
          <TabsTrigger value="structure">Team Structure</TabsTrigger>
          <TabsTrigger value="decisions">Decision Framework</TabsTrigger>
          <TabsTrigger value="metrics">Success Metrics</TabsTrigger>
          <TabsTrigger value="health">Health Checks</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-4">
          <div className="space-y-6">
            {teamStructure.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="p-4 border rounded-lg space-y-2">
                        <h5 className="font-semibold">{role.title}</h5>
                        <p className="text-sm text-muted-foreground">{role.responsibility}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="decisions" className="space-y-4">
          <div className="space-y-4">
            {decisionLevels.map((level, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{level.level}</CardTitle>
                  <CardDescription>Decided by: {level.decider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Examples:</span>
                      <p className="text-sm text-muted-foreground">{level.examples}</p>
                    </div>
                    <div>
                      <span className="font-medium">Escalation:</span>
                      <p className="text-sm text-muted-foreground">{level.escalation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="space-y-6">
            {successMetrics.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="space-y-1">
                          <h5 className="font-medium">{metric.name}</h5>
                          <p className="text-sm text-muted-foreground">{metric.target}</p>
                        </div>
                        <Badge variant="outline" className="font-medium">
                          {metric.current}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <div className="space-y-4">
            {healthChecks.map((check, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    {check.frequency} Health Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {check.indicators.map((indicator, indicatorIndex) => (
                      <li key={indicatorIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {indicator}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Communication Protocols */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Communication Protocols
          </CardTitle>
          <CardDescription>
            Internal and external communication standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Internal Channels</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">#trust-os-general</h5>
                  <p className="text-sm text-muted-foreground">Team announcements, general discussion</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">#product-council</h5>
                  <p className="text-sm text-muted-foreground">Product decisions, feature discussions</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">#client-success</h5>
                  <p className="text-sm text-muted-foreground">Customer feedback, implementation issues</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">#releases</h5>
                  <p className="text-sm text-muted-foreground">Release coordination, deployment updates</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">External Communication</h4>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Client Regular</h5>
                  <p className="text-sm text-muted-foreground">Weekly implementation check-ins via Slack</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Client Formal</h5>
                  <p className="text-sm text-muted-foreground">Monthly QBRs with executive alignment</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Market Content</h5>
                  <p className="text-sm text-muted-foreground">Monthly blog posts on governance best practices</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h5 className="font-medium">Research Publishing</h5>
                  <p className="text-sm text-muted-foreground">Annual "State of AI Governance" report</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}