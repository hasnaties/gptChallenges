const express = require('express');
const Note = require('../models/note');

const router = express.Router();

// CREATE
router.post('/api/three/create', async (req, res) => {
  if (!req.body.title) {
    res.status(400).send('Invalid request.')
  }

});
// READ
router.get('/api/three/read', async (req, res) => {
  
});
// UPDATE
router.patch('/api/three/update', async (req, res) => {
  res.send(req.body);
});
// DELETE
router.delete('/api/three/delete', async (req, res) => {
  res.send(req.body);
});

module.exports = router;