'use client'
import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white.light};
    border-top: 1px solid ${theme.colors.gray[200]};

    padding-top: 4rem;
  `}
`

export const ContentLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  margin-top: 8rem;
`

export const Credits = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 4rem;
    border-top: 1px solid ${theme.colors.gray[200]};
    padding: 2.4rem;

    a {
      text-decoration: none;
      margin-left: 8px;
      color: ${theme.colors.orange.dark};
    }
  `}
`
