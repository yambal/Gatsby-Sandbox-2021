import { GatsbyNode } from "gatsby"
const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')


export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node, actions, getNode, reporter
}) => {
  reporter.info('onCreateNode')
  const { createNodeField } = actions
  /**
   * Markdown の Node の場合、graphQL のレスポンスにフィールドを追加する
   * createFilePath は、MDファイルのファイル情報（Dir, Name）によってパスを生成する
   */
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter
}) => {
  reporter.info('--- createPages ---')
  
  const { createPage } = actions

  /**
   * Markdown を取得する
   * edges.node.fields.slug は onCreateNode で付加したもの
   * edges.node.frontmatter.template は、そのMDをどのテンプレートで描画するかを指定するものとして、MDで指定されている事を期待している
   */
  await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `).then((result: any) => {
    if (result.errors) {
      result.errors.forEach((e: any) => {
        reporter.error(e.toString())
      })
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark
    edges.forEach((edge: any) => {
      /**
       * edges.node.frontmatter.template によってテンプレートを切り替える
       * テンプレート側の graphQl で node を特定するために id を渡している
       */
      const { id, fields:{ slug }, frontmatter:{ template } } = edge.node
      console.log(id, slug, template )
      createPage({
        path: slug,
        component: path.resolve(
          `src/components/templates/${String(template)}.tsx`
        ),
        context: {
          id
        },
      })
    })
  })
}
