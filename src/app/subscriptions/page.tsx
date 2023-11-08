import { prisma } from '@/services'
import { Subscriptions } from '@/templates/subscriptions'

export default async function Page() {
  const total = await prisma.subscriptions.count()

  return <Subscriptions total={total} />
}

export const revalidate = 120
