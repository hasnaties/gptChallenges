const express = require('express');
const validator = require('validator');
const User = require('../models/user');

const router = express.Router();

// SIGN-UP
router.post('/api/four/signup', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    
    res.status(400).send({
      type: 'Error: bad request.',
      message: 'cannot read properties.'
    })
  }

  if (!validator.isEmail(req.body.email)) {
    
    res.status(400).send({
      type: 'Error: bad request.',
      message: 'Email is invalid.'
    })
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  const user = await newUser.save();

  res.status(201).status({
    message: 'user is created. Please login now.',
    user
  })
  
});

// login
router.get('/api/four/login', async (req, res) => {

  if (!req.body.email || !req.body.password) {
    res.status(400).send('Invalid request.');
  }

  const user = await User.find({
    email: req.user.id
  });

  if (!user) {

    res.status(404).send({
      type: 'Error: Not Found.',
      message: 'user does not exist.'
    })
  }

  res.status(200).status({
    message: 'welcome!',
    user
  })

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