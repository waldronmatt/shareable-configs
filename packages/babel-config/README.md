# Babel Config

My personal shareable babel configuration.

## Install

```bash
yarn add -D @babel/cli @babel/core @waldronmatt/babel-config
```

## Usage

**`babel.config.js`**

```js
module.exports = {
  extends: ['@waldronmatt/babel-config'],
};
```

## Extending

**`babel.config.js`**

```js
module.exports = {
  extends: ['@waldronmatt/babel-config'],
  presets: ['@babel/preset-typescript'],
};
```

## Under The Hood

### `index.js`

- `@babel/plugin-transform-runtime`
- `@babel/preset-env`
- `@babel/runtime`
- `core-js`

## License

MIT
