# Commitizen Config

My personal shareable commitizen configuration.

## Install

```bash
yarn add -D commitizen @waldronmatt/commitizen-config
```

## Add an NPM Script

Running this command:

```bash
npm set-script commit "git-cz"
```

Will create:

**`package.json`**

```json
"scripts": {
  "commit": "git-cz"
},
```

## Usage

**`.czrc`**

```bash
{
  "path": "cz-conventional-changelog"
}
```

## Under The Hood

### `index.js`

- `cz-conventional-changelog`

## License

MIT
