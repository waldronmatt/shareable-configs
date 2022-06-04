/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  '*.{css,scss}': ['stylelint --cache --fix', 'prettier --write'],
  '*.{md,html,json}': ['prettier --write'],
};
