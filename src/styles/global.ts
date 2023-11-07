import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100vh;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.black.default};
      font: ${theme.fonsts.texts.small};

      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 0.8rem;
      }

      &::-webkit-scrollbar-track {
        background: transparent !important;
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.white.dark};
        border-radius: 8px;
      }
    }

    button {
      cursor: pointer;
    }
  `}

`
