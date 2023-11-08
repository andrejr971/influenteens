import {
  About,
  CompositionsCircle,
  Footer,
  Header,
  Hero,
  Invite,
  Lecturers,
} from '@/components'
import { Container } from './style'
import { Gallery } from '@/components/gallery'

export function Home() {
  // useEffect(() => {
  //   const data = new FormData()
  //   data.append('test', 'a')

  //   api.post('/api/confirmation', data).then(({ data }) => console.log(data))
  // }, [])

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
      <Lecturers />

      <Footer />
    </Container>
  )
}
