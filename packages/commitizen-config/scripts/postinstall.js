/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(process.env.INIT_CWD, '.czrc');

const fileConfigObject = {
  path: 'cz-conventional-changelog',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
