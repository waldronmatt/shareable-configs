# Markdownlint Config

My personal shareable markdownlint configuration.

## Install

```bash
yarn add -D markdownlint @waldronmatt/markdownlint-config
```

## Usage

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@waldronmatt/markdownlint-config/index.json"
}
```

## Extending

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@waldronmatt/markdownlint-config/index.json",
  "MD013": false,
}
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:md "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:md": "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md"
},
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
  '*.md': ['prettier --cache --write', 'markdownlint'],
};
```

## Under The Hood

### `index.json`

- `markdownlint-cli`

## License

MIT
