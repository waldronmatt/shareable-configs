const { ESBuildMinifyPlugin } = require('esbuild-loader');

const productionConfig = {
  mode: 'production',
  // fairly quick build speed that's recommended for production use
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  },
  performance: {
    hints: 'warning',
  },
};

module.exports = productionConfig;
