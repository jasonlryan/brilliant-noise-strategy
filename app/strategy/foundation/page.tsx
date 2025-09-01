"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Users, 
  Lock, 
  Database,
  GitBranch,
  FileCheck,
  Activity,
  TrendingUp,
  RefreshCw
} from "lucide-react"

// Gate A Status Type
type GateStatus = "green" | "amber" | "red"

interface GateCriteria {
  id: string
  category: "legal" | "sdlc" | "security"
  name: string
  description: string
  status: "complete" | "in_progress" | "not_started"
  owner: string
  evidence?: string
  target_date?: string
}

interface FoundationMetric {
  id: string
  name: string
  value: string | number
  target: string
  status: "good" | "warning" | "critical"
  trend: "up" | "down" | "stable"
  last_updated: string
}

// Mock data - in real implementation, this would come from APIs
const currentGateStatus: GateStatus = "amber"
const lastStatusChange = "2025-01-15T10:30:00Z"
const nextReview = "2025-02-01"

const gateCriteria: GateCriteria[] = [
  {
    id: "msa_migration",
    category: "legal",
    name: "New MSA + IP Addendum Active",
    description: "All new SOWs use updated legal framework",
    status: "in_progress",
    owner: "Legal Lead",
    evidence: "Contract migration progress: 60%",
    target_date: "2025-01-30"
  },
  {
    id: "contractor_ip",
    category: "legal", 
    name: "Contractor IP Assignment",
    description: "All contractors under proper IP assignment agreements",
    status: "complete",
    owner: "Legal Lead",
    evidence: "100% contractor coverage achieved"
  },
  {
    id: "subprocessor_registry",
    category: "legal",
    name: "Sub-Processor Registry Current", 
    description: "All sub-processors documented and published",
    status: "complete",
    owner: "Security Lead",
    evidence: "Registry updated monthly, 12 processors documented"
  },
  {
    id: "no_direct_prod",
    category: "sdlc",
    name: "No Direct-to-Production",
    description: "Zero direct code pushes to production",
    status: "in_progress",
    owner: "Engineering Lead",
    evidence: "Git hooks active, monitoring dashboard pending",
    target_date: "2025-01-20"
  },
  {
    id: "cicd_pipeline",
    category: "sdlc",
    name: "CI/CD Pipeline Active",
    description: "Automated testing with manual prod approval",
    status: "complete",
    owner: "Engineering Lead",
    evidence: "Pipeline operational, 100% releases through automation"
  },
  {
    id: "rollback_proven",
    category: "sdlc",
    name: "Rollback Capability Proven",
    description: "Rollback tested and documented in staging",
    status: "complete",
    owner: "DevOps",
    evidence: "Monthly tests passing, <15 min rollback time"
  },
  {
    id: "sso_mfa",
    category: "security",
    name: "SSO/MFA Enforced",
    description: "All user accounts require multi-factor authentication",
    status: "complete",
    owner: "Security Lead",
    evidence: "100% user coverage, zero password-only access"
  },
  {
    id: "backup_restore",
    category: "security",
    name: "Backup & Restore Tested",
    description: "Backup tested and restore time documented",
    status: "complete",
    owner: "DevOps",
    evidence: "Last test: 2025-01-10, 2.5hr restore time"
  }
]

const foundationMetrics: FoundationMetric[] = [
  {
    id: "backup_success",
    name: "Backup Success Rate",
    value: "99.2%",
    target: ">99%",
    status: "good",
    trend: "stable",
    last_updated: "2025-01-15T06:00:00Z"
  },
  {
    id: "direct_prod_events", 
    name: "Direct-to-Prod Events",
    value: 0,
    target: "0",
    status: "good",
    trend: "stable",
    last_updated: "2025-01-15T12:00:00Z"
  },
  {
    id: "mfa_coverage",
    name: "MFA Coverage",
    value: "100%",
    target: "100%", 
    status: "good",
    trend: "stable",
    last_updated: "2025-01-15T09:00:00Z"
  },
  {
    id: "new_msa_revenue",
    name: "Revenue on New MSA",
    value: "60%",
    target: "80%",
    status: "warning",
    trend: "up",
    last_updated: "2025-01-15T11:00:00Z"
  }
]

const getStatusIcon = (status: GateStatus) => {
  switch (status) {
    case "green":
      return <CheckCircle className="h-8 w-8 text-green-500" />
    case "amber":
      return <AlertTriangle className="h-8 w-8 text-amber-500" />
    case "red":
      return <XCircle className="h-8 w-8 text-red-500" />
  }
}

const getStatusBadge = (status: GateStatus) => {
  const colors = {
    green: "bg-green-100 text-green-800 border-green-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200", 
    red: "bg-red-100 text-red-800 border-red-200"
  }
  
  return (
    <Badge className={`${colors[status]} font-semibold`}>
      {status.toUpperCase()}
    </Badge>
  )
}

const getCriteriaIcon = (category: string) => {
  switch (category) {
    case "legal":
      return <FileCheck className="h-4 w-4" />
    case "sdlc":
      return <GitBranch className="h-4 w-4" />
    case "security":
      return <Lock className="h-4 w-4" />
    default:
      return <CheckCircle className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "complete":
      return "text-green-600"
    case "in_progress":
      return "text-amber-600"
    case "not_started":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

const getMetricIcon = (status: string) => {
  switch (status) {
    case "good":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-amber-500" />
    case "critical":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return <Activity className="h-4 w-4 text-gray-500" />
  }
}

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-3 w-3 text-green-500" />
    case "down":
      return <TrendingUp className="h-3 w-3 text-red-500 rotate-180" />
    case "stable":
      return <div className="h-3 w-3 rounded-full bg-gray-400" />
    default:
      return null
  }
}

export default function FoundationStatusCenter() {
  const completeCriteria = gateCriteria.filter(c => c.status === "complete").length
  const totalCriteria = gateCriteria.length
  const progressPercentage = Math.round((completeCriteria / totalCriteria) * 100)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Foundation Status Center</h1>
          <p className="text-muted-foreground">Real-time governance maturity and operational readiness</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Status
          </Button>
          <Button variant="secondary" className="gap-2">
            <Shield className="h-4 w-4" />
            Gate A Evidence
          </Button>
        </div>
      </div>

      {/* Gate A Status Overview */}
      <Card className="shadow-lg border-l-4 border-l-amber-500">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {getStatusIcon(currentGateStatus)}
              <div>
                <CardTitle className="text-xl">Gate A Foundation Status</CardTitle>
                <CardDescription>
                  Operational readiness for customer-facing work
                </CardDescription>
              </div>
            </div>
            {getStatusBadge(currentGateStatus)}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Overall Progress</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Criteria Complete</span>
                  <span>{completeCriteria}/{totalCriteria}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {progressPercentage}% complete - 2 criteria in progress
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Status Information</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  <span>Last Updated: {new Date(lastStatusChange).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3" />
                  <span>Next Review: {nextReview}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3" />
                  <span>Owner: Security Lead</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Current Impact</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-3 w-3" />
                  <span>Existing clients: Normal operations</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="h-3 w-3" />
                  <span>New clients: Enhanced monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-3 w-3" />
                  <span>Production releases: Proceeding</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gate A Criteria Checklist */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Gate A Criteria Checklist</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gateCriteria.map((criteria) => (
            <Card key={criteria.id} className="shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getCriteriaIcon(criteria.category)}
                    <CardTitle className="text-sm">{criteria.name}</CardTitle>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(criteria.status)}`}
                  >
                    {criteria.status === "complete" ? "✓" : 
                     criteria.status === "in_progress" ? "⏳" : "○"}
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  {criteria.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Owner:</span>
                    <span className="font-medium">{criteria.owner}</span>
                  </div>
                  {criteria.evidence && (
                    <div className="text-xs">
                      <span className="text-muted-foreground">Evidence:</span>
                      <p className="mt-1 text-green-700">{criteria.evidence}</p>
                    </div>
                  )}
                  {criteria.target_date && criteria.status === "in_progress" && (
                    <div className="text-xs">
                      <span className="text-muted-foreground">Target:</span>
                      <p className="mt-1 text-amber-700">{criteria.target_date}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Foundation Metrics */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Foundation Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {foundationMetrics.map((metric) => (
            <Card key={metric.id} className="shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">{metric.name}</CardTitle>
                  {getMetricIcon(metric.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metric.trend)}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Target: {metric.target}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Updated: {new Date(metric.last_updated).toLocaleTimeString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Evidence Repository
            </CardTitle>
            <CardDescription>
              Access all Gate A compliance documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                Legal agreements & IP assignments
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                CI/CD pipeline logs & test results  
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Security configuration & audit reports
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest Foundation status changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p>SSO rollout completed</p>
                  <p className="text-xs text-muted-foreground">Jan 10, 2:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <div>
                  <p>MSA migration at 60%</p>
                  <p className="text-xs text-muted-foreground">Jan 15, 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p>Backup test successful</p>
                  <p className="text-xs text-muted-foreground">Jan 10, 6:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Next Steps
            </CardTitle>
            <CardDescription>
              Actions to achieve GREEN status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                <div>
                  <p className="font-medium">Complete MSA Migration</p>
                  <p className="text-xs text-muted-foreground">Target: Jan 30</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                <div>
                  <p className="font-medium">Finalize Direct-to-Prod Monitoring</p>
                  <p className="text-xs text-muted-foreground">Target: Jan 20</p>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3">
                View Full Action Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}