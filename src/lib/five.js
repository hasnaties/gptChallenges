const { readFile } = require('fs');
const path = require('path')

const filePath = '../../temp/test5.json';

try {
  
  readFile(path.join(__dirname, filePath), 'utf8', (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data));
  })

} catch (error) {
  console.log(error);
}