"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  Target,
  Users,
  Mail,
  Printer,
  ArrowRight
} from "lucide-react"

// Simple QBR template aligned with strategy
const qbrSections = [
  {
    section: "Executive Summary",
    description: "Implementation progress and key milestones",
    status: "template_ready",
    includes: [
      "Gate A Foundation status",
      "Literacy ladder progression", 
      "Play card deployment status",
      "Next quarter focus areas"
    ]
  },
  {
    section: "Success Criteria Progress",
    description: "Progress against PRD targets",
    status: "template_ready",
    includes: [
      "Time to First Approval tracking",
      "Initiative coverage percentage",
      "Exception rate monitoring",
      "Foundation readiness status"
    ]
  },
  {
    section: "Implementation Roadmap",
    description: "4-phase rollout progress", 
    status: "template_ready",
    includes: [
      "Phase 1 completion status",
      "Phase 2 preparation progress",
      "Resource allocation updates",
      "Timeline adjustments"
    ]
  },
  {
    section: "Next Quarter Planning",
    description: "Upcoming milestones and priorities",
    status: "template_ready",
    includes: [
      "Immediate action items",
      "Resource requirements",
      "Risk mitigation plans",
      "Success metric targets"
    ]
  }
]

const qbrCapabilities = [
  {
    feature: "Automated Data Collection",
    description: "Pull metrics from Radar workflow system",
    available: true
  },
  {
    feature: "Template Generation", 
    description: "Standard QBR format with key sections",
    available: true
  },
  {
    feature: "Foundation Status Integration",
    description: "Real-time Gate A criteria status",
    available: true
  },
  {
    feature: "Play Card Progress Tracking",
    description: "L1→L2→L3 progression summary",
    available: true
  }
]

const deliverableFormats = [
  {
    format: "Executive Summary (PDF)",
    description: "2-page board-ready summary",
    audience: "Executive leadership"
  },
  {
    format: "Detailed Report (PDF)", 
    description: "Complete implementation analysis",
    audience: "Operations team"
  },
  {
    format: "Foundation Status (PDF)",
    description: "Gate A criteria checklist",
    audience: "Security/Legal teams"
  }
]

const getStatusIcon = (status: string) => {
  if (status === "template_ready") {
    return <CheckCircle className="h-4 w-4 text-green-500" />
  }
  return <Clock className="h-4 w-4 text-amber-500" />
}

export default function QBRReportGenerator() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">QBR Report Generator</h1>
              <p className="text-muted-foreground">Quarterly Business Review for AI Risk & Trust Radar</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate QBR
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* QBR Generator Header */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Quarterly Business Review Generator</CardTitle>
            <CardDescription className="text-lg">
              Simple reporting aligned with AI Risk & Trust Radar strategy
            </CardDescription>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Badge variant="outline" className="gap-2">
                <Calendar className="h-3 w-3" />
                Based on PRD targets
              </Badge>
              <Badge variant="outline" className="gap-2">
                <FileText className="h-3 w-3" />
                Trust OS Methodology
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* QBR Sections */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Standard QBR Sections</CardTitle>
            <CardDescription>
              Consistent reporting structure aligned with strategy goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {qbrSections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{section.section}</CardTitle>
                      {getStatusIcon(section.status)}
                    </div>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Includes:</h5>
                      <ul className="space-y-1 text-sm">
                        {section.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Report Capabilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Report Generation Capabilities</CardTitle>
            <CardDescription>
              Automated data collection and template generation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {qbrCapabilities.map((capability, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{capability.feature}</div>
                    <div className="text-xs text-muted-foreground">{capability.description}</div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Output Formats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Report Formats</CardTitle>
            <CardDescription>
              Different formats for different stakeholder needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deliverableFormats.map((format, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{format.format}</div>
                    <div className="text-sm text-muted-foreground">{format.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{format.audience}</div>
                    <Button variant="outline" size="sm" className="mt-1">
                      Generate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Generate Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Generate Current QBR
              </CardTitle>
              <CardDescription>
                Create report with current implementation status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Generate Report
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Next Review
              </CardTitle>
              <CardDescription>
                Plan upcoming quarterly review session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Schedule Review
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                View History
              </CardTitle>
              <CardDescription>
                Access previous QBR reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Archive
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}