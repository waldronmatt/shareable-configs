# Lint-Staged Config

My personal shareable lint-staged configuration.

## Install

```bash
npm i --save-dev lint-staged @waldronmatt/lint-staged-config
```

## Add a Husky Hook

Install husky:

```bash
npm i --save-dev husky && npm set-script prepare "husky install" && npm run prepare
```

Add the hook:

```bash
npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

## Usage

**`lint-staged.config.js`**

```js
module.exports = require('@waldronmatt/lint-staged-config');
```

## Extending

**`lint-staged.config.js`**

```js
const config = require('@waldronmatt/lint-staged-config');

module.exports = {
  ...config,
  '*.{ts,js}?x': ['yarn test --bail --passWithNoTests --findRelatedTests'],
};
```

## License

MIT
