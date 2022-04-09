/* eslint-disable */

const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common');

const productionConfig = {
  // prod configs
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
