'use client'
import styled, { css } from 'styled-components'
import { Breakpoints, media } from '.'
import { theme } from '@/styles'

export interface ContainerProps {
  $lessThan?: Breakpoints
  $greaterThan?: Breakpoints
  $breakpointMinWidth?: number
  $breakpointMaxWidth?: number
}

const mediaMatchModifiers = {
  lessThan: (size: keyof typeof theme.breakpoints) => css`
    ${media.lessThan[size]`
      display: initial;
    `}
  `,
  greaterThan: (size: keyof typeof theme.breakpoints) => css`
    ${media.greaterThan[size]`
      display: initial;
    `}
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({
    $lessThan,
    $greaterThan,
    $breakpointMaxWidth,
    $breakpointMinWidth,
  }) => css`
    display: none;

    ${!!$lessThan && mediaMatchModifiers.lessThan($lessThan)}
    ${!!$greaterThan && mediaMatchModifiers.greaterThan($greaterThan)}

    ${!!$breakpointMaxWidth &&
    css`
      @media screen and (max-width: ${$breakpointMaxWidth}px) {
        display: initial;
      }
    `}

    ${!!$breakpointMinWidth &&
    css`
      @media screen and (min-width: ${$breakpointMinWidth}px) {
        display: initial;
      }
    `}
  `}
`
