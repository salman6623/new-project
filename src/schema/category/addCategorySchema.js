const Joi = require('joi');

const addCategorySchema = Joi.object({
    namaCategory: Joi.string()
    .min(6)
    .max(30)
    .required(),
    deskripsi: Joi.string()
    .min(5)
    .max(100)
    .required()

});


module.exports = addCategorySchema;
