const joi = require('joi');

const userSchema = joi.object().keys({
    startHour: joi.number().integer().min(0).max(24).required(),
    endHour: joi.number().integer().min(0).max(24).required(),
    startMinute: joi.number().integer().min(0).max(60).required(),
    endMinute: joi.number().integer().min(0).max(60).required()
    
})

module.exports = userSchema;