# Eslint Config

My personal shareable eslint configuration.

## Install

```bash
npm i --save-dev eslint @waldronmatt/eslint-config
```

## Usage

**`.eslintrc.js`**

### JS

```js
module.exports = {
  extends: '@waldronmatt/eslint-config',
};
```

### TS

```js
module.exports = {
  extends: '@waldronmatt/eslint-config/ts',
};
```

### Jest

```js
module.exports = {
  extends: '@waldronmatt/eslint-config/jest',
};
```

## Extending

Mixed JS/TS, `tsconfig`-compatible configuration with jest linting.

**`.eslintrc.js`**

```js
module.exports = {
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        '@waldronmatt/eslint-config/ts',
        '@waldronmatt/eslint-config/jest',
      ],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.js'],
      extends: [
        '@waldronmatt/eslint-config',
        '@waldronmatt/eslint-config/jest',
      ],
    },
  ],
};
```

## Under The Hood

### `index.js`

- Plugins
  - `eslint-plugin-prettier`
- Parser
  - default `eslint` parser
- Extends
  - default `eslint` ruleset
  - `eslint-config-airbnb-base`
  - `eslint-config-prettier`
- Rules
  - [Custom Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)

### `ts.js`

- Plugins
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-prettier`
- Parser
  - `@typescript-eslint/parser`
- Extends
  - `@typescript-eslint/eslint-plugin`
  - `eslint-config-airbnb-typescript`
  - `eslint-config-prettier`
- Rules
  - [Custom Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)

### `jest.js`

- Plugins
  - `jest`
  - `jest-dom`
  - `jest-formatting`
- Extends
  - `plugin:jest/recommended`
  - `plugin:jest-dom/recommended`
  - `plugin:jest-formatting/recommended`

## License

MIT
