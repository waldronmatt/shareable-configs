# Shareable Configs

My personal shareable configurations for projects.

Monorepo and workflow configurations based on [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) template. Monorepo hooks and linting inspired by [base-configs](https://github.com/demartini/base-configs)

## Features

- Automated publishing to NPM and the GitHub Package Registry for changed packages.
- Automated security scans and dependency management.

## Usage

Install package dependencies and link any cross-dependencies:

```bash
yarn bootstrap
```

Add a dependency to a package:

```bash
lerna add <package-name> --scope=@my-scope-name/my-package
```

**Note**: You cannot install multiple packags at once.

Add a dependency to the workspace:

```bash
yarn add <package-name> -D -W
```

Run the cli for commits:

```bash
yarn commit
```

## Packages

- [@waldronmatt/browserslist-config](https://github.com/shareable-configs/tree/main/packages/browserslist-config)
- [@waldronmatt/eslint-config](https://github.com/shareable-onfigs/tree/main/packages//eslint-config)
- [@waldronmatt/postcss-config](https://github.com/shareable-configs/tree/main/packages/postcss-config)
- [@waldronmatt/prettier-config](https://github.com/shareable-configs/tree/main/packages/prettier-config)
- [@waldronmatt/semantic-release-config](https://github.com/shareable-configs/tree/main/packages/semantic-release-config)
- [@waldronmatt/stylelint-config](https://github.com/shareable-configs/tree/main/packages/stylelint-config)
- [@waldronmatt/webpack-config](https://github.com/shareable-configs/tree/main/packages/webpack-config)

## Tools

### Monorepo Tools

- [Lerna](https://github.com/lerna/lerna) - Tool for managing JavaScript projects with multiple packages.
- [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) - Optimize dependency management

### Commit Tools

- [Commitizen](https://github.com/commitizen/cz-cli) - Prompts for conventional changelog standard when commiting files via a cli
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) - Commitizen adapter for the [angular preset of conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) - Git hooks manager
- [lint-staged](https://github.com/okonet/lint-staged) - Runs linters on git staged files

### Linters

- [commitlint](https://github.com/conventional-changelog/commitlint) - Lint commit messages
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) - Shareable commitlint config enforcing [conventional commits](https://conventionalcommits.org/).
- [eslint](https://eslint.org/) - JavaScript linter
- [prettier](https://prettier.io/) - Opinionated code formatter

### Deployment

- Lerna's [--conventional-commits](https://github.com/lerna/lerna/blob/main/commands/version/README.md#--conventional-commits) flag - `lerna version` will use the [Conventional Commits Specification](https://conventionalcommits.org/) to [determine the version bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) and [generate CHANGELOG.md files](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
- Lerna's [--create-release](https://github.com/lerna/lerna/blob/main/commands/version/README.md#--create-release-type) flag - `lerna version` will create an official GitHub release based on the changed packages

### Automated Workflows

- [GitHub Actions](https://docs.github.com/en/actions) - Automates bootstraping, versioning, and publishing to NPM.
- [Dependabot](https://github.com/dependabot) - Automated dependency updates
- [CodeQL](https://codeql.github.com/) - discovers vulnerabilities

## License

MIT
