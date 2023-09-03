const express = require('express');
const path = require('path');
const oneRoute = require('./lib/one');
const bodyParser = require('body-parser');

const app = express();

const viewsDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(viewsDirectoryPath))

app.use(bodyParser.json());
app.use(oneRoute);

app.listen(PORT= 3000, () => {
    console.log(`server is up on port: ${PORT}`);
});