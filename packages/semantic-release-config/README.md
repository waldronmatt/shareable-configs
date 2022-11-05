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

**`package.json`**

```json
"scripts": {
  "bootstrap:ci": "yarn install --frozen-lockfile --ignore-engines",
  "lint": "[your scripts go here]",
  "test": "[your scripts go here]",
  "build": "[your scripts go here]",
},
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
          # optional - used by @waldronmatt/semantic-release-config/github
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # optional - used by @waldronmatt/semantic-release-config/github-npm
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release
```

### Github

Additionally publishes a `GitHub` release and publishes to the `NPM` Registry.

**Note**: Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

**`.releaserc.json`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config/github"]
}
```

or

```js
{
  "extends": ["@waldronmatt/semantic-release-config/github-npm"]
}
```

**`.github/workflows/release.yml`**:

(See above)

### GitLab

Additionally publishes a `GitLab` release and publishes to the `NPM` Registry.

**Note**: Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

**`.gitlab-ci-yml`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config/gitlab.js"]
}
```

or

```js
{
  "extends": ["@waldronmatt/semantic-release-config/gitlab-npm.js"]
}
```

**`.gitlab-ci-yml`**:

[See the GitLab documentation](https://docs.gitlab.com/ee/ci/examples/semantic-release.html#configure-the-pipeline) for more information.

## Extending

An example using the `github-npm` config with different branching strategies to support publishing on [distribution channels](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/distribution-channels.md), [maintenance releases](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/maintenance-releases.md), and [pre-releases](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/pre-releases.md).

**`.releaserc.json`**

```js
{
  "extends": ["@waldronmatt/semantic-release-config/github-npm"],
  "branches": [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    "next-major",
    { "name": "beta", "prerelease": true },
    { "name": "alpha", "prerelease": true }
  ]
}
```

## Under The Hood

### `index.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/git`

### `github.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/github`
- `@semantic-release/git`

### `github-npm.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/npm`
- `@semantic-release/github`
- `@semantic-release/git`

### `gitlab.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/gitlab`
- `@semantic-release/git`

### `gitlab-npm.js`

- `@semantic-release/commit-analyzer`
- `@semantic-release/release-notes-generator`
- `@semantic-release/changelog`
- `@semantic-release/npm`
- `@semantic-release/gitlab`
- `@semantic-release/git`

## License

MIT
