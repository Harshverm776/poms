const PurchaseOrder = require('../models/purchase-order.model');

exports.getPO =  async(req, res) => {
    try {
        const purchaseOrder = await PurchaseOrder.find();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};

exports.poAcceptance =  async(req, res) => {
    try {
        const po = await PurchaseOrder.findById(req.params.id);
        po.po_status = req.body.po_status;
        const po1 = await po.save();
        res.status(200).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};