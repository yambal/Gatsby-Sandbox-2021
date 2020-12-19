import React from 'react'
import { MarkdownRenderer } from '../../components/atoms/Renderer/MarkdownRenderer'

type BlogPreviewTemplateProps = {
  entry: {
    getIn: any
  }
  widgetFor: any
}

const BlogPreviewTemplate = ({ entry, widgetFor }: BlogPreviewTemplateProps) => {
  const data = entry.getIn(['data']).toJS()
  const body = widgetFor('body').props.value

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(body, null, 2)}</pre>
      <MarkdownRenderer rawMarkdown={data.body} isPreview={true} />
    </div>
  )
}

export default BlogPreviewTemplate
