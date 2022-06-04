# Shareable Configs

My personal shareable configurations with fully automated package publishing to NPM Registry.

Monorepo and workflow setup inspired by [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) and [base-configs](https://github.com/demartini/base-configs).

## Features

- Automated publishing to NPM Registry for changed packages
- Automated CHANGELOG generation and GitHub releases using Conventional Commits

## Getting Started

For your personal use:

1. Update the root `package.json` with your repository name and url.

2. Modify `packages/` to suit your needs.

3. Generate a `publish` access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

4. Run `yarn commit` to prompt for conventional changelog standard and commit changes.

## Dependency Management

Install workspace dependencies

```bash
yarn add [package-name] -D -W
```

Install dependencies for a package

```bash
cd packages/[package-name]
```

```bash
yarn add [package-name]
```

Sync `dependabot` changes made to `yarn.lock` with `package.json` files in `packages/`:

```bash
yarn syncyarnlock -s -k
```

```bash
yarn
```

**Note**: This will trigger a new release for projects with a modified `package.json` and applicable commit type.

## Packages

- [@waldronmatt/browserslist-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/browserslist-config#readme)
- [@waldronmatt/commitizen-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/commitizen-config#readme)
- [@waldronmatt/commitlint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/commitlint-config#readme)
- [@waldronmatt/eslint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config#readme)
- [@waldronmatt/jest-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/jest-config#readme)
- [@waldronmatt/lint-staged-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/lint-staged-config#readme)
- [@waldronmatt/postcss-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/postcss-config#readme)
- [@waldronmatt/prettier-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/prettier-config#readme)
- [@waldronmatt/semantic-release-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config#readme)
- [@waldronmatt/stylelint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config#readme)
- [@waldronmatt/tsconfig-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/tsconfig-config#readme)
- [@waldronmatt/webpack-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config#readme)

## License

MIT
