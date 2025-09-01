"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Target,
  Zap,
  Brain,
  Rocket,
  Star,
  Users,
  BarChart3,
  Shield,
  Award,
  Activity,
  BookOpen,
  Settings
} from "lucide-react"

// Transformation journey data
const transformationData = {
  current_stage: "automate",
  overall_progress: 35,
  automate_completion: 75,
  augment_completion: 25,
  transform_completion: 5,
  estimated_completion: "Q3 2025",
  roi_current: 240,
  roi_target: 400,
  time_saved_monthly: 1240
}

const transformationStages = [
  {
    id: "automate",
    name: "Automate",
    icon: Zap,
    description: "Streamline processes and eliminate repetitive tasks",
    progress: transformationData.automate_completion,
    status: "active",
    timeframe: "0-6 months",
    focus: "Efficiency & Productivity",
    outcomes: [
      "4.2 day average approval time (vs 6.8 industry)",
      "1,240 hours saved monthly across teams", 
      "240% ROI through automation",
      "78% reduction in manual compliance checks"
    ],
    nextActions: [
      "Complete EU AI Act compliance automation",
      "Implement automated risk monitoring",
      "Deploy crisis signal detection system"
    ]
  },
  {
    id: "augment", 
    name: "Augment",
    icon: Brain,
    description: "Enhance human expertise with AI-powered insights",
    progress: transformationData.augment_completion,
    status: "starting",
    timeframe: "6-18 months", 
    focus: "Intelligence & Insights",
    outcomes: [
      "Predictive risk modeling with 85% accuracy",
      "Real-time reputation sentiment analysis",
      "AI-powered strategic communications planning",
      "Enhanced decision-making with data insights"
    ],
    nextActions: [
      "Implement predictive analytics engine",
      "Deploy advanced sentiment monitoring",
      "Create AI strategy advisor tools"
    ]
  },
  {
    id: "transform",
    name: "Transform", 
    icon: Rocket,
    description: "Unlock new capabilities and competitive advantages",
    progress: transformationData.transform_completion,
    status: "planned",
    timeframe: "18+ months",
    focus: "Innovation & Leadership",
    outcomes: [
      "Industry-leading AI governance model",
      "Autonomous crisis response capabilities", 
      "AI-native strategic planning processes",
      "Market leadership in responsible AI adoption"
    ],
    nextActions: [
      "Design autonomous response systems",
      "Develop AI-native strategic frameworks",
      "Establish thought leadership platform"
    ]
  }
]

const stageMetrics = {
  automate: {
    efficiency_gain: "240%",
    time_saved: "1,240h/month",
    error_reduction: "78%",
    compliance_score: "92%"
  },
  augment: {
    prediction_accuracy: "85%",
    insight_depth: "3x deeper",
    decision_speed: "60% faster",
    strategic_impact: "High"
  },
  transform: {
    market_position: "Industry leader",
    innovation_rate: "5x faster",
    competitive_advantage: "Significant",
    future_readiness: "95%"
  }
}

const upcomingMilestones = [
  {
    title: "Complete Risk Automation",
    stage: "automate",
    dueDate: "Feb 15, 2025",
    progress: 85,
    priority: "high",
    description: "Finish automated risk detection and response systems"
  },
  {
    title: "Deploy Predictive Analytics",
    stage: "augment", 
    dueDate: "Apr 30, 2025",
    progress: 20,
    priority: "medium",
    description: "Launch predictive risk modeling capabilities"
  },
  {
    title: "Strategic AI Integration",
    stage: "augment",
    dueDate: "Jun 15, 2025", 
    progress: 5,
    priority: "medium",
    description: "Integrate AI insights into strategic planning"
  },
  {
    title: "Autonomous Response Beta",
    stage: "transform",
    dueDate: "Q4 2025",
    progress: 0,
    priority: "low",
    description: "Begin testing autonomous crisis response"
  }
]

const getStageColor = (stage: string, status: string) => {
  if (status === "active") return "border-blue-500 bg-blue-50"
  if (status === "starting") return "border-amber-500 bg-amber-50"
  if (status === "planned") return "border-gray-300 bg-gray-50"
  return "border-gray-200"
}

const getStageIcon = (stage: string, status: string) => {
  if (status === "active") return "text-blue-600"
  if (status === "starting") return "text-amber-600" 
  if (status === "planned") return "text-gray-500"
  return "text-gray-400"
}

export default function TransformationJourneyPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">Transformation Journey</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Guide your organization through the systematic progression: Automate → Augment → Transform
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Activity className="h-3 w-3" />
            Currently in AUTOMATE stage
          </Badge>
          <Badge variant="outline" className="gap-2 border-green-200 text-green-700">
            <Target className="h-3 w-3" />
            {transformationData.overall_progress}% Complete
          </Badge>
          <Badge variant="outline" className="gap-2 border-purple-200 text-purple-700">
            <Star className="h-3 w-3" />
            Est. completion: {transformationData.estimated_completion}
          </Badge>
        </div>
      </div>

      {/* Journey Progress Overview */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Transformation Progress Overview
          </CardTitle>
          <CardDescription>
            Your organization's journey through the three stages of AI transformation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-blue-600">{transformationData.automate_completion}%</div>
                <p className="text-sm font-medium">AUTOMATE Stage</p>
                <Progress value={transformationData.automate_completion} className="h-2" />
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-amber-600">{transformationData.augment_completion}%</div>
                <p className="text-sm font-medium">AUGMENT Stage</p>
                <Progress value={transformationData.augment_completion} className="h-2" />
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-gray-500">{transformationData.transform_completion}%</div>
                <p className="text-sm font-medium">TRANSFORM Stage</p>
                <Progress value={transformationData.transform_completion} className="h-2" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{transformationData.overall_progress}%</div>
              <p className="text-sm text-muted-foreground">Overall Transformation Progress</p>
              <Progress value={transformationData.overall_progress} className="h-3 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transformation Stages */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Transformation Stages</h2>
        <div className="space-y-6">
          {transformationStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <Card key={stage.id} className={`${getStageColor(stage.id, stage.status)} hover:shadow-md transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <Icon className={`h-8 w-8 ${getStageIcon(stage.id, stage.status)}`} />
                          <div>
                            <CardTitle className="text-2xl">{stage.name}</CardTitle>
                            <CardDescription className="text-base mt-1">
                              {stage.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge 
                            variant={stage.status === "active" ? "default" : stage.status === "starting" ? "secondary" : "outline"}
                            className="text-xs"
                          >
                            {stage.status.toUpperCase()}
                          </Badge>
                          <div className="text-sm text-muted-foreground">{stage.timeframe}</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-700">Business Outcomes Achieved:</h4>
                          <ul className="space-y-1 text-sm">
                            {stage.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-700">Next Actions:</h4>
                          <ul className="space-y-1 text-sm">
                            {stage.nextActions.map((action, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">Progress:</span>
                          <div className="flex items-center gap-2">
                            <Progress value={stage.progress} className="w-32 h-2" />
                            <span className="text-sm font-bold">{stage.progress}%</span>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Focus: {stage.focus}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Stage Metrics */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Performance Indicators by Stage</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                AUTOMATE Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Efficiency Gain:</span>
                <span className="font-bold text-blue-600">{stageMetrics.automate.efficiency_gain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Time Saved:</span>
                <span className="font-bold text-blue-600">{stageMetrics.automate.time_saved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Error Reduction:</span>
                <span className="font-bold text-blue-600">{stageMetrics.automate.error_reduction}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Compliance Score:</span>
                <span className="font-bold text-blue-600">{stageMetrics.automate.compliance_score}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-amber-600" />
                AUGMENT Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Prediction Accuracy:</span>
                <span className="font-bold text-amber-600">{stageMetrics.augment.prediction_accuracy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Insight Depth:</span>
                <span className="font-bold text-amber-600">{stageMetrics.augment.insight_depth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Decision Speed:</span>
                <span className="font-bold text-amber-600">{stageMetrics.augment.decision_speed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Strategic Impact:</span>
                <span className="font-bold text-amber-600">{stageMetrics.augment.strategic_impact}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-600" />
                TRANSFORM Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Market Position:</span>
                <span className="font-bold text-purple-600">{stageMetrics.transform.market_position}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Innovation Rate:</span>
                <span className="font-bold text-purple-600">{stageMetrics.transform.innovation_rate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Competitive Edge:</span>
                <span className="font-bold text-purple-600">{stageMetrics.transform.competitive_advantage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Future Readiness:</span>
                <span className="font-bold text-purple-600">{stageMetrics.transform.future_readiness}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Upcoming Milestones</h2>
        <div className="space-y-4">
          {upcomingMilestones.map((milestone, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      <Badge 
                        variant={milestone.priority === "high" ? "destructive" : milestone.priority === "medium" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {milestone.priority.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {milestone.stage.toUpperCase()}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {milestone.description}
                    </CardDescription>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Due: {milestone.dueDate}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={milestone.progress} className="w-24 h-2" />
                        <span className="text-sm font-medium">{milestone.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Customize Journey
            </CardTitle>
            <CardDescription>
              Tailor transformation stages to your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Customize Plan
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Expert Guidance
            </CardTitle>
            <CardDescription>
              Get strategic advice for your transformation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Book Session
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Progress Report
            </CardTitle>
            <CardDescription>
              Generate transformation progress summary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}