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
      options: {
        modulePath: resolve(__dirname, '../cms/cms.tsx'),
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '../assets'),
        name: 'assets',
      },
    },
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
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `src/types/graphql-types.d.ts`
      }
    }
  ],
};

export default gatsbyConfig;
