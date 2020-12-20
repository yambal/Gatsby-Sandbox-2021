import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../src/style/theme'
import { GlobalStyle } from '../src/style/GlobalStyle'

export const globalTypes = {
  themeColorMode: {
    name: `ThemeColorMode`,
    description: 'theme color mode',
    defaultValue: 'default',
    toolbar: {
      items: ['default', 'new']
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ColorModeProvider target={null} targetSelector={null}>
        <ThemeColorInjector colorMode={context.globals.themeColorMode}>
          {children}
        </ThemeColorInjector>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}