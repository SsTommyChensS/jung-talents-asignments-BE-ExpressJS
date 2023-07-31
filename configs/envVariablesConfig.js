require('dotenv').config();

const enviromentVariables = {
    server_port: process.env.SERVER_PORT,
    bearer_token: process.env.BEARER_TOKEN,
    base_url: process.env.BASE_URL
};

module.exports = enviromentVariables;