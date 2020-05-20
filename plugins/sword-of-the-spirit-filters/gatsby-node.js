const getAllTagVerses = require('../../src/utils/tags/get-all-tag-verses');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const swordOfSpiritFilters = await getAllTagVerses();

    swordOfSpiritFilters.forEach(filter => {
      const name = filter.name.toString().toLowerCase();
      const node = {
        name: name,
        id: createNodeId(`Sword-of-the-spirit-filter-${name}`),
        verses: filter.verses,
        internal: {
          type: "SwordOfTheSpiritFilter",
          contentDigest: createContentDigest(filter),
        },
      }
      actions.createNode(node)
    })
  }