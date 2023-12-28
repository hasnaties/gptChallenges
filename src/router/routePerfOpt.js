const express = require('express');
const maximumProduct2 = require('../lib/perfOpt');

const router = new express.Router();

router.get('/api/seven', async (req, res) => {
  const setOfIntegers = req.body.set;
  const result = maximumProduct2(setOfIntegers);

  res.status(200).send(result);
});

module.exports = router;