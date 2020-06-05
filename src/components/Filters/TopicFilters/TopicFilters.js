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

    onTopicClick(label) {
        const name = label.toString().toLowerCase();
        window.location = `/sword-of-the-spirit/${name}/`
    }

    renderTopic(topic) {
        const { label } = topic;
        return (
            <button
                onClick={(e) => { this.onTopicClick(label)}}
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
        return (
           
                <input 
                    type="search" 
                    placeholder="What does the Sword of the Spirit say about..." 
                    className={styles['topic-filters__search']}
                />                    
            
        );
    }

    renderActiveFilter() {
        const { selectedOption } = this.state;
        return (
            <div className={styles['topic-filters__filter']}>
                <button
                    onClick={() => this.removeFilter()}
                >
                    { selectedOption }
                </button>
            </div>
        );
    }

    render() {
        const { tags } = this.props;
        const { selectedOption } = this.state;

        return (
            <div className={styles['topic-filters']}>
                 <form className={styles['topic-filters__form']} data-has-option={selectedOption ? true : false}>
                 { 
                    !selectedOption ? this.renderSearchBar() : this.renderActiveFilter()
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