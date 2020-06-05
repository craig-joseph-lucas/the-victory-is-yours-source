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
      return (
        
        <section className={styles['devotional-card']}>
            <h3 className={styles['devotional-card__passage']}>
                header here
            </h3>
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
