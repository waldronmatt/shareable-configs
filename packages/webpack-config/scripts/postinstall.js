const fs = require('fs');
const path = require('path');

const filePathDev = path.join(process.env.INIT_CWD, 'webpack.dev.js');
const filePathProd = path.join(process.env.INIT_CWD, 'webpack.prod.js');
const filePathCommon = path.join(process.env.INIT_CWD, 'webpack.common.js');

if (!fs.existsSync(filePathDev)) {
  fs.copyFileSync(`${__dirname}/files/webpack.dev.js`, filePathDev);
  fs.copyFileSync(`${__dirname}/files/webpack.prod.js`, filePathProd);
  fs.copyFileSync(`${__dirname}/files/webpack.common.js`, filePathCommon);
}
