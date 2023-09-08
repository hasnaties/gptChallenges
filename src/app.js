const express = require('express');
const path = require('path');
const router1_2 = require('./router/routes1_2');
const route3_note = require('./router/route3_note');
const route4_user = require('./router/route4_user');

require('dotenv').config();
require('./mongoose/connectDatabase');

const app = express();

const viewsDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(viewsDirectoryPath))

app.use(express.json());
app.use(router1_2);
app.use(route3_note);
app.use(route4_user);

app.listen(PORT= 3000, () => {
    console.log(`server is up on port: ${PORT}`);
});