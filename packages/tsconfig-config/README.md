# Tsconfig Config

My personal shareable tsconfig configuration.

## Install

```bash
yarn add -D typescript @waldronmatt/tsconfig-config
```

Optionally include types for `node`:

```bash
yarn add -D @types/node
```

## Usage

**`tsconfig.json`**

### Base

```json
{
  "extends": "@waldronmatt/tsconfig-config/base.json"
}
```

### Lib

Useful defaults for code publishing and distribution:

```json
{
  "extends": "@waldronmatt/tsconfig-config/lib.json"
}
```

Add the `tslib` package:

```bash
yarn add -D tslib
```

## Extending

A basic configuration for projects:

**`tsconfig.json`**

```json
{
  "extends": "@waldronmatt/tsconfig-config/base.json",
  "compilerOptions": {
    // output to dist directory
    "outDir": "dist"
  },
  // include source and test files
  "include": ["src/**/*", "__tests__/**/*"],
  // ignore node_modules and dist directories
  "exclude": ["node_modules", "dist"]
}
```

## Recipes

[Lint your configuration files (`eslintrc.js`, ect.) that shouldn't be part of your existing `tsconfig` file:](https://typescript-eslint.io/docs/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file)

**`tsconfig.eslint.json`**

```json
{
  "extends": "./tsconfig.json",
  "include": [".eslintrc.js", "src/*"],
  "compilerOptions": {
    "noEmit": true,
    "allowJs": true
  }
}
```

**`.eslintrc.js`**

```js
module.exports = {
  root: true,
  extends: ['my-config'],
  plugins: ['import'],
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/extensions': 'off',
  },
};
```

Exclude test files from compilation, but still have them type checked:

**`tsconfig.build.json`**

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
```

**`package.json`**

```json
"scripts": {
  "build": "tsc --project tsconfig.build.json"
},
```

Clean up bundle, typescript, and jest artifacts:

Install `rimraf`:

```bash
yarn add -D rimraf
```

**`package.json`**

```json
"scripts": {
  "clean": "rimraf dist coverage tsconfig.build.tsbuildinfo"
},
```

## License

MIT
