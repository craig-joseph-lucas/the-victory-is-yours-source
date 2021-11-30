// @flow strict
import React, { useState }from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { useMediaQuery } from 'react-responsive';

import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import getOgUrl from '../utils/get-og-url';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PageTemplate = ({ data, location }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const ogUrl = getOgUrl(url, location.pathname);
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  return (
    <Layout
      hideNav={isDesktopOrLaptop}
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
      ogUrl={ogUrl}
    >
      <div className="container">
        <Page title={pageTitle} hideSidebar>
          <div dangerouslySetInnerHTML={{ __html: pageBody }} />
        </Page>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage,
        verse,
        overrideVerse,
        type,
        book,
        recommendVerses,
        slug
      }
    }
  }
`;

export default PageTemplate;
