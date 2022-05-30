const { merge } = require('webpack-merge');
const baseParts = require('./src/webpack.parts');
const baseCommonConfig = require('./src/webpack.common');
const baseDevelopmentConfig = require('./src/webpack.dev');
const baseProductionConfig = require('./src/webpack.prod');

// export a function for apps to extend in their `webpack.common.js` files
const extendWebpackBaseConfig =
  // eslint-disable-next-line unicorn/prevent-abbreviations
  (commonConfig, environmentConfig) => env => {
    const isProduction = env.production === true;
    const baseEnvironmentConfig = isProduction
      ? baseProductionConfig
      : baseDevelopmentConfig;

    // merge the base configs and your configs.
    // your configs will override if there's overlap with the base configs
    return merge(
      baseCommonConfig(isProduction, env),
      baseEnvironmentConfig,
      // this is your webpack.common.js file
      commonConfig(isProduction, env),
      // this is your webpack.development.js or webpack.production.js file
      environmentConfig
    );
  };

module.exports = {
  extendWebpackBaseConfig,
  // expose here so we can reference more easily for apps
  baseParts,
};
