"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Workflow,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  AlertCircle,
  TrendingUp,
  User,
  FileText,
  Eye
} from "lucide-react"
import Link from "next/link"

// Workflow types
const workflowTypes = [
  {
    id: "support-response",
    label: "Support Response",
    description: "AI-assisted customer support reply with PII redaction",
    icon: "💬"
  },
  {
    id: "document-ops",
    label: "Document Operations",
    description: "Document summarization or transformation",
    icon: "📄"
  }
]

// Workflow request interface
interface WorkflowRequest {
  id: string
  type: string
  submittedBy: string
  submittedAt: string
  customerQuery?: string
  documentInput?: string
  aiDraft: string
  status: "pending" | "approved" | "rejected"
  approvedBy?: string
  approvedAt?: string
  rejectionReason?: string
  auditTrail: AuditEntry[]
  cycleTimeMinutes?: number
}

interface AuditEntry {
  timestamp: string
  action: string
  user: string
  details: string
}

// Simulate AI response generation (Story 19)
function generateAIDraft(type: string, input: string): string {
  if (type === "support-response") {
    return `Dear Customer,

Thank you for reaching out regarding your query: "${input.substring(0, 50)}..."

Based on our records and best practices, here is our recommended response:

[AI-Generated Response]
We understand your concern and have reviewed your account. The issue you've described typically occurs when [common scenario]. To resolve this, we recommend the following steps:

1. Verify your account settings in the dashboard
2. Clear your browser cache and cookies
3. If the issue persists, contact our technical support team

We apologize for any inconvenience this may have caused. Our team is committed to resolving this promptly.

Best regards,
Support Team

---
⚠️ AI-Generated Draft - Requires Human Approval
📋 PII Redaction Applied: Email addresses, phone numbers masked`
  } else {
    return `Document Summary:

Input: "${input.substring(0, 50)}..."

[AI-Generated Summary]
This document discusses key aspects of the topic, highlighting several important points:

• Main themes and concepts
• Key recommendations
• Action items and next steps

The content has been reviewed for accuracy and compliance with internal guidelines.

---
⚠️ AI-Generated Draft - Requires Human Approval
📋 PII Redaction Applied: Names, addresses masked`
  }
}

// Apply basic PII redaction (Story 21)
function applyPIIRedaction(text: string): string {
  let redacted = text

  // Email pattern
  redacted = redacted.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, "[EMAIL_REDACTED]")

  // Phone pattern (various formats)
  redacted = redacted.replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, "[PHONE_REDACTED]")
  redacted = redacted.replace(/\b\+\d{1,3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g, "[PHONE_REDACTED]")

  // Credit card pattern (basic)
  redacted = redacted.replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, "[CARD_REDACTED]")

  // SSN pattern
  redacted = redacted.replace(/\b\d{3}-\d{2}-\d{4}\b/g, "[SSN_REDACTED]")

  // Name patterns (common titles + capitalized words)
  // Matches: Mr./Mrs./Ms./Dr. + Name, or standalone capitalized full names
  redacted = redacted.replace(/\b(Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.)\s+[A-Z][a-z]+(\s+[A-Z][a-z]+)*\b/g, "[NAME_REDACTED]")
  redacted = redacted.replace(/\b[A-Z][a-z]+\s+[A-Z][a-z]+\b/g, (match) => {
    // Preserve common words (days, months, etc.) but redact likely names
    const commonWords = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
                         'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                         'September', 'October', 'November', 'December', 'United States', 'New York',
                         'Customer Support', 'Technical Team', 'Support Team', 'Best Regards']
    return commonWords.includes(match) ? match : "[NAME_REDACTED]"
  })

  // Address patterns (street numbers + street names, city/state/zip)
  redacted = redacted.replace(/\b\d{1,5}\s+[A-Z][a-z]+(\s+[A-Z][a-z]+)*\s+(Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct)\b/gi, "[ADDRESS_REDACTED]")
  redacted = redacted.replace(/\b[A-Z][a-z]+,\s*[A-Z]{2}\s+\d{5}(-\d{4})?\b/g, "[ADDRESS_REDACTED]")

  return redacted
}

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<WorkflowRequest[]>([])
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowRequest | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // New submission form state
  const [workflowType, setWorkflowType] = useState<string>("support-response")
  const [customerQuery, setCustomerQuery] = useState<string>("")
  const [documentInput, setDocumentInput] = useState<string>("")

  // Approval form state
  const [rejectionReason, setRejectionReason] = useState<string>("")

  useEffect(() => {
    // Load workflows from localStorage
    const stored = localStorage.getItem('workflowRequests')
    if (stored) {
      try {
        setWorkflows(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to load workflows:', e)
      }
    }
  }, [])

  const saveWorkflows = (updatedWorkflows: WorkflowRequest[]) => {
    localStorage.setItem('workflowRequests', JSON.stringify(updatedWorkflows))
    setWorkflows(updatedWorkflows)
  }

  const handleSubmitWorkflow = () => {
    setIsSubmitting(true)

    const input = workflowType === "support-response" ? customerQuery : documentInput
    const rawDraft = generateAIDraft(workflowType, input)
    const redactedDraft = applyPIIRedaction(rawDraft)

    const newWorkflow: WorkflowRequest = {
      id: `wf-${Date.now()}`,
      type: workflowType,
      submittedBy: "Current User", // In real app, get from auth
      submittedAt: new Date().toISOString(),
      customerQuery: workflowType === "support-response" ? customerQuery : undefined,
      documentInput: workflowType === "document-ops" ? documentInput : undefined,
      aiDraft: redactedDraft,
      status: "pending",
      auditTrail: [
        {
          timestamp: new Date().toISOString(),
          action: "SUBMITTED",
          user: "Current User",
          details: `Workflow ${workflowType} submitted for approval`
        }
      ]
    }

    const updated = [newWorkflow, ...workflows]
    saveWorkflows(updated)

    // Update TTFW if this is the first workflow (Story 28)
    const existingTTFW = localStorage.getItem('ttfw')
    if (!existingTTFW) {
      // First workflow submission - capture submittedAt timestamp
      localStorage.setItem('ttfw', JSON.stringify({
        submittedAt: new Date().toISOString(),
        approvedAt: null,
        workflowType: workflowType,
        user: "Current User",
        status: 'pending'
      }))
    }

    // Reset form
    setCustomerQuery("")
    setDocumentInput("")
    setIsSubmitting(false)
    setSelectedWorkflow(newWorkflow)
  }

  const handleApprove = (workflowId: string) => {
    const updated = workflows.map(wf => {
      if (wf.id === workflowId) {
        const approvedAt = new Date().toISOString()
        const submittedAt = new Date(wf.submittedAt)
        const cycleTime = Math.round((new Date(approvedAt).getTime() - submittedAt.getTime()) / 60000)

        return {
          ...wf,
          status: "approved" as const,
          approvedBy: "Manager User",
          approvedAt,
          cycleTimeMinutes: cycleTime,
          auditTrail: [
            ...wf.auditTrail,
            {
              timestamp: approvedAt,
              action: "APPROVED",
              user: "Manager User",
              details: "Workflow approved for execution"
            }
          ]
        }
      }
      return wf
    })

    saveWorkflows(updated)

    // Update TTFW to complete if this is first approval (Story 28)
    const ttfwData = localStorage.getItem('ttfw')
    if (ttfwData) {
      const ttfw = JSON.parse(ttfwData)
      if (ttfw.status === 'pending') {
        // First approval - capture approvedAt timestamp
        localStorage.setItem('ttfw', JSON.stringify({
          ...ttfw,
          approvedAt: new Date().toISOString(),
          status: 'complete'
        }))
      }
    }

    setSelectedWorkflow(updated.find(wf => wf.id === workflowId) || null)
  }

  const handleReject = (workflowId: string) => {
    const updated = workflows.map(wf => {
      if (wf.id === workflowId) {
        const rejectedAt = new Date().toISOString()
        return {
          ...wf,
          status: "rejected" as const,
          approvedBy: "Manager User",
          approvedAt: rejectedAt,
          rejectionReason,
          auditTrail: [
            ...wf.auditTrail,
            {
              timestamp: rejectedAt,
              action: "REJECTED",
              user: "Manager User",
              details: `Rejected: ${rejectionReason}`
            }
          ]
        }
      }
      return wf
    })

    saveWorkflows(updated)
    setSelectedWorkflow(updated.find(wf => wf.id === workflowId) || null)
    setRejectionReason("")
  }

  const pendingCount = workflows.filter(wf => wf.status === "pending").length
  const approvedCount = workflows.filter(wf => wf.status === "approved").length
  const avgCycleTime = workflows.filter(wf => wf.cycleTimeMinutes).length > 0
    ? Math.round(workflows.filter(wf => wf.cycleTimeMinutes).reduce((sum, wf) => sum + (wf.cycleTimeMinutes || 0), 0) / workflows.filter(wf => wf.cycleTimeMinutes).length)
    : 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Workflow className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Guarded Workflows</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          AI-assisted workflows with human-in-the-loop approval and PII redaction
        </p>
      </div>

      {/* KPI Summary */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
            <p className="text-xs text-muted-foreground">Successfully executed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Avg Cycle Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {avgCycleTime > 0 ? `${avgCycleTime}m` : "—"}
            </div>
            <p className="text-xs text-muted-foreground">Submission to approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">PII Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Active</span>
            </div>
            <p className="text-xs text-muted-foreground">Auto-redaction enabled</p>
          </CardContent>
        </Card>
      </div>

      {/* Submit New Workflow */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Submit New Workflow
          </CardTitle>
          <CardDescription>
            AI will generate a draft response with PII redaction applied. All submissions require human approval.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workflow-type">Workflow Type</Label>
            <Select value={workflowType} onValueChange={setWorkflowType}>
              <SelectTrigger id="workflow-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {workflowTypes.map(type => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.icon} {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {workflowTypes.find(t => t.id === workflowType)?.description}
            </p>
          </div>

          {workflowType === "support-response" && (
            <div className="space-y-2">
              <Label htmlFor="customer-query">Customer Query</Label>
              <Textarea
                id="customer-query"
                placeholder="Paste the customer's support request here..."
                value={customerQuery}
                onChange={(e) => setCustomerQuery(e.target.value)}
                rows={4}
              />
            </div>
          )}

          {workflowType === "document-ops" && (
            <div className="space-y-2">
              <Label htmlFor="document-input">Document Content</Label>
              <Textarea
                id="document-input"
                placeholder="Paste the document content to summarize or transform..."
                value={documentInput}
                onChange={(e) => setDocumentInput(e.target.value)}
                rows={4}
              />
            </div>
          )}

          <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <div className="text-sm text-amber-900">
              <strong>Governance Note:</strong> AI draft will be generated with automatic PII redaction.
              A manager must approve before execution.
            </div>
          </div>

          <Button
            onClick={handleSubmitWorkflow}
            disabled={isSubmitting || (workflowType === "support-response" ? !customerQuery : !documentInput)}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            Submit for Approval
          </Button>
        </CardContent>
      </Card>

      {/* Workflow Queue */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Queue</CardTitle>
          <CardDescription>
            Review pending workflows and approve/reject AI-generated drafts
          </CardDescription>
        </CardHeader>
        <CardContent>
          {workflows.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Workflow className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No workflows submitted yet</p>
              <p className="text-sm mt-1">Submit your first workflow above to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {workflows.map(workflow => (
                <Card
                  key={workflow.id}
                  className={`cursor-pointer transition-shadow hover:shadow-md ${
                    workflow.status === "pending" ? "border-amber-200" :
                    workflow.status === "approved" ? "border-green-200" :
                    "border-red-200"
                  }`}
                  onClick={() => setSelectedWorkflow(workflow)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base">
                          {workflowTypes.find(t => t.id === workflow.type)?.icon}{" "}
                          {workflowTypes.find(t => t.id === workflow.type)?.label}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          Submitted by {workflow.submittedBy} • {new Date(workflow.submittedAt).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          workflow.status === "pending" ? "secondary" :
                          workflow.status === "approved" ? "default" :
                          "destructive"
                        }
                      >
                        {workflow.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                        {workflow.status === "approved" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {workflow.status === "rejected" && <XCircle className="h-3 w-3 mr-1" />}
                        {workflow.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{workflow.auditTrail.length} audit entries</span>
                      {workflow.cycleTimeMinutes && (
                        <>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{workflow.cycleTimeMinutes} min cycle time</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Selected Workflow Detail */}
      {selectedWorkflow && (
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Workflow Detail: {selectedWorkflow.id}</CardTitle>
                <CardDescription>
                  {workflowTypes.find(t => t.id === selectedWorkflow.type)?.label}
                </CardDescription>
              </div>
              <Badge
                variant={
                  selectedWorkflow.status === "pending" ? "secondary" :
                  selectedWorkflow.status === "approved" ? "default" :
                  "destructive"
                }
              >
                {selectedWorkflow.status.toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Input
              </h4>
              <div className="p-3 bg-muted rounded-lg text-sm">
                {selectedWorkflow.customerQuery || selectedWorkflow.documentInput}
              </div>
            </div>

            {/* AI Draft with PII Redaction */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                AI-Generated Draft (PII Redacted)
              </h4>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm whitespace-pre-wrap">
                {selectedWorkflow.aiDraft}
              </div>
            </div>

            {/* Approval Actions */}
            {selectedWorkflow.status === "pending" && (
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold">Approval Decision</h4>
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleApprove(selectedWorkflow.id)}
                    className="flex-1 gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve & Execute
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedWorkflow.id)}
                    className="flex-1 gap-2"
                    disabled={!rejectionReason}
                  >
                    <XCircle className="h-4 w-4" />
                    Reject
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rejection-reason">Rejection Reason (required for reject)</Label>
                  <Textarea
                    id="rejection-reason"
                    placeholder="Explain why this workflow should be rejected..."
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Approval Info */}
            {selectedWorkflow.status !== "pending" && (
              <div className="p-3 bg-muted rounded-lg space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Decision by:</span>
                  <span className="font-medium">{selectedWorkflow.approvedBy}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Decision at:</span>
                  <span className="font-medium">
                    {selectedWorkflow.approvedAt && new Date(selectedWorkflow.approvedAt).toLocaleString()}
                  </span>
                </div>
                {selectedWorkflow.cycleTimeMinutes && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cycle time:</span>
                    <span className="font-medium text-blue-600">
                      {selectedWorkflow.cycleTimeMinutes} minutes
                    </span>
                  </div>
                )}
                {selectedWorkflow.rejectionReason && (
                  <div className="pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Reason:</span>
                    <p className="text-sm mt-1">{selectedWorkflow.rejectionReason}</p>
                  </div>
                )}
              </div>
            )}

            {/* Audit Trail */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Audit Trail
              </h4>
              <div className="space-y-2">
                {selectedWorkflow.auditTrail.map((entry, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 bg-muted rounded text-sm">
                    <div className="flex-shrink-0 w-32 text-muted-foreground">
                      {new Date(entry.timestamp).toLocaleString()}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{entry.action}</div>
                      <div className="text-muted-foreground">{entry.details}</div>
                      <div className="text-xs text-muted-foreground">by {entry.user}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/board-pack">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-base">View KPI Deltas</CardTitle>
                  <CardDescription className="text-sm">
                    See workflow cycle-time improvements in Board Pack
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Open Board Pack
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/strategy">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-base">Risk Radar Layer 2</CardTitle>
                  <CardDescription className="text-sm">
                    Learn about governance architecture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <Shield className="h-4 w-4" />
                    View Strategy
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
