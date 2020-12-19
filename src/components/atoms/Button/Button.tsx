import styled, { SystemProps } from '@xstyled/styled-components'


export type ButtonProps = SystemProps & {
}

export const Button = styled.buttonBox<ButtonProps>`
  background: transparent;
  border-radius: 3;
  border: 2;
  border-color: primary;
  color: primary;
  margin: 0 3;
  padding: 1 3;
`