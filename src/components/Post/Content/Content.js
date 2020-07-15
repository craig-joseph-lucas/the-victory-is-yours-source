// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import Verse from '../../Verse';

type Props = {
  body: string,
  title: string,
  verseKeyword: string,
  overrideVerse: string
};

const Content = ({ body, title, verseKeyword, overrideVerse }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Verse keyword={verseKeyword} overrideVerse={overrideVerse} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
