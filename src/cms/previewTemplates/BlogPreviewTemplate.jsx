import React from 'react'
import PropTypes from 'prop-types'

const BlogPreviewTemplate = ({ entry, widgetFor }) => {
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

BlogPreviewTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPreviewTemplate
