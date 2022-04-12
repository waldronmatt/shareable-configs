/* eslint-disable */

const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');

// eslint-disable-next-line no-unused-vars
const commonConfig = (isProduction, env) => {
  return merge([
    {
      entry: {
        main: './src/index.js',
      },
    },
    baseParts.loadJS(),
    baseParts.setScriptOutputPath(),
    baseParts.loadCSS(),
    baseParts.setStyleOutputPath(),
  ]);
};

module.exports = commonConfig;
