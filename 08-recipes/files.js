const fs = require('fs');

const read = (filePath) => {
  return fs.readFileSync(`${__dirname}/originals/${filePath}`, { encoding: 'utf8' });
};

const write = (filePath, content) => {
  const dirname = `${__dirname}/changed`;

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }

  fs.writeFileSync(`${dirname}/${filePath}`, content, { encoding: 'utf8' });
};

module.exports = { read, write };