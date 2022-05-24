const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'commitlint.config.js');

const fileConfigObject = {
  extends: '@waldronmatt/commitlint-config',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
