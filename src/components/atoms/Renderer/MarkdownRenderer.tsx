import React, { FunctionComponent } from 'react'
import marked from "marked"

import { HTMLRenderer } from "./HTMLRenderer"
import { SystemProps } from '@xstyled/styled-components'

type MarkdownRendererProps = SystemProps & {
  rawMarkdown?: string | null
  isPreview: boolean
}

export const MarkdownRenderer = ({
  rawMarkdown,
  isPreview,
  ...wrapperProps
}: MarkdownRendererProps) => {

  const parsedMarkdown = React.useMemo(
    () => {
      if(rawMarkdown) {
        return marked(rawMarkdown)
      }
      return 'Opps...'
    },
    [rawMarkdown]
  )

  return (<HTMLRenderer html={parsedMarkdown} {...wrapperProps}/>)
}