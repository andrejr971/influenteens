import { ComponentProps, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'normal' | 'full'
  color?: 'normal' | 'white'
}

export interface ContainerProps {
  variant: 'primary' | 'secondary'
  size: 'small' | 'normal' | 'full'
  color: 'normal' | 'white'
}
