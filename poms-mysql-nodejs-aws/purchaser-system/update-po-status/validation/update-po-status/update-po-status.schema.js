const Joi = require('joi');

const schema = {
    updatePoStatus: Joi.object({
        status: Joi.string().valid("Approved", "Rejected", "Pending").required(),
        updated_by: Joi.string().min(3).required()
    })
};

module.exports = schema;