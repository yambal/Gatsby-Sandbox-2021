import styled, { Box, css, th, up, down } from "@xstyled/styled-components"
import { transitions } from "polished"

export type ContainerProps = {
  fluid?: boolean
  breakPoint?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = (styled(Box).attrs({}) as typeof styled.divBox)<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  transition: ${th.transition('container')};

  ${props => !props.fluid && up('sm',css`max-width: 576px;`)}
  ${props => !props.fluid && up('md',css`max-width: 722px;`)}
  ${props => !props.fluid && up('lg',css`max-width: 960px;`)}
  ${props => !props.fluid && up('xl',css`max-width: 1140px;`)}

  ${props => props.breakPoint == "xl" && down('xl', css`max-width: 100%;`)}
  ${props => props.breakPoint == "lg" && down('lg', css`max-width: 100%;`)}
  ${props => props.breakPoint == "md" && down('md', css`max-width: 100%;`)}
  ${props => props.breakPoint == "sm" && down('sm', css`max-width: 100%;`)}
`