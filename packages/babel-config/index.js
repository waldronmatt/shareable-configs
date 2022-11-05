/* eslint-disable global-require */
module.exports = {
  presets: [
    // https://github.com/babel/babel/issues/9853#issuecomment-619587386
    [
      '@babel/preset-env',
      {
        corejs: require('core-js/package.json').version,
        debug: true,
        modules: 'auto',
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime#technical-details
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: require('core-js/package.json').version,
        helpers: true,
        regenerator: true,
        version: require('@babel/runtime/package.json').version,
      },
    ],
  ],
};
