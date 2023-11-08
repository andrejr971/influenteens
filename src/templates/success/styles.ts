'use client'
import { media } from '@/components'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    inset: 0;
    object-fit: cover;
    z-index: -1;
  }
`

export const Content = styled.article`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5.6rem;
    position: relative;

    p {
      max-width: 80rem;
      text-align: center;
      color: ${theme.colors.white.default};

      font-size: 3.2rem;

      &:first-child {
        padding: 1.6rem;
        margin-top: 4rem;
      }
    }

    h1 span,
    h1 strong {
      font-size: 20rem;
    }

    ${media.lessThan.large`
    h1 span,
    h1 strong {
      font-size: 15rem;
    }
  `}

    ${media.lessThan.medium`
    gap: 2.4rem;

    h1 span,
    h1 strong {
      font-size: 10rem;
    }

    p {
      max-width: 56rem;
      padding: 0;
    }
  `}

  ${media.lessThan.small`
      h1 span,
      h1 strong {
        font-size: 8rem;
      }

      p {
        max-width: 40rem;
      }
    `}
  `}
`

export const Dates = styled.div`
  display: flex;
  align-items: center;
  gap: 7.2rem;

  margin-bottom: 8rem;

  ${media.lessThan.medium`
    gap: 4rem;
  `}
`

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  ${media.lessThan.medium`
    gap: 1.6rem;
  `}
`

export const Choosen = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: -1;
    width: 100%;

    display: flex;
    flex-direction: column;

    span {
      margin-top: 4rem;
      font-family: ${theme.fonts.family.network};
      font-weight: 300;
      font-size: 36rem;
      opacity: 0.1;

      &:last-child {
        margin-left: 40rem;
        margin-top: 24rem;
      }

      ${media.lessThan.medium`
        font-size: 20rem;

        &:last-child {
          margin-top: 12rem;
        }
      `}
    }
  `}
`
