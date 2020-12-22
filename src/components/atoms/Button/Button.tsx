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
      background: ${th.color('btnPrimaryBg')};
      border: 1px solid ${th.color('btnPrimaryBdr')};

      &:hover,
      &:focus {
        color: #fff;
        background-color: ${th.color('btnPrimaryHBg')};
        border: 1px solid ${th.color('btnPrimaryHBdr')};
      }
      &:focus {
        box-shadow: ${th.shadow('btnPrimaryFocus')};
      }
    `,
    secondary: css`
      color: ${th.color('btnSecondaryFg')};
      background: ${th.color('btnSecondaryBg')};
    `,
    success: css`
      color: ${th.color('btnSuccessFg')};
      background: ${th.color('btnSuccessBg')};
    `,
    danger: css`
      color: ${th.color('btnDangerFg')};
      background: ${th.color('btnDangerBg')};
    `,
    warning: css`
      color: ${th.color('btnWarningFg')};
      background: ${th.color('btnWarningBg')};
    `,
    info: css`
      color: ${th.color('btnInfoFg')};
      background: ${th.color('btnInfoBg')};
    `,
    light: css`
      color: ${th.color('btnLightFg')};
      background: ${th.color('btnLightBg')};
    `,
    dark: css`
      color: ${th.color('btnDarkFg')};
      background: ${th.color('btnDarkBg')};
    `,
    link: css`
      color: ${th.color('btnLinkFg')};
      background: ${th.color('btnLinkBg')};
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
  border-radius: .25rem;
  transition: ${th.transition('button')};

  &:focus {
    outline: 0;
  }

  ${buttonVariant}
`