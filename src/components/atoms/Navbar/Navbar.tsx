import styled, { css, SystemProps } from "@xstyled/styled-components";

import React, { ComponentProps, FunctionComponent } from 'react'

/*
const Wrapper = styled.navBox`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
`

type NavbarProps = ComponentProps<typeof Wrapper> & SystemProps & {
}

export function Navbar({children, ...wrapperProps}: NavbarProps) {
  return (
    <Wrapper {...wrapperProps}>
      {children}
    </Wrapper>
  )
}
*/

export const Navbar = styled.divBox`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
`
