# Semantic-Release Config

My personal shareable semantic-release configuration.

## Install

```bash
yarn add -D semantic-release @waldronmatt/semantic-release-config
```

## Usage

**`.releaserc.json`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config"]
}
```

**`.github/workflows/release.yml`**:

```yml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Cache Node Modules
        uses: actions/cache@v3
        id: cache
        with:
          path: node_modules
          key: node-modules-${{ hashFiles('**/yarn.lock') }}

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn bootstrap:ci

      - name: Lint
        run: yarn lint

      - name: Test
        run: yarn test

      - name: Build
        run: yarn build

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npx semantic-release
```

### NPM

Additionally publishes to `NPM` Registry.

**Note**: Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

**`.releaserc.json`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config/npm"]
}
```

**`.github/workflows/release.yml`**:

```yml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Cache Node Modules
        uses: actions/cache@v3
        id: cache
        with:
          path: node_modules
          key: node-modules-${{ hashFiles('**/yarn.lock') }}

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn bootstrap:ci

      - name: Lint
        run: yarn lint

      - name: Test
        run: yarn test

      - name: Build
        run: yarn build

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # Line below is specific to @waldronmatt/semantic-release-config/npm
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release
```

## Under The Hood

### `index.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/npm`
- `@semantic-release/github`
- `@semantic-release/git`

## License

MIT
