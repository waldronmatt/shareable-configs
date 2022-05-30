const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');

// eslint-disable-next-line unicorn/prevent-abbreviations
const commonConfig = (isProduction, env) => {
  // pass `isProduction` and Webpack's `env` variable into your parts file
  parts(isProduction, env);

  // optionally destructure parts modules for use in our base config
  // const { loadJS } = parts;

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

    // optionally load parts in our base config
    // loadJS(),
  ]);
};

module.exports = commonConfig;
