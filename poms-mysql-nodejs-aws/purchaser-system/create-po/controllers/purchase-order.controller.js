const db = require("../models");

exports.createPO = async(req, res) => {
    try {
        const po = {
            buyer_name: req.body.buyer_name,
            buyer_address: req.body.buyer_address,
            shipping_address: req.body.shipping_address,
            created_by: req.body.created_by,
            item_name: req.body.item_name,
            item_description: req.body.item_description,
            item_unit_measurement: req.body.item_unit_measurement,
            item_unit_price: req.body.item_unit_price,
            vendor_name: req.body.vendor_name,
            quantity: req.body.quantity,
            total_amount: req.body.item_unit_price * req.body.quantity
        };
        const po1 = await db.purchase_order.create(po);
        res.status(201).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};