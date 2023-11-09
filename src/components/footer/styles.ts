'use client'
import styled, { css } from 'styled-components'
import { media } from '..'

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

export const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1216px;
  padding: 1.6rem;

  margin: 0 auto;

  ${media.lessThan.medium`
    flex-direction: column-reverse;
  `}
`

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 56rem;
  gap: 0.4rem;

  ${media.lessThan.medium`
    align-items: center;

    p {
      text-align: center;
    }
  `}
`
