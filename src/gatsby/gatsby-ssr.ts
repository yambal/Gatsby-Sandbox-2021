import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'

export function onRenderBody({ setPreBodyComponents }: any) {
  setPreBodyComponents([getColorModeInitScriptElement()])
}

export { wrapPageElement } from './api/wrapPageElement';

