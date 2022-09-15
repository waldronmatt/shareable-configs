/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(process.env.INIT_CWD, '.markdownlint.json');

const fileConfigObject = {
  extends: '@waldronmatt/markdownlint-config',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
