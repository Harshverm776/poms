const Joi = require('joi');

const schema = {
    updatePoStatus : Joi.object({
        po_status : Joi.string().valid("Approved","Rejected","Pending").required(),
        approved_by : Joi.string().min(3).required()
    })
};

module.exports = schema;