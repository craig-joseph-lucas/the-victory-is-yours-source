// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Verse from '../../Verse';

type Props = {
  body: string,
  title: string,
  verseKeyword: string
};

const Content = ({ body, title, verseKeyword }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Verse keyword={verseKeyword} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
