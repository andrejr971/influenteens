import { ComponentProps, ElementType } from 'react'

export interface InputProps extends ComponentProps<'input'> {
  label: string
  isRequired?: boolean
  icon?: ElementType
  errorText?: string
}
