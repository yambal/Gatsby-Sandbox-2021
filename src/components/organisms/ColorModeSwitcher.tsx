import React from 'react'
import { useColorMode } from '@xstyled/styled-components'

export function ColorModeSwitcher() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  )
}