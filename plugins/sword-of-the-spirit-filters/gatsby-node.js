const getAllTagVerses = require('../../src/utils/tags/get-all-tag-verses.js');
const tagData = require('./tag-data');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest}) => {
    const swordOfSpiritFilters = await getAllTagVerses(tagData);
    swordOfSpiritFilters.forEach(filter => {
      const name = filter.name.replace(/\s+/g, '-').toLowerCase();
      console.log(`GN the sos name is ${name}`);

      let nodePath = `/sword-of-the-spirit/${name}`;

      const node = {
        name: filter.name,
        path: nodePath,
        id: createNodeId(`Sword-of-the-spirit-filter-${filter.name}`),
        verses: filter.verses,
        hidePopularFilter: filter.hidePopularFilter,
        docxHeader: filter.docxHeader,
        studyName: filter.studyName,
        internal: {
          type: "SwordOfTheSpiritFilter",
          contentDigest: createContentDigest(filter),
        },
      }
      actions.createNode(node)
    })
  }