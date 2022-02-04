// @flow strict
import React from 'react';
import styles from './DevotionalCard.module.scss';
import Icon from './Icon.js'
import type { Node } from '../../types';

type Props = {
    node: Node
};
   
class DevotionalCard extends React.Component {
    static defaultProps = {
        node: {}
    }    
    constructor (props) {
      super(props);
    }
  
    render() {

      const { 
        node: {
          fields: {
            slug
          },
          frontmatter: {
            description,
            verse,
            title,
            tags
          }
        }
      } = this.props;

      return (
        <section
          onclick={() => { window.location = slug; } }
          className={styles['devotional-card']}
        >
          <Icon />
           <h3
            className={styles['devotional-card__subheader']}
           >
             DEVOTIONAL
          </h3>
          <h2 className={styles['devotional-card__title']}>
            <a href={slug}>
              { title }
            </a>
          </h2>
          <div className={styles['devotional-card__content']}>
            <p>
              { description }
            </p>
          </div>
          <div className={styles['devotional-card__footer']}>
            <a href={slug}>Read this devotional</a>
          </div>
        </section>
      );
    }
}

export default DevotionalCard;
