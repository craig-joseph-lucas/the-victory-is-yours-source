// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Node } from '../../types';
import { MediaQuery } from 'react-responsive'   
import Masonry from 'react-masonry-css';
import styles from './Grid.module.scss';
import useDetectPrint from "react-detect-print";
import gridHelpers from '../../utils/grid';
import getVersesByTopic from '../../utils/get-verses-by-topic';

// Placeholder text library
type Props = {
  isDesktopOrLaptop: boolean,
  verses: Array,
  verseTopic: string,
  devotionals: Array,
  gridItems: Array
};
class MasonryGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentItems: [],
      isPrint: false
    };
  }

  renderVerses = async () => {
    try {
      const { verseTopic } = this.props;
      const res = await getVersesByTopic(verseTopic );

      const verses = res.map((e) => ({
        keyword: e.reference,
        overrideVerse: e.content,
      }));

      console.log(verses)

      // this will re render the view with new data
      this.setState({
        contentItems: verses
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    const { verseTopic } = this.props;
    this.renderVerses();
  }

  handlePrint() {
    window.print();
  }

  render() {
    const { contentItems, isPrint } = this.state;``


    const { gridItems } = this.props;

    const { isDesktopOrLaptop } = this.props;

    const items = gridHelpers.getGridItems(
      contentItems.length ? contentItems : gridItems
    )

    if (!items.length) {
      return null;
    }

    let colCount = isDesktopOrLaptop ? 3 : 1;
    
    const handleMediaQueryChange = (matches) => {
      // matches will be true or false based on the value for the media query
    }

    return (
      <>
          <Masonry
            breakpointCols={colCount}
            className={styles['masonry-grid']}
            columnClassName={styles['masonry-grid__column']}
          >
            {items}
          </Masonry>


      </>
    );
  }
}
  
export default MasonryGrid;
