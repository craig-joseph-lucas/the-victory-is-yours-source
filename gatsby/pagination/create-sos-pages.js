'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (edges, graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const sosResult = await graphql(`
  query MyPokemonQuery {
    allSwordOfTheSpiritFilter {
      nodes {
        name
        path
        hidePopularFilter
        verses {
          keyword
          overrideVerse
        }
        id
      }
    }
  }
  `);

  const {
    data: {
      allSwordOfTheSpiritFilter: {
        nodes: sosNodes,
      }
    },
  } = sosResult;

  if (!sosNodes.length) {
    return null;
  }

  const sosFilters = sosNodes.map(({ name, path, hidePopularFilter }) => ({ fieldValue: name, url: path, hidePopularFilter }));

  sosNodes.forEach((node) => {
    let name = node.name.toString().toLowerCase();
    name = name.replace(' ', '-');
    const nodePath = `/sword-of-the-spirit/${name}`;
    let devotionals = _.filter(edges, {
      node: {
        frontmatter: {
          tags: [node.name]
        }
      }
    });

    devotionals = devotionals.slice(0, 5);
    node.path = nodePath;
    createPage({
      path: nodePath,
      component: path.resolve('./src/templates/sword-of-the-spirit-template.js'),
      context: {
        verses: node.verses,
        activeTopic: node.name,
        devotionals,
        filters: sosFilters
      }
    });
  });

  const defaultDevotionals = edges.slice(0, 10);
  const defaultSos = sosNodes.filter((node) => node.name === 'default');
  createPage({
    path: '/sword-of-the-spirit',
    component: path.resolve('./src/templates/sword-of-the-spirit-template.js'),
    context: {
      verses: defaultSos[0].verses,
      devotionals: defaultDevotionals,
      filters: sosFilters,
    }
  });
  createPage({
    path: '/sword-of-the-spirit/search',
    component: path.resolve('./src/templates/sword-of-the-spirit-template.js'),
    context: {
      verses: [],
      devotionals: [],
      filters: sosFilters,
    }
  });

};
