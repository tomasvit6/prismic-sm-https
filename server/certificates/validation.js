/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

function validateCertificate(relativePath, name) {
  try {
    key = fs.readFileSync(path.resolve(relativePath), 'utf8');
    console.log(`Successfully retrieved ${name}`);

    return key;
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        console.error(new Error(`${name} not Found.`));
        break;

      case 'EACCES':
        console.error(
          new Error(
            `EACCES: you need to authenticate as an admin to read your ${name}.`
          )
        );
        break;

      default: {
        console.error(
          new Error(`An error occurred while trying to read your ${name}.`)
        );
        console.error(new Error(err));
      }
    }

    return null;
  }
}

module.exports = {
  validateCertificate,
};
