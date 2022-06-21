/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
  '*.{css,scss}': ['prettier --write', 'stylelint --cache --fix'],
  '*.{md,html,json}': ['prettier --write'],
};
