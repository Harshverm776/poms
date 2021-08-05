const Joi = require('joi');

const schema = {
    purchaseOrder: Joi.object({
        buyer_name: Joi.string().min(5).required(),
        buyer_address: Joi.string().min(5).required(),
        shipping_address: Joi.string().min(5).required(),
        created_by: Joi.string().min(3).max(40).required(),
        item_name: Joi.string().min(3).required(),
        item_description: Joi.string().min(10).max(100).required(),
        item_unit_measurement: Joi.string().required(),
        item_unit_price: Joi.number().integer().min(1).required(),
        vendor_name: Joi.string().min(3).required(),
        quantity: Joi.number().integer().min(1).required()
    })
};

module.exports = schema;