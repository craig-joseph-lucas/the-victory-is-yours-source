import React from 'react';
import Slider from "react-slick";
import slick from "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import styles from './VerseCarousel.module.scss';
import './slick-overrides.scss';
import 'react-awesome-slider/dist/styles.css';

import type { Node } from '../../types';


import Verse from '../Verse';

type Props = {
  verses: array,
  autoPlay: ?boolean
};

var settings = {
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};
 

class VerseCarousel extends React.Component {
  static defaultProps = {
    autoPlay: true,
    title: 'Recommended Verses'
  };
  
    render() {
      const { verses, autoPlay, title } = this.props;
      return (
        
        <div className={styles['verse-carousel']}>
          <h2 className={styles['verse-carousel__h2']}>{title}</h2>
          <Slider {...settings}>
            
            {  verses.map((verse, index) => (
                <Verse keyword={verse} key={verse} />
              ))
          }
          </Slider>
        </div>
      );
    }
  }

  export default VerseCarousel;