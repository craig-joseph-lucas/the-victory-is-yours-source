// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../../../hooks';
import classNames from 'classnames/bind';

import SocialLinks from '../../SocialLinks';
import Banner from '../../../Banner';

import styles from './SiteNavMenu.module.scss';

type Props = {
  isIndex?: boolean,
};

const cn = 'site-nav-menu';
const cx = classNames.bind(styles);

function renderNavItem ({path, label}) {
    return (
        <li className={styles[`${cn}__nav-item`]}>
            <a href={path} className={styles[`${cn}__nav-link`]}>
                {label}
            </a>
      </li>
    );
}

const SiteNavMenu = ({ menuExpanded }: Props) => {
  const { author, menu } = useSiteMetadata();
  const { bio } = author;
  const expandedClass = `${cn}--expanded`;
  const collapsedClass = `${cn}--collapsed`
  const navClassName = cx({
    [cn]: true,
    [expandedClass]: menuExpanded,
    [collapsedClass]: !menuExpanded
  });

  return (

      <div 
        className={navClassName}
      >
        <div className={styles[`${cn}__body`]}>
          <div className={styles[`${cn}__left`]}>
            <ul className={styles[`${cn}__nav`]}>
              {  
                menu.map((item, index) => (
                  renderNavItem(item)
                ))
              }                   
            </ul>
            <div className={styles[`${cn}__social`]}>
              <SocialLinks />
            </div>
          </div>
          <div className={styles[`${cn}__right`]}>
          <div className={styles[`${cn}__banner`]}>
              <a className={styles[`${cn}__banner-link`]} href="/sword-of-the-spirt/">Sword of the Sprit</a>
            </div>
            <div className={styles[`${cn}__site-bio`]}>
              <p>The Sword of the Spirit is your only weapon against the enemy.
                It is the key to victory!</p>
                <div class="FeaturedPromo-module--featured-promo__filters--3SDdw">
                  <strong>Popular topics:</strong>
                  <a href="/sword-of-the-spirit/jesus">Jesus</a>
                  <a href="/sword-of-the-spirit/prayer">Prayer</a>
                  <a href="/sword-of-the-spirit/holy-spirit">Holy Spirit</a>
                  <button><a href="/sword-of-the-spirit/">Read God's Word!</a></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SiteNavMenu;
