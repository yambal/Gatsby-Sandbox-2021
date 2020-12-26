import React from 'react'
import { graphql, Link, PageProps } from "gatsby"
import { BlogIndexQuery } from "../../types/graphql-types"
import { Box } from '@xstyled/styled-components'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type BlogIndexDataProps = PageProps & {
  data: BlogIndexQuery
}

function BlogIndex(props: BlogIndexDataProps){
  const { data: { pageQueryData } } = props
  const siteMetadata = useSiteMetadata()

  return (
    <Box bg="bg">
      {pageQueryData.edges.map(
        (edge) => {
          return (
            <Box>
              <Link to={edge.node.fields?.slug}>{edge.node.frontmatter?.title}</Link>
            </Box>
          )
        }
      )}
    </Box>
  )
}

/**
 * Node の id を受け取り、詳細データをリクエストする
 * $id は createPage(gatsby-node.js) で挿入された context である
 * 
 * 本当は useStaticQuery で組んだ方がスマートだろうけど、変数が使えない
 */
export const pageQuery = graphql`
  query BlogIndex {
    pageQueryData: allMarkdownRemark(filter: {frontmatter: {template: {eq: "BlogTemplate"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          fields {
            slug
          }
          timeToRead
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default BlogIndex