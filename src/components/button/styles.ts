'use client'
import styled, { DefaultTheme, css } from 'styled-components'
import { ContainerProps } from './types'

const containerModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white.default};
    background: ${theme.colors.orange.default};

    &:hover {
      box-shadow: ${theme.effects.shadows.orange};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange.default};
    background: transparent;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.white.default};
      background: ${theme.colors.orange.default};
      box-shadow: ${theme.effects.shadows.orange};
    }
  `,
  small: (theme: DefaultTheme) => css`
    border-radius: 0.4rem;
    font: ${theme.fonsts.texts.small};
    padding: 0.8rem;
    width: fit-content;
  `,
  normal: (theme: DefaultTheme) => css`
    height: 4.8rem;
    padding: 8px 1.6rem;
    min-width: 4.8rem;
    width: fit-content;
  `,
  full: (theme: DefaultTheme) => css`
    height: 4.8rem;
    width: 100%;
    max-width: 100%;
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, variant, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 12px;

    border: 0;
    font: ${theme.fonsts.titles.xsmall};
    font-weight: 500;

    svg {
      width: 2.4rem !important;
      height: 2.4rem !important;
    }

    ${containerModifiers[variant](theme)};
    ${containerModifiers[size](theme)};
  `}
`
