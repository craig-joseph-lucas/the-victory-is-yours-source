// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import TopicFilters from '../components/Filters/TopicFilters';
import { SWORD_OF_THE_SPIRIT } from '../constants';
import SwordOfTheSpiritIcon from '../components/Svgs/SwordOfTheSpirit';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';
import Masonry from 'react-masonry-css';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const SwordOfTheSpiritTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const postTitle = 'Our Daily Manna'
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
        FooterElement={<TopicFilters />}
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
