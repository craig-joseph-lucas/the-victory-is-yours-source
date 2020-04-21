// @flow strict
import React from 'react';

import styles from './SiteNav.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  isIndex?: boolean,
};

const cn = 'site-nav';

const SiteNav = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div 
      className={styles[cn]}
    >
      <div className={styles[`${cn}__container`]}>
        <div className={styles[`${cn}__bar`]}>
          <button className={styles[`${cn}__menu-toggle`]} type="button">
          <span className={styles[`${cn}__menu-toggle-wrapper`]}>
            <span className={styles[`${cn}__menu-toggle-icon`]}>
              
            </span>
          </span>Menu
          </button>
          <div className={styles[`${cn}__title`]}>
            <h1>
              <a href="/"><img src="/media/logo.png" />Victory in Jesus Christ</a>
            </h1>
          </div>
          <div className={styles[`${cn}__search`]}>
            search
          </div>
        </div>
    
      </div>
      <div 
        className={styles[`${cn}__menu`]}
        style={{ display: 'none'}}
      >
        <h2>Nav menu here</h2>
      </div>
    </div>
  );
};

export default SiteNav;
