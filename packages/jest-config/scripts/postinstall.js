/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'jest.config.js');

const fileConfigObject = {
  preset: '@waldronmatt/jest-config',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
