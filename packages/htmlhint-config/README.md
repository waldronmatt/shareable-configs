# Htmlhint Config

My personal shareable htmlhint configuration.

## Install

```bash
yarn add -D htmlhint @waldronmatt/htmlhint-config
```

Running this command:

```bash
npm set-script lint:html "htmlhint --config ./node_modules/@waldronmatt/htmlhint-config/index.json **/*.html"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:html": "htmlhint --config ./node_modules/@waldronmatt/htmlhint-config/index.json **/*.html"
},
```

## License

MIT
