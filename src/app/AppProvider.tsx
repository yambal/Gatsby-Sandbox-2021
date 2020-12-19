import React, { ReactNode } from 'react'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../style/theme'
import { GlobalStyle } from '../style/GlobalStyle'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
