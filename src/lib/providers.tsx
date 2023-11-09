'use client'

import { PropsWithChildren } from 'react'
import { GlobalStyles, theme } from '@/styles'
import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import SEO from '../utils/next-seo.config'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <NextNprogress
          color={theme.colors.orange.default}
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
        />

        {children}
        <GlobalStyles />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
