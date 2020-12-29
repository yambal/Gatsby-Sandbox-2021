import React, { ReactNode } from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../style/theme'
import { GlobalStyle } from '../style/GlobalStyle'
import { SiteMetadataProvider } from './SiteMetadataProvider'
import { SEO } from '../components/SEO'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SiteMetadataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </SiteMetadataProvider>
  )
}
