import { About, CompositionsCircle, Header, Hero, Invite } from '@/components'
import { Container } from './style'
import { Gallery } from '@/components/gallery'

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />

      <CompositionsCircle
        color="dark"
        style={{
          position: 'absolute',
          left: '-640px',
          top: '640px',
          zIndex: '-1',
        }}
      />

      <CompositionsCircle
        color="default"
        style={{
          position: 'absolute',
          right: '-640px',
          top: '1583px',
          zIndex: '-1',
        }}
      />

      <Gallery />

      <Invite />
    </Container>
  )
}
