import React from 'react'
import { graphql, PageProps } from "gatsby"
import { BlogTemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { Box } from '@xstyled/styled-components'
import { ColorModeSwitcher } from '../organisms/ColorModeSwitcher'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../SEO'
import { Container } from '../Layout/Container/Container'
import { PageLayout } from '../page/PageLayout'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type BlogTemplateDataProps = PageProps & {
  data: BlogTemplateQuery
}

function BlogTemplate(props: BlogTemplateDataProps){
  const { data: { pageQueryData }, location } = props
  const siteMetadata = useSiteMetadata()

  return (
    <PageLayout location={location}>
      <SEO {...props} pageTitle={pageQueryData?.frontmatter?.title} pageKeywords={['テスト', '実験']}/>
      <ColorModeSwitcher />
      <Container>
        <h1>{pageQueryData?.frontmatter?.title}</h1>
        <MarkdownRenderer rawMarkdown={pageQueryData?.rawMarkdownBody} isPreview={false} />
        <pre>{JSON.stringify(siteMetadata, null, 2)}</pre>
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
  query BlogTemplate($id: String) {
    pageQueryData: markdownRemark(id: {eq: $id}) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`

export default BlogTemplate