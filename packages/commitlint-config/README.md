# Commitlint Config

My personal shareable commitlint configuration.

## Install

```bash
yarn add -D @commitlint/cli @waldronmatt/commitlint-config
```

## Usage

**`commitlint.config.js`**

```js
module.exports = {
  extends: ['@waldronmatt/commitlint-config'],
};
```

## Extending

**`commitlint.config.js`**

```js
module.exports = {
  extends: ['@waldronmatt/commitlint-config'],
  rules: {
    'body-leading-blank': [2, 'always'],
  },
};
```

## Add a Husky Hook

Install husky:

```bash
yarn add -D husky && npm set-script prepare "husky install" && yarn prepare
```

Add the hook:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'
```

## Under The Hood

### `index.js`

- `@commitlint/config-conventional`

## License

MIT
