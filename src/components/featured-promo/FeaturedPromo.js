// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './FeaturedPromo.module.scss';
import type { Node, Image } from '../../types';
// Placeholder text library
import Dummy from 'dummyjs';

type Props = {
    image: Image,
    dek: string,
    title: String,
    title: String,
    Logo: Element,
    FooterElement: Element
};

class FeaturedPromo extends React.Component {
  
    renderBackgroundImage(image) {
        const { url } = image;
        return (
            <div className={styles['featured-promo__background']}
                style={{
                    backgroundImage: `url(${url})`
                }}
            >
            </div>
        );
    }

   

    render() {
        const { imgPath, title, dek } = this.props;
        return (
            <div className={styles['featured-promo']}>
                 <div className={styles['featured-promo__image']}>
                     <img src={imgPath} />
                 </div>
                <div className={styles['featured-promo__text']}>
                    <h2 className={styles['featured-promo__title']}>{title}</h2>
                    {dek}
                
                    <div className={styles['featured-promo__filters']}>
                       <strong>Popular topics:</strong>
                       
                           <a href="/sword-of-the-spirit/jesus">Jesus</a>
                           <a href="sword-of-the-spirit/prayer">Prayer</a>
                           <a href="">Holy Spirit</a>
                   
                       <button className={styles['featured-promo__all-filters']}>
                            <a href="#" className={styles['featured-promo__all-filters-btn']}>
                                Explore all topics
                            </a>
                       </button>
                    </div>

                </div>
            </div>
        );
    }
}
export default FeaturedPromo;
