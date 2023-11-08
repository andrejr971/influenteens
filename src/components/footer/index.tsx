import Image from 'next/image'
import { CompositionsCircle, Invite, LogoAdf } from '..'
import { Container, ContentLogos, Credits } from './styles'

export function Footer() {
  return (
    <Container>
      <CompositionsCircle
        style={{
          position: 'absolute',
          zIndex: '-4',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: '0.2',
        }}
      />

      <Invite />

      <ContentLogos>
        <LogoAdf />

        <Image src="/images/logo.png" alt="logo" width={200} height={200} />
      </ContentLogos>

      <Credits>
        <p>2019-2023 - InfluenTeens - Todos os direitos reservados</p>
        <p>
          Desenvolvido por:
          <a href="https://andrejr.dev/">André Junior</a>
        </p>
      </Credits>
    </Container>
  )
}
