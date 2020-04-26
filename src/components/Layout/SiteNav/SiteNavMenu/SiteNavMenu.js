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
            <div className={styles[`${cn}__site-bio`]}>
              <p>{ bio }</p>
            </div>
            <div className={styles[`${cn}__banner`]}>
              <Banner 
                url="https://www.biblegateway.com"
                title="Click to Study Scripture at Bible Gateway"
                imgSrc="https://bg3-blog.s3.amazonaws.com/blog/wp-content/uploads/2014/08/bg-badge-option-1.jpg"
              />
              </div>
          </div>
        </div>
    </div>
  );
};

export default SiteNavMenu;
