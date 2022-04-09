const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common.js');

const developmentConfig = {
  // dev configs
};

module.exports = extendWebpackBaseConfig(commonConfig, developmentConfig);
