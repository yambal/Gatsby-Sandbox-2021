import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

/**
 * gatsby-config.js の SiteMetadata を context で提供する
 * See https://ja.reactjs.org/docs/context.html
 **/

/**
 * クエリの結果の型はビルド時に生成される
 **/
import { SiteMetadataProviderQuery } from '../types/graphql-types'

/**
 * Context 
 */
const defaultData: SiteMetadataProviderQuery = {}
export const SiteMetadataContext = React.createContext(defaultData);

/**
 * Provider
 * gatsby-browser.js に埋め込む
 **/
export const SiteMetadataProvider: React.FC = (props) => {
  // graphQl
  // Query名は graphql-types のtype宣言に利用される
  const resultData: SiteMetadataProviderQuery = useStaticQuery(graphql`
    query SiteMetadataProvider {
      site {
        siteMetadata {
          title
          description
          keywords
          imageURI
          siteUrl
          lang
        }
      }
    }
  `)

  return(
    <SiteMetadataContext.Provider value={resultData}>
      {props.children}
    </SiteMetadataContext.Provider>
  )
}

/**
 * siteMetadata を利用するときに使用
 */
export const useSiteMetadata = () => {
  return React.useContext(SiteMetadataContext).site?.siteMetadata
}