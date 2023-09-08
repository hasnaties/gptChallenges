const express = require('express');
const User = require('../models/user');

const router = express.Router();

const allowed = ['name', 'email', 'password']

// SIGN-UP
router.post('/api/four/signup', async (req, res) => {

  
});

// login
router.get('/api/four/login', async (req, res) => {

  if (!req.body.email || !req.body.password) {
    res.status(400).send('Invalid request.');
  }

});

// UPDATE
router.patch('/api/four/update', async (req, res) => {

});

// DELETE
router.delete('/api/four/delete', async (req, res) => {
  
  const user = await User.find(req.body.id);
  if (!user) {
    throw Error('User does not exist.');
  }

  const deletedUser = await User.delete(req.body.id);
  res.send({
    message: 'User deleted successfully.',
    deletedUser
  })
});

module.exports = router;