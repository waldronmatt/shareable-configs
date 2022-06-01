// https://nextjs.org/docs/advanced-features/customizing-postcss-config
const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-100vh-fix',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      },
    ],
    postcssNormalize({
      forceImport: 'sanitize.css',
    }),
  ],
};
