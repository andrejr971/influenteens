'use client'

import styled, { css } from 'styled-components'
import { media } from '..'

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 7.2rem;
    border-bottom: 1px solid ${theme.colors.gray[200]};

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;

    background: linear-gradient(
      90deg,
      rgba(255, 253, 253, 0.4) 21.58%,
      rgba(255, 253, 253, 0.2) 94.64%
    );
    backdrop-filter: blur(40px);

    padding: 1.6rem;

    svg {
      width: 4rem;
      height: 4rem;
    }
  `}
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1216px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  ${media.lessThan.medium`
    gap: 1.6rem;
  `}
`
