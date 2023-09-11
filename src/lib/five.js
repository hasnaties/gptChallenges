const { readFile } = require('fs');
const path = require('path')

try {
  
  readFile(path.join(__dirname, '../../test/test5.json'), (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data));
  })

} catch (error) {
  console.log(error);
}