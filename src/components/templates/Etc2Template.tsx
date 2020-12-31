import React from 'react'
import { graphql, PageProps } from "gatsby"
import { Etc2TemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../SEO'
import { Container } from '../Layout/Container/Container'
import { PageLayout } from '../page/PageLayout'
import { Box } from '@xstyled/styled-components'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type Etc2TemplateDataProps = PageProps & {
  data: Etc2TemplateQuery
}

function Etc2Template(props: Etc2TemplateDataProps){
  const { data: { pageQueryData }, location } = props
  const { rawMarkdownBody, frontmatter } = pageQueryData
  const { section: sections } = frontmatter
  const siteMetadata = useSiteMetadata()

  return (
    <PageLayout location={location}>
      <SEO {...props} pageTitle={pageQueryData?.frontmatter?.title} pageKeywords={['テスト', '実験']}/>
      <Container>
        <h1>{pageQueryData?.frontmatter?.title}</h1>
        {sections && sections.map(
          (section, index) => {
            return (
              <Box key={`section-${index}`}>
                <h2>{section.title}</h2>
                <MarkdownRenderer rawMarkdown={section.text} isPreview={false} />
                {section.image}
              </Box>
            )
          }
        )}
        <MarkdownRenderer rawMarkdown={rawMarkdownBody} isPreview={false} />
        <pre>{JSON.stringify(pageQueryData, null, 2)}</pre>
      </Container>
    </PageLayout>
  )
}

/**
 * Node の id を受け取り、詳細データをリクエストする
 * $id は createPage(gatsby-node.js) で挿入された context である
 * 
 * 本当は useStaticQuery で組んだ方がスマートだろうけど、変数が使えない
 */
export const pageQuery = graphql`
  query Etc2Template($id: String) {
    pageQueryData: markdownRemark(id: {eq: $id}) {
      rawMarkdownBody
      frontmatter {
        title
        lead
        publish_date
        section {
          image
          title
          text
        }
      }
      rawMarkdownBody
    }
  }
`

export default Etc2Template