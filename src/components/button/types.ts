import { ComponentProps, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'full'
}

export interface ContainerProps {
  variant: 'primary' | 'secondary'
  size: 'small' | 'normal' | 'full'
}
