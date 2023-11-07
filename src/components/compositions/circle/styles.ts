'use client'
import styled, { css } from 'styled-components'
import { CompositionProps } from './types'

export const Container = styled.div<CompositionProps>`
  ${({ theme, color = 'default' }) => css`
    width: 1080px;
    height: 1080px;

    border-radius: 1080px;
    opacity: 0.3;
    background: ${theme.colors.orange[color]};
    filter: blur(175px);
  `}
`
