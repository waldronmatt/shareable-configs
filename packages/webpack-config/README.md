# Webpack Config

A shareable webpack configuration with sensible defaults and extensible configs for assets.

Inspired by configuration practices found on [survivejs.com](https://survivejs.com/webpack/developing/composing-configuration/).

## Install

```bash
npm i --save-dev @waldronmatt/webpack-config
```

Install additional packages to meet project and loader requirements:

```bash
npm i --save-dev webpack webpack-merge webpack-cli
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
**`webpack.parts.js`**

Optionally set up your custom config parts to include in `webpack.common.js`.

- Use `isProduction` to apply configs based on the environment.

```js
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');

const parts = isProduction => {
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

\
**`webpack.common.js`**

- Use `isProduction` to apply configs based on the environment.
- Apply extensible base configs from `@waldronmatt/webpack-config`.
- Include your own extensible configs using `webpack.parts.js`.
- configs you set will take precedence if they overlap with `@waldronmatt/webpack-config`.

```js
const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');
const parts = require('./webpack.parts.js');

const commonConfig = isProduction => {
  // pass `isProduction` environment variable into your parts file
  parts(isProduction);

  return merge([
    {
      entry: {
        main: './src/index.js',
      },
    },
    baseParts.loadJS(),
    baseParts.loadCSS(),
    parts.loadHTMLPages({
      title: 'about',
    }),
  ]);
};

module.exports = commonConfig;
```

## Options

You can load optional configs from this package into your own:

`webpack.common.js`

```js
const { baseParts } = require('@waldronmatt/webpack-config');
```

- `baseParts.loadCSS()`
- `baseParts.loadSCSS()`
- `baseParts.setStyleOutputPath()`
- `baseParts.loadSourceMaps()`
- `baseParts.loadJS()`
- `baseParts.loadJSX()`
- `baseParts.loadTS()`
- `baseParts.loadTSX()`
- `baseParts.enableTypeChecking()`
- `baseParts.setScriptOutputPath()`
- `baseParts.loadImagesAsFiles()`
- `baseParts.loadImagesAsFilesOrInline()`
- `baseParts.loadFonts()`

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

## License

MIT
