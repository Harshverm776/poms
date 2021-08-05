const Joi = require('joi');

const schema = {
    user : Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().min(10).max(100).required(),
            company_name: Joi.string().min(5).required(),
            role: Joi.string().valid("buyer","approver","vendor").required()
        })
};

module.exports = schema;