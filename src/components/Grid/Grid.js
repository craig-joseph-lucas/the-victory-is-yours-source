// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Grid.module.scss';
import VerseCard from '../VerseCard';
import DevotionalCard from '../DevotionalCard';

import type { Node } from '../../types';
import Masonry from 'react-masonry-css';
// Placeholder text library
import Dummy from 'dummyjs';
import { props } from 'bluebird';

type Props = {
  isDesktopOrLaptop: boolean,
  verses: Array,
  contentItems: Array
};

const GridComponents = {
  VerseCard,
  DevotionalCard
};

class MasonryGrid extends React.Component {

  render() {
    const { contentItems } = this.props;
    if (!contentItems.length) {
      return null;
    }
    const items = contentItems.map((item, i) => {
      const { type, content } = item;
      const Component = GridComponents[type]
      if (!Component) return null;

      return (
        <Component {...content} />  
      )
    });
    const { isDesktopOrLaptop } = this.props;

    return (
      <>
        <Masonry
          breakpointCols={(isDesktopOrLaptop ? 2.5 : 1)}
          className={styles['masonry-grid']}
          columnClassName={styles['masonry-grid__column']}
          columnAttrs={{ className: 'should be overridden', 'data-test': '', style: { '--test': 'test' }}}
        >
          {items}
        </Masonry>      
      </>
    );
  }
}
  
export default MasonryGrid;
