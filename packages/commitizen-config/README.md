# DEPRECATED - Commitizen Config

~~My personal shareable commitizen configuration.~~

**Why?** - This package no longer uses a postinstall script to auto create a `.czrc` file and it is preferred to follow `commitizen`'s instructions to install and set up.

## Install

```bash
yarn add -D commitizen @waldronmatt/commitizen-config
```

## Usage

**`.czrc`**

```bash
{
  "path": "cz-conventional-changelog"
}
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

## Under The Hood

### `index.js`

- `cz-conventional-changelog`

## License

MIT
