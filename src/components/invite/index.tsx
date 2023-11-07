import { Button, Heading } from '..'
import { Container, Content, DivLeft, DivRight, GroupButtons } from './styles'

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
        <Button variant="secondary">Compartilhar</Button>
        <Button>Como chegar</Button>
      </GroupButtons>
    </Container>
  )
}
