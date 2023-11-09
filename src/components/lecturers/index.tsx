import { Container, Content } from './styles'
import { Card } from './components/card'

export const lecturers = [
  {
    id: 1,
    office: 'Pastor',
    name: 'Lucas',
    social: {
      instagram: 'pr_lucas_araujo',
      facebook: null,
      twitter: null,
    },
    tag: ['preletor'],
    profile: '/images/lecturers/lecturer-01.png',
    church: 'Assembleia de Deus - Brás',
  },
  {
    id: 2,
    office: 'Evangelista',
    name: 'Bruno Soares',
    social: {
      instagram: 'brunosoaresmsg',
      facebook: 'brunosoaresmsg',
      twitter: null,
    },
    tag: ['preletor'],
    profile: '/images/lecturers/lecturer-02.png',
    church: 'ADF - Regional Guarapiranga',
  },
]

export function Lecturers() {
  return (
    <Container>
      <h3>Preletores</h3>

      <Content>
        {lecturers.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </Content>
    </Container>
  )
}
