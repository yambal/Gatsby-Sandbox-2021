import * as React from 'react'
import styled, { Box, SystemProps } from "@xstyled/styled-components";


const RectangleInner = styled.divBox``

type RectangleWrapperProps = {
  aspect?: number
}

const RectangleWrapper = styled.divBox<RectangleWrapperProps>`
  position: relative;
  overflow: hidden;
  width: 100%;

  &:before {
    content: "";
    display: block;
    padding-top: ${props => props.aspect ? 1 / props.aspect * 100 : '100'}%;
  }

  ${RectangleInner} {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    /* gatsby IMG 対応*/
    .gatsby-image-wrapper {
      width: 100%; 
      height: 100%;

      div {
        display: none
      }
    }
  }
`

type RectangleProps = React.ComponentProps<typeof Box> & RectangleWrapperProps

export function Rectangle({ children, aspect }: RectangleProps) {
  return (
    <RectangleWrapper aspect={aspect}>
      <RectangleInner>
        {children}
      </RectangleInner>
    </RectangleWrapper>
  )
}