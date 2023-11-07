import { Container } from './styles'
import { CompositionProps } from './types'

export function CompositionsCircle({
  color = 'default',
  ...props
}: CompositionProps) {
  return <Container {...props} color={color} />
}
