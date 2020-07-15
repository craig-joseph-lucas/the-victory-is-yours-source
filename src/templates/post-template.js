// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import Verse from '../components/Verse';
import { useSiteMetadata } from '../hooks';
import getOgUrl from '../utils/get-og-url';

import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data, location }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const ogUrl = getOgUrl(url, location.pathname);
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  return (

    <div>
      <Layout 
        title={`${postTitle} | ${siteTitle}`}
        ogUrl={ogUrl}
        description={metaDescription}
        socialImage={socialImage}
      >
        <Post post={data.markdownRemark} />
       
      </Layout>

    </div>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title,
        book,
        type,
        socialImage,
        verse,
        overrideVerse,
        recommendVerses,
        slug
      }
    }
  }
`;

export default PostTemplate;
