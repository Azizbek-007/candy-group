const joi = require('joi');

const userSchema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

module.exports = userSchema;