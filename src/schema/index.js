const userSchema = require('./users');
const categorySchema = require('./category')
const newsSchema = require('./news');

module.exports = {
    ...userSchema,
    ...categorySchema,
    ...newsSchema
};