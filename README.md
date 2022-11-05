# Shareable Configs

My personal shareable configurations with fully automated package publishing to the `NPM` Registry.

## Features

- Automated publishing to the `NPM` Registry for changed packages
- Automated `CHANGELOG.md` generation and `GitHub` releases using conventional commits
- Automated merging of `Dependabot` pull requests of dependency updates.

## Installation

Install all configs and associated packages as development dependencies (**excludes** Webpack):

```bash
yarn add -D @waldronmatt/browserslist-config @commitlint/cli @waldronmatt/commitlint-config eslint @waldronmatt/eslint-config htmlhint @waldronmatt/htmlhint-config jest @waldronmatt/jest-config lint-staged @waldronmatt/lint-staged-config markdownlint @waldronmatt/markdownlint-config postcss @waldronmatt/postcss-config prettier @waldronmatt/prettier-config secretlint @waldronmatt/secretlint-config semantic-release @waldronmatt/semantic-release-config stylelint @waldronmatt/stylelint-config @waldronmatt/tsconfig-config
```

### Create Config Files

Follow the `Usage` section via the `README.md` in each package.

Some packages have examples of extended configurations to better support other packages and/or constitute a complete working configuration for projects.

See [eslint](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config#extending), [jest](https://github.com/waldronmatt/shareable-configs/tree/main/packages/jest-config#extending), [lint-staged](https://github.com/waldronmatt/shareable-configs/tree/main/packages/lint-staged-config#extending), [stylelint](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config#extending), and [tsconfig](https://github.com/waldronmatt/shareable-configs/tree/main/packages/tsconfig-config#extending).

### Add NPM Scripts

```bash
npm set-script commit "git-cz" && npm set-script lint:md "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md" && npm set-script lint:js "eslint --fix **/*.{js,jsx,ts,tsx}" && npm set-script lint:css "stylelint --fix **/*.{css,scss}" && npm set-script lint:html "htmlhint --config ./node_modules/@waldronmatt/htmlhint-config/index.json **/*.html" && npm set-script lint:secrets "npx secretlint **/*" && npm set-script lint "yarn lint:md && yarn lint:js && yarn lint:css && yarn lint:html && yarn lint:secrets" && npm set-script test "jest"
```

### Install Husky and Git Hooks

Install husky and all hooks and npm scripts associated with configs:

```bash
yarn add -D husky && npm set-script prepare "husky install" && yarn prepare && npx husky add .husky/commit-msg 'npx --no-install commitlint --edit' && npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

### Semantic Release

For semantic-release, create a release file by following the directions in the [README.md](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config#readme).

### Webpack

For Webpack, follow the directions in the [README.md](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config#readme).

## Packages

- ~~[@waldronmatt/babel-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/babel-config#readme)~~ - **DEPRECATED**
- [@waldronmatt/browserslist-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/browserslist-config#readme)
- ~~[@waldronmatt/commitizen-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/commitizen-config#readme)~~ - **DEPRECATED**
- [@waldronmatt/commitlint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/commitlint-config#readme)
- [@waldronmatt/eslint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config#readme)
- [@waldronmatt/htmlhint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/htmlhint-config#readme)
- [@waldronmatt/jest-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/jest-config#readme)
- [@waldronmatt/lint-staged-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/lint-staged-config#readme)
- [@waldronmatt/markdownlint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/markdownlint-config#readme)
- [@waldronmatt/postcss-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/postcss-config#readme)
- [@waldronmatt/prettier-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/prettier-config#readme)
- [@waldronmatt/secretlint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/secretlint-config#readme)
- [@waldronmatt/semantic-release-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config#readme)
- [@waldronmatt/stylelint-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config#readme)
- [@waldronmatt/tsconfig-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/tsconfig-config#readme)
- [@waldronmatt/webpack-config](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config#readme)

## Other Awesome Monorepos

- [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) - A basic Lerna monorepo with Yarn Workspaces, Conventional Commits and GitHub Actions.
- [base-configs](https://github.com/demartini/base-configs) - A collection of base configs for code quality and linting tools.
- [threepio](https://github.com/the-holocron/threepio) - Shareable configurations that are used within the Galaxy.
- [medly](https://github.com/medly/configs) - Share common configurations across different projects.

## License

MIT
