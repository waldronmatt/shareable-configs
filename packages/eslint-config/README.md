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

## Extending

**`.eslintrc.js`**

```js
module.exports = {
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['@waldronmatt/eslint-config/ts'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['@waldronmatt/eslint-config'],
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

## License

MIT
