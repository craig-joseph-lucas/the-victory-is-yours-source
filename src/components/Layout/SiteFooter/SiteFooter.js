// @flow strict
import React from 'react';
import styles from './SiteFooter.module.scss';
import type { Node } from '../../../types';
import { Link } from 'gatsby';
import Icon from '../../Icon';
import { getIcon } from '../../../utils';
import Verse from '../../Verse';
import {
  EmailShareButton,
} from "react-share";


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
        <div key={label}>
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
              href="https://twitter.com/victoryIsJesus"
              className={styles['site-footer__icon-link']}
            >
              <Icon name="twitter" icon={getIcon("twitter")} />
            </a>
            <a 
              href="https://www.facebook.com/victorywithjesuschrist"
              className={styles['site-footer__icon-link']}
            >
              <Icon name="facebook" icon={getIcon("facebook")} />
            </a>
            <a 
              href="mailto:wecanhavevictoryinjesus@gmail.com?subject=Mail from our site"
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
          { this.renderLogo(title) }
          { this.renderLinks() }
          <p className={styles['site-footer__copyright']}>© 2020. All rights reserverd.  </p>
        </footer>
      )
    }
  }

  export default SiteFooter;
