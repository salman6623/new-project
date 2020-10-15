const { get } = require('mongoose');
const addNews = require('./addNews');
const getNews = require('./getNews');

module.exports = [
    addNews,
    getNews
];