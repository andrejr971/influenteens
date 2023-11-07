import { Container } from './styles'
import { ButtonProps } from './types'

export function Button({
  children,
  variant = 'primary',
  size = 'normal',
  ...props
}: ButtonProps) {
  return (
    <Container {...props} variant={variant} size={size}>
      {children}
    </Container>
  )
}
