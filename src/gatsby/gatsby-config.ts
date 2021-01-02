/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* eslint-disable global-require */

import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Sandbox 2021',
    description: 'Gatsby starter featuring TypeScript, ESLint, Prettier and more...',
    keywords: ['gatsby', 'typescript', 'storybook', 'xstyled', 'styled-component'],
    imageURI: '/social.jpg',
    siteUrl: 'https://gatsby-starter-skeleton.netlify.app',
    lang: 'ja',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-svgr',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        cssLoaderOptions: {
          localIdentName: isProduction ? '[hash:base64:5]' : '[name]_[local]-[hash:base64:5]',
        },
      },
    },
      /* gatsby-source-filesystem
       * Filenodeをローカルファイルから作成する。
       * 種々のファイル形式に対応した"transformer"というプラグインがそれぞれ用意されている。
      */
/*
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '../assets'),
        name: 'assets',
      },
    },
*/
    {
      /* /src/media 配下のファイルを node に media で 登録する */
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`, // インスタンス名
        path: resolve(__dirname, '../media'),
      },
    },
    /**
     * Remarkを使用してMarkdownファイルを解析します。
     */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: resolve(__dirname, '../pages'),
              name: 'pages',
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: true,
        noInlineHighlight: false,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `src/types/graphql-types.d.ts`
      }
    }
  ],
};

export default gatsbyConfig;
