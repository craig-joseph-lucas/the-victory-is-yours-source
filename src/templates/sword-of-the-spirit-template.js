// @flow strict
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import InfoIcon from '../components/Svgs/info';
import TopicFilters from '../components/Filters/TopicFilters';
import { SWORD_OF_THE_SPIRIT } from '../constants';
import SwordOfTheSpiritIcon from '../components/Svgs/SwordOfTheSpirit';
import { useSiteMetadata, useTagsList } from '../hooks';
import type { MarkdownRemark } from '../types';
import gridHelpers from '../utils/grid';
import getVersesByTopic from '../utils/get-verses-by-topic';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const SwordOfTheSpiritTemplate = ({ data, pageContext, location }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const postTitle = 'The Sword of the Spirit';
  const metaDescription = '';
  const socialImage = '';
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const {
    IMAGE_PATH, DEK, TITLE, LANDING_URL
  } = SWORD_OF_THE_SPIRIT;
  const {
    verses, filters, devotionals, activeTopic
  } = pageContext;
  const urlSearchParams = new URLSearchParams(location.search);
  const urlParams = Object.fromEntries(urlSearchParams.entries());
  const { topic } = urlParams;
  const gridItems = gridHelpers.getGridContentItems(verses, devotionals, isDesktopOrLaptop);

  return (
    <div>

      <Hero
        image={{
          url: IMAGE_PATH
        }}
        dek={DEK}
        title={TITLE}
        Logo={SwordOfTheSpiritIcon}
        FooterElement={
          <TopicFilters topicLandingUrl={LANDING_URL} isDesktopOrLaptop={isDesktopOrLaptop}tags={filters} activeTopic={activeTopic || topic} />}
      />
      <Layout
        title={`${postTitle} | ${siteTitle}`}
        description={metaDescription}
        noIndex
        socialImage={socialImage}
        layoutStyles={{
          margin: '0 20px',
          maxWidth: 'none'
        }}
        containerStyles={{
          backgroundColor: '#f2f2f2'
        }}
      >
        <Grid
          verseTopic={topic}
          verses={verses}
          devotionals={devotionals}
          gridItems={gridItems}
          isDesktopOrLaptop={isDesktopOrLaptop}
        />
    </Layout>

    </div>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(limit: 5, skip: 0, filter: {frontmatter: {tags: {}, template: {eq: "post"}, draft: {ne: true}}}, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
            description
            tags
            verse
          }
        }
      }
    }
  }
  `;


export default SwordOfTheSpiritTemplate;
