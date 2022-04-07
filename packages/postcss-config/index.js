// https://nextjs.org/docs/advanced-features/customizing-postcss-config

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-100vh-fix': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    },
  },
};
