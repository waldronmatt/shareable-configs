// https://nextjs.org/docs/advanced-features/customizing-postcss-config
const postcssNormalize = require('postcss-normalize');
const postcssReporter = require('postcss-reporter');
const postcssReporterFormatter = require('postcss-reporter/lib/formatter');

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
    postcssReporter({
      formatter: postcssReporterFormatter(),
    }),
  ],
};
