export const theme = {
  colors: {
    background: '#fafafa',
    orange: {
      light: '#FACA78',
      default: '#ECA325',
      dark: '#F8780D',
      darken: '#782203',
    },
    white: {
      light: '#FFFDFD',
      default: '#fafafa',
      dark: '#f6f3f3',
    },
    black: {
      light: '#403f3f',
      default: '#282828',
      dark: '#121111',
    },
    gray: {
      100: '#f2f2f2',
      200: '#e5e1e1',
      300: '#c2bebe',
      400: '#8e8989',
      500: '#666363',
      600: '#3e3b3b',
    },
    red: '#f14a4a',
    yellow: '#f2b245',
    green: '#4ed6aa',
    blue: '#5593e8',
  },
  fonsts: {
    family: {
      mabry: "'Mabry Pro', sans-serif",
      network: "'Network Free Version', sans-serif",
    },
    titles: {
      xxlarge: "bold 7.2rem/90% 'Mabry Pro', sans-serif",
      xlarge: "bold 5.6rem/100% 'Mabry Pro', sans-serif",
      large: "bold 4.8rem/110% 'Mabry Pro', sans-serif",
      medium: "bold 3.2rem/120% 'Mabry Pro', sans-serif",
      small: "bold 2.4rem/130% 'Mabry Pro', sans-serif",
      xsmall: "bold 2rem/140% 'Mabry Pro', sans-serif",
    },
    texts: {
      medium: "normal 2.4rem/130% 'Mabry Pro', sans-serif",
      small: "normal 2rem/140% 'Mabry Pro', sans-serif",
      xsmall: "normal 1.6rem/150% 'Mabry Pro', sans-serif",
    },
    sizes: {
      xxhuge: '8.8rem',
      xhuge: '7.2rem',
      huge: '5.6rem',
      large: '4.8rem',
      medium: '3.2rem',
      small: '2.4rem',
      xsmall: '2rem',
    },
  },
  effects: {
    shadows: {
      orange: '0px 4px 40px 0px rgba(236, 163, 37, 0.20)',
    },
  },
  breakpoints: {
    huge: '1216px',
    large: '1080px',
    medium: '768px',
    small: '450px',
  },
} as const
