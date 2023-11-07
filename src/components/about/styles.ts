'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  z-index: 99;

  max-width: 1216px;
  margin: 10rem auto;

  div {
    position: relative;
    width: 100%;
    height: 42rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;

    img {
      position: absolute;
      width: 100%;

      z-index: -1;
      object-fit: cover;
    }

    svg {
      width: 100%;
    }
  }

  p {
    text-align: center;
    max-width: 80rem;
  }
`
