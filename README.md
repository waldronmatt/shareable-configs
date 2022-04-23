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

## Packages

- [@waldronmatt/browserslist-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/browserslist-config)
- [@waldronmatt/eslint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config)
- [@waldronmatt/postcss-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/postcss-config)
- [@waldronmatt/prettier-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/prettier-config)
- [@waldronmatt/semantic-release-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config)
- [@waldronmatt/stylelint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config)
- [@waldronmatt/webpack-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config)

## License

MIT
