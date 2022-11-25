# DEPRECATED - Babel Config

~~My personal shareable babel configuration.~~

**Why?** - Alternatives to babel such as esbuild offer better performance for my projects.

## Install

```bash
yarn add -D @babel/cli @babel/core @waldronmatt/babel-config
```

Allow `babel-preset-env` to target polyfills and code transforms via a `.browserslistrc` file:

```bash
yarn add -D @waldronmatt/browserslist-config
```

And create:

**`.browserslistrc`**

```bash
extends @waldronmatt/browserslist-config
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
- `browserslist`
- `core-js`

## License

MIT
