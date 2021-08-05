const db = require("../models");

exports.getPO = async(req, res) => {
    try {
        const purchaseOrder = await db.purchase_order.findAll();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};


// Temporary
exports.createPO = async(req, res) => {
    try {
        const po1 = await db.purchase_order.create(req.body);
        res.status(201).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.poAcceptance = async(req, res) => {
    try {
        const po = await db.purchase_order.update(req.body, {
            where: { po_id: req.params.id }
        });
        if (po == 1)
            res.status(200).json({ success: po, message: "Updated Successfully" });
        else if (po == 0)
            res.status(200).json({ success: po, message: "Id doesn't exist" });
    } catch (err) {
        res.status(400).json(err);
    }
};