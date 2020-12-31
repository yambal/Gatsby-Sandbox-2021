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
              fixed {
                ...GatsbyImageSharpFixed
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
  if(!relativePath){
    return undefined
  }
  const Medias = React.useContext(MediaContext)
  const findMedia = Medias.allFile.edges.find(
    (edge) => {
      console.log(`/media/${edge.node.relativePath} === ${relativePath}`)
      return `/media/${edge.node.relativePath}` === relativePath
    }
  )
  if(findMedia && findMedia.node.childImageSharp?.fluid) {
    const findMediaFluid = findMedia.node.childImageSharp?.fluid
    const fluid: FluidObject = {
      sizes: findMediaFluid.sizes,
      srcSet: findMediaFluid.srcSet,
      src: findMediaFluid.srcSet,
      aspectRatio: findMediaFluid.aspectRatio
    }
    return fluid
  }
  return undefined
}