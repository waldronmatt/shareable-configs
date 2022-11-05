const config = require('./packages/lint-staged-config');

module.exports = {
  '*': ['secretlint'],
  ...config,
};
