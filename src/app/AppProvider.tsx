import React, { ReactNode } from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../style/theme'
import { GlobalStyle } from '../style/GlobalStyle'
import { SiteMetadataProvider } from './SiteMetadataProvider'
import { MediaProvider } from './MediaProvider'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SiteMetadataProvider>
      <MediaProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ColorModeProvider>
            {children}
          </ColorModeProvider>
        </ThemeProvider>
      </MediaProvider>
    </SiteMetadataProvider>
  )
}
