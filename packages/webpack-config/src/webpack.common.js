const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = isProduction => {
  // pass `isProduction` environment variable into your parts file
  parts(isProduction);

  // destructure parts modules
  const { setStyleOutputPath, setScriptOutputPath, loadCSS, loadJS } = parts;

  return merge([
    {
      output: {
        clean: true,
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      optimization: {
        /*
          The value 'single' creates a runtime file shared for all chunks.
          https://webpack.js.org/guides/caching/#extracting-boilerplate
          Multiple Chunks HMR Bug:
          https://github.com/webpack/webpack-dev-server/issues/2792
        */
        runtimeChunk: 'single',
      },
    },
    setStyleOutputPath(),
    setScriptOutputPath(),
    loadCSS(),
    loadJS(),
  ]);
};

module.exports = commonConfig;
