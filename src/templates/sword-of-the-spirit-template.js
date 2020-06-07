// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { useMediaQuery } from 'react-responsive';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import GetMostPopularTags  from '../utils/tags/get-most-popular-tags';
import TopicFilters from '../components/Filters/TopicFilters';
import { SWORD_OF_THE_SPIRIT } from '../constants';
import SwordOfTheSpiritIcon from '../components/Svgs/SwordOfTheSpirit';
import { useSiteMetadata, useTagsList } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

function addItemEvery(arr, item, starting, frequency) {
  for (var i = 0, a = []; i < arr.length; i++) {
    a.push(arr[i]);
    if ((i + 1 + starting) % frequency === 0) {
      a.push(item);
      i++;
      if(arr[i]) a.push(arr[i]);
    }
  }
  return a;
}

function shuffleGridItems(verseItems, devotionalItems, isDesktopOrLaptop) {
  if (!devotionalItems.length) {
    return verseItems;
  }
  let devOccurence = isDesktopOrLaptop ? 4 : 3;
  let finalArray;
  devotionalItems.forEach((item, index) => {
    finalArray = addItemEvery([...verseItems], item, 2, devOccurence);
  });
  return finalArray;
}

function getGridContentItems(verses, devotionals, isDesktopOrLaptop){
  const finalVerses = verses.map(verse => {
    return {
      content: { ...verse },
      type: 'VerseCard'
    }
  });
  const finalDevotionals = devotionals.map(devotional => {
    return {
      content: { ...devotional },
      type: 'DevotionalCard'
    }
  });
  const content = [
    ...finalDevotionals,
    ...finalVerses
  ];
  return shuffleGridItems(finalVerses, finalDevotionals, isDesktopOrLaptop);
}

const getFilters = () => {
  const tags = GetMostPopularTags(7);
  return (
    <TopicFilters tags={tags} />
  );
}

const SwordOfTheSpiritTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, url } = useSiteMetadata();
  const postTitle = 'The Sword of the Spirit';
  const metaDescription = "";
  const socialImage = "";
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const { IMAGE_PATH, DEK, TITLE } = SWORD_OF_THE_SPIRIT;
  const { verses, filters, devotionals } = pageContext;
  return (
    <div>

      <Hero 
        image={{
          url: IMAGE_PATH
        }}
        dek={DEK}
        title={TITLE}
        Logo={SwordOfTheSpiritIcon}
        FooterElement={<TopicFilters tags={filters} />}
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
            verses={verses} 
            isDesktopOrLaptop={isDesktopOrLaptop}
            contentItems={getGridContentItems(verses, devotionals, isDesktopOrLaptop)}
          />
    </Layout>

    </div>
  );
};

const myTest = 5;

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
