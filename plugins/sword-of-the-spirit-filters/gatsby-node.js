const getAllTagVerses = require('./get-all-tag-verses');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest}) => {
    const swordOfSpiritFilters = await getAllTagVerses();
    swordOfSpiritFilters.forEach(filter => {
      const name = filter.name.toString().toLowerCase();
      const nodePath = `/sword-of-the-spirit/${name}`;

        const node = {
        name: filter.name,
        path: nodePath,
        id: createNodeId(`Sword-of-the-spirit-filter-${filter.name}`),
        verses: filter.verses,
        internal: {
          type: "SwordOfTheSpiritFilter",
          contentDigest: createContentDigest(filter),
        },
      }
      actions.createNode(node)
    })
  }