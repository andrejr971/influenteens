'use client'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import { Container } from './styles'
import { ButtonProps } from './types'

const ButtonComponent: ForwardRefRenderFunction<null, ButtonProps> = (
  {
    children,
    variant = 'primary',
    size = 'normal',
    color = 'normal',
    ...props
  },
  ref
) => {
  return (
    <Container {...props} ref={ref} variant={variant} size={size} color={color}>
      {children}
    </Container>
  )
}

export const Button = forwardRef(ButtonComponent)
