'use client'
import Image from 'next/image'
import { Choosen, Container, Content, Dates, GroupButtons } from './styles'
import { Button, Heading } from '@/components'
import { useRouter } from 'next/navigation'

export function Success() {
  const navigation = useRouter()

  return (
    <Container>
      <Image
        src="/images/background-success.png"
        alt="background"
        width={1920}
        height={1080}
      />

      <Content>
        <Dates>
          <Heading title="17.11" as="h4" />
          <Heading title="18.11" as="h4" />
        </Dates>

        <Heading title="Escolhidos" as="h1" />

        <div>
          <p>Obrigado por confirmar a sua presença</p>
          <p>Esperamos por você!!</p>
        </div>

        <GroupButtons>
          <Button onClick={() => navigation.push('/')}>Voltar para home</Button>
        </GroupButtons>

        <Choosen>
          <span>Escolhidos</span>

          <span>Escolhidos</span>
        </Choosen>
      </Content>
    </Container>
  )
}
