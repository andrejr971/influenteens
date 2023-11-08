'use client'
import dynamic from 'next/dynamic'
import { Check, MapPin, ShareNetwork } from '@phosphor-icons/react'
import { Button, LogoInfluenTeens, MediaMatch } from '..'

import { Container, Content, GroupButtons } from './styles'

const Modal = dynamic(async () => (await import('../modal')).Modal, {
  ssr: false,
})

const ModalConfirmation = dynamic(
  async () => (await import('../modal-confimation')).ModalConfirmation,
  {
    ssr: false,
  }
)

export function Header() {
  return (
    <Container>
      <Content>
        <LogoInfluenTeens />

        <MediaMatch greaterThan="medium">
          <GroupButtons>
            <Modal
              buttonTrigger={<Button variant="secondary">Como chegar</Button>}
            />
            <ModalConfirmation
              buttonTrigger={<Button>Confirmar presença</Button>}
            />
          </GroupButtons>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <GroupButtons>
            <Modal
              buttonTrigger={
                <Button size="small" variant="secondary">
                  <MapPin size={24} />
                </Button>
              }
            />
            <ModalConfirmation
              buttonTrigger={
                <Button size="small">
                  <Check size={24} />
                </Button>
              }
            />
          </GroupButtons>
        </MediaMatch>
      </Content>
    </Container>
  )
}
