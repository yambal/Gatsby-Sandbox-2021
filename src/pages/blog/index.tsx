import React from 'react'
import { graphql, Link, PageProps } from "gatsby"
import { BlogIndexQuery } from "../../types/graphql-types"
import { Box } from '@xstyled/styled-components'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../../components/SEO'
import { Container } from '../../components/Layout/Container/Container'

type BlogIndexDataProps = PageProps & {
  data: BlogIndexQuery
}

function BlogIndex(props: BlogIndexDataProps){
  const { data: { pageQueryData } } = props
  const siteMetadata = useSiteMetadata()

  return (
    <Box bg="bg">
      <SEO {...props} pageTitle="Blog Indexe" pageKeywords={['テスト', '実験']}/>
      <Container>
        <Box as="h1">Blog Index</Box>
        {pageQueryData.edges.map(
          (edge) => {
            if (edge.node.fields?.slug && edge.node.frontmatter?.title) {
              return (
                <Box>
                  <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                  {edge.node.frontmatter.publish_date}
                </Box>
              )
            }
          }
        )}
      </Container>
    </Box>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    pageQueryData:   allMarkdownRemark(filter: {frontmatter: {template: {eq: "BlogTemplate"}}}, sort: {fields: frontmatter___publish_date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            publish_date(formatString: "YYYY-MM-DD")
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
            publish_date(formatString: "YYYY-MM-DD")
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
            publish_date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`

export default BlogIndex