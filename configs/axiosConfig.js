const axios = require('axios');
const enviromentVariables = require('../configs/envVariablesConfig');

const instance = axios.create({
    baseURL: enviromentVariables.base_url,
    withCredentials: true
});


instance.interceptors.request.use(function(config) {
    const token = enviromentVariables.bearer_token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

module.exports = instance;