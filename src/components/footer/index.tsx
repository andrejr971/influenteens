import Image from 'next/image'
import { CompositionsCircle, Invite, LogoAdf } from '..'
import {
  Container,
  ContentLogos,
  Credits,
  Informations,
  MoreInfo,
} from './styles'

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

      <Invite withDescription={false} withLocation />

      <Informations>
        <MoreInfo>
          <p>
            Para mais informações, procure o seu líder de adolescentes ou o seu
            pastor.
          </p>
          <p>
            Qualquer dúvida entre em contato pelo número <br />
            <span>(11) 98091-8095</span> ou <span>(11)94918-2776</span>.
          </p>
        </MoreInfo>

        <ContentLogos>
          <LogoAdf />

          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </ContentLogos>
      </Informations>

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
