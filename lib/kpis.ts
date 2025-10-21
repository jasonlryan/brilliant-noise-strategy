// KPI tracking utilities for Fast Three metrics
// TTFE: Time to First Evidence
// TTFW: Time to First Workflow

export interface TTFEData {
  timestamp: string
  event: string
  daysFromStart: number
}

export interface TTFWData {
  submittedAt: string | null  // First workflow submission timestamp
  approvedAt: string | null   // First workflow approval timestamp
  workflowType: string | null
  user: string | null
  status: 'pending' | 'complete'
}

export function getTTFE(): TTFEData | null {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem('ttfe')
  if (!stored) return null

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export function getTTFW(): TTFWData {
  if (typeof window === 'undefined') {
    return { submittedAt: null, approvedAt: null, workflowType: null, user: null, status: 'pending' }
  }

  const stored = localStorage.getItem('ttfw')
  if (!stored) {
    return { submittedAt: null, approvedAt: null, workflowType: null, user: null, status: 'pending' }
  }

  try {
    return JSON.parse(stored)
  } catch {
    return { submittedAt: null, approvedAt: null, workflowType: null, user: null, status: 'pending' }
  }
}

export function calculateDaysSince(timestamp: string): number {
  const eventDate = new Date(timestamp)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - eventDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function setTTFW(workflowType: string, user?: string) {
  if (typeof window === 'undefined') return

  const ttfwData: TTFWData = {
    submittedAt: new Date().toISOString(),
    approvedAt: null,
    workflowType,
    user: user || 'Unknown',
    status: 'pending'
  }

  localStorage.setItem('ttfw', JSON.stringify(ttfwData))
}

export function completeTTFW() {
  if (typeof window === 'undefined') return

  const existing = getTTFW()
  if (existing.status === 'complete') return // Already completed

  const updated: TTFWData = {
    ...existing,
    approvedAt: new Date().toISOString(),
    status: 'complete'
  }

  localStorage.setItem('ttfw', JSON.stringify(updated))
}
