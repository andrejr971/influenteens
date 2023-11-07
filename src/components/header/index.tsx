'use client'
import { MapPin, ShareNetwork } from '@phosphor-icons/react'
import { Button, LogoInfluenTeens, MediaMatch } from '..'

import { Container, Content, GroupButtons } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <LogoInfluenTeens />

        <MediaMatch greaterThan="medium">
          <GroupButtons>
            <Button variant="secondary">Compartilhar</Button>
            <Button>Como chegar</Button>
          </GroupButtons>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <GroupButtons>
            <Button variant="secondary" size="small">
              <ShareNetwork size={24} />
            </Button>
            <Button size="small">
              <MapPin size={24} />
            </Button>
          </GroupButtons>
        </MediaMatch>
      </Content>
    </Container>
  )
}
