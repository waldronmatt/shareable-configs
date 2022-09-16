# Markdownlint Config

My personal shareable markdownlint configuration.

## Install

```bash
yarn add -D markdownlint @waldronmatt/markdownlint-config
```

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

## Usage

**`.markdownlint.json`**

```bash
{
  "extends": "./node_modules/@waldronmatt/markdownlint-config/index.json"
}
```

## Under The Hood

### `index.json`

- `markdownlint-cli`

#### Based on [webpack's markdownlint](https://github.com/webpack/webpack.js.org/blob/master/.markdownlint.json)

## License

MIT
