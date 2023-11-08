'use client'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import { Container, Content, Error } from './styles'
import { InputProps } from './types'

const InputComponent: ForwardRefRenderFunction<null, InputProps> = (
  { label, isRequired, icon: Icon, errorText, ...props },
  ref
) => {
  return (
    <Container>
      <label>
        {label} {isRequired && <span>*</span>}
      </label>

      <Content>
        {Icon && <Icon />}
        <input {...props} ref={ref} />
      </Content>

      {errorText && <Error>{errorText}</Error>}
    </Container>
  )
}

export const Input = forwardRef(InputComponent)
