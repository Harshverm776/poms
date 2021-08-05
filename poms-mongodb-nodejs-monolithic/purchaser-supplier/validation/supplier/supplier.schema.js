const Joi = require('joi');

const schema = {
    poAcceptance : Joi.object({
        po_status : Joi.string().valid("Accepted","Rejected by vendor","Discussion").required(),
    })
};

module.exports = schema;