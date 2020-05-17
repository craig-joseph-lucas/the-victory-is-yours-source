import React from 'react';
import Select from 'react-select';
import styles from './TopicFilters.module.scss';

const selectStyles = { 
    singleValue: (base) => ({ 
        ...base 
    }),
    container: base => ({
        ...base,
        width: '200px',
        marginTop: '30px',
        marginRight: '20px',
        display: 'inline-block'
    })
};

class TopicFilters extends React.PureComponent {
    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    renderTopic(topic) {
        const { label, url } = topic;
        return (
            <a 
                href={url}
                className={styles['topic-filters__btn']}
            >
                { label }
            </a>
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
            <span>Refine by: </span>
            <Select 
                onChange={this.handleChange}
                options={topicsList}
                styles={selectStyles}
                placeholder="Topic"
                autoFocus={true} 
            />
            <Select 
                onChange={this.handleChange}
                options={topicsList}
                styles={selectStyles}
                autoFocus={true} 
            />
            </>
        );
    }


    render() {
        const { tags } = this.props;
        
        return (
            <div className={styles['topic-filters']}>
                <form className={styles['topic-filters__form']}>
                    <input 
                        type="search" 
                        placeholder="What does the Sword of the Spirit say about..." 
                        className={styles['topic-filters__search']}
                    />                    
                </form>
                <div className={styles['topic-filters__tags']}>
                    { this.renderTopics(tags)}
                </div>
            </div>
        );
    }

};

export default TopicFilters;