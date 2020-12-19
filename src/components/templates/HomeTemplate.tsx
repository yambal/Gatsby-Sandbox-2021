import React from 'react'
import { graphql } from "gatsby"
import { HomeTemplateQuery } from "../../types/graphql-types"
import { MarkdownRenderer } from '../atoms/Renderer/MarkdownRenderer'
import { Box } from '@xstyled/styled-components'

/**
 * pageQuery のレスポンス
 * gatsby-plugin-graphql-codegen で types\graphql-types.d.ts に自動追記される型を参照する
 **/
type HomeTemplateDataProps = {
  data: HomeTemplateQuery
}

function HomeTemplate(props: HomeTemplateDataProps){
  const { data: { pageQueryData } } = props
  return (
    <Box bg="bg">
      <h1>{pageQueryData?.frontmatter?.title}</h1>
      <MarkdownRenderer rawMarkdown={pageQueryData?.rawMarkdownBody} isPreview={false} />
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