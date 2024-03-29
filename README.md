# Shareable Configs

My personal shareable configurations with fully automated package publishing to the `NPM` Registry.

## Features

- Automated publishing to the `NPM` Registry for changed packages
- Automated `CHANGELOG.md` generation and `GitHub` releases using conventional commits
- Automated merging of `Dependabot` pull requests of dependency updates.

## Usage

### Installation

Install all configs and associated packages as development dependencies (**excludes** Webpack):

```bash
yarn add -D auto @waldronmatt/auto-config @waldronmatt/browserslist-config @commitlint/cli @waldronmatt/commitlint-config eslint @waldronmatt/eslint-config htmlhint @waldronmatt/htmlhint-config jest @waldronmatt/jest-config lint-staged @waldronmatt/lint-staged-config markdownlint @waldronmatt/markdownlint-config postcss @waldronmatt/postcss-config prettier @waldronmatt/prettier-config secretlint @waldronmatt/secretlint-config semantic-release @waldronmatt/semantic-release-config stylelint @waldronmatt/stylelint-config typescript @waldronmatt/tsconfig-config
```

### Set up Husky

Follow the directions [found here](https://github.com/waldronmatt/shareable-configs/tree/main/docs/HUSKY.md).

### Set up Commitizen

Follow the directions [found here](https://github.com/waldronmatt/shareable-configs/tree/main/docs/COMMITIZEN.md).

### Create Config Files

Follow the `Usage` section via the `README.md` in each package.

Some packages have examples of extended configurations to better support other packages and/or constitute a complete working configuration for projects.

See [eslint](https://github.com/waldronmatt/shareable-configs/tree/main/packages/eslint-config#extending), [jest](https://github.com/waldronmatt/shareable-configs/tree/main/packages/jest-config#extending), [lint-staged](https://github.com/waldronmatt/shareable-configs/tree/main/packages/lint-staged-config#extending), [semantic-release](https://github.com/waldronmatt/shareable-configs/tree/main/packages/semantic-release-config#extending), [stylelint](https://github.com/waldronmatt/shareable-configs/tree/main/packages/stylelint-config#extending), and [tsconfig](https://github.com/waldronmatt/shareable-configs/tree/main/packages/tsconfig-config#extending).

### Add NPM Scripts

```bash
npm set-script lint:md "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md" && npm set-script lint:js "eslint --fix **/*.{js,jsx,ts,tsx}" && npm set-script lint:css "stylelint --fix **/*.{css,scss}" && npm set-script lint:html "htmlhint --config ./node_modules/@waldronmatt/htmlhint-config/index.json **/*.html" && npm set-script lint:secrets "npx secretlint **/*" && npm set-script lint "yarn lint:md && yarn lint:js && yarn lint:css && yarn lint:html && yarn lint:secrets" && npm set-script test "jest"
```

### Install Git Hooks

Install husky and all hooks and npm scripts associated with configs:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit' && npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

### Webpack

For Webpack, follow the directions in the [README.md](https://github.com/waldronmatt/shareable-configs/tree/main/packages/webpack-config#readme).

## Other Awesome Monorepos

- [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) - A basic Lerna monorepo with Yarn Workspaces, Conventional Commits and GitHub Actions.
- [base-configs](https://github.com/demartini/base-configs) - A collection of base configs for code quality and linting tools.
- [threepio](https://github.com/the-holocron/threepio) - Shareable configurations that are used within the Galaxy.
- [medly](https://github.com/medly/configs) - Share common configurations across different projects.
- [code-quality-tools](https://github.com/strvcom/code-quality-tools) - Shareable configurations for various coding-style/best practices/lint tools.
- [frontend-configs](https://github.com/drivy/frontend-configs) - NPM-Published front-end shareable configurations.

## License

MIT
