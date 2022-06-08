# Jest Config

My personal shareable jest configuration.

## Install

```bash
yarn add -D jest @waldronmatt/jest-config
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

## Under The Hood

### `jest-preset.js`

- `@types/jest`
- `ts-jest`
- `jest-environment-jsdom`
- `jest-transform-stub`

## License

MIT
