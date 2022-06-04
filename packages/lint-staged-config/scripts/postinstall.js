/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'lint-staged.config.js');

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = require('@waldronmatt/lint-staged-config');`
  );
}