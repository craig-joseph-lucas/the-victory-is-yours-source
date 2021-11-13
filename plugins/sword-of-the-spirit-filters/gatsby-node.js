const getAllTagVerses = require('../../src/utils/tags/get-all-tag-verses.js');
const tagData = require('./tag-data');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest}) => {
    const swordOfSpiritFilters = await getAllTagVerses(tagData);
    swordOfSpiritFilters.forEach(filter => {
      const name = filter.name.toString().toLowerCase();
      let nodePath = `/sword-of-the-spirit/${name}`;
      nodePath = nodePath.replace(' ','-');

      const node = {
        name: filter.name,
        path: nodePath,
        id: createNodeId(`Sword-of-the-spirit-filter-${filter.name}`),
        verses: filter.verses,
        hidePopularFilter: filter.hidePopularFilter,
        internal: {
          type: "SwordOfTheSpiritFilter",
          contentDigest: createContentDigest(filter),
        },
      }
      actions.createNode(node)
    })
  }