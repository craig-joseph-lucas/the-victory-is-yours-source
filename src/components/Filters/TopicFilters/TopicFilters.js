import React from 'react';
import { Link } from 'gatsby';
import styles from './TopicFilters.module.scss';

class TopicFilters extends React.PureComponent {
    removeFilter() {
        this.setState((state) => {
            return {selectedOption: null};
        });
    }

    onTopicClick(url) {
        if (!url) return null;
        window.location.href = url;
    }

    renderTopic(topic) {
        const { label, url, activeTopic } = topic;
        return (
            <button
                onClick={(e) => { this.onTopicClick(url)}}
                className={styles[{
                    'topic-filters__btn': true,
                    'topic-filters__btn--active': label === activeTopic
                }]}
                data-topic-name={label}
            >
                { label }
            </button>
        );
    }

    renderTopics(topics) {
        const topicsList = topics.map((e) => {
            return {
              label: e.fieldValue,
              url: e.url,
              totalCount: e.totalCount
            };
          });
        return (
            <>
            <div className={styles['topic-filters__label']}>
                POPULAR Topics: 
            </div>
            <div className={styles['topic-filters__tags']}>
                {
                    topicsList.map(topic => this.renderTopic(topic))
                }
            </div>
            </>
        );
    }

    renderSearchBar() {
        const activeSearchText = 'What does the Sword of the Spirit say about?';
        return (
            <input 
                type="search"
                placeholder={activeSearchText} 
                className={styles['topic-filters__search-bar']}
            />                    
        );
    }

    renderActiveFilter() {
        const { activeTopic, topicLandingUrl } = this.props;
           return (

            <div className={styles['topic-filters__selected']}>
                { 
                    <Link 
                        to={topicLandingUrl} 
                        className={styles[
                            'topic-filters__btn'
                        ]}  
                    >
                        {activeTopic}
                    </Link>
                }
            </div>                  
        );
    }

    render() {
        const { tags, activeTopic } = this.props;

        return (
            <div className={styles['topic-filters']}>
                 <form className={styles['topic-filters__form']} data-has-option={!!activeTopic }>
                 { 
                    !activeTopic ? this.renderSearchBar() : this.renderActiveFilter()
                 }
                 </form>
                <div className={styles['topic-filters__tags']}>
                    { this.renderTopics(tags)}
                </div>
            </div>
        );
    }

};

export default TopicFilters;