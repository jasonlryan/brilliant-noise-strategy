"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Search, 
  CheckCircle, 
  Clock, 
  Play,
  Users,
  Shield,
  Target,
  TrendingUp,
  BookOpen,
  Star,
  ArrowRight,
  Eye,
  Download,
  Filter
} from "lucide-react"

// Play Card Types
type LiteracyLevel = "L0" | "L1" | "L2" | "L3"
type TileType = "discovery" | "analysis" | "creation" | "governance" | "measurement"
type ImplementationStatus = "not_started" | "planned" | "in_progress" | "active" | "optimizing"

interface PlayCard {
  id: string
  name: string
  tile: TileType
  literacy_level: LiteracyLevel
  status: ImplementationStatus
  description: string
  users_active: number
  total_users: number
  initiatives_completed: number
  avg_time_saved: number
  success_rate: number
  foundation_required: boolean
  gate_a_dependent: boolean
  implementation_effort: "low" | "medium" | "high"
  roi_impact: "low" | "medium" | "high"
  last_updated: string
  next_milestone?: string
}

interface HeatMapTile {
  name: string
  type: TileType
  coverage: number
  l1_status: ImplementationStatus
  l2_status: ImplementationStatus
  l3_status: ImplementationStatus
  active_users: number
  total_initiatives: number
  maturity_score: number
}

// Mock data for demonstration
const playCards: PlayCard[] = [
  {
    id: "pc-discovery-001",
    name: "AI-Guided Search",
    tile: "discovery",
    literacy_level: "L1",
    status: "active",
    description: "Intelligent search across communications content with AI-powered recommendations",
    users_active: 18,
    total_users: 25,
    initiatives_completed: 23,
    avg_time_saved: 65,
    success_rate: 92,
    foundation_required: true,
    gate_a_dependent: true,
    implementation_effort: "medium",
    roi_impact: "high",
    last_updated: "2025-01-10T09:00:00Z",
    next_milestone: "L2 Advanced Filters Implementation"
  },
  {
    id: "pc-discovery-002", 
    name: "Content Discovery Engine",
    tile: "discovery",
    literacy_level: "L2",
    status: "planned",
    description: "Advanced content discovery with semantic analysis and trend identification",
    users_active: 0,
    total_users: 15,
    initiatives_completed: 0,
    avg_time_saved: 0,
    success_rate: 0,
    foundation_required: true,
    gate_a_dependent: false,
    implementation_effort: "high",
    roi_impact: "high",
    last_updated: "2025-01-08T14:30:00Z",
    next_milestone: "Pilot Program Launch - Q2 2025"
  },
  {
    id: "pc-analysis-001",
    name: "Prompt Analysis & Optimization", 
    tile: "analysis",
    literacy_level: "L1",
    status: "active",
    description: "Analyze and optimize AI prompts for better accuracy and brand consistency",
    users_active: 12,
    total_users: 20,
    initiatives_completed: 15,
    avg_time_saved: 45,
    success_rate: 88,
    foundation_required: false,
    gate_a_dependent: false,
    implementation_effort: "low",
    roi_impact: "medium",
    last_updated: "2025-01-12T11:15:00Z",
    next_milestone: "Advanced Analytics Dashboard"
  },
  {
    id: "pc-creation-001",
    name: "AI Content Generation",
    tile: "creation", 
    literacy_level: "L1",
    status: "active",
    description: "Structured content creation with AI assistance and brand compliance",
    users_active: 22,
    total_users: 25,
    initiatives_completed: 31,
    avg_time_saved: 120,
    success_rate: 94,
    foundation_required: true,
    gate_a_dependent: true,
    implementation_effort: "medium",
    roi_impact: "high",
    last_updated: "2025-01-14T16:00:00Z",
    next_milestone: "Multi-language Support"
  },
  {
    id: "pc-governance-001",
    name: "Compliance Bots",
    tile: "governance",
    literacy_level: "L1", 
    status: "active",
    description: "Automated compliance checking and approval workflow management",
    users_active: 8,
    total_users: 15,
    initiatives_completed: 12,
    avg_time_saved: 85,
    success_rate: 96,
    foundation_required: true,
    gate_a_dependent: true,
    implementation_effort: "high",
    roi_impact: "high",
    last_updated: "2025-01-13T12:00:00Z",
    next_milestone: "Exception Handling Automation"
  },
  {
    id: "pc-measurement-001",
    name: "Performance Tracking",
    tile: "measurement",
    literacy_level: "L1",
    status: "in_progress",
    description: "Real-time performance analytics and improvement recommendations",
    users_active: 6,
    total_users: 20,
    initiatives_completed: 8,
    avg_time_saved: 30,
    success_rate: 85,
    foundation_required: false,
    gate_a_dependent: false,
    implementation_effort: "medium", 
    roi_impact: "medium",
    last_updated: "2025-01-15T10:30:00Z",
    next_milestone: "Dashboard Go-Live - End Jan"
  }
]

const heatMapTiles: HeatMapTile[] = [
  {
    name: "Discovery",
    type: "discovery",
    coverage: 85,
    l1_status: "active",
    l2_status: "planned", 
    l3_status: "not_started",
    active_users: 18,
    total_initiatives: 23,
    maturity_score: 78
  },
  {
    name: "Analysis", 
    type: "analysis",
    coverage: 70,
    l1_status: "active",
    l2_status: "not_started",
    l3_status: "not_started", 
    active_users: 12,
    total_initiatives: 15,
    maturity_score: 65
  },
  {
    name: "Creation",
    type: "creation",
    coverage: 95,
    l1_status: "active",
    l2_status: "in_progress",
    l3_status: "not_started",
    active_users: 22,
    total_initiatives: 31,
    maturity_score: 82
  },
  {
    name: "Governance",
    type: "governance", 
    coverage: 60,
    l1_status: "active",
    l2_status: "planned",
    l3_status: "not_started",
    active_users: 8,
    total_initiatives: 12,
    maturity_score: 58
  },
  {
    name: "Measurement",
    type: "measurement",
    coverage: 45,
    l1_status: "in_progress", 
    l2_status: "not_started",
    l3_status: "not_started",
    active_users: 6,
    total_initiatives: 8,
    maturity_score: 42
  }
]

const getStatusIcon = (status: ImplementationStatus) => {
  switch (status) {
    case "active":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in_progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "planned":
      return <Target className="h-4 w-4 text-amber-500" />
    case "optimizing":
      return <TrendingUp className="h-4 w-4 text-purple-500" />
    default:
      return <div className="h-4 w-4 rounded-full bg-gray-300" />
  }
}

const getStatusColor = (status: ImplementationStatus) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200"
    case "in_progress":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "planned":
      return "bg-amber-100 text-amber-800 border-amber-200"
    case "optimizing":
      return "bg-purple-100 text-purple-800 border-purple-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getTileColor = (coverage: number) => {
  if (coverage >= 80) return "bg-green-500"
  if (coverage >= 60) return "bg-amber-500"
  if (coverage >= 40) return "bg-orange-500"
  return "bg-red-500"
}

const getLiteracyBadgeColor = (level: LiteracyLevel) => {
  switch (level) {
    case "L1":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "L2": 
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "L3":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getROIColor = (roi: string) => {
  switch (roi) {
    case "high":
      return "text-green-600"
    case "medium":
      return "text-amber-600"
    default:
      return "text-gray-600"
  }
}

export default function PlayCardCenter() {
  const activeCards = playCards.filter(c => c.status === "active").length
  const totalUsers = Math.max(...playCards.map(c => c.total_users))
  const avgMaturity = Math.round(heatMapTiles.reduce((acc, t) => acc + t.maturity_score, 0) / heatMapTiles.length)
  const l1Complete = heatMapTiles.filter(t => t.l1_status === "active").length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Play Card Center</h1>
              <p className="text-muted-foreground">AI governance methodology and literacy progression dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter by Tile
              </Button>
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Start New Card
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overview Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Play Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{activeCards}</span>
                <Play className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Out of {playCards.length} total cards</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">L1 Tiles Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{l1Complete}/5</span>
                <CheckCircle className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Foundation literacy achieved</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{totalUsers}</span>
                <Users className="h-4 w-4 text-purple-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Across all play cards</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Avg Maturity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{avgMaturity}%</span>
                <Star className="h-4 w-4 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Overall implementation maturity</p>
            </CardContent>
          </Card>
        </div>

        {/* Heat Map Visualization */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Trust OS Heat Map</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {heatMapTiles.map((tile) => (
              <Card key={tile.type} className="shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tile.name}</CardTitle>
                    <div className={`w-3 h-3 rounded-full ${getTileColor(tile.coverage)}`} />
                  </div>
                  <CardDescription className="text-xs">
                    {tile.coverage}% coverage • {tile.active_users} active users
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>L1</span>
                      {getStatusIcon(tile.l1_status)}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>L2</span>
                      {getStatusIcon(tile.l2_status)}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>L3</span>
                      {getStatusIcon(tile.l3_status)}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Maturity</span>
                      <span>{tile.maturity_score}%</span>
                    </div>
                    <Progress value={tile.maturity_score} className="h-2" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View Cards
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Literacy Progression */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Literacy Ladder Progression
              </CardTitle>
              <CardDescription>
                Team progression through BN Trust OS methodology levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">L0→L1</div>
                  <div className="text-sm text-muted-foreground">Foundation</div>
                  <div className="text-lg font-semibold">25 graduates</div>
                  <Progress value={100} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">L1→L2</div>
                  <div className="text-sm text-muted-foreground">Advanced</div>
                  <div className="text-lg font-semibold">8 candidates</div>
                  <Progress value={32} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">L2→L3</div>
                  <div className="text-sm text-muted-foreground">Expert</div>
                  <div className="text-lg font-semibold">2 pilots</div>
                  <Progress value={25} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">L3</div>
                  <div className="text-sm text-muted-foreground">Innovation</div>
                  <div className="text-lg font-semibold">0 achieved</div>
                  <Progress value={0} className="h-2 mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Play Cards Library */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Play Cards Library</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input 
                  placeholder="Search play cards..." 
                  className="pl-10 pr-4 py-2 border rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {playCards.map((card) => (
              <Card key={card.id} className="shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(card.status)}
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <Badge className={`text-xs ${getLiteracyBadgeColor(card.literacy_level)}`}>
                          {card.literacy_level}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(card.status)}`}>
                          {card.status.replace('_', ' ')}
                        </Badge>
                        <Badge variant="outline" className="text-xs capitalize">
                          {card.tile}
                        </Badge>
                      </div>
                      <CardDescription className="max-w-2xl">
                        {card.description}
                      </CardDescription>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {card.users_active}/{card.total_users} users
                        </span>
                        <span>
                          {card.initiatives_completed} initiatives
                        </span>
                        <span>
                          {card.avg_time_saved}% time saved
                        </span>
                        <span>
                          {card.success_rate}% success rate
                        </span>
                        {card.foundation_required && (
                          <span className="flex items-center gap-1 text-blue-600">
                            <Shield className="h-3 w-3" />
                            Foundation required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-3 w-3" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Performance</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Adoption Rate</span>
                          <span>{Math.round((card.users_active / card.total_users) * 100)}%</span>
                        </div>
                        <Progress value={(card.users_active / card.total_users) * 100} className="h-2" />
                        <div className="flex justify-between">
                          <span>ROI Impact</span>
                          <span className={getROIColor(card.roi_impact)}>{card.roi_impact}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Implementation</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Effort Required</span>
                          <span className="capitalize">{card.implementation_effort}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Gate A Dependent</span>
                          <span>{card.gate_a_dependent ? "Yes" : "No"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Updated</span>
                          <span>{new Date(card.last_updated).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Next Steps</h4>
                      {card.next_milestone ? (
                        <div className="space-y-2">
                          <p className="text-sm">{card.next_milestone}</p>
                          <Button size="sm" className="w-full gap-2">
                            <ArrowRight className="h-3 w-3" />
                            View Roadmap
                          </Button>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No upcoming milestones</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Methodology Guide
              </CardTitle>
              <CardDescription>
                Complete guide to BN Trust OS implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                View Guide
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Progress Analytics
              </CardTitle>
              <CardDescription>
                Detailed literacy and implementation analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5" />
                Custom Play Card
              </CardTitle>
              <CardDescription>
                Create organization-specific play cards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Create Card
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}