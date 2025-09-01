"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Activity, 
  BookOpen, 
  BarChart3, 
  FileText,
  Settings,
  User,
  Bell,
  Search,
  Home,
  ChevronDown,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  CreditCard,
  Map
} from "lucide-react"

const navigationItems = [
  {
    title: "Executive Dashboard",
    href: "/",
    icon: Home,
    description: "Strategic overview and key insights",
    stage: "overview"
  },
  {
    title: "Risk Exposure",
    href: "/risk-exposure",
    icon: AlertTriangle,
    description: "Real-time AI risk monitoring",
    badge: "3 ACTIVE",
    stage: "automate"
  },
  {
    title: "EU AI Act Compliance",
    href: "/eu-ai-act",
    icon: Shield,
    description: "Regulatory readiness & compliance tracking",
    badge: "75%",
    stage: "automate"
  },
  {
    title: "Transformation Journey",
    href: "/transformation",
    icon: TrendingUp,
    description: "Automate → Augment → Transform progress",
    stage: "augment"
  },
  {
    title: "Business Impact",
    href: "/business-impact",
    icon: BarChart3,
    description: "ROI tracking and performance metrics",
    stage: "transform"
  },
  {
    title: "Customer Success",
    href: "/customer-success",
    icon: Users,
    description: "Value realization and QBR management",
    stage: "transform"
  },
  {
    title: "Strategy",
    href: "/strategy",
    icon: Map,
    description: "Strategic overview, roadmap, and methodology",
    stage: "overview"
  },
  {
    title: "Subscription",
    href: "/subscription",
    icon: CreditCard,
    description: "Manage your plan and billing",
    stage: "settings"
  }
]

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand */}
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">AI Risk & Trust Radar</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 transition-colors hover:text-foreground/80 ${
                  isActive ? "text-foreground" : "text-foreground/60"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
                {item.badge && (
                  <Badge variant={item.badge === "AMBER" ? "secondary" : "default"} className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Admin</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export function SidebarNavigation() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-muted/40 hidden lg:block">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            AI Risk & Trust Radar
          </h2>
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                    {item.badge && (
                      <Badge variant={item.badge === "AMBER" ? "secondary" : "default"} className="ml-auto text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
        
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-sm font-semibold tracking-tight text-muted-foreground">
            Quick Actions
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Check Risk Status
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Shield className="mr-2 h-4 w-4" />
              EU AI Act Readiness
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Award className="mr-2 h-4 w-4" />
              Generate ROI Report
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function BreadcrumbNavigation() {
  const pathname = usePathname()
  
  // Find current page info
  const currentPage = navigationItems.find(item => 
    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  )
  
  if (!currentPage || pathname === "/") return null
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground">
        Dashboard
      </Link>
      <span>/</span>
      <span className="text-foreground font-medium">{currentPage.title}</span>
    </nav>
  )
}