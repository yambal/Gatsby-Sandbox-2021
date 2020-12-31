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
import { FluidObject, FixedObject } from "gatsby-image";

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
              fixed(width: 1280, height: 720, toFormat: WEBP, cropFocus: CENTER, fit: COVER, webpQuality: 50) {
                base64
                aspectRatio
                width
                height
                src
                srcSet
              }
              fluid(toFormat: WEBP, webpQuality: 50, maxWidth: 1280, srcSetBreakpoints: [576, 767, 991, 1199]) {
                base64
                aspectRatio
                src
                srcSet
                sizes
                originalImg
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

export const findFixdMedia = (relativePath: string | null | undefined) => {
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
  if(findMedia && findMedia.node.childImageSharp?.fixed) {
    const findMediaFixed = findMedia.node.childImageSharp?.fixed
    const fixedBase64 = findMediaFixed.base64
    if(findMediaFixed && fixedBase64){
      const fluid: FixedObject = {
        base64: fixedBase64,
        width: findMediaFixed.width,
        height: findMediaFixed.height,
        srcSet: findMediaFixed.srcSet,
        src: findMediaFixed.src,
      }
      return fluid
    }
  }
  return undefined
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
      src: findMediaFluid.src,
      aspectRatio: findMediaFluid.aspectRatio
    }
    return fluid
  }
  return undefined
}