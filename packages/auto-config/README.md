# Auto Config

My personal shareable auto configuration.

## Install

```bash
yarn add -D auto @waldronmatt/auto-config
```

## Usage

**`.autorc`**

```json
{
  "extends": "@waldronmatt"
}
```

Set up auto and follow the prompts

```bash
pnpm auto init
```

[Create your `GH_TOKEN` and `NPM_TOKEN` for versioning and publishing.](https://intuit.github.io/auto/docs/welcome/getting-started#2-configure-environment-variables)

**Note**: Make sure to set up your `NPM_TOKEN` via `Settings` -> `Secrets` -> `Actions`

Create `GitHub` labels:

```bash
pnpm auto create-labels
```

## Extending

**`.autorc`**

```json
{
  "extends": "@waldronmatt",
  "labels": [
    {
      "name": "documentation",
      "changelogTitle": "Docz"
    }
  ]
}
```

## Under The Hood

### `index.json`

- `@auto-it/conventional-commits`

## License

MIT
