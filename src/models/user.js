const mongoose = require('mongoose');
const note = require('./note');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;