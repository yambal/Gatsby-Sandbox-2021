import { GatsbyBrowser } from 'gatsby'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { theme } from '../style/theme'

type ProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
