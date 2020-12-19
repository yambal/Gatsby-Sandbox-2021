import styled, { Box, css, th, up } from "@xstyled/styled-components"
import { transitions } from "polished"

type ContainerProps = {
  fluid?: boolean
}

export const Container = (styled(Box).attrs({}) as typeof styled.divBox)<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  transition: ${th.transition('container')};

  ${props => !props.fluid && up('sm',css`max-width: ${th.size('smMax')};`)}
  ${props => !props.fluid && up('md',css`max-width: ${th.size('mdMax')};`)}
  ${props => !props.fluid && up('lg',css`max-width: ${th.size('lgMax')};`)}
  ${props => !props.fluid && up('xl',css`max-width: ${th.size('xlMax')};`)}

`