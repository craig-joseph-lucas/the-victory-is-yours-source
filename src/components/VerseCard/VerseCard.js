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
          readyToRender: false,
          isActiveVerseText: false,
          isActiveVersePassage: false
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
      const { verse, isActiveVersePassage, isActiveVerseText } = this.state;

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
        </section>
      );
    }
  }

  export default VerseCard;
