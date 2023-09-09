const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  id: uuid,
  
  title: {
    type: String,
    trim: true
  },

  body: {
    type: String,
    trim: true
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },

  timestamps: true
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;