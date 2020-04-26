// @flow strict
import React from 'react';
import Icon from '../../Icon';
import { getIcon } from '../../../utils';
import styles from './SocialLinks.module.scss';

import { useSiteMetadata } from '../../../hooks';

type Props = {
  isIndex?: boolean,
};


const SocialLinks = ({ menuExpanded }: Props) => {
    
    return (
        <div className={styles[
          'social-links'
          ]}>
            <a 
              href="https://twitter.com/victoryIsJesus"
              className={styles['social-links__link']}
            >
              <Icon name="twitter" icon={getIcon("twitter")} />
            </a>
            <a 
              href="https://www.facebook.com/victorywithjesuschrist"
              className={styles['social-links__link']}
            >
              <Icon name="facebook" icon={getIcon("facebook")} />
            </a>
            <a 
              href="mailto:wecanhavevictoryinjesus@gmail.com?subject=Mail from our site"
              className={styles['social-links__link']}
            >
              <Icon name="email" icon={getIcon("email")} />
            </a>                        
        </div>
      );

};

export default SocialLinks;
