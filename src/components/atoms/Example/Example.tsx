import React from 'react'
import styled, { Box, css } from '@xstyled/styled-components'
import { SystemProps } from '@xstyled/system'

type WrapperProps = SystemProps &{
  label?: string
}
export const Wrapper = styled.divBox<WrapperProps>`
  padding: 0;
  border: solid #f8f9fa;
  border-width: 4px;
  margin-bottom: 1rem;
`
export const Label = styled.divBox`
  background-color: #f8f9fa;
  padding-top: calc(0.5rem-4px);
  padding-left: 0.5rem;
  padding-light: 0.5em;
  padding-bottom: 0.5em;
  margin: 0 0 1rem 0;
`

type ExsampleProps =  SystemProps & {
  label?: string
  children: React.ReactNode
}

export function Exsample({ children, label, ...wrapperProps }: ExsampleProps){
  return (
    <Wrapper {...wrapperProps} label={label}>
      {label && <Label>{label}</Label>}
      <Box m="1rem">
        {children}
      </Box>
    </Wrapper>
  )
}