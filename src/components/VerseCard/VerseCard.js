// @flow strict
import React from 'react';
import styles from './VerseCard.module.scss';
import { FaRegCopy } from "react-icons/fa";
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
          readyToRender: false,
          isActiveVerseText: false,
          isActiveVersePassage: false,
          verseCopied: false
       }
    }

    handleClickOfCopy = (evt) => {
      const { overrideVerse, keyword } = this.props;
      const text = `${keyword} ${overrideVerse}`;
      try {
        navigator.clipboard.writeText(text).then(() => {
          this.setState(state => ({
            verseCopied: !state.verseCopied
          }));

          setTimeout(() => this.setState({verseCopied: false}), 900);

          /* clipboard write failed */
        });
      } catch (e) {
        console.log(e)
      }
    }
  
    handleToggleOfText = () => {
      this.setState(state => ({
        isActiveVerseText: !state.isActiveVerseText
      }));
    };

    handleToggleOfPassage = () => {
      this.setState(state => ({
        isActiveVersePassage: !state.isActiveVersePassage
      }));
    };

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

    getToggleStyle (isActive) {
      return {
        opacity: isActive ? '0.075' : '1'
      };
    };

    
    render() {
      
      const { keyword, overrideVerse } = this.props;
      const { verse, isActiveVersePassage, isActiveVerseText, verseCopied } = this.state;

      return (
        
        <section className={styles['verse-card']}>
            <h3 className={styles['verse-card__passage']} style={this.getToggleStyle(isActiveVersePassage)} onClick={this.handleToggleOfPassage}>
                { keyword }
            </h3>
            <div className={styles['verse-card__content']}>
              <p style={this.getToggleStyle(isActiveVerseText)} onClick={this.handleToggleOfText}>
                { verse || overrideVerse }
              </p>
            </div>
            <div className={styles['verse-card__controls']}>
              
              <span 
                className={styles['verse-card__copy']}
                onClick={(evt) => {this.handleClickOfCopy(evt)}}
              >
                
                { verseCopied && 
                  <span
                    className={styles['verse-card__copy']}
                  >
                  Verse was copied </span>
                }
                <FaRegCopy height="20"></FaRegCopy>
              </span>
                
            </div>

        </section>
      );
    }
  }

  export default VerseCard;
