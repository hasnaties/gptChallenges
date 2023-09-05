const axios = require ('axios');

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

module.exports = {getIpInfo, predictAge}