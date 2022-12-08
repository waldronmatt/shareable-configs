# Jest Config

My personal shareable jest configuration.

## Install

```bash
yarn add -D jest @waldronmatt/jest-config
```

## Usage

**`jest.config.js`**

```js
module.exports = {
  preset: '@waldronmatt/jest-config',
};
```

## Extending

An example with `testMatch` that Jest uses to detect test files.

**`jest.config.js`**

```js
module.exports = {
  preset: '@waldronmatt/jest-config',
  testMatch: [
    // other common folder naming conventions
    // __mocks__ , __fixtures__ , __snapshots__
    '<rootDir>/__tests__/**/**.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  // ignore transformations and coverages against node_modules
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
};
```

## Recipes

Stubbing Webpack resource queries:

**`jest.config.js`**

```js
module.exports = {
  moduleNameMapper: {
    /*
      method for stubbing Webpack resource queries
      https://github.com/visualfanatic/vue-svg-loader/issues/73#issuecomment-478295746

      should match any file extension containing any '?' resource
      queries with '@' webpack alias
    */
    '^@/(.*.)(\\?(.*))$': '<rootDir>/src/$1',
  },
};
```

Resolve aliases:

**`jest.config.js`**

```js
module.exports = {
  moduleNameMapper: {
    // resolve '@' Webpack alias
    // https://stackoverflow.com/a/65578141
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

Run tests against source files and bundle output. Configuration includes [paths mapping with `Jest` and `tsconfig`](https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/).

Install `cross-env`:

```bash
yarn add -D cross-env
```

**`jest.config.js`**

```js
const mappedModule =
  process.env.TEST_ENV === 'prod' ? '<rootDir>/dist/$1' : '<rootDir>/src/$1';

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': mappedModule,
  },
};
```

**`tsconfig.json`**

```json
{
  "extends": "my-config.json",
  "exclude": ["node_modules", "dist", "coverage"],
  "compilerOptions": {
    "outDir": "dist",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**`package.json`**

```json
"scripts": {
  "test": "jest",
  "test:prod": "cross-env TEST_ENV=prod jest"
},
```

## Add an NPM Script

Running this command:

```bash
npm set-script test "jest"
```

Will create:

**`package.json`**

```json
"scripts": {
  "test": "jest"
},
```

Run tests in watch mode:

**`package.json`**

```json
"scripts": {
  "test:watch": "jest --watch"
},
```

Run test with coverage output:

**`package.json`**

```json
"scripts": {
  "test:coverage": "jest --coverage"
},
```

## Add a Pre-commit Hook

**Note**: Executes tests and coverage output related to files that have been changed in the current commit only.

**`lint-staged.config.js`**

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};
```

## Under The Hood

### `jest-preset.js`

- `@types/jest`
- `ts-jest`
- `jest-environment-jsdom`
- `jest-transform-stub`

## License

MIT
