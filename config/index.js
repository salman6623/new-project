require('dotenv').config();

const config = {
    host: process.env.HOST,
    port: process.env.PORT
}

module.exports = config;