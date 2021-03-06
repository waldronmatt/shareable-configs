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
  "extends": "@waldronmatt/tsconfig-config"
}
```

## Extending

A basic configuration for projects:

**`tsconfig.json`**

```json
{
  "extends": "@waldronmatt/tsconfig-config",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## License

MIT
