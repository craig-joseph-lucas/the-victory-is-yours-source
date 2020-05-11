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
  isDesktopOrLaptop: boolean
};

class MasonryGrid extends React.Component {
  render() {
    const itemVerses = [
      'John 3:16', 'Ephesians 2:16', 'Phillipians 4:13', '1 Corinthians 5:17',
      'Hebrews 12:2', 'Joshua 1:8', 'Jeremiah 29:11', 'Galations 5:22'
    ];
    const items = itemVerses.map((item, i) => {
      return (
        <VerseCard keyword={item} key={i} />  
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
