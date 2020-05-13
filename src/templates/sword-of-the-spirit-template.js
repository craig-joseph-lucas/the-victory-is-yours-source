// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import GetMostPopularTags  from '../utils/get-most-popular-tags';
import TopicFilters from '../components/Filters/TopicFilters';
import { SWORD_OF_THE_SPIRIT } from '../constants';
import SwordOfTheSpiritIcon from '../components/Svgs/SwordOfTheSpirit';
import { useSiteMetadata, useTagsList } from '../hooks';
import type { MarkdownRemark } from '../types';
import Masonry from 'react-masonry-css';
import getMostPopularTags from '../utils/get-most-popular-tags';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const getFilters = () => {
  const tags = GetMostPopularTags(12);
  return (
    <TopicFilters tags={tags} />
  );
}

const SwordOfTheSpiritTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const postTitle = 'The Sword of the Spirit';
  const metaDescription = "";
  const socialImage = "";
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const { IMAGE_PATH, DEK, TITLE } = SWORD_OF_THE_SPIRIT;

  return (
    
    <div>

      <Hero 
        image={{
          url: IMAGE_PATH
        }}
        dek={DEK}
        title={TITLE}
        Logo={SwordOfTheSpiritIcon}
        FooterElement={getFilters()}
      />
      <Layout 
        title={`${postTitle} | ${siteTitle}`} 
        description={metaDescription}
        noIndex
        socialImage={socialImage}
        containerStyles={{
          backgroundColor: '#f2f2f2'
        }}
      >
          <Grid isDesktopOrLaptop={isDesktopOrLaptop} />
    </Layout>

    </div>
  );
};


export default SwordOfTheSpiritTemplate;
