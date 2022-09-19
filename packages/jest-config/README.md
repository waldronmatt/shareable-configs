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
    '<rootDir>/__tests__/**/**.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
};
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

## Add a Pre-commit Hook

**Note**: Executes tests related to files that have been changed in the current commit only.

**`lint-staged.config.js`**

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'yarn test --bail --passWithNoTests --findRelatedTests',
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
