import { Container } from './styles'
import { HeadingProps } from './types'

export function Heading({ title, as = 'h2', sizes = 'huge' }: HeadingProps) {
  return (
    <Container as={as} sizes={sizes}>
      <span>{title}</span>
      <strong>{title}</strong>
    </Container>
  )
}
