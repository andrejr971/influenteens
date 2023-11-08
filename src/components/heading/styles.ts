'use client'
import styled, { css } from 'styled-components'
import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
  ${({ theme, sizes }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      z-index: 0;

      font-family: ${theme.fonts.family.mabry};
      color: ${theme.colors.orange.default};
      font-size: ${theme.fonts.sizes[sizes]};
    }

    strong {
      z-index: 1;
      font-family: ${theme.fonts.family.network};
      color: ${theme.colors.orange.darken};
      font-size: ${theme.fonts.sizes[sizes]};
      font-weight: 300;
    }
  `}
`
