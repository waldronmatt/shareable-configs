# Tsconfig Config

My personal shareable tsconfig configuration.

## Install

```bash
yarn add -D typescript @waldronmatt/tsconfig-config
```

## Usage

**`tsconfig.json`**

## Base

```json
{
  "extends": "@waldronmatt/tsconfig-config/base.json"
}
```

## Lib

Useful defaults for code publishing and distribution:

```json
{
  "extends": "@waldronmatt/tsconfig-config/lib.json"
}
```

## Extending

A basic configuration for projects:

**`tsconfig.json`**

```json
{
  "extends": "@waldronmatt/tsconfig-config/base.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## License

MIT
