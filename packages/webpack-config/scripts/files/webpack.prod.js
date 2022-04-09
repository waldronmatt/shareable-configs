const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common.js');

const productionConfig = {
  // prod configs
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
