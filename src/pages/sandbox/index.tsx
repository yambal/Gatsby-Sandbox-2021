import React from 'react'
import { graphql, Link, PageProps } from "gatsby"
import { SandBoxIndexQuery } from "../../types/graphql-types"
import { Box } from '@xstyled/styled-components'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../../components/SEO'
import { Container } from '../../components/Layout/Container/Container'
import { PageLayout } from '../../components/page/PageLayout'

type SandBoxDataProps = PageProps & {
  data: SandBoxIndexQuery
}

function SandBox(props: SandBoxDataProps){
  const { data: { pageQueryData }, location } = props
  const siteMetadata = useSiteMetadata()

  return (
    <PageLayout location={location}>
      <SEO {...props} pageTitle="砂場" pageKeywords={['テスト', '実験']}/>
      <Container>
        <Box as="h1">砂場</Box>
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
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query SandBoxIndex {
    pageQueryData:   allMarkdownRemark(filter: {frontmatter: {template: {eq: "SandboxTemplate"}}}, sort: {fields: frontmatter___publish_date, order: DESC}) {
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

export default SandBox