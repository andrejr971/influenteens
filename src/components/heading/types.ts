import { theme } from '@/styles'
import { ElementType } from 'react'

export interface HeadingProps {
  title: string
  as?: ElementType
  sizes?: 'xhuge' | 'huge' | 'large' | 'medium' | 'small' | 'xsmall'
}

export interface ContainerProps {
  sizes: 'xhuge' | 'huge' | 'large' | 'medium' | 'small' | 'xsmall'
}
