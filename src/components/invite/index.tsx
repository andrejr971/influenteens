'use client'
import dynamic from 'next/dynamic'
import { Button, Heading } from '..'
import { Container, Content, DivLeft, DivRight, GroupButtons } from './styles'
import { InviteProps } from './types'

const Modal = dynamic(async () => (await import('../modal')).Modal, {
  ssr: false,
})
const ModalConfirmation = dynamic(
  async () => (await import('../modal-confimation')).ModalConfirmation,
  {
    ssr: false,
  }
)

export function Invite({
  withDescription = true,
  withLocation = false,
}: InviteProps) {
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

      {withDescription && (
        <p>
          <strong>
            Reserve seu lugar agora e vamos fazer deste congresso algo realmente
            especial!
          </strong>
          <br />
          A inscrição é simples. Basta clicar no botão abaixo para preencher o
          formulário e garantir seu ingresso para duas noites que pode mudar sua
          vida. <br /> Se você tiver alguma dúvida, não hesite em entrar em
          contato conosco. <br /> Mal posso esperar para nos encontrarmos e
          compartilhar esse momento.
        </p>
      )}

      <GroupButtons>
        {withLocation && (
          <Modal
            buttonTrigger={<Button variant="secondary">Como chegar</Button>}
          />
        )}
        <ModalConfirmation
          buttonTrigger={<Button>Confirmar presença</Button>}
        />
      </GroupButtons>
    </Container>
  )
}
