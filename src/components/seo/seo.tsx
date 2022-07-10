import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { SiteData } from '../../types';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

type SEOProps = { title: string; description?: string };

const SEO = ({ title, description }: SEOProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<SiteData>(query);
  const {
    siteMetadata: { siteUrl, description: defaultDescription, title: defaultTitle },
  } = site;
  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`,
    description: description || defaultDescription,
  };
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export { SEO };
