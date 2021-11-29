import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';
import Banner from '../Banner';
import { useSiteMetadata } from '../../hooks';

function renderSidebar() {
  const { subtitle } = useSiteMetadata();

  return (
    <div className={styles['page__sidebar']}>
    <div className={styles['page__sidebar-tagline']}> { subtitle } </div>

      <Banner
        url="https://www.biblegateway.com"
        title="Click to Study Scripture at Bible Gateway"
        imgSrc="https://bg3-blog.s3.amazonaws.com/blog/wp-content/uploads/2014/08/bg-badge-option-1.jpg"
      />
</div>
  );
}

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children, hideSidebar }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    //pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        { !hideSidebar && renderSidebar()}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;