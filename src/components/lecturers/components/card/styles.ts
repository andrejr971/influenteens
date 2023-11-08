'use client'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2.4rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Name = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    span {
      font: ${theme.fonts.titles.medium};
      font-weight: 400;
    }

    strong {
      font: ${theme.fonts.titles.xlarge};
    }
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.orange.default};
      background: ${theme.colors.orange.default}10;
      padding: 4px 8px;
      border-radius: 0.4rem;
      width: 4rem;
      height: 4rem;

      font-size: 2.4rem;

      transition: all 0.2s ease-in;

      &:hover {
        background: ${theme.colors.orange.default};
        color: ${theme.colors.white.default};
      }
    }
  `}
`

export const FooterAdditional = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.4rem;

    span {
      text-transform: uppercase;
      color: ${theme.colors.orange.default};
      background: ${theme.colors.orange.default}10;
      padding: 4px 8px;
      border-radius: 0.4rem;

      font-size: 1.6rem;
      font-weight: 600;
    }
  `}
`
