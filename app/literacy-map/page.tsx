"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  Map,
  Download,
  FileText,
  Users,
  Briefcase,
  Cpu,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Filter
} from "lucide-react"
import Link from "next/link"

// Literacy levels for the heatmap
const literacyLevels = [
  { level: 0, label: "L0 - Dark", color: "bg-slate-900 text-white", description: "No visibility" },
  { level: 1, label: "L1 - Visible", color: "bg-red-100 text-red-900", description: "Baseline aware" },
  { level: 2, label: "L2 - Evidenced", color: "bg-amber-100 text-amber-900", description: "Proving value" },
  { level: 3, label: "L3 - Learning", color: "bg-blue-100 text-blue-900", description: "Systematic improvement" },
  { level: 4, label: "L4 - Orchestrated", color: "bg-green-100 text-green-900", description: "Coordinated intelligence" }
]

// Audience segments
const audiences = [
  { id: "leaders", label: "Leaders", icon: Briefcase, description: "Board, Executives, Sponsors" },
  { id: "practitioners", label: "Practitioners", icon: Users, description: "Managers, Ops, Comms" },
  { id: "technical", label: "Technical", icon: Cpu, description: "IT, Data, Engineering" }
]

// Domain areas
const domains = [
  { id: "team", label: "Team Readiness", description: "People, skills, culture" },
  { id: "process", label: "Process Maturity", description: "Workflows, governance, guardrails" },
  { id: "system", label: "System Capability", description: "Tools, integrations, telemetry" }
]

interface HeatmapCell {
  audience: string
  domain: string
  level: number
  evidence: string[]
  notes: string
}

export default function LiteracyMapPage() {
  const [heatmapData, setHeatmapData] = useState<HeatmapCell[]>([])
  const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null)
  const [selectedCell, setSelectedCell] = useState<HeatmapCell | null>(null)
  const [filterAudience, setFilterAudience] = useState<string>("all")
  const [filterDomain, setFilterDomain] = useState<string>("all")

  useEffect(() => {
    // Load diagnostic data from localStorage
    const storedData = localStorage.getItem('diagnosticData')
    if (storedData) {
      const data = JSON.parse(storedData)
      setDiagnosticScore(data.score)

      // Initialize heatmap with seeded data + diagnostic signals
      const initialHeatmap = initializeHeatmap(data.score, data.responses)
      setHeatmapData(initialHeatmap)
    } else {
      // Initialize with default seeded data
      setHeatmapData(initializeHeatmap(0, {}))
    }
  }, [])

  const initializeHeatmap = (score: number, responses: any): HeatmapCell[] => {
    // Seed with example data
    const baseLevel = score < 20 ? 0 : score < 40 ? 1 : score < 60 ? 2 : score < 80 ? 3 : 4

    return [
      // Leaders
      {
        audience: "leaders",
        domain: "team",
        level: Math.max(baseLevel - 1, 0),
        evidence: ["Diagnostic baseline captured", "Executive awareness session completed"],
        notes: "Leadership acknowledges AI literacy gap"
      },
      {
        audience: "leaders",
        domain: "process",
        level: baseLevel,
        evidence: ["Governance framework reviewed", "Decision rights documented"],
        notes: "Governance structure defined"
      },
      {
        audience: "leaders",
        domain: "system",
        level: Math.max(baseLevel - 1, 0),
        evidence: ["Technology assessment initiated"],
        notes: "Systems inventory in progress"
      },

      // Practitioners
      {
        audience: "practitioners",
        domain: "team",
        level: baseLevel,
        evidence: ["Baseline survey completed", "Training needs identified"],
        notes: `${responses?.q6 ? 'Survey data captured' : 'Awaiting team assessment'}`
      },
      {
        audience: "practitioners",
        domain: "process",
        level: Math.max(baseLevel - 1, 0),
        evidence: ["Workflow mapping started"],
        notes: "Process documentation underway"
      },
      {
        audience: "practitioners",
        domain: "system",
        level: baseLevel,
        evidence: ["Tool usage audit conducted"],
        notes: "Shadow AI identified"
      },

      // Technical
      {
        audience: "technical",
        domain: "team",
        level: Math.min(baseLevel + 1, 4),
        evidence: ["Technical literacy assessment", "Security training completed"],
        notes: "Technical team shows strong readiness"
      },
      {
        audience: "technical",
        domain: "process",
        level: baseLevel,
        evidence: ["Privacy controls reviewed", "Audit trail requirements defined"],
        notes: "Controls framework in place"
      },
      {
        audience: "technical",
        domain: "system",
        level: Math.min(baseLevel + 1, 4),
        evidence: ["Platform architecture documented", "Integration patterns defined"],
        notes: "Technical foundation solid"
      }
    ]
  }

  const getCellData = (audienceId: string, domainId: string): HeatmapCell | undefined => {
    return heatmapData.find(cell => cell.audience === audienceId && cell.domain === domainId)
  }

  const getLevelInfo = (level: number) => {
    return literacyLevels.find(l => l.level === level) || literacyLevels[0]
  }

  const exportToCSV = () => {
    const headers = ["Audience", "Domain", "Level", "Evidence", "Notes"]
    const rows = heatmapData.map(cell => [
      audiences.find(a => a.id === cell.audience)?.label || cell.audience,
      domains.find(d => d.id === cell.domain)?.label || cell.domain,
      getLevelInfo(cell.level).label,
      cell.evidence.join("; "),
      cell.notes
    ])

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `literacy-heatmap-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  // Filter logic for Story #9
  const filteredAudiences = filterAudience === "all"
    ? audiences
    : audiences.filter(a => a.id === filterAudience)

  const filteredDomains = filterDomain === "all"
    ? domains
    : domains.filter(d => d.id === filterDomain)

  const overallLevel = heatmapData.length > 0
    ? Math.round(heatmapData.reduce((sum, cell) => sum + cell.level, 0) / heatmapData.length)
    : 0

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Map className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold">Literacy Heatmap</h1>
              <p className="text-muted-foreground">
                Audience × Domain visibility of AI readiness
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportToCSV} className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Link href="/board-pack">
              <Button className="gap-2">
                <FileText className="h-4 w-4" />
                Generate Board Pack
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Literacy Overview
          </CardTitle>
          <CardDescription>
            Organization-wide readiness snapshot from diagnostics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Diagnostic Baseline</h4>
              <div className="text-2xl font-bold text-blue-600">
                {diagnosticScore !== null ? `${diagnosticScore}%` : "No data"}
              </div>
              <p className="text-xs text-muted-foreground">
                {diagnosticScore !== null
                  ? `Level ${Math.floor(diagnosticScore / 25)} readiness`
                  : "Complete diagnostics to see baseline"
                }
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Average Literacy Level</h4>
              <div className="flex items-center gap-2">
                <Badge className={getLevelInfo(overallLevel).color}>
                  {getLevelInfo(overallLevel).label}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Across all audiences and domains
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Coverage</h4>
              <div className="text-2xl font-bold text-green-600">
                {heatmapData.filter(cell => cell.level > 0).length} / {heatmapData.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Cells with evidence
              </p>
            </div>
          </div>

          {diagnosticScore === null && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-amber-900 text-sm">No diagnostic data found</p>
                <p className="text-sm text-amber-700 mt-1">
                  Complete the diagnostics to reflect your baseline in this heatmap.
                </p>
                <Link href="/diagnostics">
                  <Button size="sm" className="mt-2 gap-2">
                    Take Diagnostics
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Heatmap Grid */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle>Literacy Heatmap: Audience × Domain</CardTitle>
              <CardDescription>
                Click any cell to see evidence and notes
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={filterAudience} onValueChange={setFilterAudience}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Audiences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Audiences</SelectItem>
                  {audiences.map(audience => (
                    <SelectItem key={audience.id} value={audience.id}>
                      {audience.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterDomain} onValueChange={setFilterDomain}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Domains" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain.id} value={domain.id}>
                      {domain.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Audience</TableHead>
                  {filteredDomains.map(domain => (
                    <TableHead key={domain.id} className="text-center">
                      <div className="space-y-1">
                        <div className="font-semibold">{domain.label}</div>
                        <div className="text-xs font-normal text-muted-foreground">
                          {domain.description}
                        </div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAudiences.map(audience => {
                  const Icon = audience.icon
                  return (
                    <TableRow key={audience.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div>{audience.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {audience.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      {filteredDomains.map(domain => {
                        const cell = getCellData(audience.id, domain.id)
                        const levelInfo = getLevelInfo(cell?.level || 0)

                        return (
                          <TableCell
                            key={domain.id}
                            className="text-center cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => setSelectedCell(cell || null)}
                          >
                            {cell && (
                              <div className="space-y-2">
                                <Badge className={`${levelInfo.color} text-xs`}>
                                  L{cell.level}
                                </Badge>
                                <div className="text-xs text-muted-foreground">
                                  {cell.evidence.length} evidence items
                                </div>
                              </div>
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* Legend */}
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold text-sm mb-3">Literacy Levels</h4>
            <div className="grid grid-cols-5 gap-3">
              {literacyLevels.map(level => (
                <div key={level.level} className="space-y-1">
                  <Badge className={`${level.color} text-xs w-full justify-center`}>
                    {level.label}
                  </Badge>
                  <p className="text-xs text-muted-foreground text-center">
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Cell Details */}
      {selectedCell && (
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle>
              {audiences.find(a => a.id === selectedCell.audience)?.label} ×{" "}
              {domains.find(d => d.id === selectedCell.domain)?.label}
            </CardTitle>
            <CardDescription>
              <Badge className={getLevelInfo(selectedCell.level).color}>
                {getLevelInfo(selectedCell.level).label}
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Evidence</h4>
              <ul className="space-y-1 text-sm">
                {selectedCell.evidence.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Notes</h4>
              <p className="text-sm text-muted-foreground">{selectedCell.notes}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>
            Use this heatmap to drive your literacy and governance strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/resources">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-base">Access Resources</CardTitle>
                  <CardDescription className="text-sm">
                    Role-based learning materials by audience and domain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    Browse Library
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
                    Export Article 4 evidence with this heatmap
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2">
                    Create Report
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/diagnostics">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-base">Retake Diagnostics</CardTitle>
                  <CardDescription className="text-sm">
                    Update your baseline to track progress over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    Reassess
                    <ArrowRight className="h-4 w-4" />
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
