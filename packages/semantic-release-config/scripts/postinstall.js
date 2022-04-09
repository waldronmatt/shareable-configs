const fs = require('fs');
const path = require('path');

const filePath = path.join(process.env.INIT_CWD, '.releaserc.json');

const fileConfigObject = {
  extends: ['@waldronmatt/semantic-release-config'],
};

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2));
}
