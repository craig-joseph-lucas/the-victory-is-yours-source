// @flow strict
import React from 'react';
import styles from '../Verse/Verse.module.scss';
import type { Node } from '../../types';

var bible = require('holy-bible');

type Props = {
    keyword: string,
    version?: string,
    overrideVerse?: string
};
   
class Verse extends React.Component {
    static defaultProps = {
        version: 'ASV'
    }    
    constructor (props) {
      super(props);
      this.state = { 
          verse: '',
          readyToRender: false
       }
    }
  
    componentWillMount() {
        const { keyword, version, overrideVerse } = this.props;
        
        if (overrideVerse) {
            return;
        }

        bible.get(keyword, version) // also supports 2-letter abbrev (ie: Jn 15:13)
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
      const { keyword, overrideVerse } = this.props;
      const { verse } = this.state;
      const verseToRender = verse && verse.text ? verse.text : '';

      return (
        
        <blockquote className={styles['verse']}>
           <div className={styles['verse__passage']}>
               <h3 className={styles['verse__passage-text']}>
                   { keyword }
               </h3>
                <p>{ overrideVerse || verseToRender } </p>
            </div>
        </blockquote>
      )
    }
  }

  export default Verse;
