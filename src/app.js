const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router/routes');

const app = express();

const viewsDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(viewsDirectoryPath))

app.use(bodyParser.json());
app.use(router);

app.listen(PORT= 3000, () => {
    console.log(`server is up on port: ${PORT}`);
});