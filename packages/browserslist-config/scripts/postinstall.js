/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, '.browserslistrc');

const fileConfigObject = 'extends @waldronmatt/browserslist-config';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileConfigObject);
}
