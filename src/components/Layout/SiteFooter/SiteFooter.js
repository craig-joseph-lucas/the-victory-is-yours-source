// @flow strict
import React from 'react';
import styles from './SiteFooter.module.scss';
import type { Node } from '../../../types';
import { Link } from 'gatsby';
import Icon from '../../Icon';
import { getIcon } from '../../../utils';
import Verse from '../../Verse';

import { 
  siteFooterLinksLeft,
  siteFooterLinksRight
} from '../../../../config';

type Props = {
  title: string
};
   
class SiteFooter extends React.Component {   
    constructor (props) {
      super(props);
    }

    renderLogo(title) {
      return (
        <div className={styles['site-footer__row']}>
          <div className={styles[
              'site-footer__logo'
            ]}>
              <h1 className={styles['site-footer__title']}>
                <Link className={styles['site-footer__title-link']} to="/">
                  Victory in
                  <span className={styles['site-footer__jesus-name']}>Jesus Christ</span>
                </Link>
              </h1>
            </div>
        </div>
      );
    }

    renderTextLink(link) {
      const { path, label } = link;
      return (
        <div>
            <a 
              href={path}
              className={styles['site-footer__text-link']}
            >
              { label }
            </a>
        </div>
      );
    }
  
    renderIconLinks(link) {
      return (
        <div className={styles[
          'site-footer__icon-links'
          ]}>
            <a 
              href="https://twitter.com/JesusIsVictory1"
              className={styles['site-footer__icon-link']}
            >
              <Icon name={name} icon={getIcon("twitter")} />
            </a>
            <a 
              href="https://www.facebook.com/victorywithjesuschrist"
              className={styles['site-footer__icon-link']}
            >
              <Icon name="facebook" icon={getIcon("facebook")} />
            </a>
            <a 
              href="#"
              className={styles['site-footer__icon-link']}
            >
              <Icon name="email" icon={getIcon("email")} />
            </a>                        
        </div>
      );
    }

    renderLinks() {
      return (
        <div className={styles['site-footer__row']}>
          <div className={styles['site-footer__column']}>
            { siteFooterLinksLeft.map((link) => this.renderTextLink(link) )}
          </div>
            { this.renderIconLinks() }
          <div className={styles['site-footer__column']}>
            { siteFooterLinksRight.map((link) => this.renderTextLink(link) )}
          </div>                 
        </div>
      );
    }

    render() {
      const { title } = this.props;
      return ( 
        <footer className={styles['site-footer']}>
          <div className={styles['site-footer__verse']}>
            <Verse 
              keyword="1 Corinthians 15:55-57"
              overrideVerse="O[a] Death, where is your sting? O Hades, where is your victory?”
              56 The sting of death is sin, and the strength of sin is the law. 57 But thanks be to God, who gives us the victory through our Lord Jesus Christ."
            />
          </div>

          { this.renderLogo(title) }
          { this.renderLinks() }
          
          <p className={styles['site-footer__copyright']}>© 2020. All rights reserverd</p>
        </footer>
      )
    }
  }

  export default SiteFooter;
