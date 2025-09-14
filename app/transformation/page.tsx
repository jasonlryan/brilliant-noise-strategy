"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp,
  CheckCircle,
  Target,
  Brain,
  BookOpen,
  Award,
  Play,
  ArrowRight,
  Settings,
  Calendar
} from "lucide-react"

// Literacy Ladder data from methodology docs
const literacyLevels = [
  {
    level: "L0",
    name: "AI Unaware", 
    description: "Limited or no experience with AI-assisted communications tools",
    prevalence: "35-40% of communications professionals (industry benchmark)",
    duration: "Starting point for ladder progression",
    color: "border-gray-400",
    characteristics: [
      "Unaware of AI governance risks and opportunities",
      "No structured approach to AI tool evaluation",
      "Reactive rather than proactive risk management",
      "Limited understanding of regulatory implications"
    ],
    nextStep: "Begin 12-week L1 sprint"
  },
  {
    level: "L1", 
    name: "AI Competent",
    description: "Basic competency in AI governance fundamentals with structured tool usage",
    prevalence: "85% success rate from participants",
    duration: "12-week sprint (20-25 hours total)",
    color: "border-green-500",
    characteristics: [
      "Responsible prompting and bias recognition",
      "PII & IP protection basics", 
      "Governance 101 processes",
      "Audit trail and evidence collection"
    ],
    nextStep: "Advance to L2 advanced level"
  },
  {
    level: "L2",
    name: "AI Advanced", 
    description: "Advanced practitioner capable of optimizing processes and training others",
    prevalence: "65% success rate from L1 graduates",
    duration: "6-month development period",
    color: "border-blue-500", 
    characteristics: [
      "Process optimization and custom workflow design",
      "Team leadership and mentoring capabilities",
      "Tool integration and governance customization",
      "Advanced Play Card implementation"
    ],
    nextStep: "Consider L3 tool-maker program"
  },
  {
    level: "L3",
    name: "AI Tool-Maker",
    description: "Expert-level capability to create and customize AI governance tools", 
    prevalence: "30% success rate from L2 graduates", 
    duration: "12-month development period",
    color: "border-purple-500",
    characteristics: [
      "Custom solution development and AI model training",
      "Industry leadership and strategic advisory",
      "Advanced automation and regulatory innovation", 
      "Organizational transformation and mentoring"
    ],
    nextStep: "Industry leadership and innovation"
  }
]

// 12-week sprint framework from docs
const sprintFramework = [
  {
    weeks: "Weeks 1-2",
    phase: "Foundation & Assessment", 
    focus: "Baseline literacy assessment, tool audit, risk mapping",
    activities: [
      "Complete Personal AI Scorecard baseline",
      "Audit current AI tool usage across team",
      "Map existing governance processes and gaps",
      "Set individual learning objectives"
    ]
  },
  {
    weeks: "Weeks 3-6", 
    phase: "Core Learning",
    focus: "L1 competency development, supervised practice, tool selection",
    activities: [
      "Master responsible prompting techniques",
      "Learn PII & IP protection protocols", 
      "Practice governance workflow processes",
      "Apply learning to real initiatives"
    ]
  },
  {
    weeks: "Weeks 7-10",
    phase: "Applied Practice",
    focus: "Live project implementation, governance application, peer collaboration",
    activities: [
      "Lead supervised governance initiatives",
      "Implement learned processes on live projects",
      "Collaborate with peers on complex cases",
      "Document lessons learned and improvements"
    ]
  },
  {
    weeks: "Weeks 11-12",
    phase: "Validation & Planning", 
    focus: "Competency validation, scorecard completion, next level planning",
    activities: [
      "Complete final Personal AI Scorecard assessment",
      "Demonstrate competency to team lead/manager",
      "Plan progression to next literacy level",
      "Share learnings with organization"
    ]
  }
]


// L1 Assessment requirements from docs
const l1Requirements = [
  {
    area: "Responsible Prompting",
    description: "Prompt engineering basics and bias recognition",
    skills: ["Understand prompt engineering basics", "Recognize bias potential", "Implement fact-checking protocols", "Apply brand voice consistency"]
  },
  {
    area: "PII & IP Basics",
    description: "Personal data and intellectual property protection", 
    skills: ["Identify PII in content", "Understand IP risks", "Implement data masking", "Apply confidentiality principles"]
  },
  {
    area: "Governance 101", 
    description: "Basic approval workflows and documentation",
    skills: ["Understand approval workflows", "Recognize escalation triggers", "Implement audit trails", "Apply exception reporting"]
  }
]

export default function TransformationPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-foreground">AI Literacy Transformation</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Guide your team through L0 → L1 → L2 → L3 literacy progression with structured 12-week sprints
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="gap-2 border-blue-200 text-blue-700">
            <Calendar className="h-3 w-3" />
            12-Week Sprint Framework
          </Badge>
        </div>
      </div>

      {/* Core Principle */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Methodology Principle
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


      {/* Literacy Levels Detail */}
      <Tabs defaultValue="ladder" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ladder">Literacy Ladder</TabsTrigger>
          <TabsTrigger value="sprint">12-Week Sprint</TabsTrigger>
          <TabsTrigger value="assessment">L1 Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="ladder" className="space-y-4">
          <div className="space-y-6">
            {literacyLevels.map((level, index) => (
              <Card key={index} className={`${level.color} border-l-4`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{level.level}: {level.name}</CardTitle>
                      <CardDescription className="text-base">
                        {level.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline">{level.prevalence}</Badge>
                        <span className="text-muted-foreground">Duration: {level.duration}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {level.nextStep}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
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
        </TabsContent>

        <TabsContent value="sprint" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                12-Week Sprint Structure
              </CardTitle>
              <CardDescription>
                Structured progression framework with 2-3 hours/week commitment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <p className="text-sm font-medium">Weeks Duration</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2-3</div>
                    <p className="text-sm font-medium">Hours per Week</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {sprintFramework.map((phase, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="text-lg">{phase.weeks}: {phase.phase}</CardTitle>
                        <CardDescription>{phase.focus}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-center gap-2">
                              <Target className="h-3 w-3 text-blue-500" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                L1 Personal AI Scorecard Requirements
              </CardTitle>
              <CardDescription>
                Minimum 70% score across all competency areas for L1 certification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {l1Requirements.map((requirement, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{requirement.area}</CardTitle>
                      <CardDescription>{requirement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {requirement.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="mt-6 p-4 border border-amber-500 rounded-lg bg-amber-50">
                  <h5 className="font-semibold text-amber-700 mb-2">L1 Certification Requirements</h5>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• Minimum 70% score across all competency areas</li>
                    <li>• Practical demonstration of governance processes</li>
                    <li>• Successful completion of 3 supervised initiatives</li>
                    <li>• Peer validation from team lead or manager</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>


      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Take Literacy Assessment
            </CardTitle>
            <CardDescription>
              Complete Personal AI Scorecard to determine current level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Start Assessment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              View Play Cards
            </CardTitle>
            <CardDescription>
              Access methodology and implementation cards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Open Play Cards
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Sprint Management
            </CardTitle>
            <CardDescription>
              Manage sprint cohorts and progression tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Manage Sprints
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}