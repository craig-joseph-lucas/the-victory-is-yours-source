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

  const sosFilters = sosNodes.map(({name, path }) => ({fieldValue: name, url: path}));

  sosNodes.forEach(node => {
    const name = node.name.toString().toLowerCase();
    const nodePath = `/sword-of-the-spirit/${name}`;
    const devotionals = _.filter(edges, {
      node: {
        frontmatter: {
          tags: [node.name]
        }
      }
    });
    node.path = nodePath;
    createPage({
      path: nodePath,
      component: path.resolve('./src/templates/sword-of-the-spirit-template.js'),
      context: { 
        verses: node.verses,
        activeTopic: node.name,
        devotionals: devotionals,
        filters: sosFilters
      }
    });
  });
 
  var defaultDevotionals = edges.slice(0,10);
  var defaultSos = sosNodes.filter(node => node.name === 'default');
  createPage({
    path: '/sword-of-the-spirit',
    component: path.resolve('./src/templates/sword-of-the-spirit-template.js'),
    context: { 
      verses: defaultSos[0].verses,
      devotionals: defaultDevotionals,
      filters: sosFilters,
    }
  });
  

  };
