import styled, { css, SystemProps } from '@xstyled/styled-components'
import { variant, th } from '@xstyled/system'
import { readableColor } from 'polished'

export type ButtonProps = SystemProps & {
  btn?: '' | 'primary' | 'success' | 'secondary' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
}

const buttonVariant = variant({
  default: 'primary',
  prop: 'btn',
  variants: {
    primary: css`
      color: ${th.color('btnPrimaryFg')};
      background-color: ${th.color('btnPrimaryBg')};
      border-color: ${th.color('btnPrimaryBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnPrimaryHFg')};
        background-color: ${th.color('btnPrimaryHBg')};
        border-color ${th.color('btnPrimaryHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnPrimaryFocus')};
      }
    `,
    secondary: css`
      color: ${th.color('btnSecondaryFg')};
      background-color: ${th.color('btnSecondaryBg')};
      border-color ${th.color('btnSecondaryBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnSecondaryHFg')};
        background-color: ${th.color('btnSecondaryHBg')};
        border-color ${th.color('btnSecondaryHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnSecondaryFocus')};
      }
    `,
    success: css`
      color: ${th.color('btnSuccessFg')};
      background-color: ${th.color('btnSuccessBg')};
      border-color ${th.color('btnSuccessBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnSuccessHFg')};
        background-color: ${th.color('btnSuccessHBg')};
        border-color ${th.color('btnSuccessHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnSuccessFocus')};
      }
    `,
    danger: css`
      color: ${th.color('btnDangerFg')};
      background-color: ${th.color('btnDangerBg')};
      border-color ${th.color('btnDangerBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnDangerHFg')};
        background-color: ${th.color('btnDangerHBg')};
        border-color ${th.color('btnDangerHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnDangerFocus')};
      }
    `,
    warning: css`
      color: ${th.color('btnWarningFg')};
      background-color: ${th.color('btnWarningBg')};
      border-color ${th.color('btnWarningBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnWarningHFg')};
        background-color: ${th.color('btnWarningHBg')};
        border-color ${th.color('btnWarningHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnWarningFocus')};
      }
    `,
    info: css`
      color: ${th.color('btnInfoFg')};
      background-color: ${th.color('btnInfoBg')};
      border-color ${th.color('btnInfoBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnInfoHFg')};
        background-color: ${th.color('btnInfoHBg')};
        border-color ${th.color('btnInfoHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnInfoFocus')};
      }
    `,
    light: css`
      color: ${th.color('btnLightFg')};
      background-color: ${th.color('btnLightBg')};
      border-color ${th.color('btnLightBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnLightHFg')};
        background-color: ${th.color('btnLightHBg')};
        border-color ${th.color('btnLightHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnLightFocus')};
      }
    `,
    dark: css`
      color: ${th.color('btnDarkFg')};
      background-color: ${th.color('btnDarkBg')};
      border-color ${th.color('btnDarkBdr')};

      &:hover,
      &:focus {
        color: ${th.color('btnDarkHFg')};
        background-color: ${th.color('btnDarkHBg')};
        border-color ${th.color('btnDarkHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnDarkFocus')};
      }
    `,
    link: css`
      color: ${th.color('btnLinkFg')};
      background-color: ${th.color('btnLinkBg')};
      border-color ${th.color('btnLinkBdr')};

      &:hover {
        color: ${th.color('btnLinkHFg')};
        text-decoration: underline;
      }
      &:hover,
      &:focus {
        background-color: ${th.color('btnLinkHBg')};
        border-color ${th.color('btnLinkHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnLinkFocus')};
      }
    `,
  }
})

export const Button = styled.buttonBox<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-width: 1px;
  border-style: solid;
  border-radius: .25rem;
  transition: ${th.transition('button')};

  &:focus {
    outline: 0;
  }

  ${buttonVariant}
`