'use client'
import dynamic from 'next/dynamic'
import { Button, Heading } from '..'
import { Container, Content, DivLeft, DivRight, GroupButtons } from './styles'

const Modal = dynamic(async () => (await import('../modal')).Modal, {
  ssr: false,
})
const ModalConfirmation = dynamic(
  async () => (await import('../modal-confimation')).ModalConfirmation,
  {
    ssr: false,
  }
)

export function Invite() {
  return (
    <Container>
      <Content>
        <DivLeft>
          <span className="top">Serão</span>
          <span className="bottom">dias</span>
          <strong>02</strong>
        </DivLeft>
        <DivRight>
          <p>E você é o nosso</p>
          <Heading title="Convidado" sizes="xhuge" />

          <div>
            <Heading title="17.11" as="h4" sizes="large" />
            <Heading title="18.11" as="h4" sizes="large" />
          </div>
        </DivRight>
      </Content>

      <GroupButtons>
        <Modal
          buttonTrigger={<Button variant="secondary">Como chegar</Button>}
        />
        <ModalConfirmation
          buttonTrigger={<Button>Confirmar presença</Button>}
        />
      </GroupButtons>
    </Container>
  )
}
