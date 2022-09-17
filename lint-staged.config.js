const config = require('./packages/lint-staged-config');

module.exports = {
  ...config,
  '*': ['secretlint'],
};
