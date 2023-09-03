const express = require('express');
const axios = require ('axios');

const router = new express.Router()

// Route-One
router.get('/one', async (req, res) => {
    
    const ipData = await getIpInfo(req.ip);
    const ageData = await predictAge(req.query.name);

    res.send({
        name: req.query.name,
        age: ageData.data.age,
        city: ipData.data.city
    });
});

// -- IP DETAILS
const getIpInfo = async (ip) => {

    const apiUrl = `https://ipapi.co/${ip}/json`;

    try {
        const response = await axios.get(apiUrl);
        return response;

    } catch (error) {
        return error;
    }
};

// GUESSING AGE
const predictAge = async (firstName) => {

    const apiUrl = `https://api.agify.io?name=${firstName}`;

    try {
        const response = await axios.get(apiUrl);
        return response;

    } catch (error) {
        return error;
    }
};

module.exports = router