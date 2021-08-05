const Joi = require('joi');

const schema = {
    item : Joi.object({
            name: Joi.string().min(3).required(),
            description: Joi.string().min(10).max(100).required(),
            unit_measurement: Joi.string().required(),
            unit_price: Joi.number().integer().min(1).required(),
            vendor_name: Joi.string().min(3).required()
    })
};

module.exports = schema;