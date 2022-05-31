# Tsconfig Config

My personal shareable tsconfig configuration.

## Install

```bash
npm i --save-dev @waldronmatt/tsconfig-config
```

## Usage

**`tsconfig.json`**

```json
{
  "extends": "@waldronmatt/tsconfig-config"
}
```

## Extending

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
