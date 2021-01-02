import React from 'react'
import { graphql, PageProps } from "gatsby"
import { Etc2TemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../SEO'
import { Container } from '../Layout/Container/Container'
import { PageLayout } from '../page/PageLayout'
import styled, { Box } from '@xstyled/styled-components'
import { findFluidMedia, findFixdMedia } from '../../app/MediaProvider'
import Img from "gatsby-image"
import { Rectangle } from '../Layout/Rectangle/Rectangle'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type Etc2TemplateDataProps = PageProps & {
  data: Etc2TemplateQuery
}

function Etc2Template(props: Etc2TemplateDataProps){
  const { data: { pageQueryData }, location } = props
  const frontmatter  = pageQueryData?.frontmatter
  const rawMarkdownBody  = pageQueryData?.rawMarkdownBody
  const sections = frontmatter?.section

  const siteMetadata = useSiteMetadata()

  return (
    <PageLayout location={location}>
      <SEO {...props} pageTitle={pageQueryData?.frontmatter?.title} pageKeywords={['テスト', '実験']}/>
      <Container>
        <h1>{pageQueryData?.frontmatter?.title}</h1>
        {sections && sections.map(
          (section, index) => {
            const title = section?.title
            const text = section?.text
            const sectionImage = section?.image
            const fluid = findFluidMedia(sectionImage)
            const fix = findFixdMedia(sectionImage)
            return (
              <Box key={`section-${index}`}>
                <h2>{title}</h2>
                <Rectangle aspect={1.618}>
                  {fluid && <Img fluid={fluid} alt=""/>}
                </Rectangle>
                <MarkdownRenderer rawMarkdown={text} isPreview={false} />
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
        eyecatch
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