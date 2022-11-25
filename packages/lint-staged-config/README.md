# Lint-Staged Config

My personal shareable lint-staged configuration.

## Install

```bash
yarn add -D lint-staged @waldronmatt/lint-staged-config
```

## Usage

**`lint-staged.config.js`**

```js
module.exports = require('@waldronmatt/lint-staged-config');
```

### YML

```js
module.exports = require('@waldronmatt/lint-staged-config/yml');
```

## Extending

A comprehensive example:

**`lint-staged.config.js`**

```js
const config = require('@waldronmatt/lint-staged-config');
const ymlConfig = require('@waldronmatt/lint-staged-config/yml');

module.exports = {
  // check for credentials
  '*': ['secretlint'],
  // ignore prettier on unknown extensions
  '!(*.{md,js,jsx,ts,tsx,json,css,scss,yml,yaml})': [
    'prettier --cache --write --ignore-unknown',
  ],
  ...ymlConfig,
  ...config,
  // lint and fix changed markdown files
  '*.md': ['prettier --cache --write', 'markdownlint'],
  // lint and fix changed json files
  '*.json': ['prettier --cache --write'],
  // lint and fix changed css and scss files
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
  // execute tests related to files changed in the current commit only
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};
```

## Add a Husky Hook

Install husky:

```bash
yarn add -D husky && npm set-script prepare "husky install" && yarn prepare
```

Add the hook:

```bash
npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

## License

MIT
