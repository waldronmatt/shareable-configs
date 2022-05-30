/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');

const filePathDevelopment = path.join(process.env.INIT_CWD, 'webpack.dev.js');
const filePathProduction = path.join(process.env.INIT_CWD, 'webpack.prod.js');
const filePathCommon = path.join(process.env.INIT_CWD, 'webpack.common.js');

if (!fs.existsSync(filePathDevelopment)) {
  fs.copyFileSync(`${__dirname}/files/webpack.dev.js`, filePathDevelopment);
  fs.copyFileSync(`${__dirname}/files/webpack.prod.js`, filePathProduction);
  fs.copyFileSync(`${__dirname}/files/webpack.common.js`, filePathCommon);
}
