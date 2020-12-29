import React from 'react'
import { graphql, Link, PageProps } from "gatsby"
import { HomeTemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { Box } from '@xstyled/styled-components'
import { ColorModeSwitcher } from '../organisms/ColorModeSwitcher'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../SEO'
import { Container } from '../Layout/Container/Container'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon/Icon'
import { PageLayout } from '../page/PageLayout'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type HomeTemplateDataProps = PageProps & {
  data: HomeTemplateQuery
}

function HomeTemplate(props: HomeTemplateDataProps){
  const { data: { pageQueryData }, location } = props
  const siteMetadata = useSiteMetadata()

  return (
    <PageLayout location={location}>
      <SEO {...props}/>
      <Container>
        <h1>{siteMetadata?.title}</h1>
        <MarkdownRenderer rawMarkdown={pageQueryData?.rawMarkdownBody} isPreview={false} />
        <Link to="/blog/test/">Test</Link>
        <Button variant="primary">Button</Button>
        <Button variant="success">Success</Button>
        <Icon prefix="fas" iconName="coffee" />
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
  query HomeTemplate($id: String) {
    pageQueryData: markdownRemark(id: {eq: $id}) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`

export default HomeTemplate