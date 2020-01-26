// @flow strict
import React from 'react';
import styles from '../Verse/Verse.module.scss';
import type { Node } from '../../types';

var bible = require('holy-bible');

type Props = {
    keyword: string
};
   
class Verse extends React.Component {
    constructor (props) {
      super(props);
      this.state = { 
          verseInfo: '',
          readyToRender: false
       }
    }
  
    componentWillMount() {
        const { keyword } = this.props;
        bible.get(keyword, 'KJV') // also supports 2-letter abbrev (ie: Jn 15:13)
        .then((res) => {
            console.dir(res)
            this.setState((state, props) => ({
                verse: res
            }));
        });
      
    }


    renderVerse(verse) {
        <h3>{ verse }</h3>
    }
  
    render() {
        const { keyword } = this.props;
      const { verse, readyToRender } = this.state;
      return (
        
        <blockquote className={styles['verse']}>
           <p className={styles['verse__passage']}>
               <strong className={styles['verse__passage-text']}>
                   { keyword }
               </strong>
                { verse && verse.text }
            </p>
        </blockquote>
      )
    }
  }

  export default Verse;
