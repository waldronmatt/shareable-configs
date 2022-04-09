const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, '.stylelintrc.js');

const fileConfigObject = {
  extends: '@waldronmatt/stylelint-config',
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`
  );
}
