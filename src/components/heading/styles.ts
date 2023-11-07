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
      z-index: -1;

      font-family: ${theme.fonsts.family.mabry};
      color: ${theme.colors.orange.default};
      font-size: ${theme.fonsts.sizes[sizes]};
    }

    strong {
      font-family: ${theme.fonsts.family.network};
      color: ${theme.colors.orange.darken};
      font-size: ${theme.fonsts.sizes[sizes]};
      font-weight: 300;
    }
  `}
`
