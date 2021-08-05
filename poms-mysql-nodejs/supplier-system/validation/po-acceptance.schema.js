const Joi = require('joi');

const schema = {
    poAcceptance: Joi.object({
        status: Joi.string().valid("Accepted", "Rejected by vendor", "Discussion").required(),
    })
};

module.exports = schema;