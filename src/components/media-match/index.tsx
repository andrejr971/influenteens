'use client'

import { ReactNode } from 'react'
import { Container } from './styles'
import { css } from 'styled-components'
import { theme } from '@/styles'

export interface MediaMatchProps {
  lessThan?: Breakpoints
  greaterThan?: Breakpoints
  breakpointMinWidth?: number
  breakpointMaxWidth?: number
  children: ReactNode
}

export type Breakpoints = keyof typeof theme.breakpoints
const breakpoints = theme.breakpoints

export const media = {
  lessThan: {
    huge: (args: any) => css`
      @media (max-width: ${breakpoints.huge}) {
        ${args};
      }
    `,
    large: (args: any) => css`
      @media (max-width: ${breakpoints.large}) {
        ${args};
      }
    `,
    medium: (args: any) => css`
      @media (max-width: ${breakpoints.medium}) {
        ${args};
      }
    `,
    small: (args: any) => css`
      @media (max-width: ${breakpoints.small}) {
        ${args};
      }
    `,
  },
  greaterThan: {
    huge: (args: any) => css`
      @media (min-width: ${breakpoints.huge}) {
        ${args};
      }
    `,
    large: (args: any) => css`
      @media (min-width: ${breakpoints.large}) {
        ${args};
      }
    `,
    medium: (args: any) => css`
      @media (min-width: ${breakpoints.medium}) {
        ${args};
      }
    `,
    small: (args: any) => css`
      @media (min-width: ${breakpoints.small}) {
        ${args};
      }
    `,
  },
}

export function MediaMatch({
  children,
  breakpointMaxWidth,
  breakpointMinWidth,
  greaterThan,
  lessThan,
}: MediaMatchProps) {
  return (
    <Container
      $breakpointMaxWidth={breakpointMaxWidth}
      $breakpointMinWidth={breakpointMinWidth}
      $greaterThan={greaterThan}
      $lessThan={lessThan}
    >
      {children}
    </Container>
  )
}
