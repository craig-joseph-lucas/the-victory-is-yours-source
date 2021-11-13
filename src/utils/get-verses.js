const ESV_API  = require('../constants/keys');
const SETTINGS = require('../constants/esv-api');
const axios = require('axios');

function getVerses (verses) {
    return new Promise((resolve, reject) => {

      
        const verseKeywords = verses.join(';');
        const versesToRender = [];
        const params = new URLSearchParams({
            ...SETTINGS,
            q: verseKeywords
          });
          axios.get('https://api.esv.org/v3/passage/text/?' + params.toString(), {
            headers: {
              Authorization: `Token ${ESV_API}`
            }
          })
          .then(res=>{
              const { passages } = res.data;
              verses.forEach((item,index) => {
                versesToRender.push({
                  keyword: item,
                  overrideVerse: passages[index]
                })
                resolve(versesToRender);
              });
          })
          .then(verses=> verses).catch(err => {
            reject(err)
          });
    });
}

module.exports = getVerses;