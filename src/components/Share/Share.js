
// @flow strict
import React from 'react';
import styles from './Share.module.scss';
import shareComponents from './Share.components';
import type { Node } from '../../types';

  type Props = {
    slug: string,
  };

class Share extends React.Component {
    getShareButton(type) {
      return `${type}ShareButton`;
    }

    getShareIcon(type) {
      return `${type}Icon`;
    }

    renderShareProvider(item) {
      const Button = item.button;
      const Icon = item.icon;
      const { slug } = this.props;
      return (
        <div key={item.name} className={styles['share__provider']}>
          <Button url={slug} className={styles['share__button']}>
              <Icon 
                width="28" 
                height="28"
                round
              />
          </Button>
        </div>
      );
    }

    render() {
        return(
          <div className={styles['share']}>
            <h3 className={styles['share__header']}>Share on: </h3>
            {
              shareComponents.map((item) => this.renderShareProvider(item))
            }
          </div>
        );
    }
};

export default Share;