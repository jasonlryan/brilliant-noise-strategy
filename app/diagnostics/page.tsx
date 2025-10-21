"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  ClipboardList,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

// Diagnostic questions aligned to literacy and readiness
const diagnosticQuestions = [
  {
    id: "q1",
    category: "Baseline Literacy",
    question: "How would you describe your organization's current AI literacy level?",
    options: [
      { value: "0", label: "Dark - No shared understanding or visibility", score: 0 },
      { value: "1", label: "Aware - Basic awareness, no structured approach", score: 1 },
      { value: "2", label: "Learning - Some training happening, patchy coverage", score: 2 },
      { value: "3", label: "Structured - Role-based curricula in place", score: 3 },
      { value: "4", label: "Embedded - Literacy integrated into workflows", score: 4 }
    ]
  },
  {
    id: "q2",
    category: "Governance Visibility",
    question: "Can your leadership team see AI usage and readiness across the organization?",
    options: [
      { value: "0", label: "No - Completely invisible, shadow AI prevalent", score: 0 },
      { value: "1", label: "Minimal - Anecdotal awareness only", score: 1 },
      { value: "2", label: "Partial - Some tracking in pockets", score: 2 },
      { value: "3", label: "Good - Centralized visibility with gaps", score: 3 },
      { value: "4", label: "Excellent - Real-time, comprehensive visibility", score: 4 }
    ]
  },
  {
    id: "q3",
    category: "Evidence & Compliance",
    question: "How prepared are you for EU AI Act Article 4 literacy obligations (Feb 2025)?",
    options: [
      { value: "0", label: "Unaware - Haven't started", score: 0 },
      { value: "1", label: "Researching - Understanding requirements", score: 1 },
      { value: "2", label: "Planning - Roadmap in development", score: 2 },
      { value: "3", label: "Implementing - Policies and evidence being captured", score: 3 },
      { value: "4", label: "Compliant - Full evidence trail and Board Pack ready", score: 4 }
    ]
  },
  {
    id: "q4",
    category: "Workflow Adoption",
    question: "How many AI-assisted workflows are governed with human-in-the-loop controls?",
    options: [
      { value: "0", label: "None - No governed workflows", score: 0 },
      { value: "1", label: "Pilot - 1 workflow being tested", score: 1 },
      { value: "2", label: "Early - 2-3 workflows with basic controls", score: 2 },
      { value: "3", label: "Scaling - 4-6 workflows with governance", score: 3 },
      { value: "4", label: "Mature - 7+ workflows, orchestrated system", score: 4 }
    ]
  },
  {
    id: "q5",
    category: "Leadership Readiness",
    question: "How confident are your executives in governing AI adoption?",
    options: [
      { value: "0", label: "Anxious - Fearful, avoiding decisions", score: 0 },
      { value: "1", label: "Uncertain - Aware but unclear on approach", score: 1 },
      { value: "2", label: "Cautious - Taking small steps", score: 2 },
      { value: "3", label: "Confident - Clear strategy and controls", score: 3 },
      { value: "4", label: "Leading - Competitive advantage through AI", score: 4 }
    ]
  },
  {
    id: "q6",
    category: "Practitioner Literacy",
    question: "What percentage of your team has completed AI literacy training (Level 1)?",
    options: [
      { value: "0", label: "0-20% - Minimal coverage", score: 0 },
      { value: "1", label: "21-40% - Early adoption", score: 1 },
      { value: "2", label: "41-60% - Good progress", score: 2 },
      { value: "3", label: "61-80% - Strong coverage", score: 3 },
      { value: "4", label: "81-100% - Organization-wide", score: 4 }
    ]
  },
  {
    id: "q7",
    category: "Technical Readiness",
    question: "Do you have technical controls for AI (PII redaction, audit trails, approvals)?",
    options: [
      { value: "0", label: "None - No technical controls", score: 0 },
      { value: "1", label: "Planning - Controls being designed", score: 1 },
      { value: "2", label: "Basic - Some controls in place", score: 2 },
      { value: "3", label: "Strong - Comprehensive controls implemented", score: 3 },
      { value: "4", label: "Advanced - Automated governance with telemetry", score: 4 }
    ]
  },
  {
    id: "q8",
    category: "Resource Access",
    question: "Can employees easily access role-appropriate AI learning resources?",
    options: [
      { value: "0", label: "No - No organized resources", score: 0 },
      { value: "1", label: "Limited - Resources exist but hard to find", score: 1 },
      { value: "2", label: "Available - Centralized library exists", score: 2 },
      { value: "3", label: "Curated - Role-segmented resources", score: 3 },
      { value: "4", label: "Intelligent - Adaptive, context-aware delivery", score: 4 }
    ]
  },
  {
    id: "q9",
    category: "Measurement & KPIs",
    question: "Can you measure the business impact of AI initiatives?",
    options: [
      { value: "0", label: "No - No measurement in place", score: 0 },
      { value: "1", label: "Anecdotal - Stories but no data", score: 1 },
      { value: "2", label: "Basic - Tracking some metrics", score: 2 },
      { value: "3", label: "Comprehensive - KPIs for all initiatives", score: 3 },
      { value: "4", label: "Predictive - ROI modeling and forecasting", score: 4 }
    ]
  },
  {
    id: "q10",
    category: "Change Readiness",
    question: "How does your organization respond to AI change initiatives?",
    options: [
      { value: "0", label: "Resistant - Active pushback", score: 0 },
      { value: "1", label: "Skeptical - Waiting to see proof", score: 1 },
      { value: "2", label: "Cautious - Willing with reassurance", score: 2 },
      { value: "3", label: "Engaged - Actively participating", score: 3 },
      { value: "4", label: "Leading - Driving innovation", score: 4 }
    ]
  }
]

export default function DiagnosticsPage() {
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  // Load existing diagnostic data on mount (Story #5: Edit capability)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('diagnosticData')
      if (stored) {
        try {
          const data = JSON.parse(stored)
          if (data.responses) {
            setResponses(data.responses)
            setIsComplete(true)
          }
        } catch (e) {
          // Invalid data, start fresh
          console.error('Failed to load diagnostic data:', e)
        }
      }
    }
  }, [])

  const handleResponseChange = (questionId: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleSubmit = () => {
    // Store responses in localStorage for now (Phase 1 simple persistence)
    const timestamp = new Date().toISOString()
    const diagnosticData = {
      responses,
      timestamp,
      score: calculateScore(),
      level: calculateLevel()
    }

    localStorage.setItem('diagnosticData', JSON.stringify(diagnosticData))

    // Capture TTFE (Time to First Evidence) on first submission only
    const existingTTFE = localStorage.getItem('ttfe')
    if (!existingTTFE) {
      localStorage.setItem('ttfe', JSON.stringify({
        timestamp,
        event: 'First diagnostic submission',
        daysFromStart: 0 // Can be calculated from project start date if needed
      }))
    }

    setIsComplete(true)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsComplete(false)
    setIsEditing(true)
  }

  const calculateScore = () => {
    let total = 0
    let count = 0

    Object.entries(responses).forEach(([questionId, value]) => {
      const question = diagnosticQuestions.find(q => q.id === questionId)
      const option = question?.options.find(o => o.value === value)
      if (option) {
        total += option.score
        count++
      }
    })

    return count > 0 ? Math.round((total / (count * 4)) * 100) : 0
  }

  const calculateLevel = () => {
    const score = calculateScore()
    if (score >= 80) return "Level 4 - Orchestrated"
    if (score >= 60) return "Level 3 - Learning System"
    if (score >= 40) return "Level 2 - Evidenced"
    if (score >= 20) return "Level 1 - Visible"
    return "Level 0 - Stuck"
  }

  const progress = (Object.keys(responses).length / diagnosticQuestions.length) * 100
  const allQuestionsAnswered = Object.keys(responses).length === diagnosticQuestions.length

  if (isComplete && !isEditing) {
    const score = calculateScore()
    const level = calculateLevel()

    return (
      <div className="space-y-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">Diagnostics Complete</CardTitle>
                  <CardDescription>Your baseline assessment is ready</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={handleEdit} className="gap-2">
                <ClipboardList className="h-4 w-4" />
                Edit Responses
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Your Literacy Baseline</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Overall Score:</span>
                    <Badge variant="secondary" className="text-lg px-4 py-1">
                      {score}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Maturity Level:</span>
                    <Badge variant="outline" className="text-sm">
                      {level}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Findings</h3>
                <div className="text-sm space-y-2 text-muted-foreground">
                  {score < 40 && (
                    <>
                      <p className="flex gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Focus on visibility: Make literacy and readiness observable across roles.</span>
                      </p>
                      <p className="flex gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Baseline is low. Priority: diagnostic → heatmap → first Board Pack.</span>
                      </p>
                    </>
                  )}
                  {score >= 40 && score < 60 && (
                    <>
                      <p className="flex gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Good foundation. Next: prove value with one governed workflow.</span>
                      </p>
                      <p className="flex gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Build evidence for your Board Pack with KPI deltas.</span>
                      </p>
                    </>
                  )}
                  {score >= 60 && (
                    <>
                      <p className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Strong readiness. Focus on scaling workflows and telemetry.</span>
                      </p>
                      <p className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>You're positioned for orchestrated intelligence.</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <h3 className="font-semibold">Next Steps</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/literacy-map">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">View Literacy Heatmap</CardTitle>
                      <CardDescription className="text-sm">
                        See your baseline reflected in the Audience × Domain grid
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2">
                        Open Heatmap
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/board-pack">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">Generate Board Pack</CardTitle>
                      <CardDescription className="text-sm">
                        Create Article 4 evidence with baseline and KPIs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full gap-2">
                        Generate Report
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/resources">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">Explore Resources</CardTitle>
                      <CardDescription className="text-sm">
                        Access role-based learning materials and curricula
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full gap-2">
                        Browse Resources
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">AI Literacy Diagnostics</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          {isEditing
            ? "Update your responses and resubmit to refresh your baseline"
            : "10 questions to establish your baseline literacy and readiness"
          }
        </p>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">Assessment Progress</CardTitle>
            <span className="text-sm text-muted-foreground">
              {Object.keys(responses).length} of {diagnosticQuestions.length} completed
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Questions */}
      <div className="space-y-4">
        {diagnosticQuestions.map((question, index) => (
          <Card key={question.id} className={responses[question.id] ? "border-green-200" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Question {index + 1}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {question.category}
                    </Badge>
                    {responses[question.id] && (
                      <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                    )}
                  </div>
                  <CardTitle className="text-lg mt-2">{question.question}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={responses[question.id]}
                onValueChange={(value) => handleResponseChange(question.id, value)}
              >
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                      <Label
                        htmlFor={`${question.id}-${option.value}`}
                        className="flex-1 cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit */}
      <Card className="sticky bottom-4 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {isEditing ? "Update your baseline?" : "Ready to see your baseline?"}
              </p>
              <p className="text-sm text-muted-foreground">
                {allQuestionsAnswered
                  ? isEditing
                    ? "All questions answered - submit to update your literacy baseline"
                    : "All questions answered - submit to see your literacy baseline"
                  : `${diagnosticQuestions.length - Object.keys(responses).length} questions remaining`
                }
              </p>
            </div>
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
              className="gap-2"
            >
              {isEditing ? "Update Assessment" : "Submit Assessment"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
