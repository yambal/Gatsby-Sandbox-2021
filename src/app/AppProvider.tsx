import React, { ReactNode } from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../style/theme'
import { GlobalStyle } from '../style/GlobalStyle'
import { SiteMetadataProvider } from './SiteMetadataProvider'
import { SEO } from '../components/SEO'

import {config,  library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SiteMetadataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ColorModeProvider>
          {children}
        </ColorModeProvider>
      </ThemeProvider>
    </SiteMetadataProvider>
  )
}
