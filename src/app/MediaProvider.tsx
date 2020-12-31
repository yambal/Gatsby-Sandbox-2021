import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

/**
 * gatsby-config.js の Media を context で提供する
 * See https://ja.reactjs.org/docs/context.html
 **/

/**
 * クエリの結果の型はビルド時に生成される
 **/
import { MediaProviderQuery } from '../types/graphql-types'
import { FluidObject } from "gatsby-image";

/**
 * Context 
 */
const defaultData: MediaProviderQuery = {
  allFile: {
    totalCount: 0,
    edges: []
  }
}
export const MediaContext = React.createContext(defaultData);

/**
 * Provider
 * gatsby-browser.js に埋め込む
 **/
export const MediaProvider: React.FC = (props) => {
  // graphQl
  // Query名は graphql-types のtype宣言に利用される
  const resultData: MediaProviderQuery = useStaticQuery(graphql`
    query MediaProvider {
      allFile(filter: {sourceInstanceName: {eq: "media"}}) {
        totalCount
        edges {
          node {
            sourceInstanceName
            relativePath
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return(
    <MediaContext.Provider value={resultData}>
      {props.children}
    </MediaContext.Provider>
  )
}

/**
 * Media を利用するときに使用
 */
export const useMedia = () => {
  return React.useContext(MediaContext)
}

export const findFluidMedia = (relativePath: string | null | undefined) => {
  console.log(findFluidMedia)

  if(!relativePath){
    return undefined
  }
  const Medias = React.useContext(MediaContext)
  const media = Medias.allFile.edges.find(
    (edge) => {
      console.log(`/media/${edge.node.relativePath} === ${relativePath}`)
      return `/media/${edge.node.relativePath}` === relativePath
    }
  )
  if(media && media.node.childImageSharp?.fluid) {
    const f = media.node.childImageSharp?.fluid
    const r: FluidObject = {
      sizes: f?.sizes,
      srcSet: f?.srcSet,
      src: f?.srcSet,
      aspectRatio: f?.aspectRatio
    }
    return r
  }
  return undefined
}