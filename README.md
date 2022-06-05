# Shareable Configs

My personal shareable configurations with fully automated package publishing to NPM Registry.

Monorepo and workflow setup inspired by [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) and [base-configs](https://github.com/demartini/base-configs).

## Features

- Automated publishing to NPM Registry for changed packages
- Automated CHANGELOG generation and GitHub releases using Conventional Commits

## Installation

Install all configs and associated packages as development dependencies:

**Note**: This will automatically create configuration files in your root directory; **excluding** Webpack.

```bash
yarn add -D @waldronmatt/browserslist-config commitizen @waldronmatt/commitizen-config @commitlint/cli @waldronmatt/commitlint-config eslint @waldronmatt/eslint-config jest @waldronmatt/jest-config lint-staged @waldronmatt/lint-staged-config postcss @waldronmatt/postcss-config prettier @waldronmatt/prettier-config semantic-release @waldronmatt/semantic-release-config stylelint @waldronmatt/stylelint-config @waldronmatt/tsconfig-config webpack webpack-merge webpack-cli @waldronmatt/webpack-config
```

## Getting Started

**Husky**:

Install husky and all hooks and npm scripts associated with configs:

```bash
yarn add -D husky && npm set-script prepare "husky install" && yarn prepare && npm set-script commit "git-cz" && npm set-script test "jest" && npx husky add .husky/commit-msg 'npx --no-install commitlint --edit' && npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

**Webpack**:

For Webpack, follow the directions in [README.md](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config#readme).

**Semantic Release**:

For semantic-release, create a release file by following the directions in [README.md](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config#readme).

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
