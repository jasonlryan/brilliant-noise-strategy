"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BookOpen,
  Search,
  Filter,
  FileText,
  Video,
  Link as LinkIcon,
  Download,
  Briefcase,
  Users,
  Cpu
} from "lucide-react"

// Resource categories mapped to business plan folders
// In production, this would be dynamically loaded from the filesystem/API
const resources = [
  // 04-Data Resources
  {
    id: "r1",
    title: "AI Literacy Framework",
    description: "Comprehensive framework for assessing and improving AI literacy across organizational roles",
    type: "framework",
    audience: ["leaders", "practitioners"],
    domain: ["team"],
    level: "1-2",
    source: "04-Data/",
    url: "#",
    format: "PDF"
  },
  {
    id: "r2",
    title: "EU AI Act Article 4 Compliance Guide",
    description: "Step-by-step guide to meeting AI literacy obligations under Article 4",
    type: "guide",
    audience: ["leaders"],
    domain: ["process"],
    level: "1-3",
    source: "04-Data/",
    url: "#",
    format: "PDF"
  },
  {
    id: "r3",
    title: "Role-Based Literacy Curriculum",
    description: "Structured learning paths for Leaders, Practitioners, and Technical audiences",
    type: "curriculum",
    audience: ["leaders", "practitioners", "technical"],
    domain: ["team"],
    level: "1-4",
    source: "0.1 Prompts/",
    url: "#",
    format: "Markdown"
  },

  // 0.1 Prompts Resources
  {
    id: "r4",
    title: "Governance Prompt Library",
    description: "Pre-built prompts for AI governance tasks including risk assessment, policy drafting, and decision support",
    type: "prompts",
    audience: ["practitioners", "technical"],
    domain: ["process", "system"],
    level: "2-3",
    source: "0.1 Prompts/",
    url: "#",
    format: "Markdown"
  },
  {
    id: "r5",
    title: "Board Pack Templates",
    description: "Customizable templates for executive reporting on AI literacy and compliance",
    type: "template",
    audience: ["leaders"],
    domain: ["process"],
    level: "2-3",
    source: "08-Consolidated-Files/",
    url: "#",
    format: "Document"
  },

  // 08-Consolidated-Files Resources
  {
    id: "r6",
    title: "Platform Vision & Strategy",
    description: "Strategic overview of the literacy-led intelligence platform approach",
    type: "strategy",
    audience: ["leaders"],
    domain: ["team", "process"],
    level: "1-2",
    source: "08-Consolidated-Files/",
    url: "#",
    format: "Markdown"
  },
  {
    id: "r7",
    title: "Client Adoption Journey Map",
    description: "Five-level maturity model from Stuck to Orchestrated Intelligence",
    type: "framework",
    audience: ["leaders", "practitioners"],
    domain: ["team", "process"],
    level: "1-3",
    source: "08-Consolidated-Files/",
    url: "#",
    format: "Markdown"
  },
  {
    id: "r8",
    title: "Technical Architecture Guide",
    description: "Platform architecture, data models, and integration patterns for technical teams",
    type: "technical",
    audience: ["technical"],
    domain: ["system"],
    level: "2-4",
    source: "08-Consolidated-Files/",
    url: "#",
    format: "Markdown"
  },

  // Additional practical resources
  {
    id: "r9",
    title: "Diagnostics Question Bank",
    description: "Library of assessment questions for measuring AI literacy and readiness",
    type: "tool",
    audience: ["practitioners"],
    domain: ["team"],
    level: "1-2",
    source: "04-Data/",
    url: "#",
    format: "JSON"
  },
  {
    id: "r10",
    title: "Heatmap Visualization Guide",
    description: "How to use and interpret the Audience × Domain literacy heatmap",
    type: "guide",
    audience: ["leaders", "practitioners"],
    domain: ["team", "process"],
    level: "1-2",
    source: "08-Consolidated-Files/",
    url: "#",
    format: "PDF"
  },
  {
    id: "r11",
    title: "Workflow Guardrails Playbook",
    description: "Best practices for implementing human-in-the-loop AI workflows with governance",
    type: "playbook",
    audience: ["practitioners", "technical"],
    domain: ["process", "system"],
    level: "2-3",
    source: "0.1 Prompts/",
    url: "#",
    format: "Markdown"
  },
  {
    id: "r12",
    title: "Privacy & Security Controls Checklist",
    description: "Technical controls for PII redaction, audit trails, and data governance",
    type: "checklist",
    audience: ["technical"],
    domain: ["system"],
    level: "2-4",
    source: "04-Data/",
    url: "#",
    format: "PDF"
  }
]

const audienceOptions = [
  { value: "all", label: "All Audiences", icon: Users },
  { value: "leaders", label: "Leaders", icon: Briefcase },
  { value: "practitioners", label: "Practitioners", icon: Users },
  { value: "technical", label: "Technical", icon: Cpu }
]

const domainOptions = [
  { value: "all", label: "All Domains" },
  { value: "team", label: "Team Readiness" },
  { value: "process", label: "Process Maturity" },
  { value: "system", label: "System Capability" }
]

const typeOptions = [
  { value: "all", label: "All Types" },
  { value: "framework", label: "Framework" },
  { value: "guide", label: "Guide" },
  { value: "curriculum", label: "Curriculum" },
  { value: "prompts", label: "Prompts" },
  { value: "template", label: "Template" },
  { value: "strategy", label: "Strategy" },
  { value: "technical", label: "Technical" },
  { value: "tool", label: "Tool" },
  { value: "playbook", label: "Playbook" },
  { value: "checklist", label: "Checklist" }
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAudience, setSelectedAudience] = useState("all")
  const [selectedDomain, setSelectedDomain] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesAudience = selectedAudience === "all" ||
                           resource.audience.includes(selectedAudience)

    const matchesDomain = selectedDomain === "all" ||
                         resource.domain.includes(selectedDomain)

    const matchesType = selectedType === "all" ||
                       resource.type === selectedType

    return matchesSearch && matchesAudience && matchesDomain && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "framework":
      case "strategy":
        return Briefcase
      case "guide":
      case "curriculum":
        return BookOpen
      case "prompts":
      case "template":
        return FileText
      case "technical":
      case "tool":
        return Cpu
      default:
        return FileText
    }
  }

  const getAudienceBadgeColor = (audience: string) => {
    switch (audience) {
      case "leaders":
        return "bg-purple-100 text-purple-800"
      case "practitioners":
        return "bg-blue-100 text-blue-800"
      case "technical":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Resources Library</h1>
            <p className="text-muted-foreground">
              Role-based learning materials and governance resources
            </p>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>Resource Collection</CardTitle>
          <CardDescription>
            Curated materials from business plan folders: 04-Data/, 0.1 Prompts/, 08-Consolidated-Files/
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Total Resources</h4>
              <div className="text-3xl font-bold text-blue-600">{resources.length}</div>
              <p className="text-xs text-muted-foreground">Across all categories</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Audiences Covered</h4>
              <div className="text-3xl font-bold text-green-600">3</div>
              <p className="text-xs text-muted-foreground">Leaders, Practitioners, Technical</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Domains</h4>
              <div className="text-3xl font-bold text-purple-600">3</div>
              <p className="text-xs text-muted-foreground">Team, Process, System</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Audience</label>
              <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {audienceOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Domain</label>
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {domainOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Showing {filteredResources.length} of {resources.length} resources
            </span>
            {(searchQuery || selectedAudience !== "all" || selectedDomain !== "all" || selectedType !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedAudience("all")
                  setSelectedDomain("all")
                  setSelectedType("all")
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredResources.map(resource => {
          const TypeIcon = getTypeIcon(resource.type)

          return (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <TypeIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Audiences */}
                <div className="flex flex-wrap gap-2">
                  {resource.audience.map(aud => (
                    <Badge
                      key={aud}
                      variant="secondary"
                      className={`text-xs ${getAudienceBadgeColor(aud)}`}
                    >
                      {aud}
                    </Badge>
                  ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs">
                      L{resource.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    {resource.format}
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="h-3 w-3" />
                    {resource.source}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredResources.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No resources found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search query
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
