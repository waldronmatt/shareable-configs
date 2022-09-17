# Dependency Management

Documentation on how to manage package dependencies using `yarn workspace` and associated tools.

The commands for `yarn workspace` [can be found here](https://classic.yarnpkg.com/en/docs/cli/workspace).

## Installation

Install dependencies to the workspace root:

**Note**: Existing literature recommends installing workspace dependencies as `development` dependencies.

```bash
yarn add [package-name] -D -W
```

Remove dependencies from the workspace:

```bash
yarn remove [package-name] -W
```

Install dependencies for a package

**Note**: This assumes your `awesome-package`'s `package.json` is located under `packages/awesome-package/package.json`.

```bash
yarn workspace awesome-package add [package-name]
```

Remove dependencies for a package

```bash
yarn workspace awesome-package remove [package-name]
```

## Syncing Version Changes with Packages

This repository uses `GitHub Actions` to automate dependency updates. While this process does update the `yarn.lock` file located at the project root, it is not configured to update each package's `package.json`.

Updating the `package.json`s for each package would trigger a `lerna` release frequently which is something I wanted to avoid. However I wanted the option to update `package.json` files manually should an update I make be dependent on a dependency version getting updated.

For this you can use a tool called `syncyarnlock` which will parse `yarn.lock` and bump versions of associated `package.json` dependencies automatically.

## Using syncyarnlock

Sync `dependabot` changes made to `yarn.lock` with `package.json` files in `packages/`:

```bash
yarn syncyarnlock -s -k
```

```bash
yarn
```

Then use conventional commits and push out your changes.

**Note**: This will trigger a new release for projects with a modified `package.json` and applicable commit type.

## Peer Dependencies

Peer dependencies are a good way to indicate to consumers of your configuration that your code is compatible with this version of a package. For example, you indicate a minimum version of `eslint` in your `eslint-config`. You might do this if a new feature comes out that you want to use and want to ensure consumers use the correct, updated version. When users consume your package, they will need to have the minimum `eslint` version installed on their repository.

To add a peer dependency to a configuration, you'll need to install and add the line of the package manually to your `package.json`'s `peerDependencies` field.
