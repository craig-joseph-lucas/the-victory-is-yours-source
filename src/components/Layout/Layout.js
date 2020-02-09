// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import BibleReflagger from '../BibleReflagger';
import Verse from '../Verse';
import SiteFooter from './SiteFooter';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  return (
    

    <div>
      <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="robots" content="noindex"></meta>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <script src="//use.edgefonts.net/stencil-std;open-sans;droid-sans.js"></script>
      
      </Helmet>
      {children}
      <BibleReflagger />
      </div>
      <SiteFooter 
        title={title}
      />

    </div>
  );
};

export default Layout;
