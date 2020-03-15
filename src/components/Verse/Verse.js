// @flow strict
import React from 'react';
import styles from '../Verse/Verse.module.scss';

const ESV_TEXT_ONLY = {
  'include-passage-references': false,
  'include-verse-numbers': false,
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
        console.log(verses);
        this.setState({
          verse: verses.passages[0]
        });
      }).catch(err => {
        console.log(err)
      });
    }
    
    render() {
      const { keyword, overrideVerse } = this.props;
      const { verse } = this.state;

      return (
        
        <blockquote className={styles['verse']}>
           <div className={styles['verse__passage']}>
               <h3 className={styles['verse__passage-text']}>
                   { keyword }
               </h3>
                <p>{ overrideVerse || verse } </p>
            </div>
        </blockquote>
      );
    }
  }

  export default Verse;
