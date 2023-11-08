'use client'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex !important;
    flex-direction: column;
    gap: 0.4rem;
    position: relative;

    label {
      font-size: 1.6rem;

      span {
        color: ${theme.colors.red};
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.2rem;
    background: ${theme.colors.white.dark};
    border-radius: 0.8;
    height: 4.8rem;

    &:focus-within {
      outline: auto;

      svg {
        color: ${theme.colors.orange.default};
      }
    }

    svg {
      font-size: 2.4rem;
    }

    border: 1px solid ${theme.colors.gray[200]};

    input {
      flex: 1;
      background: transparent;
      border: 0;

      color: ${theme.colors.black.light};
      font: ${theme.fonts.texts.small};

      background: transparent;
      border: none;
      width: 100%;
      height: auto;
      outline: none;

      &:disabled {
        cursor: not-allowed;
      }

      &::placeholder {
        font: ${theme.fonts.texts.xsmall};
      }
    }
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font: ${theme.fonts.texts.xsmall};
    font-size: 1.4rem;

    position: absolute;

    right: 0;
    bottom: -2.2rem;
  `}
`
