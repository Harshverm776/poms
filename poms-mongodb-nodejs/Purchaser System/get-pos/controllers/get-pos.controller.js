const PurchaseOrder = require('../models/purchase-order.model');

exports.getPO =  async(req, res) => {
    try {
        const purchaseOrder = await PurchaseOrder.find();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};