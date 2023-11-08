'use client'
import styled, { css } from 'styled-components'
import { media } from '..'

export const Container = styled.section`
  margin: 0 auto;
  max-width: 80rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;

  ${media.lessThan.medium`
    flex-direction: column;
  `}
`

export const DivLeft = styled.div`
  ${({ theme }) => css`
    position: relative;

    height: 26rem;
    display: flex;
    align-items: center;

    span {
      position: absolute;
      font: ${theme.fonts.titles.large};

      &.top {
        top: 0;
        left: 0;
      }

      &.bottom {
        bottom: 3.2rem;
        right: 2.4rem;
      }
    }

    strong {
      font-family: ${theme.fonts.family.network};
      color: ${theme.colors.orange.default};
      font-size: 26rem;
      font-weight: 400;
    }
  `}
`

export const DivRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    p {
      font: ${theme.fonts.titles.large};
    }

    div {
      display: flex;
      gap: 4rem;
      align-items: center;
    }
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
