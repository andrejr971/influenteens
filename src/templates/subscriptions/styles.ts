'use client'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
`

export const Background = styled.div`
  position: absolute;
  z-index: -1;

  img {
    width: 100%;
    inset: 0;
    object-fit: cover;
  }
`

export const Main = styled.main`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
`

export const Article = styled.article`
  ${({ theme }) => css`
    width: 100%;

    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 32rem;
      height: 32rem;
    }

    color: ${theme.colors.white.default};

    p {
      font: ${theme.fonts.titles.medium};
    }

    h1 {
      font: ${theme.fonts.titles.xxlarge};
      font-size: 12rem;
    }
  `}
`
