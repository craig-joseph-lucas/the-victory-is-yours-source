'use strict';

const { ChildProcess } = require('child_process');

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');
const { buildSosDoc, writeSosDoc } = require('./create-sos-docs');

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
        studyName
        docxHeader
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
  const docxStudies = {};

  sosNodes.forEach((node) => {
    const { verses } = node;
    let name = node.name.toString().toLowerCase();
    name = name.replace(/\s+/g, '-').toLowerCase();

    console.log(`the sos name is ${name}`);
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
    console.log(`${node.docxHeader}`);
    if (node.docxHeader) {
      const result = buildSosDoc(node.studyName, node.docxHeader, verses);
      const studyName = node.studyName.replace(/\s+/g, '-').toLowerCase();
      studyName.replace(/---\\s+/g, '-').toLowerCase();

      docxStudies[studyName] = docxStudies[studyName] || [];
      docxStudies[studyName] = [
        ...docxStudies[studyName],
        ...result
      ];
    }
  });

  Object.keys(docxStudies).forEach((key) => {
    writeSosDoc(docxStudies[key], key.replace(/-\s+/g, '-').toLowerCase());
  });

  console.dir(docxStudies);
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
