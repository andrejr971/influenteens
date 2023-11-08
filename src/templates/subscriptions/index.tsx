'use client'

import Image from 'next/image'
import { Article, Background, Container, Main } from './styles'
import { SubscriptionProps } from './types'
import { useLayoutEffect, useState } from 'react'
import { api } from '@/services'

export function Subscriptions() {
  const [total, setTotal] = useState(0)

  useLayoutEffect(() => {
    api.get('/api/subscriptions').then(({ data }) => {
      setTotal(data)
    })
  }, [])

  return (
    <Container>
      <Background>
        <Image
          src="/images/background-success.png"
          alt="background"
          width={1920}
          height={1080}
        />
      </Background>

      <Main>
        <Article>
          <Image src="/images/logo-2.png" alt="logo" width={200} height={200} />

          <p>Total de inscrições</p>
          <h1>{String(total).padStart(2, '0')}</h1>
        </Article>
      </Main>
    </Container>
  )
}
