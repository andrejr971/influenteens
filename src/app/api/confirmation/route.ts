import { prisma } from '@/services'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const response = NextResponse
  const data = await request.formData()

  const name = data.get('name') as string
  const mail = data.get('mail') as string

  if (!name) {
    return response.json(
      {
        message: 'Name is required',
      },
      {
        status: 400,
      }
    )
  }

  const confirmation = await prisma.subscriptions.create({
    data: { name, mail },
  })

  return response.json(confirmation, {
    status: 201,
  })
}
