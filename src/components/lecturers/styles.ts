'use client'
import styled from 'styled-components'
import { media } from '..'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
  max-width: 1216px;
  margin: 12rem auto;

  position: relative;
  z-index: 3;

  h3 {
    font-size: 5.6rem;
  }

  padding: 1.6rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 3.2rem;

  ${media.lessThan.medium`
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  `}
`
