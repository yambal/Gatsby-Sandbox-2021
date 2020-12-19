import React, { FunctionComponent } from 'react'
import styled, { Box, SystemProps } from '@xstyled/styled-components'


type HTMLRendererProps = SystemProps & {
  html: string
}

export const HTMLRenderer = ({ html, ...wrapperProps }: HTMLRendererProps) => {
  return <Box dangerouslySetInnerHTML={{__html: html}} {...wrapperProps} />
}