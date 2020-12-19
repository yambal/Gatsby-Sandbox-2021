import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import favicon from '../../assets/favicon.ico';
import { useSiteMetadata } from '../../app/SiteMetadataProvider';

type SEOProps = PageProps &{
  pageTitle?: string | null
  description?: string
  pageKeywords?: string[]
  lang?: string
}

export const SEO: FunctionComponent<SEOProps> = ({
  location,
  pageTitle,
  description,
  pageKeywords,
  lang
}: SEOProps) => {
  const siteMetadata = useSiteMetadata()

  const siteTitle = siteMetadata?.title || 'hoge'
  const mataDesc =  description || siteMetadata?.description || 'description'
  const htmlLang = lang || siteMetadata?.lang || 'en'
  const keywords = pageKeywords || siteMetadata?.keywords || []

  return (
    <Helmet
      title={pageTitle || ''}
      defaultTitle={siteTitle}
      titleTemplate={`%s - ${siteTitle}`}
      htmlAttributes={{ lang: htmlLang }}
      meta={[
        {
          name: 'description',
          content: mataDesc
        },
        {
          property: 'og:title',
          content: pageTitle ? `${siteTitle} - ${siteTitle}` : siteTitle,
        },
        {
          property: 'og:description',
          content: mataDesc
        },
        {
          property: 'keywords',
          content: [keywords].join(', '),
        },
        {
          property: 'og:url',
          content: location.href,
        }
      ]}
    />
  )
  /*
  return (
    <Helmet
      title={title || ''}
      defaultTitle={siteMetadata?.title || ''}
      titleTemplate={`${siteMetadata.title} - %s`}
      htmlAttributes={{ lang: language }}
      link={[{ rel: 'icon', type: 'image/ico', href: favicon }]}
      meta={[
        {
          name: 'description',
          content: description || siteMetadata?.description?,
        },
        {
          property: 'keywords',
          content: [...keywords, ...siteMetadata.keywords].join(', '),
        },
        {
          property: 'og:title',
          content: title || siteMetadata.title,
        },
        {
          property: 'og:url',
          content: location.href,
        },
        {
          property: 'og:description',
          content: description || siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: `${location.origin}${imageURI || siteMetadata.imageURI}`,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
  );
  */
};
