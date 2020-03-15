// @flow strict
import React, { Component} from 'react';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import type { Node } from '../../types';

type Props = {
  appId: string,
  slug: string,
};

class SiteComments extends Component {

  static propTypes
  renderComments() {
    const { slug, appId } = this.props;
    return (
      <FacebookProvider appId={appId}>
        <Comments href={slug} />
      </FacebookProvider>
    );    
  }

  render() {
    const { slug, appId } = this.props;

    return (
      <div>
        { this.renderComments() }
      </div>
    )
  }
}

export default SiteComments;