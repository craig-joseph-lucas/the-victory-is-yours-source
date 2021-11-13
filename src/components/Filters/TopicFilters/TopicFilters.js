import React from 'react';
import { Hint } from 'react-autocomplete-hint';
import { FaPrint } from "react-icons/fa";
import styles from './TopicFilters.module.scss';
import getVersesByTopic from '../../../utils/get-verses-by-topic';

const DEFAULT_URL = '/sword-of-the-spirit/';


function getVerse(topic) {
  return new Promise((resolve, reject) => {
    getVersesByTopic(topic)
      .then((verse) => {
        console.log(verse)
        resolve(verse);
      })
      .catch(reject);
  });
}
class TopicFilters extends React.PureComponent {
  removeFilter() {
    this.setState((state) => ({ selectedOption: null }));
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const term = e.target.value;
      window.location.href = `${DEFAULT_URL}search/?topic=${term}`
    }
  }

  onTopicClick(url) {
    if (!url) return null;
    window.location.href = url;
  }

  renderTopic(topic) {
    const { activeTopic } = this.props;
    const { label, url, hidePopularFilter } = topic;
    const isActive = label === activeTopic;
    const isActiveClass = isActive 
      ? 'topic-filters__btn--active'
      : '';

    const btnClass = ['topic-filters__btn'];
    if (hidePopularFilter) return null;
    return (
      <button
        onClick={() => { this.onTopicClick(isActive ? DEFAULT_URL : url ); }}
        className={`${styles[btnClass]} ${styles[isActiveClass] ? styles[isActiveClass] : ''}`}
        data-topic-name={label}
      >
          { label }
      </button>
    );
  }

  renderTopics(topics) {
    const { isDesktopOrLaptop } = this.props;
    const sliceIndex = isDesktopOrLaptop ? topics.length : 4;
    return (
      <>
        <div className={styles['topic-filters__label']}>
            POPULAR Topics:
        </div>
        <div className={styles['topic-filters__tags']}>
          {
              topics.slice(0,sliceIndex).map((topic) => this.renderTopic(topic))
          }
        </div>
      </>
    );
  }

  renderSearchText() {
    const { activeTopic } = this.props;
    return 'Showing results on';
  }

  renderSearchBar(topics) {
    const { activeTopic } = this.props;
    const defaultSearchText = 'or enter your own topic to search for';
    const placeholder = activeTopic 
      ? `What the Sword of the Spirit says about ${activeTopic}`
      : defaultSearchText
    return (

      <Hint allowTabFill options={topics} onFill={value=> {
        this.onTopicClick(value.url)
      }}>
        <input
          type="search"
          ref={input => this.inputField = input}
          placeholder={placeholder}
          onChange={this.handleOnChange}
          onFocus = {() => this.inputField.placeholder = ""} 
          onBlur = {() => this.inputField.placeholder = placeholder } 
          onKeyDown={this.handleKeyDown}
          className={styles['topic-filters__search-bar']}
        />
        
      </Hint>
    );
  }

  render() {
    const { tags, activeTopic } = this.props;
    const topicsList = tags.map((e) => ({
      label: e.fieldValue,
      url: e.url,
      totalCount: e.totalCount,
      hidePopularFilter: e.hidePopularFilter
    }));

    return (
      <div className={styles['topic-filters']}>
        <div className={styles['topic-filters__tags']}>
          { this.renderTopics(topicsList)}
        </div>
        <form className={styles['topic-filters__form']} data-has-option={!!activeTopic }>
        {
          this.renderSearchBar(topicsList)
        }

        </form>       
      </div>
    );
  }
}

export default TopicFilters;