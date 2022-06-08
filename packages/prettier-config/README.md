# Prettier Config

My personal shareable prettier configuration.

## Install

```bash
yarn add -D prettier @waldronmatt/prettier-config
```

## Usage

**`.prettierrc.js`**

```js
module.exports = '@waldronmatt/prettier-config';
```

## Extending

**`.prettierrc.js`**

```js
module.exports = {
  ...require('@waldronmatt/prettier-config'),
  semi: false,
};
```

## License

MIT
