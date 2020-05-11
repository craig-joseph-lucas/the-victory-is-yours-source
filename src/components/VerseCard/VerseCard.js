// @flow strict
import React from 'react';
import styles from './VerseCard.module.scss';

const ESV_TEXT_ONLY = {
  'include-passage-references': false,
  'include-verse-numbers': true,
  'include-first-verse-numbers': false,
  'include-footnotes': false,
  'include-footnote-body': false,
  'include-headings': false,
  'include-chapter-numbers': false,
  'include-audio-link': false,
  'wrapping-div': false
};
const TOKEN = 'bbc2a930dcc019b8b9b73e3203919a258ad96ba2';
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

      const params = new URLSearchParams({
        ...ESV_TEXT_ONLY,
        q: keyword
      });

      return fetch('https://api.esv.org/v3/passage/text/?' + params.toString(), {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Token ${TOKEN}`
        })
      })
      .then(res=>res.clone().json())
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
                { verse }
              </p>
            </div>
        </section>
      );
    }
  }

  export default VerseCard;
