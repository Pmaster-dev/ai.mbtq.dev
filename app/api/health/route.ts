import { NextResponse } from 'next/server'
import { PLATFORM_VERSION, PLATFORM_LABELS } from '@/lib/platform'

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  version: string
  labels: string[]
  timestamp: string
  uptime: number
  services: {
    [key: string]: {
      status: 'up' | 'down' | 'unknown'
      latency?: number
    }
  }
}

const startTime = Date.now()

export async function GET(): Promise<NextResponse<HealthStatus>> {
  const status: HealthStatus = {
    status: 'healthy',
    version: PLATFORM_VERSION,
    labels: [...PLATFORM_LABELS],
    timestamp: new Date().toISOString(),
    uptime: Math.floor((Date.now() - startTime) / 1000),
    services: {
      api: { status: 'up' },
      ai: { status: 'up' },
      accessibility: { status: 'up' },
    },
  }

  return NextResponse.json(status)
}
