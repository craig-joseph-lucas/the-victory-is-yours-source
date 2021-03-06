// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import SiteComments from './SiteComments';
import VerseCarousel from '../VerseCarousel';

import Share from '../Share';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';
import { useSiteMetadata } from '../../hooks';



type Props = {
  post: Node
};
 
const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, verse, recommendVerses, overrideVerse } = post.frontmatter;
  const { facebookAppId, url } = useSiteMetadata();


  return (
    <div className={styles['post']}>

      <div className={styles['post__content']}>
        <Content body={html} title={title} verseKeyword={verse} overrideVerse={overrideVerse} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />

  
              
        <div className={styles['post__footer-share']}>
          <Share 
            slug={`${url}${slug}`}
            postTitle={post.frontmatter.title}
          />
        </div>

        
          <VerseCarousel autoPlay={false} verses={recommendVerses} />


        <div className={styles['post__comments']}>
          <SiteComments 
            slug={`${url}${slug}`} 
            postTitle={post.frontmatter.title}
            appId={facebookAppId}
          />
      </div>

        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

    </div>
  );
};

export default Post;
