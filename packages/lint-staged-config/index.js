/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  '!(*.{js,jsx,ts,tsx,css,scss})': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
  '*.{css,scss}': ['prettier --write', 'stylelint --cache --fix'],
};
