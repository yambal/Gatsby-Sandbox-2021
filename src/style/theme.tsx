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
    /* premary */
    btnPrimaryBg: colors.primary,
    btnPrimaryHBg: darken(0.1, colors.primary), 
    btnPrimaryBdr: colors.transparent,
    btnPrimaryHBdr: darken(0.2, colors.primary),
    btnPrimaryFg: colors.white,
    btnPrimaryHFg: colors.white,

    /* secondary */
    btnSecondaryBg: colors.secondary,
    btnSecondaryHBg: darken(0.1, colors.secondary),
    btnSecondaryBdr: colors.transparent,
    btnSecondaryHBdr: darken(0.2, colors.secondary),
    btnSecondaryFg: colors.white,
    btnSecondaryHFg: colors.white,

    /* success */
    btnSuccessBg: colors.success,
    btnSuccessHBg: darken(0.1, colors.success),
    btnSuccessBdr: colors.transparent,
    btnSuccessHBdr: darken(0.2, colors.success),
    btnSuccessFg: colors.white,
    btnSuccessHFg: colors.white,

    /* danger */
    btnDangerBg: colors.danger,
    btnDangerHBg: darken(0.1, colors.danger),
    btnDangerBdr: colors.transparent,
    btnDangerHBdr: darken(0.2, colors.danger),
    btnDangerFg: colors.white,
    btnDangerHFg: colors.white,

    /* warning */
    btnWarningBg: colors.warning,
    btnWarningHBg: darken(0.1, colors.warning),
    btnWarninBdr: colors.transparent,
    btnWarninHBdr: darken(0.2, colors.warning),
    btnWarningFg: colors.textBase,
    btnWarningHFg: colors.textBase,

    /* info */
    btnInfoBg: colors.info,
    btnInfoHBg: darken(0.05, colors.info),
    btnInfoBdr: colors.transparent,
    btnInfoHBdr: darken(0.1, colors.info),
    btnInfoFg: colors.white,
    btnInfoHFg: colors.white,

    /* light */
    btnLightBg: colors.light,
    btnLightHBg: darken(0.05, colors.light),
    btnLightBdr: colors.transparent,
    btnLightHBdr: darken(0.1, colors.light),
    btnLightFg: colors.textBase,
    btnLightHFg: colors.textBase,

    /* Dark */
    btnDarkBg: colors.dark,
    btnDarkHbg: darken(0.1, colors.dark),
    btnDarkBdr: colors.transparent,
    btnDarkHBdr: darken(0.2, colors.dark),
    btnDarkFg: colors.white,
    btnDarkHFg: colors.white,

    /* link */
    btnLinkBg: colors.transparent,
    btnLinkHbg: colors.transparent,
    btnLinkBdr: colors.transparent,
    btnLinkHBdr: colors.transparent,
    btnLinkFg: colors.blue,
    btnLinkHFg: darken(0.2, colors.blue),

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
    btnPrimaryFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.primary)};`,
    btnSecondaryFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.secondary)};`,
    btnSuccessFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.success)};`,
    btnDangerFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.danger)};`,
    btnWarningFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.warning)};`,
    btnInfoFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.info)};`,
    btnLightFocus: `0 0 0 0.2rem ${transparentize(0.5, darken(0.2, colors.light))};`,
    btnDarkFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.dark)};`,
    btnLinkFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.blue)};`
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