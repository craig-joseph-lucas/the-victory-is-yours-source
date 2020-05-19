// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Grid.module.scss';
import VerseCard from '../VerseCard';
import type { Node } from '../../types';
import Masonry from 'react-masonry-css';
// Placeholder text library
import Dummy from 'dummyjs';
import { props } from 'bluebird';

type Props = {
  isDesktopOrLaptop: boolean,
  verses: Array
};

class MasonryGrid extends React.Component {
  render() {
    const { verses } = this.props;
    if (!verses.length) {
      return null;
    }
    const items = verses.map((item, i) => {
      //console.log(item);

      return (
        <VerseCard overrideVerse={item.overrideVerse} keyword={item.keyword} key={i} />  
      )
    });
    const { isDesktopOrLaptop } = this.props;

    return (
      <>
        <Masonry
          breakpointCols={(isDesktopOrLaptop ? 2 : 1)}
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
