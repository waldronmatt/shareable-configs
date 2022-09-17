# Secretlint Config

My personal shareable secretlint configuration.

## Install

```bash
yarn add -D secretlint @waldronmatt/secretlint-config
```

Running this command:

```bash
npm set-script lint:secrets "npx secretlint **/*"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:secrets": "npx secretlint **/*"
},
```

## Usage

**`.secretlintrc.js`**

```js
module.exports = {
  ...require('@waldronmatt/secretlint-config'),
};
```

## Under The Hood

### `index.js`

- `@secretlint/secretlint-rule-preset-recommend`

## License

MIT
