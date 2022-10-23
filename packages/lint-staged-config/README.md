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

An example that includes checking for credentials, ignoring `prettier` on unknown extensions, `yml` linting, and executing tests and coverage output related to files that have been changed in the current commit only.

**`lint-staged.config.js`**

```js
const config = require('@waldronmatt/lint-staged-config');
const ymlConfig = require('@waldronmatt/lint-staged-config/yml');

module.exports = {
  '*': ['secretlint'],
  '!(*.{md,js,jsx,ts,tsx,json,css,scss,yml,yaml})': [
    'prettier --cache --write --ignore-unknown',
  ],
  ...ymlConfig,
  ...config,
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
