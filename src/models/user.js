const mongoose = require('mongoose');
const note = require('./note');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  notes: [note]
})

const user = mongoose.model("user", userSchema);

module.exports = user;