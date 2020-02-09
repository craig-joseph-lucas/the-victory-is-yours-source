// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Banner from '../Banner';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Banner 
          url="https://www.biblegateway.com"
          title="Click to Study Scripture at Bible Gateway"
          imgSrc="https://bg3-blog.s3.amazonaws.com/blog/wp-content/uploads/2014/08/bg-badge-option-1.jpg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
