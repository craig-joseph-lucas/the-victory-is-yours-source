// @flow strict
import React from 'react';
import styles from './VerseCard.module.scss';
import getVerses from '../../utils/get-verses';

type Props = {
    keyword: string,
    version?: string,
    overrideVerse?: string
};
   
class VerseCard extends React.Component {
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
  
    componentDidMount() {
      const { keyword, version, overrideVerse } = this.props;

      if (overrideVerse) {
        return;
      }
      const verse = `${keyword};john3:1`
      getVerses(verse)
      .then(verses => {
        this.setState({
          verse: verses.passages[0]
        });
      }).catch(err => {
        console.warn(err)
      });
    }
    
    render() {
      const { keyword, overrideVerse } = this.props;
      const { verse } = this.state;

      return (
        
        <section className={styles['verse-card']}>
            <h3 className={styles['verse-card__passage']}>
                { keyword }
            </h3>
            <div className={styles['verse-card__content']}>
              <p>
                { verse || overrideVerse }
              </p>
            </div>
        </section>
      );
    }
  }

  export default VerseCard;
