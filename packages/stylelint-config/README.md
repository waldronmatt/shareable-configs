# Stylelint Config

My personal shareable stylelint configuration.

## Install

```bash
npm i --save-dev stylelint @waldronmatt/stylelint-config
```

## Usage

**`.stylelintrc.js`**

### CSS

```js
module.exports = {
  extends: '@waldronmatt/stylelint-config',
};
```

### SCSS

```js
module.exports = {
  extends: '@waldronmatt/stylelint-config/scss',
};
```

## Extending

**`.stylelintrc.js`**

```js
module.exports = {
  ignoreFiles: ['dist/**'],
  extends: '@waldronmatt/stylelint-config/scss',
  overrides: [
    {
      files: ['**/*.css'],
      extends: '@waldronmatt/stylelint-config',
    },
  ],
};
```

## Under The Hood

### `index.js`

- Plugins
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
- Extends
  - `stylelint-config-standard`
  - `stylelint-a11y`
  - `stylelint-prettier`

### `scss.js`

- Plugins
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
- Extends
  - `stylelint-config-standard-scss`
  - `stylelint-config-sass-guidelines`
  - `stylelint-a11y`
  - `stylelint-prettier`

## License

MIT
