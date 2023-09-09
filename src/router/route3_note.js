const express = require('express');
const validator = require('validator');
const Note = require('../models/note');

const router = express.Router();

// CREATE
router.post('/api/three/create', async (req, res) => {
  if (!req.body.title || validator.isEmpty(req.body.title)) {
    res.status(400).send('Invalid data.')
  }

  const newNote = new Note({
    title: req.body.title,
    body: req.body.body
  })

  const savedNote = await newNote.save();

  if (!savedNote) {
    res.status(500).send('error:', savedNote);
  }

  res.status(201).send(savedNote)
});

// READ
router.get('/api/three/read', async (req, res) => {
  if (!req.body.id) {
    res.status(400).send('Bad request: cannot read ID.');
  }

  const note = await Note.find(req.body.id);
  res.status(200).send(note);
});

// UPDATE
router.patch('/api/three/update', async (req, res) => {
  
  if (!req.body.title && !req.body.body) {
    res.status(400).send({
      type: 'Error: bad request.',
      message: 'cannot read properties.'
    })
  }


});
// DELETE
router.delete('/api/three/delete', async (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      type: 'Error: bad request.',
      message: 'ID is required.'
    })
  }

  const deletedNote = await Note.remove(req.body.id);
  res.status(200).status({
    message: 'note is deleted successfully.',
    note: deletedNote
  })
});

module.exports = router;