// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <div className={styles['meta__date']}>Published on {moment(date).format('D MMM YYYY')}</div>
    <div className={styles['meta__date']}>By Craig Lucas</div>
   
  </div>
);

export default Meta;
