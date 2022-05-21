# Jest Config

My personal shareable jest configuration.

## Install

```bash
npm i --save-dev jest @waldronmatt/jest-config
```

## Usage

**`jest.config.js`**

```js
module.exports = {
  preset: '@waldronmatt/jest-config',
};
```

## Extending

**`jest.config.js`**

```js
module.exports = {
  preset: '@waldronmatt/jest-config',
  verbose: false,
};
```

## Under The Hood

### `index.js`

- `@types/jest`
- `ts-jest`
- `jest-environment-jsdom`
- `jest-transform-stub`

## License

MIT
