import * as React from 'react'
import { ThemeProvider, ColorModeProvider, useColorMode } from '@xstyled/styled-components'
import { theme } from '../src/style/theme'
import { GlobalStyle } from '../src/style/GlobalStyle'

export const globalTypes = {
  themeColorMode: {
    name: `ThemeColorMode`,
    description: 'theme color mode',
    defaultValue: 'default',
    toolbar: {
      items: ['default', 'dark']
    }
  }
}

const ThemeColorInjector = ({
  children,
  colorMode
}) => {
  const [_, setColorMode] = useColorMode()

  React.useEffect(
    () => {
      setColorMode(colorMode)
    },
    [colorMode]
  )

  return (
    <>
      {children}
    </>
  )
}

export const decorators = [
  /**
   * @param getStory {import('@storybook/addons').StoryGetter}
   * @param context {import('@storybook/addons').StoryContext}
   */
  (getStory, context) => {
    /**
     * stroy の parameters から MemoryRouter の props を取得する
     * @type {{ memoryRouterProps: import('react-router').MemoryRouterProps }}
     */
    const { memoryRouterProps = {} } = context.parameters?.default || {}

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ColorModeProvider target={null} targetSelector={null}>
          <ThemeColorInjector colorMode={context.globals.themeColorMode}>
            {getStory(context)}
          </ThemeColorInjector>
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}