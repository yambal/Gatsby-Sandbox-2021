import React from 'react'
import PropTypes from 'prop-types'

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
      BlogPreviewTemplate
    </div>
  )
}

export default BlogPreviewTemplate
