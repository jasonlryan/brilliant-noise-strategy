"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen,
  TrendingUp,
  Target,
  CheckCircle,
  Clock,
  Award,
  Users,
  Shield,
  Search,
  BarChart3,
  Settings,
  Play,
  ArrowRight,
  Brain,
  Lightbulb,
  Zap
} from "lucide-react"

const literacyLevels = [
  {
    level: "L0: AI Unaware",
    description: "Limited or no experience with AI-assisted communications tools",
    prevalence: "35-40% of communications professionals",
    characteristics: [
      "Unaware of AI governance risks and opportunities",
      "No structured approach to AI tool evaluation", 
      "Reactive rather than proactive risk management",
      "Limited understanding of regulatory implications"
    ],
    duration: "Starting point",
    color: "border-gray-300"
  },
  {
    level: "L1: AI Competent", 
    description: "Basic competency in AI governance fundamentals with structured tool usage",
    prevalence: "Current team: 88% completion rate",
    characteristics: [
      "Responsible prompting and bias recognition",
      "PII & IP protection basics",
      "Governance 101 processes",
      "Audit trail and evidence collection"
    ],
    duration: "4-6 weeks structured learning",
    color: "border-green-500"
  },
  {
    level: "L2: AI Strategic",
    description: "Advanced governance capabilities with cross-functional AI strategy",
    prevalence: "Target: 60% of team by Q2 2025",
    characteristics: [
      "Advanced risk assessment and mitigation",
      "Cross-functional AI initiative leadership",
      "Strategic business case development",
      "Regulatory compliance management"
    ],
    duration: "8-12 weeks advanced training",
    color: "border-blue-500"
  },
  {
    level: "L3: AI Tool-Maker",
    description: "Expert-level capability to create and customize AI governance tools",
    prevalence: "Target: 20% of team (senior roles)",
    characteristics: [
      "Custom AI model development",
      "Governance framework design", 
      "Industry thought leadership",
      "Innovation and R&D capabilities"
    ],
    duration: "6+ months specialized development",
    color: "border-purple-500"
  }
]

const playCardTiles = [
  {
    tile: "Discovery",
    description: "AI-powered research, trend analysis, and opportunity identification",
    l1_capabilities: ["Research automation", "Trend detection", "Opportunity mapping"],
    l2_capabilities: ["Discovery bots", "Advanced analytics", "Predictive insights"],
    l3_capabilities: ["Custom discovery models", "Strategic forecasting", "Innovation labs"]
  },
  {
    tile: "Analysis", 
    description: "Data processing, sentiment analysis, and performance measurement",
    l1_capabilities: ["Basic sentiment analysis", "Performance tracking", "Report generation"],
    l2_capabilities: ["Advanced analytics", "Predictive modeling", "Automated insights"],
    l3_capabilities: ["Custom analytics models", "AI-driven recommendations", "Real-time optimization"]
  },
  {
    tile: "Creation",
    description: "Content generation, campaign development, and creative automation",
    l1_capabilities: ["Content assistance", "Template generation", "Basic automation"],
    l2_capabilities: ["Advanced content AI", "Campaign optimization", "Creative workflows"],
    l3_capabilities: ["Custom creation tools", "Brand-specific models", "Creative AI development"]
  },
  {
    tile: "Governance",
    description: "Risk assessment, compliance monitoring, and approval workflows", 
    l1_capabilities: ["Basic approval workflows", "Risk checklists", "Compliance tracking"],
    l2_capabilities: ["Automated risk assessment", "Smart approvals", "Exception management"],
    l3_capabilities: ["Custom governance frameworks", "Intelligent risk models", "Adaptive compliance"]
  },
  {
    tile: "Measurement",
    description: "Performance tracking, ROI calculation, and success optimization",
    l1_capabilities: ["Basic KPI tracking", "ROI reporting", "Performance dashboards"],
    l2_capabilities: ["Advanced attribution", "Predictive ROI", "Optimization recommendations"],
    l3_capabilities: ["Custom measurement models", "AI-driven optimization", "Strategic insights"]
  }
]

const sprintFramework = {
  duration: "12 weeks",
  structure: [
    { week: "Weeks 1-2", focus: "Foundation & Assessment", activities: "Baseline literacy assessment, tool audit, risk mapping" },
    { week: "Weeks 3-6", focus: "Core Learning", activities: "L1 competency development, supervised practice, tool selection" },
    { week: "Weeks 7-10", focus: "Applied Practice", activities: "Live project implementation, governance application, peer collaboration" },
    { week: "Weeks 11-12", focus: "Validation & Planning", activities: "Competency validation, scorecard completion, next level planning" }
  ]
}

export default function MethodologyPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Methodology Framework</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Literacy Ladder and Play Cards: A structured approach to AI governance mastery
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <TrendingUp className="h-3 w-3" />
            L0 → L3 Progression
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Award className="h-3 w-3" />
            88% L1 Completion Rate
          </Badge>
        </div>
      </div>

      {/* Core Principle */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Core Methodology Principle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <p className="text-lg font-medium">
              Literacy unlocks capability → Capability enables governance → Governance delivers value
            </p>
            <p className="text-sm text-muted-foreground">
              Progressive competency development through measurable learning objectives and practical application
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Literacy Ladder */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Literacy Ladder: L0 → L3 Progression</h2>
        <div className="space-y-6">
          {literacyLevels.map((level, index) => (
            <Card key={index} className={`${level.color} border-l-4`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                    <CardDescription className="text-base">
                      {level.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="outline">{level.prevalence}</Badge>
                      <span className="text-muted-foreground">Duration: {level.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h5 className="font-medium mb-2">Key Characteristics:</h5>
                  <ul className="space-y-1 text-sm">
                    {level.characteristics.map((characteristic, charIndex) => (
                      <li key={charIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {characteristic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 12-Week Sprint Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            12-Week Sprint Framework
          </CardTitle>
          <CardDescription>
            Structured progression from L0 → L1 with Personal AI Scorecard validation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {sprintFramework.duration} Total Duration
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {sprintFramework.structure.map((phase, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">{phase.week}</CardTitle>
                    <CardDescription className="font-medium">{phase.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.activities}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Play Cards Grid */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Play Cards Overview</TabsTrigger>
          <TabsTrigger value="progression">Capability Progression</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Heat Map Tiles → Play Cards</h3>
            <div className="grid gap-4">
              {playCardTiles.map((tile, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Play className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-xl">{tile.tile}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {tile.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-green-600">L1 Capabilities</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {tile.l1_capabilities.map((cap, capIndex) => (
                            <li key={capIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-blue-600">L2 Capabilities</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {tile.l2_capabilities.map((cap, capIndex) => (
                            <li key={capIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-purple-600">L3 Capabilities</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {tile.l3_capabilities.map((cap, capIndex) => (
                            <li key={capIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-500" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progression" className="space-y-4">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  L1 Assessment Criteria
                </CardTitle>
                <CardDescription>
                  Personal AI Scorecard requirements for L1 completion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-medium">Competency Requirements</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Minimum 70% score across all areas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Practical demonstration of governance processes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Successful completion of 3 supervised initiatives
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Peer validation from team lead or manager
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium">Learning Modules</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-blue-500" />
                        Responsible Prompting (Foundation)
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-amber-500" />
                        PII & IP Basics (Protection)
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-green-500" />
                        Governance 101 (Process)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Progression Metrics
                </CardTitle>
                <CardDescription>
                  Current team literacy distribution and targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-gray-600">5%</div>
                    <p className="text-sm font-medium">L0: Unaware</p>
                    <Progress value={5} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-green-600">88%</div>
                    <p className="text-sm font-medium">L1: Competent</p>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-blue-600">30%</div>
                    <p className="text-sm font-medium">L2: Strategic</p>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <p className="text-sm font-medium">L3: Tool-Maker</p>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Implementation Success Factors */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Success Enablers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Structured 12-week sprints
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Personal AI Scorecard system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Peer-to-peer learning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Live project application
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Management support and validation
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Key Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                Measurable competency progression
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                Standardized governance processes
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                Risk-aware AI adoption
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                Cross-functional collaboration
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                Continuous improvement culture
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Team L1 Completion:</span>
                <span className="font-bold text-green-600">88%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Active Sprint Cohorts:</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Average Completion Time:</span>
                <span className="font-bold">11.2 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Scorecard Average:</span>
                <span className="font-bold text-blue-600">76%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Next Cohort Start:</span>
                <span className="font-bold">March 1, 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}