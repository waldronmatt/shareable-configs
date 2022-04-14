# Semantic Release Config

My personal shareable semantic-release configuration.

## Install

```bash
npm i --save-dev semantic-release @waldronmatt/semantic-release-config
```

## Usage

**`.releaserc.json`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config"]
}
```

Example **`release.yml`**:


```yml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    name: Semantic Release GitHub
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: bahmutov/npm-install@v1.8.7

      - uses: codfish/semantic-release-action@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Under The Hood

### `index.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/github`

## License

MIT
