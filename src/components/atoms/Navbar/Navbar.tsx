import styled, { Box, SystemProps } from "@xstyled/styled-components";

export const Navbar = (styled(Box).attrs({as: 'nav'}) as typeof styled.divBox)<SystemProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
`
