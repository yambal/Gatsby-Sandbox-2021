import React from 'react'
import { graphql, Link, PageProps } from "gatsby"
import { SandboxTemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { Box } from '@xstyled/styled-components'
import { ColorModeSwitcher } from '../organisms/ColorModeSwitcher'
import { useSiteMetadata } from '../../app/SiteMetadataProvider'
import { SEO } from '../SEO'
import { Container } from '../Layout/Container/Container'
import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon/Icon'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type SandboxTemplateDataProps = PageProps & {
  data: SandboxTemplateQuery
}

function SandboxTemplate(props: SandboxTemplateDataProps){
  const { data: { pageQueryData } } = props
  const siteMetadata = useSiteMetadata()

  return (
    <Box bg="bg">
      <SEO {...props}/>
      <ColorModeSwitcher />
      <Container>
        <h1>{siteMetadata?.title}</h1>
        <MarkdownRenderer rawMarkdown={pageQueryData?.rawMarkdownBody} isPreview={false} />
        <Icon prefix="far" iconName="comment" />
      </Container>
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
  query SandboxTemplate($id: String) {
    pageQueryData: markdownRemark(id: {eq: $id}) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`

export default SandboxTemplate