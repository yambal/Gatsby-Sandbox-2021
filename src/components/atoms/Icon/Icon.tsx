import React, { FunctionComponent } from 'react'

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconPrefix,
  IconName
} from '@fortawesome/fontawesome-svg-core'
import styled, { SystemProps } from '@xstyled/styled-components'

type WrapperProps = SystemProps & {}
const Wrapper = styled.spanBox<WrapperProps>``

export type IconProps = WrapperProps & {
  prefix: IconPrefix
  iconName: IconName
  size?: FontAwesomeIconProps['size']
  inverse?: FontAwesomeIconProps['inverse']
}

export function Icon({
  prefix,
  iconName,
  size,
  inverse,
  ...wrapperProps
}: IconProps) {
  const def = React.useMemo(
    ():IconDefinition => {
      const lookup: IconLookup = { prefix, iconName }
      return findIconDefinition(lookup)
    },
    [prefix, iconName]
  )

  return (
    <Wrapper {...wrapperProps}>
      {def ? <FontAwesomeIcon
        icon={def}
        size={size}
        inverse={inverse}/> : `icon not found ["${prefix}", "${iconName}"]`}
    </Wrapper>
  )
} 
