// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import Verse from '../components/Verse';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (

    <div>
      <Layout 
        title={`${postTitle} | ${siteTitle}`} 
        description={metaDescription}
        fullUrl={`${url}posts/${frontmatter.slug}`}
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
        title
        socialImage,
        verse,
        recommendVerses,
        slug
      }
    }
  }
`;

export default PostTemplate;
