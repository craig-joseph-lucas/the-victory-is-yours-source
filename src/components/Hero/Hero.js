// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import VerseCard from '../VerseCard';
import styles from './Hero.module.scss';
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

class Hero extends React.Component {
  
    renderBackgroundImage(image) {
        const { url } = image;
        return (
            <div className={styles['hero__background']}
                style={{
                    backgroundImage: `url(${url})`
                }}
            >
            </div>
        );
    }

   

    render() {
        const { image, FooterElement, title } = this.props;
        return (
            <div className={styles['hero']}>
                { this.renderBackgroundImage(image) }
  
                <div className={styles['hero__footer']}>
                    <h2 className={styles['hero__title']}>{title}</h2>

                    {FooterElement}
                </div>
            </div>
        );
    }
}
export default Hero;
