# Shareable Configs

My personal shareable configurations with fully automated package publishing to NPM Registry.

Monorepo and workflow setup inspired by [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) and [base-configs](https://github.com/demartini/base-configs)

## Features

- Automated publishing to NPM Registry for changed packages
- Automated CHANGELOG generation using Conventional Commits Specification
- Automated GitHub release generation based on changed packages
- Automated dependency and security management using Dependabot and CodeQL

## Getting Started

For your personal use:

1. Update the root `package.json` with your repository name and url.

2. Modify `packages/` for your needs.

3. Generate a `publish` type access token from `NPM` and save as a secret titled `NPM_TOKEN` in your repository.

4. Run `yarn bootstrap` to install dependencies and link any cross-dependencies.

5. Run `yarn commit` instead of `git commit` to prompt for conventional changelog standard.

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
