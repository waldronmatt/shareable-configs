# Commitizen Config

My personal shareable commitizen configuration.

## Install

```bash
npm i --save-dev @waldronmatt/commitizen-config
```

## Usage

**`.czrc`**

```bash
{
  "path": "cz-conventional-changelog"
}
```

**`package.json`**

```json
"scripts": {
  "commit": "git-cz"
},
```

## Under The Hood

### `index.js`

- `commitizen`
- `cz-conventional-changelog`

## License

MIT
