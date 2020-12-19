import React, { FunctionComponent } from 'react'
import styled, { Box, SystemProps } from '@xstyled/styled-components'


type HTMLRendererProps = SystemProps & {
  html: string
}

const Wrapper = styled.divBox`
  h2 {
    color: red;
  }
`

export const HTMLRenderer = ({ html, ...wrapperProps }: HTMLRendererProps) => {
  return <Wrapper dangerouslySetInnerHTML={{__html: html}} {...wrapperProps} />
}