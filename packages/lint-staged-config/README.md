# Lint-staged Config

My personal shareable lint-staged configuration.

## Install

```bash
npm i --save-dev lint-staged @waldronmatt/lint-staged-config
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

## Under The Hood

- `lint-staged`

## License

MIT
