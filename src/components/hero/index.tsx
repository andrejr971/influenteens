'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Choosen, Container, Content, Dates, GroupButtons } from './styles'
import { Button, Heading } from '..'

const Modal = dynamic(async () => (await import('../modal')).Modal, {
  ssr: false,
})
const ModalConfirmation = dynamic(
  async () => (await import('../modal-confimation')).ModalConfirmation,
  {
    ssr: false,
  }
)

export function Hero() {
  return (
    <Container>
      <Image
        src="/images/background.png"
        width={1920}
        height={1080}
        alt="Adolescentes adorando"
      />

      <Content>
        <Dates>
          <Heading title="17.11" as="h4" />
          <Heading title="18.11" as="h4" />
        </Dates>

        <Heading title="Escolhidos" as="h1" />

        <div>
          <p>
            Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o
            povo adquirido, para que anuncieis as virtudes daquele que vos
            chamou das trevas para a sua maravilhosa luz;
          </p>
          <p>1 Pedro 2.9</p>
        </div>

        <GroupButtons>
          <Modal
            buttonTrigger={<Button variant="secondary">Como chegar</Button>}
          />
          <ModalConfirmation
            buttonTrigger={<Button>Confirmar presença</Button>}
          />
        </GroupButtons>

        <Choosen>
          <span>Escolhidos</span>

          <span>Escolhidos</span>
        </Choosen>
      </Content>
    </Container>
  )
}
