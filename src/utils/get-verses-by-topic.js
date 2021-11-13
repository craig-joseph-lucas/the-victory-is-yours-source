const ESV_API  = require('../constants/keys');
const SETTINGS = require('../constants/esv-api');
const axios = require('axios');

function getVersesByTopic (topic) {
    return new Promise((resolve, reject) => {

        const params = new URLSearchParams({
            ...SETTINGS,
            q: topic
          });
          axios.get('https://api.esv.org/v3/passage/search/?' + params.toString(), {
            headers: {
              Authorization: `Token ${ESV_API}`
            }
          })
          .then(res=>{
              const { results } = res.data;
              console.log(res);
              resolve(results)
          })
          .then(verses=> verses).catch(err => {
            reject(err)
          });
    });
}

module.exports = getVersesByTopic;