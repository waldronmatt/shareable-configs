const config = require('./packages/lint-staged-config');
const ymlConfig = require('./packages/lint-staged-config/yml');

module.exports = {
  '*': ['secretlint'],
  ...ymlConfig,
  ...config,
};
