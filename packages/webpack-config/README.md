# Webpack Config

A shareable webpack configuration with sensible defaults and extensible configs for assets.

Inspired by configuration practices found on [survivejs.com](https://survivejs.com/webpack/developing/composing-configuration/).

## Install

```bash
yarn add -D webpack webpack-merge webpack-cli @waldronmatt/webpack-config
```

## Usage

**`package.json`**

```bash
"scripts": {
  "dev": "webpack --env development --config webpack.dev.js",
  "build": "webpack --env production --config webpack.prod.js"
}
```

\
**`webpack.dev.js`**

```js
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common.js');

const developmentConfig = {
  // dev configs
};

module.exports = extendWebpackBaseConfig(commonConfig, developmentConfig);
```

\
**`webpack.prod.js`**

```js
const { extendWebpackBaseConfig } = require('@waldronmatt/webpack-config');
const commonConfig = require('./webpack.common.js');

const productionConfig = {
  // prod configs
};

module.exports = extendWebpackBaseConfig(commonConfig, productionConfig);
```

\
**`webpack.common.js`**

- Use `isProduction` to apply configs based on the environment.
- Access Webpack's `env` variable.
- Apply extensible base configs from `@waldronmatt/webpack-config`.
- Include your own extensible configs using your own parts via `const parts = require('./webpack.parts.js');`.
- Configs you set will take precedence if they overlap with `@waldronmatt/webpack-config`.

```js
const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');
const parts = require('./webpack.parts.js');

const commonConfig = (isProduction, env) => {
  // pass `isProduction` and Webpack's `env` variable into your parts file
  parts(isProduction, env);

  return merge([
    {
      entry: {
        main: './src/index.js',
      },
    },
    baseParts.loadJS({}),
    baseParts.setScriptOutputPath({}),
    baseParts.loadCSS({}),
    baseParts.setStyleOutputPath({}),
    // custom configs from your own `parts` file
    parts.loadHTMLPages({
      title: 'about',
    }),
  ]);
};

module.exports = commonConfig;
```

\
**`webpack.parts.js`**

Optionally set up your custom config parts to include in `webpack.common.js`.

```js
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');

const parts = (isProduction, env) => {
  module.exports.loadHTMLPages = ({ title } = { title: 'MySite' }) => ({
    plugins: [
      new MiniHtmlWebpackPlugin({
        context: { title },
        publicPath: isProduction ? 'mydomain' : '/',
      }),
    ],
  });
};

module.exports = parts;
```

## Options

You can load optional configs from this package into your own:

`webpack.common.js`

```js
const { baseParts } = require('@waldronmatt/webpack-config');
```

- `baseParts.loadCSS({})`
- `baseParts.loadSCSS({})`
- `baseParts.setStyleOutputPath({})`
- `baseParts.loadSourceMaps({})`
- `baseParts.loadJS({})`
- `baseParts.loadJSX({})`
- `baseParts.loadTS({})`
- `baseParts.loadTSX({})`
- `baseParts.enableTypeChecking({})`
- `baseParts.setScriptOutputPath({})`
- `baseParts.loadImagesAsFiles({})`
- `baseParts.loadImagesAsFilesOrInline({})`
- `baseParts.loadFonts({})`
- `baseParts.loadRawAssets({})`

**Note**: See `/src/webpack.parts.js` for configuration options.

## Loaders

- `esbuild-loader`
- `fork-ts-checker-webpack-plugin`
- `css-loader`
- `postcss-loader`
- `sass-loader`
- `style-loader`
- `mini-css-extract-plugin.loader`
- `source-map-loader`

## Plugins

- `mini-css-extract-plugin`
- `ESBuildMinifyPlugin`

## Included Dependencies

- `sass`
- `typescript`

## Core Package Dependencies

- `webpack`
- `webpack-merge`

## License

MIT
