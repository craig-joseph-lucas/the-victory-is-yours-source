import React, { useRef, useEffect } from 'react';
import loadScriptAsync from '../../utils/load-script-async';

const reflaggerSettings = {
  bibleVersion: "ESV",
  roundCorners: true,
  tagChapters: true,	
  customStyle : {
    heading: {
      fontFamily : "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif",
      fontSize : "14px",
      color: 'red'
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
    loadScriptAsync('https://api.reftagger.com/v2/RefTagger.js').then(() => {
      console.log('script loaded');
    });    
  }

  componentDidUpdate() {
    //window.refTagger.tag();
  }


  render() {
    window.refTagger = {
      settings: reflaggerSettings
    };

    if(!this.state.rendered) {
      return null;
    }
  }
}

export default BibleReflagger;