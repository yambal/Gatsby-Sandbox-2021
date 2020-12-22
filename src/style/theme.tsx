import { css } from "styled-components";
import { colors } from "./colors"
import { readableColor, darken, transparentize } from "polished";

export const theme: any = {
  //defaultColorModeName: 'new',
  useColorSchemeMediaQuery: true,

  fonts: {
    native: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
  },
  fontSizes: {
    base: '1rem',
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem'
  },

  colors: {
    btnPrimaryBg: colors.primary,
    btnPrimaryHBg: darken(0.1, colors.primary),
    btnPrimaryBdr: colors.transparent,
    btnPrimaryHBdr: darken(0.2, colors.primary),
    btnPrimaryFg: colors.white,
    btnSecondaryBg: colors.secondary,
    btnSecondaryFg: colors.white,
    btnSuccessBg: colors.success,
    btnSuccessFg: colors.white,
    btnDangerBg: colors.danger,
    btnDangerFg: colors.white,
    btnWarningBg: colors.warning,
    btnWarningFg: colors.textBase,
    btnInfoBg: colors.info,
    btnInfoFg: colors.white,
    btnLightBg: colors.light,
    btnDarkBg: colors.dark,
    btnDarkFg: colors.white,
    btnLinkBg: colors.transparent,
    btnLinkFg: colors.blue,
    modes: {
      dark: {
        btnPrimaryBg: colors.primary,
        btnSecondaryBg: colors.secondary,
        btnSuccessBg: colors.success,
        btnDangerBg: colors.danger,
        btnWarningBg: colors.warning,
        btnInfoBg: colors.info,
        btnLightBg: colors.light,
        btnDarkBg: colors.dark,
        btnLinkBg: colors.transparent,
      }
    }
  },
  shadows: {
    btnPrimaryFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.primary)};`
  },
  sizes: {
    smMax: '540px',
    mdMax: '720px',
    lgMax: '960px',
    xlMax: '1140px'
  },
  transitions: {
    container :'max-width 0.5s ease-in-out 0.5s',
    button: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
  }
}

export type AppThemeColors = typeof theme.colors

type AppTheme = (typeof theme) & {
  modes?: {
    [key: string]: AppThemeColors
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}