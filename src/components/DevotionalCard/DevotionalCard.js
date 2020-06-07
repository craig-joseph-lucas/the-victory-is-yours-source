// @flow strict
import React from 'react';
import styles from './DevotionalCard.module.scss';
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
            tags,
            title
          }
        }
      } = this.props;

      console.log(`slug is ${slug}, description is ${description}, title is ${title} `);
      console.log(tags);

      return (
        
        <section className={styles['devotional-card']}>
           <h3 
            className={styles['devotional-card__subheader']}
           >
             DEVOTIONAL
          </h3> 
            <h2 className={styles['devotional-card__passage']}>
                header here
            </h2>
            <div className={styles['devotional-card__content']}>
              <p>
                content here
              </p>
            </div>
        </section>
      );
    }
  }

  export default DevotionalCard;
