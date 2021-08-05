const PurchaseOrder = require('../models/supplier.model');

exports.getPO =  async(req, res) => {
    try {
        const purchaseOrder = await PurchaseOrder.find();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};

//Temporary
exports.createPO = async(req, res) => {
    try {
        const po1 = await PurchaseOrder.create(req.body);
        res.status(201).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};
