import React from 'react';
import Select from 'react-select';
import styles from './TopicFilters.module.scss';



class TopicFilters extends React.PureComponent {
    state = {
        selectedOption: null
        // when there is selected option
            // show active filter button inside search box
            // show close button
            // update masonry grid with correct itemse
    };

    removeFilter() {
        this.setState((state) => {
            return {selectedOption: null};
        });
    }

    onTopicClick(url) {
        if (!url) return null;
        window.location = url;
    }

    renderTopic(topic) {
        const { label, url } = topic;
        return (
            <button
                onClick={(e) => { this.onTopicClick(url)}}
                className={styles[
                    'topic-filters__btn'
                ]}
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
        const { activeTopic } = this.props;
           return (

            <div className={styles['topic-filters__selected']}>
                  { 
                    this.renderTopic({
                       label: activeTopic, 
                       url: '/sword-of-the-spirit/'
                    })
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