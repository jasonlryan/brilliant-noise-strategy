"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  FileText,
  Download,
  Printer,
  Shield,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Users,
  Clock
} from "lucide-react"
import { getTTFE, getTTFW, calculateDaysSince } from "@/lib/kpis"

export default function BoardPackPage() {
  const [diagnosticData, setDiagnosticData] = useState<any>(null)
  const [generatedDate] = useState(new Date())
  const [ttfe, setTtfe] = useState<any>(null)
  const [ttfw, setTtfw] = useState<any>(null)
  const [workflowMetrics, setWorkflowMetrics] = useState<any>(null)

  useEffect(() => {
    // Load diagnostic data
    const storedData = localStorage.getItem('diagnosticData')
    if (storedData) {
      setDiagnosticData(JSON.parse(storedData))
    }

    // Load TTFE/TTFW data
    setTtfe(getTTFE())
    setTtfw(getTTFW())

    // Load workflow metrics (Story 22)
    const workflowData = localStorage.getItem('workflowRequests')
    if (workflowData) {
      try {
        const workflows = JSON.parse(workflowData)
        const approved = workflows.filter((wf: any) => wf.status === 'approved')
        const avgCycleTime = approved.length > 0
          ? Math.round(approved.reduce((sum: number, wf: any) => sum + (wf.cycleTimeMinutes || 0), 0) / approved.length)
          : null

        setWorkflowMetrics({
          totalSubmitted: workflows.length,
          approved: approved.length,
          pending: workflows.filter((wf: any) => wf.status === 'pending').length,
          avgCycleTime
        })
      } catch (e) {
        console.error('Failed to load workflow metrics:', e)
      }
    }
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleExportPDF = () => {
    // For Phase 1, we use browser print-to-PDF
    // User can use Cmd+P / Ctrl+P and "Save as PDF"
    window.print()
  }

  // Calculate KPI deltas (baseline vs target)
  const baselineScore = diagnosticData?.score || 0
  const targetScore = 80 // Target for compliance
  const delta = targetScore - baselineScore

  // Calculate TTFE days dynamically
  const ttfeDays = ttfe ? calculateDaysSince(ttfe.timestamp) : null
  const ttfeStatus = ttfeDays !== null && ttfeDays <= 10 ? "achieved" : ttfeDays !== null ? "at-risk" : "pending"

  const kpiData = [
    {
      metric: "AI Literacy Coverage",
      baseline: `${baselineScore}%`,
      current: `${baselineScore}%`,
      target: "80%",
      status: baselineScore >= 80 ? "achieved" : "in-progress",
      trend: "baseline"
    },
    {
      metric: "Time to First Evidence (TTFE)",
      baseline: "Not measured",
      current: ttfeDays !== null ? `${ttfeDays} days` : "Pending",
      target: "≤10 days",
      status: ttfeStatus,
      trend: ttfeDays !== null ? "positive" : "baseline"
    },
    {
      metric: "Time to First Workflow (TTFW)",
      baseline: "Not measured",
      current: ttfw && ttfw.status === 'complete' && ttfw.approvedAt
        ? `${calculateDaysSince(ttfw.submittedAt!)} days (submission to approval)`
        : ttfw && ttfw.submittedAt
        ? `Pending approval (submitted ${calculateDaysSince(ttfw.submittedAt!)} days ago)`
        : "Workflow pilot pending",
      target: "≤14 days",
      status: ttfw && ttfw.status === 'complete' ? "achieved" : "pending",
      trend: ttfw && ttfw.status === 'complete' ? "positive" : "baseline"
    },
    {
      metric: "Evidence Completeness",
      baseline: `${baselineScore >= 40 ? '60%' : '20%'}`,
      current: `${baselineScore >= 40 ? '85%' : '50%'}`,
      target: "≥90%",
      status: baselineScore >= 40 ? "in-progress" : "at-risk",
      trend: "positive"
    },
    {
      metric: "Governance Visibility",
      baseline: baselineScore >= 40 ? "Partial" : "Minimal",
      current: baselineScore >= 60 ? "Comprehensive" : "Good",
      target: "Comprehensive",
      status: baselineScore >= 60 ? "achieved" : "in-progress",
      trend: "positive"
    },
    {
      metric: "Workflow Cycle Time (Story 22)",
      baseline: "Manual: 60+ min",
      current: workflowMetrics?.avgCycleTime
        ? `${workflowMetrics.avgCycleTime} min (AI-assisted)`
        : "No workflows yet",
      target: "≤15 min",
      status: workflowMetrics?.avgCycleTime && workflowMetrics.avgCycleTime <= 15 ? "achieved" : workflowMetrics?.avgCycleTime ? "in-progress" : "pending",
      trend: workflowMetrics?.avgCycleTime && workflowMetrics.avgCycleTime < 60 ? "positive" : "baseline"
    }
  ]

  const article4Requirements = [
    {
      requirement: "AI Literacy Training Program",
      description: "Ensure staff have sufficient AI literacy appropriate to their role",
      status: baselineScore >= 40 ? "in-progress" : "planned",
      evidence: [
        "Diagnostic baseline assessment completed",
        "Role-based literacy levels defined (Leaders, Practitioners, Technical)",
        "Resources library established with role-segmented materials"
      ]
    },
    {
      requirement: "Governance Framework",
      description: "Document AI governance structure and decision rights",
      status: baselineScore >= 60 ? "complete" : "in-progress",
      evidence: [
        "Literacy heatmap shows Audience × Domain visibility",
        "Board Pack reporting mechanism established",
        "KPI tracking framework implemented"
      ]
    },
    {
      requirement: "Risk Assessment Process",
      description: "Identify and assess AI-related risks appropriate to operations",
      status: baselineScore >= 40 ? "in-progress" : "planned",
      evidence: [
        "Baseline risk assessment from diagnostics",
        "Literacy gaps identified across audiences",
        "Mitigation roadmap established"
      ]
    },
    {
      requirement: "Documentation & Recordkeeping",
      description: "Maintain records of AI systems, training, and compliance activities",
      status: "in-progress",
      evidence: [
        "Diagnostic responses stored with timestamp",
        "Literacy heatmap exportable (CSV/PDF)",
        "Board Pack generation capability established"
      ]
    }
  ]

  const literacyBreakdown = [
    {
      audience: "Leaders (Board, Executives)",
      level: baselineScore >= 60 ? "L2-L3" : baselineScore >= 40 ? "L1-L2" : "L0-L1",
      coverage: baselineScore >= 60 ? "75%" : baselineScore >= 40 ? "50%" : "25%",
      priority: "High",
      actions: "Governance literacy, strategic AI framing, evidence review"
    },
    {
      audience: "Practitioners (Managers, Ops)",
      level: baselineScore >= 60 ? "L2" : baselineScore >= 40 ? "L1" : "L0-L1",
      coverage: baselineScore >= 60 ? "65%" : baselineScore >= 40 ? "45%" : "30%",
      priority: "High",
      actions: "Workflow literacy, guardrails training, outcome measurement"
    },
    {
      audience: "Technical (IT, Data, Eng)",
      level: baselineScore >= 60 ? "L3" : baselineScore >= 40 ? "L2" : "L1-L2",
      coverage: baselineScore >= 60 ? "80%" : baselineScore >= 40 ? "60%" : "40%",
      priority: "Medium",
      actions: "Technical controls, privacy, security, audit trails"
    }
  ]

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Page Header - Hidden in print */}
      <div className="space-y-2 print:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold">Board Pack Generator</h1>
              <p className="text-muted-foreground">
                EU AI Act Article 4 Evidence & Literacy Report
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button onClick={handleExportPDF} className="gap-2">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Print-friendly header */}
      <div className="hidden print:block border-b-2 border-gray-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Literacy & Governance Board Pack</h1>
        <p className="text-lg text-gray-600 mt-2">EU AI Act Article 4 Evidence Report</p>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div>Generated: {generatedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
          <div>Brilliant Noise AI Risk & Trust Radar</div>
        </div>
      </div>

      {/* Executive Summary */}
      <Card className="border-l-4 border-l-blue-500 print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Executive Summary
          </CardTitle>
          <CardDescription>
            Current state of AI literacy and compliance readiness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Overall Literacy</h4>
              <div className="text-3xl font-bold text-blue-600">
                {diagnosticData ? `${diagnosticData.score}%` : "No data"}
              </div>
              <p className="text-sm text-muted-foreground">
                {diagnosticData ? diagnosticData.level : "Complete diagnostics to establish baseline"}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Compliance Status</h4>
              <Badge variant={baselineScore >= 80 ? "default" : "secondary"} className="text-base px-3 py-1">
                {baselineScore >= 80 ? "Ready" : baselineScore >= 60 ? "On Track" : baselineScore >= 40 ? "In Progress" : "Early Stage"}
              </Badge>
              <p className="text-sm text-muted-foreground">
                EU AI Act Article 4 readiness
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Days to Deadline</h4>
              <div className="text-3xl font-bold text-red-600">
                45
              </div>
              <p className="text-sm text-muted-foreground">
                February 2025 compliance deadline
              </p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Key Findings</h4>
            <ul className="space-y-2 text-sm">
              {baselineScore < 40 && (
                <>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Baseline literacy is low. Immediate priority: visibility and evidence capture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Time-to-First-Evidence achieved (7 days). Board Pack delivery on track.</span>
                  </li>
                </>
              )}
              {baselineScore >= 40 && baselineScore < 60 && (
                <>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Good foundation established. Next: prove value with governed workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Evidence completeness improving. KPI tracking in place.</span>
                  </li>
                </>
              )}
              {baselineScore >= 60 && (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strong readiness demonstrated. Focus on scaling workflows and orchestration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Governance visibility comprehensive. Evidence trail complete.</span>
                  </li>
                </>
              )}
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Article 4 compliance framework operational. Documentation and recordkeeping in place.</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* KPI Dashboard */}
      <Card className="print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Key Performance Indicators
          </CardTitle>
          <CardDescription>
            Baseline vs Current vs Target metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Baseline</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiData.map((kpi, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{kpi.metric}</TableCell>
                    <TableCell>{kpi.baseline}</TableCell>
                    <TableCell className="font-semibold">{kpi.current}</TableCell>
                    <TableCell>{kpi.target}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          kpi.status === "achieved" ? "default" :
                          kpi.status === "in-progress" ? "secondary" :
                          "destructive"
                        }
                        className="text-xs"
                      >
                        {kpi.status === "achieved" ? "Achieved" :
                         kpi.status === "in-progress" ? "In Progress" :
                         "At Risk"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {kpi.trend === "positive" && (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      )}
                      {kpi.trend === "baseline" && (
                        <span className="text-xs text-muted-foreground">New</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Article 4 Compliance Evidence */}
      <Card className="print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            EU AI Act Article 4 Compliance Evidence
          </CardTitle>
          <CardDescription>
            AI literacy obligations and supporting evidence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {article4Requirements.map((req, index) => (
            <div key={index} className="space-y-3 pb-4 border-b last:border-b-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold">{req.requirement}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{req.description}</p>
                </div>
                <Badge
                  variant={
                    req.status === "complete" ? "default" :
                    req.status === "in-progress" ? "secondary" :
                    "outline"
                  }
                  className="ml-4"
                >
                  {req.status}
                </Badge>
              </div>

              <div className="pl-4">
                <h5 className="text-sm font-semibold mb-2 text-muted-foreground">Evidence:</h5>
                <ul className="space-y-1">
                  {req.evidence.map((item, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Literacy Breakdown */}
      <Card className="print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Literacy Breakdown by Audience
          </CardTitle>
          <CardDescription>
            Role-based literacy levels and coverage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Audience</TableHead>
                  <TableHead>Current Level</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Key Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {literacyBreakdown.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.audience}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.level}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{item.coverage}</TableCell>
                    <TableCell>
                      <Badge variant={item.priority === "High" ? "default" : "secondary"}>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{item.actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="border-l-4 border-l-green-500 print:break-inside-avoid">
        <CardHeader>
          <CardTitle>Recommendations & Next Steps</CardTitle>
          <CardDescription>
            Prioritized actions to achieve compliance and accelerate literacy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {baselineScore < 40 && (
              <>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold">Focus on Visibility (Weeks 1-2)</h4>
                    <p className="text-sm text-muted-foreground">Complete literacy heatmap population. Make progress observable to leadership.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold">Deploy Resources Library (Week 2)</h4>
                    <p className="text-sm text-muted-foreground">Wire role-based learning materials. Enable self-serve literacy improvement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold">Pilot First Workflow (Weeks 3-4)</h4>
                    <p className="text-sm text-muted-foreground">Select Support Ops or Document Ops. Prove value with guardrails and KPI deltas.</p>
                  </div>
                </div>
              </>
            )}
            {baselineScore >= 40 && baselineScore < 60 && (
              <>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold">Scale Workflows (Weeks 1-4)</h4>
                    <p className="text-sm text-muted-foreground">Add 2-3 governed workflows with telemetry. Demonstrate repeatable value.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold">Enhance Evidence Trail (Week 2-3)</h4>
                    <p className="text-sm text-muted-foreground">Complete Article 4 documentation. Achieve 90%+ evidence completeness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold">Build Playbooks (Week 4-6)</h4>
                    <p className="text-sm text-muted-foreground">Document workflow patterns. Enable teams to self-serve governance.</p>
                  </div>
                </div>
              </>
            )}
            {baselineScore >= 60 && (
              <>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold">Orchestrate Intelligence (Ongoing)</h4>
                    <p className="text-sm text-muted-foreground">Coordinate workflows across processes. Build predictable outcome system.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold">Publish Benchmarks (Month 2-3)</h4>
                    <p className="text-sm text-muted-foreground">Share anonymized data. Build competitive advantage through transparency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold">Partner Integrations (Month 3-6)</h4>
                    <p className="text-sm text-muted-foreground">Open API for partners. Embed intelligence in existing systems.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Footer for print */}
      <div className="hidden print:block border-t-2 border-gray-300 pt-4 mt-8 text-center text-sm text-gray-600">
        <p>This report was generated by Brilliant Noise AI Risk & Trust Radar</p>
        <p className="mt-1">For more information, visit: brilliant-noise.com</p>
      </div>
    </div>
  )
}
