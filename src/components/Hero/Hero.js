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

    renderContent() {
        const { dek, title, Logo } = this.props;
        return (
            <div className={styles['hero__content']}>
                <Logo />
                <h2 className={styles['hero__title']}>{title}</h2>
                <div className={styles['hero__dek']}>
                    <p>{dek}</p>
                </div>
            </div>
        );
    }

    render() {
        const { image, FooterElement } = this.props;
        return (
            <div className={styles['hero']}>
                { this.renderBackgroundImage(image) }
                <div className={styles['hero__main']}>
                    { this.renderContent() }
                </div>
                <div className={styles['hero__footer']}>
                    {FooterElement}
                </div>
            </div>
        );
    }
}
export default Hero;
