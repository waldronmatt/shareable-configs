/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  '!(*.{js,jsx,ts,tsx,css,scss})': [
    'prettier --cache --write --ignore-unknown',
  ],
  '*.{js,jsx,ts,tsx}': ['prettier --cache --write', 'eslint --cache --fix'],
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
};
