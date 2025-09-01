import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { MainNavigation, BreadcrumbNavigation } from "@/components/navigation"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BN Trust OS - AI Risk & Trust Radar",
  description: "AI governance platform for communications - Foundation layer, methodology, and operational readiness",
  generator: "BN Trust OS v2025.01",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background">
          <MainNavigation />
          <main className="container mx-auto px-4 py-8">
            <BreadcrumbNavigation />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
