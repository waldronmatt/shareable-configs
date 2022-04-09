const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'postcss.config.js');

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = require('@waldronmatt/postcss-config');`
  );
}
