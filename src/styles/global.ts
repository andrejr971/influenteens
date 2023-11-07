import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Network Free';
      src:
        url('fonts/NetworkFreeVersion.woff2') format('woff2'),
        url('fonts/NetworkFreeVersion.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Black.woff2') format('woff2'),
        url('fonts/MabryPro-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Regular.woff2') format('woff2'),
        url('fonts/MabryPro-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Bold.woff2') format('woff2'),
        url('fonts/MabryPro-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Medium.woff2') format('woff2'),
        url('fonts/MabryPro-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Light.woff2') format('woff2'),
        url('fonts/MabryPro-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Black.woff2') format('woff2'),
        url('fonts/MabryPro-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Italic.woff2') format('woff2'),
        url('fonts/MabryPro-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-MediumItalic.woff2') format('woff2'),
        url('fonts/MabryPro-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-LightItalic.woff2') format('woff2'),
        url('fonts/MabryPro-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-BoldItalic.woff2') format('woff2'),
        url('fonts/MabryPro-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Regular.woff2') format('woff2'),
        url('fonts/MabryPro-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-BlackItalic.woff2') format('woff2'),
        url('fonts/MabryPro-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Medium.woff2') format('woff2'),
        url('fonts/MabryPro-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Bold.woff2') format('woff2'),
        url('fonts/MabryPro-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Mabry Pro';
      src:
        url('fonts/MabryPro-Light.woff2') format('woff2'),
        url('fonts/MabryPro-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Network Free';
      src:
        url('fonts/NetworkFreeVersion.woff2') format('woff2'),
        url('fonts/NetworkFreeVersion.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
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
