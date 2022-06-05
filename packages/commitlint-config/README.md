# Commitlint Config

My personal shareable commitlint configuration.

## Install

```bash
npm i --save-dev @commitlint/cli @waldronmatt/commitlint-config
```

## Add a Husky Hook

Install husky:

```bash
npm i --save-dev husky && npm set-script prepare "husky install" && npm run prepare
```

Add the hook:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'
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

## Under The Hood

### `index.js`

- `@commitlint/config-conventional`

## License

MIT
