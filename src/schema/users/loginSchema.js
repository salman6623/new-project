const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string()
    .email()
    .min(6)
    .max(30)
    .required(),
    password: Joi.string()
    .min(5)
    .max(20)
    .required()

});


module.exports = loginSchema;
