// eslint-disable-next-line unicorn/prevent-abbreviations
const productionConfig = {
  mode: 'production',
  // fairly quick build speed that's recommended for production use
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
  performance: {
    hints: 'warning',
  },
};

module.exports = productionConfig;
