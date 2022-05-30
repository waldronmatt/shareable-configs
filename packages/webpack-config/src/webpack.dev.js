// eslint-disable-next-line unicorn/prevent-abbreviations
const developmentConfig = {
  mode: 'development',
  // map your compiled code back to your original source code.
  devtool: 'inline-source-map',
  optimization: {
    // don't minimize so we can debug
    minimize: false,
    // https://webpack.js.org/guides/build-performance/#avoid-extra-optimization-steps
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  performance: {
    hints: false,
  },
};

module.exports = developmentConfig;
