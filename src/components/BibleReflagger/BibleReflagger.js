import React, { useRef, useEffect } from 'react';
import loadScriptAsync from '../../utils/load-script-async';

const reflaggerSettings = {
  bibleVersion: "ESV",
  roundCorners: true,
  tagChapters: true,
  noSearchTagNames: ["h1","h2","h3","blockquote"],
  customStyle : {
    heading: {
      fontFamily : "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif",
      fontSize : "14px",
      color: '#FF0000'  
    },
    body: {
      fontSize : "20px"
    }         
  }
};


class BibleReflagger extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rendered: false
    }
  }

  componentDidMount() {
    window.refTagger = {
      settings: reflaggerSettings
    };
    loadScriptAsync('https://api.reftagger.com/v2/RefTagger.js').then(() => {
      console.log('script loaded');
    });    
  }

  componentDidUpdate() {

  }


  render() {

    if(!this.state.rendered) {
      return null;
    }
  }
}

export default BibleReflagger;