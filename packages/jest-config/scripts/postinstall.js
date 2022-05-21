const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, 'jest.config.js');

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(
    filePath,
    `module.exports = { preset: '@waldronmatt/jest-config' };`
  );
}
