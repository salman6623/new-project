const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string()
    .min(4)
    .max(12)
    .required(),
    namaLengkap: Joi.string()
    .min(2)
    .max(50)
    .required(),
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


module.exports = registerSchema;
