import { useState, useEffect } from 'react';

const addScript = setScriptAdded => {
  setScriptAdded(true);
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.async = true;
  el.src = 'https://api.reftagger.com/v2/RefTagger.js';
  document.getElementsByTagName('body')[0].appendChild(el);
};

const addRefTagger = props => {
  window.refTagger = {
    settings: {
      bibleVersion: "ESV",
      roundCorners: true,
      tagChapters: true,
      noSearchTagNames: ["h1","h2","h3","blockquote"],
      customStyle : {
        heading: {
          fontFamily : "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif",
          fontSize : "14px",
          color: "#FF0000"  
        },
        body: {
          fontSize : "20px"
        }         
      },
      ...props
    },
  };
};

const BibleReflagger = props => {
  const [scriptAdded, setScriptAdded] = useState(false);

  useEffect(() => {
    !scriptAdded && addScript(setScriptAdded);
    window && !window.refTagger && addRefTagger(props);
    window.refTagger && window.refTagger.tag && window.refTagger.tag();
    return () => window.refTagger.tag();
  }, []);

  return null;
};

export default BibleReflagger;