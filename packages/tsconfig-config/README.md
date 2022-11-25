# Tsconfig Config

My personal shareable tsconfig configuration.

## Install

```bash
yarn add -D @waldronmatt/tsconfig-config
```

## Usage

**`tsconfig.json`**

```json
{
  "extends": "@waldronmatt/tsconfig-config/base.json"
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
