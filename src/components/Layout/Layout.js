// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import BibleReflagger from '../BibleReflagger';
import Verse from '../Verse';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { useSiteMetadata } from '../../hooks';
import getOgImage from '../../utils/get-og-image';
import styles from './Layout.module.scss';

function renderBanner() {
  return (
    <div className={styles['layout__banner']}>
      <a href="#">
        <img src="http://localhost:8000/media/banner.jpg" />
      </a>
    </div>
  );
}

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string,
  hideNav?: boolean,
  containerStyles: style
};

type DefaultProps = {
  hideNav: false,
  noIndex: false,
  hideBanner: false
}

const Layout = ({
  children,
  title,
  description,
  socialImage,
  containerStyles,
  layoutStyles,
  ogUrl,
  noIndex,
  hideBanner
}: Props) => {

  const { author, url, facebookAppId } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = getOgImage(url, metaImage);

  return (
    <div>
          { <SiteNav /> }
          { !hideBanner && renderBanner() }
      <div
        style={containerStyles}
      >
        <div className={styles.layout} style={layoutStyles}>
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="fb:app_id" content={facebookAppId} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImageUrl} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImageUrl} />
            <script src="//use.edgefonts.net/stencil-std;open-sans;droid-sans.js"></script>
            { noIndex && (
              <meta name="robots" content="noindex"></meta>
            )}

          </Helmet>

          {children}

        </div>

      </div>
      <BibleReflagger />
      <SiteFooter
        title={title}
      />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8109674561526292"
     crossOrigin="anonymous"></script>
    </div>
  );
};

export default Layout;
