import { ComponentProps } from 'react'

export interface CompositionProps extends ComponentProps<'div'> {
  color?: 'light' | 'default' | 'dark' | 'darken'
}
