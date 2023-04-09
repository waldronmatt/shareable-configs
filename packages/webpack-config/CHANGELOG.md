# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@3.0.0...@waldronmatt/webpack-config@3.0.1) (2023-04-09)

**Note:** Version bump only for package @waldronmatt/webpack-config

# [3.0.0](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.5...@waldronmatt/webpack-config@3.0.0) (2023-04-09)

### Features

- **webpack-config:** consolidate js loaders into one ([2cbabe1](https://github.com/waldronmatt/shareable-configs/commit/2cbabe1a75bfa861c8c0565f8d407be800cbcfe1))

### BREAKING CHANGES

- **webpack-config:** esbuild upgrade eliminated loader option and can consolidate js loader api into one

## [2.9.5](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.4...@waldronmatt/webpack-config@2.9.5) (2022-10-23)

### Bug Fixes

- **package.json:** sync yarn.lock versions to package.json ([c295919](https://github.com/waldronmatt/shareable-configs/commit/c295919e8cd1fbbd7965fe67d0188e0d657b6427))

## [2.9.4](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.3...@waldronmatt/webpack-config@2.9.4) (2022-06-17)

### Bug Fixes

- **global:** update documentation ([120938a](https://github.com/waldronmatt/shareable-configs/commit/120938a301c88730d31dc8c8f919c960d193edb2))

## [2.9.3](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.2...@waldronmatt/webpack-config@2.9.3) (2022-06-05)

### Bug Fixes

- **webpack-config:** remove postinstall script and files, add webpack-cli as peer dep ([4c5c725](https://github.com/waldronmatt/shareable-configs/commit/4c5c72508cd311076e5782b3fb4304add184f69a))

## [2.9.2](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.1...@waldronmatt/webpack-config@2.9.2) (2022-05-30)

**Note:** Version bump only for package @waldronmatt/webpack-config

## [2.9.1](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.9.0...@waldronmatt/webpack-config@2.9.1) (2022-05-30)

### Bug Fixes

- **global:** update packages to comply with new eslint config ([dbee043](https://github.com/waldronmatt/shareable-configs/commit/dbee043b0a6b0a1d99e44e6cb8af9fa52133aab9))

# [2.9.0](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.8.1...@waldronmatt/webpack-config@2.9.0) (2022-05-24)

### Features

- **global:** bumb deps in package.json files ([93a31fc](https://github.com/waldronmatt/shareable-configs/commit/93a31fc22c3fa646b0b037af65193a0ef1a3a1c6))

## [2.8.1](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.8.0...@waldronmatt/webpack-config@2.8.1) (2022-05-24)

**Note:** Version bump only for package @waldronmatt/webpack-config

# [2.8.0](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.7.3...@waldronmatt/webpack-config@2.8.0) (2022-04-12)

### Features

- **webpack:** add support for accessing env variable via webpack.common.js ([99260e5](https://github.com/waldronmatt/shareable-configs/commit/99260e5c359226f1d56e8f8de84e2bf1e31618d4))

## [2.7.3](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.7.2...@waldronmatt/webpack-config@2.7.3) (2022-04-09)

### Bug Fixes

- **scripts/files:** disable eslint on webpack script files to prevent other ci configs from linting ([3471c6d](https://github.com/waldronmatt/shareable-configs/commit/3471c6de73833dee124c365823b7af864b7c5c05))

## [2.7.2](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.7.1...@waldronmatt/webpack-config@2.7.2) (2022-04-09)

### Bug Fixes

- **lerna.json:** remove package.json from lerna ignore, update descriptions and workflow ([660a9a6](https://github.com/waldronmatt/shareable-configs/commit/660a9a60858863dca1d4b87cb0a3c49ffd2186b6))
- **package.json:** add scripts directory to files array ([611a854](https://github.com/waldronmatt/shareable-configs/commit/611a8546f5c398404e5f226d61b5b42939944cc9))

## [2.7.1](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.7.0...@waldronmatt/webpack-config@2.7.1) (2022-04-09)

**Note:** Version bump only for package @waldronmatt/webpack-config

# [2.7.0](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.6.4...@waldronmatt/webpack-config@2.7.0) (2022-04-08)

### Features

- **webpack.common.js:** remove default parts in base webpack.common ([626b696](https://github.com/waldronmatt/shareable-configs/commit/626b696e34dcf95bf22a64eedac2a8d6b7ac20de))
- **webpack.parts.js:** add loader for raw assets ([9ecf1f6](https://github.com/waldronmatt/shareable-configs/commit/9ecf1f6cd6355c38883e2948e12ca9873e8838c2))
- **webpack.parts.js:** separate ForkTsChecker from ts loaders into standalone function ([9e1a985](https://github.com/waldronmatt/shareable-configs/commit/9e1a985ae29c580e4109d71920c7a2e6b86973c5))
- **webpack.prod.js:** remove minification from webpack.prod ([64717f6](https://github.com/waldronmatt/shareable-configs/commit/64717f6ffbb2e20c8a374a213081fe56ed276ae0))

## [2.6.4](https://github.com/waldronmatt/shareable-configs/compare/@waldronmatt/webpack-config@2.6.3...@waldronmatt/webpack-config@2.6.4) (2022-04-07)

**Note:** Version bump only for package @waldronmatt/webpack-config

## 2.6.3 (2022-04-07)

**Note:** Version bump only for package @waldronmatt/webpack-config
