import React from 'react';
import styles from './TopicFilters.module.scss';

class TopicFilters extends React.PureComponent {

    render() {
        return (
            <div className={styles['topic-filters']}>
                <h2 className={styles['topic-filters__title']}>
                    Topic filters will go here
                </h2>
            </div>
        );
    }

};

export default TopicFilters;