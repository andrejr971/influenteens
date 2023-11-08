import { prisma } from '@/services'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const response = NextResponse

  const total = await prisma.subscriptions.count()

  return response.json(total, {
    status: 200,
  })
}
