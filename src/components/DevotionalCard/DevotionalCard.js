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
            title
          }
        }
      } = this.props;

      //console.log(`slug is ${slug}, description is ${description}, title is ${title} `);
      //console.log(tags);

      return (
        
        <section 
          className={styles['devotional-card']}
          onClick={() => window.location.href={slug}}
        >
          <Icon />
           <h3 
            className={styles['devotional-card__subheader']}
           >
             DEVOTIONAL
          </h3> 
          <h2 className={styles['devotional-card__title']}>
            { title }
          </h2>
          <h4 
            className={styles['devotional-card__subheader']}
          >
            {verse}
          </h4>
          <div className={styles['devotional-card__content']}>
            <p>
              { description }
            </p>
          </div>
          <div className={styles['devotional-card__footer']}>
            <a href="#">Read this devotional</a>
          </div>
          
        </section>
      );
    }
  }

  export default DevotionalCard;
