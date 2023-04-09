const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// eslint-disable-next-line no-unused-vars, unicorn/prevent-abbreviations
const parts = (isProduction, env) => {
  const styleLoaders = () => [
    {
      loader: isProduction
        ? // extracts the compiled css from js (overrides default behavior)
          MiniCssExtractPlugin.loader
        : // inject CSS into the DOM
          'style-loader',
    },
    // interprets import and url like import/require and will resolve them
    {
      loader: 'css-loader',
    },
    // enables autoprefixer and next-gen CSS polyfill features
    {
      loader: 'postcss-loader',
    },
  ];

  /**
   * Load `.css` files.
   *
   * `MiniCssExtractPlugin.loader` for `production` builds
   *
   * `style-loader` for `development` builds
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: styleLoaders(),
        },
      ],
    },
  });

  /**
   * Load `.scss` files.
   *
   * `MiniCssExtractPlugin.loader` for `production` builds
   *
   * `style-loader` for `development` builds
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadSCSS = ({ include, exclude } = {}) => ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: [
            ...styleLoaders(),
            // loads a sass/scss file and compiles it to css
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
  });

  /**
   * Customize the output path for styles for `production` builds.
   *
   * @param {string} path
   */
  module.exports.setStyleOutputPath = ({ path = '' }) => ({
    plugins: [
      isProduction
        ? new MiniCssExtractPlugin({
            filename: `${path}[name].[contenthash:8].css`,
          })
        : false,
    ].filter(Boolean),
  });

  /**
   * Load source maps. Useful for 3rd-party libraries.
   */
  module.exports.loadSourceMaps = () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            {
              loader: 'source-map-loader',
            },
          ],
        },
      ],
    },
  });

  /**
   * Load `.js` / `.ts` files.
   *
   * `js`
   * `ts`
   * `jsx`
   * `tsx`
   *
   * @param {string} target
   *
   * set to `es2015` by default
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadJS = ({ target = 'es2015', include, exclude }) => ({
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          include,
          exclude,
          loader: 'esbuild-loader',
          options: {
            // eslint-disable-next-line object-shorthand
            target: target,
          },
        },
      ],
    },
  });

  /**
   * Enable TypeScript checking for development builds.
   */
  module.exports.enableTypeChecking = () => ({
    // eslint-disable-next-line unicorn/no-negated-condition
    plugins: [!isProduction ? new ForkTsCheckerWebpackPlugin() : false].filter(
      Boolean
    ),
  });

  /**
   * Customize the output path for scripts.
   *
   * @param {string} path
   */
  module.exports.setScriptOutputPath = ({ path = '' }) => ({
    output: {
      filename: isProduction
        ? `${path}[name].[contenthash:8].js`
        : `${path}[name].js`,
    },
  });

  /**
   * Load and customize the output path for images as individual files.
   *
   * `apng`
   * `avif`
   * `gif`
   * `jpg`
   * `jpeg`
   * `png`
   * `svg`
   * `webp`
   *
   * @param {string} path
   */
  module.exports.loadImagesAsFiles = ({ path = '' }) => ({
    module: {
      rules: [
        {
          test: /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: isProduction
              ? `${path}[name].[contenthash:8][ext]`
              : `${path}[name][ext]`,
          },
        },
      ],
    },
  });

  /**
   * Load and customize the output path for images as individual files
   * or have inlined depending on the file size.
   *
   * `apng`
   * `avif`
   * `gif`
   * `jpg`
   * `jpeg`
   * `png`
   * `svg`
   * `webp`
   *
   * @param {string} path
   * @param {number} maxSize - 1024 * 8 (8kb)
   */
  module.exports.loadImagesAsFilesOrInline = ({
    path = '',
    maxSize = 1024 * 8,
  }) => ({
    module: {
      rules: [
        {
          test: /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i,
          type: 'asset',
          generator: {
            filename: isProduction
              ? `${path}[name].[contenthash:8][ext]`
              : `${path}[name][ext]`,
          },
          parser: {
            dataUrlCondition: {
              // eslint-disable-next-line object-shorthand
              maxSize: maxSize,
            },
          },
        },
      ],
    },
  });

  /**
   * Load and customize the output path for fonts as
   * individual files. Does **not** cache bust files.
   *
   * `woff`
   * `woff2`
   *
   * @param {string} path
   */
  module.exports.loadFonts = ({ path = '' }) => ({
    module: {
      rules: [
        {
          test: /\.(woff2?)$/,
          type: 'asset/resource',
          generator: {
            filename: `${path}[name][ext]`,
          },
        },
      ],
    },
  });

  /**
   * Raw asset loader.
   *
   * Usage:
   *
   * **index.js**
   *
   * `import myModule from 'my-module?raw';`
   */
  module.exports.loadRawAssets = () => ({
    module: {
      rules: [
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
      ],
    },
  });
};

module.exports = parts;
