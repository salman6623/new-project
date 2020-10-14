const userSchema = require('./users');
const categorySchema = require('./category')

module.exports = {
    ...userSchema,
    ...categorySchema
};