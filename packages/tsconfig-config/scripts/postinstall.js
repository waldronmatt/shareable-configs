/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'tsconfig.json');

const fileConfigObject = {
  extends: '@waldronmatt/tsconfig-config',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
