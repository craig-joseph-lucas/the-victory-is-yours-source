// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Node } from '../../types';

type Props = {
  url: string,
  imgSrc: string,
  title: ?string
};

const imgStyles = {
  maxWidth: '200px',
  display: 'block',
  margin: '50px auto'

};

class Banner extends React.Component {
  render() {

    const {
      url,
      imgSrc,
      title
    } = this.props;

    return (
  
      <div className="banner">
      { url && 
          <a 
            href={url}
            target="_blank"
          >
            <img 
              src={imgSrc}
              alt={title}
              style={imgStyles}
              title={title}
            
            />
          </a>
      }
    </div>
    );
  }
}
  
export default Banner;
