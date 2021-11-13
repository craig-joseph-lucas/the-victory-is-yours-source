const getVerses = require('../get-verses');
const forEachPromise = require('../for-each-promise');

function getTagVerse(tag) {
  return new Promise((resolve, reject) => {
    getVerses(tag.verses)
      .then((verse) => {
        tag.verses = verse;
        resolve(tag);
      })
      .catch(reject);
  });
}

function getAllTagVerses(tagData) {
  return new Promise((resolve, reject) => {
    forEachPromise(tagData, getTagVerse).then(() => {
      resolve(tagData);
    })
      .catch(reject);
  });
}

module.exports = getAllTagVerses;