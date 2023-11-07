import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Mabry Pro';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src:
        local('MabryPro Black'),
        local('MabryPro-Black'),
        url('/fonts/MabryPro-Black.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Mabry Pro';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src:
        local('MabryPro Medium'),
        local('MabryPro-Medium'),
        url('/fonts/MabryPro-Medium.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Mabry Pro';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src:
        local('MabryPro Regular'),
        local('MabryPro-Regular'),
        url('/fonts/MabryPro-Regular.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Mabry Pro';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src:
        local('MabryPro Light'),
        local('MabryPro-Light'),
        url('/fonts/MabryPro-Light.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Network Free Version';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src:
        local('Network Free Version'),
        local('NetworkFreeVersion'),
        url('/fonts/NetworkFreeVersion.ttf') format('ttf');
    }

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
