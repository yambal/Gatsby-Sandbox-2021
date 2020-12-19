import React from 'react'
import PropTypes from 'prop-types'
// import { HomeTemplate } from '../../components/templates/HomeTemplate'

const HomePreview = (props: any) => {
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  )
}

export default HomePreview