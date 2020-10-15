const Joi = require('joi');
const Category = require('../../models/categorymodel');
//const { min } = require('../category/addCategorySchema');

const addNewSchema = Joi.object({
    judul: Joi.string()
    .min(5)
    .max(50)
    .required(),
    content: Joi.string()
    .min(5)
    .required(),
    author: Joi.string()
    .min(5)
    .max(30)
    .required(),
    category: Joi.string()
    .min(5)
    .max(30)
    .required(),
});

module.exports = addNewSchema;