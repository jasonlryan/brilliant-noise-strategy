"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Clock, 
  CheckCircle, 
 
  XCircle,
  Plus,
  Search,
  Filter,
  Users,
  Shield,
  FileText,
  Calendar,
  ArrowRight,
  Zap,
  Target,
  Activity,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react"

// Initiative Types
type InitiativeStatus = "draft" | "submitted" | "in_review" | "approved" | "rejected" | "blocked" | "live"
type Priority = "low" | "medium" | "high" | "critical"
type PlayCard = "ai-guided-search" | "prompt-analysis" | "compliance-bots" | "content-generation" | "performance-tracking"

interface Initiative {
  id: string
  title: string
  description: string
  play_card: PlayCard
  status: InitiativeStatus
  priority: Priority
  submitter: string
  assigned_approvers: string[]
  submitted_date: string
  target_launch: string
  days_in_process: number
  ttfa_target: number
  gate_a_required: boolean
  foundation_status: "pass" | "fail" | "pending"
  approval_stages: ApprovalStage[]
  tags: string[]
}

interface ApprovalStage {
  stage: string
  approver: string
  status: "pending" | "approved" | "rejected"
  completed_date?: string
  notes?: string
  required: boolean
}

// Mock data for demonstration
const initiatives: Initiative[] = [
  {
    id: "INIT-2025-001",
    title: "AI-Powered Brand Guidelines Compliance",
    description: "Implement automated brand compliance checking for all marketing materials using AI analysis",
    play_card: "compliance-bots",
    status: "in_review",
    priority: "high",
    submitter: "Sarah Chen (Marketing)",
    assigned_approvers: ["Legal", "Brand", "Security"],
    submitted_date: "2025-01-10T09:00:00Z",
    target_launch: "2025-02-15",
    days_in_process: 5,
    ttfa_target: 7,
    gate_a_required: true,
    foundation_status: "pass",
    approval_stages: [
      { stage: "Technical Review", approver: "DevOps Lead", status: "approved", completed_date: "2025-01-11", required: true },
      { stage: "Legal Review", approver: "Legal Counsel", status: "approved", completed_date: "2025-01-12", required: true },
      { stage: "Brand Review", approver: "Brand Manager", status: "pending", required: true },
      { stage: "Final Approval", approver: "CMO", status: "pending", required: true }
    ],
    tags: ["brand-compliance", "ai-automation", "q1-priority"]
  },
  {
    id: "INIT-2025-002", 
    title: "Content Performance Analytics Dashboard",
    description: "Real-time dashboard tracking content performance across all channels with AI insights",
    play_card: "performance-tracking",
    status: "approved",
    priority: "medium",
    submitter: "Marcus Johnson (Analytics)",
    assigned_approvers: ["Product", "Marketing"],
    submitted_date: "2025-01-08T14:30:00Z",
    target_launch: "2025-01-30",
    days_in_process: 7,
    ttfa_target: 5,
    gate_a_required: false,
    foundation_status: "pass",
    approval_stages: [
      { stage: "Product Review", approver: "Product Manager", status: "approved", completed_date: "2025-01-10", required: true },
      { stage: "Marketing Review", approver: "Marketing Director", status: "approved", completed_date: "2025-01-12", required: true }
    ],
    tags: ["analytics", "dashboard", "performance"]
  },
  {
    id: "INIT-2025-003",
    title: "AI Search Enhancement for Customer Support",
    description: "Upgrade customer support with AI-guided search to improve response accuracy and speed",
    play_card: "ai-guided-search", 
    status: "blocked",
    priority: "critical",
    submitter: "Emma Rodriguez (Support)",
    assigned_approvers: ["Security", "Product", "Legal"],
    submitted_date: "2025-01-12T11:15:00Z",
    target_launch: "2025-02-01",
    days_in_process: 3,
    ttfa_target: 3,
    gate_a_required: true,
    foundation_status: "fail",
    approval_stages: [
      { stage: "Security Review", approver: "Security Lead", status: "rejected", completed_date: "2025-01-14", notes: "Gate A Foundation requirements not met - Direct-to-prod monitoring incomplete", required: true },
      { stage: "Product Review", approver: "Product Manager", status: "pending", required: true },
      { stage: "Legal Review", approver: "Legal Counsel", status: "pending", required: false }
    ],
    tags: ["customer-support", "ai-search", "blocked-foundation"]
  },
  {
    id: "INIT-2025-004",
    title: "Prompt Template Library v2",
    description: "Enhanced prompt template library with version control and performance analytics",
    play_card: "prompt-analysis",
    status: "draft",
    priority: "low",
    submitter: "Alex Kim (Content)",
    assigned_approvers: ["Content", "Legal"],
    submitted_date: "2025-01-14T16:00:00Z",
    target_launch: "2025-03-01",
    days_in_process: 1,
    ttfa_target: 7,
    gate_a_required: false,
    foundation_status: "pending",
    approval_stages: [
      { stage: "Content Review", approver: "Content Director", status: "pending", required: true },
      { stage: "Legal Review", approver: "Legal Counsel", status: "pending", required: false }
    ],
    tags: ["content", "templates", "library"]
  }
]

const getStatusIcon = (status: InitiativeStatus) => {
  switch (status) {
    case "approved":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in_review":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "blocked":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "live":
      return <Zap className="h-4 w-4 text-purple-500" />
    case "submitted":
      return <FileText className="h-4 w-4 text-blue-500" />
    default:
      return <Edit className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: InitiativeStatus) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800 border-green-200"
    case "in_review":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "blocked":
      return "bg-red-100 text-red-800 border-red-200"
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200"
    case "live":
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "submitted":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case "critical":
      return "bg-red-100 text-red-800 border-red-200"
    case "high":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getFoundationStatusColor = (status: string) => {
  switch (status) {
    case "pass":
      return "text-green-600"
    case "fail":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

const playCardNames = {
  "ai-guided-search": "AI-Guided Search",
  "prompt-analysis": "Prompt Analysis", 
  "compliance-bots": "Compliance Bots",
  "content-generation": "Content Generation",
  "performance-tracking": "Performance Tracking"
}

export default function InitiativeManagement() {
  const activeInitiatives = initiatives.filter(i => ["submitted", "in_review", "blocked"].includes(i.status))
  const approvedInitiatives = initiatives.filter(i => i.status === "approved")
  const blockedCount = initiatives.filter(i => i.status === "blocked").length
  const avgTTFA = Math.round(initiatives.filter(i => i.status !== "draft").reduce((acc, i) => acc + i.days_in_process, 0) / initiatives.filter(i => i.status !== "draft").length)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Initiative Management</h1>
              <p className="text-muted-foreground">Track and manage AI governance initiatives with Gate A controls</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Initiative
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Status Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{activeInitiatives.length}</span>
                <Activity className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">In progress across all stages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Awaiting Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{approvedInitiatives.length}</span>
                <Clock className="h-4 w-4 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Ready for deployment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Blocked (Foundation)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{blockedCount}</span>
                <Shield className="h-4 w-4 text-red-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Gate A requirements not met</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Avg TTFA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{avgTTFA}d</span>
                <Target className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Time to first approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search initiatives..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="in_review">In Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priority</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active Initiatives List */}
        <div className="space-y-4">
          {initiatives.map((initiative) => (
            <Card key={initiative.id} className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(initiative.status)}
                      <CardTitle className="text-lg">{initiative.title}</CardTitle>
                      <Badge className={`text-xs ${getStatusColor(initiative.status)}`}>
                        {initiative.status.replace('_', ' ')}
                      </Badge>
                      <Badge className={`text-xs ${getPriorityColor(initiative.priority)}`}>
                        {initiative.priority}
                      </Badge>
                    </div>
                    <CardDescription className="max-w-2xl">
                      {initiative.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        {playCardNames[initiative.play_card]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {initiative.submitter}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {initiative.days_in_process}d in process
                      </span>
                      {initiative.gate_a_required && (
                        <span className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          <span className={getFoundationStatusColor(initiative.foundation_status)}>
                            Gate A: {initiative.foundation_status.toUpperCase()}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Approval Pipeline */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Approval Pipeline</h4>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {initiative.approval_stages.map((stage, index) => (
                      <div key={stage.stage} className="flex items-center gap-2 min-w-fit">
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${
                          stage.status === 'approved' ? 'bg-green-50 border-green-200 text-green-800' :
                          stage.status === 'rejected' ? 'bg-red-50 border-red-200 text-red-800' :
                          'bg-gray-50 border-gray-200 text-gray-600'
                        }`}>
                          {stage.status === 'approved' && <CheckCircle className="h-3 w-3" />}
                          {stage.status === 'rejected' && <XCircle className="h-3 w-3" />}
                          {stage.status === 'pending' && <Clock className="h-3 w-3" />}
                          <span className="font-medium">{stage.stage}</span>
                          <span className="text-xs">({stage.approver})</span>
                        </div>
                        {index < initiative.approval_stages.length - 1 && (
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Foundation Block Warning */}
                  {initiative.status === "blocked" && initiative.foundation_status === "fail" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-2 text-red-800">
                        <Shield className="h-4 w-4" />
                        <span className="font-medium">Foundation Block Active</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">
                        This initiative is blocked due to Gate A Foundation requirements. Security review failed: 
                        Direct-to-prod monitoring incomplete. Resolve Foundation issues before proceeding.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2 text-red-700 border-red-300">
                        View Foundation Status
                      </Button>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    {initiative.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Submit New Initiative
              </CardTitle>
              <CardDescription>
                Create a new AI governance initiative
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Start Initiative
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                My Approvals
              </CardTitle>
              <CardDescription>
                {activeInitiatives.filter(i => i.approval_stages.some(s => s.status === 'pending')).length} pending your review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Review Queue
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Analytics
              </CardTitle>
              <CardDescription>
                View initiative performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}