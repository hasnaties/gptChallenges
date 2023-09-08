const mongoose = require('mongoose');
const user = require('./user');

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  body: String,

  author: user
})

const note = mongoose.model("note", noteSchema);

module.exports = note;