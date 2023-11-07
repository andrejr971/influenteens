'use client'

import { GlobalStyles, theme } from '@/styles'
import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'
import { PropsWithChildren } from 'react'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
