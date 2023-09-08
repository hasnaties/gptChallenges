const mongoose = require('mongoose');

mongoose.connect(process.env.dbUrl).catch((error) => console.log(error));
