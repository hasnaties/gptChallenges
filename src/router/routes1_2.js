const express = require('express');
const { getIpInfo, predictAge } = require('../lib/one')
const isBalanced = require('../lib/two')

const router = new express.Router()

// Route-One

router.get('/api/one/:name', async (req, res) => {
    
    const ipData = await getIpInfo(req.ip);
    const ageData = await predictAge(req.params.name);

    res.send({
        name: req.params.name,
        age: ageData.data.age,
        city: ipData.data.city
    });
});

// Route-Two

router.get('/api/two/:str', async (req, res) => {
    
    const result = isBalanced(req.params.str)

    res.send({
        inputString: req.params.str,
        balanced: result
    });
});

module.exports = router