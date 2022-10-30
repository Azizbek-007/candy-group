const joi = require('joi');

const registerSchema = joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

module.exports = registerSchema;