const PurchaseOrder = require('../models/purchase-order.model');

exports.createPO = async(req, res) => {
    const po = new PurchaseOrder({
        buyer_name: req.body.buyer_name,
        buyer_address: req.body.buyer_address,
        shipping_address: req.body.shipping_address,
        created_by: req.body.created_by,
        item: {
            name: req.body.item.name,
            description: req.body.item.description,
            unit_measurement: req.body.item.unit_measurement,
            unit_price: req.body.item.unit_price,
            vendor_name: req.body.item.vendor_name
        },
        quantity: req.body.quantity,
        total_amount: req.body.item.unit_price * req.body.quantity
    });

    try {
        const po1 = await po.save();
        res.status(201).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getPO =  async(req, res) => {
    try {
        const purchaseOrder = await PurchaseOrder.find();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};

exports.updatePoStatus =  async(req, res) => {
    try {
        const po = await PurchaseOrder.findById(req.params.id);
        po.po_status = req.body.po_status;
        po.approved_by = req.body.approved_by;
        const po1 = await po.save();
        res.status(200).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};