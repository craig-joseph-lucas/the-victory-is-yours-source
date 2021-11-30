// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Banner.module.scss';
import type { Node } from '../../types';

type Props = {
  url: string,
  imgSrc: string,
  title: ?string,
  customStyles: ?CSS
};

class Banner extends React.Component {
  render() {
    const {
      url,
      imgSrc,
      title,
      customStyles
    } = this.props;

    return (
      <div className={styles['banner']}>
      { url &&
          <a
            href={url}
            target="_blank"
          >
            <img
              src={imgSrc}
              alt={title}
              className={styles['banner__img']}
              style={customStyles}
              title={title}
            />
          </a>
      }
    </div>
    );
  }
}
  
export default Banner;
