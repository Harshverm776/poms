const db = require("../models");
const { receivePoDetails } = require("../aws-sqs/receive-po");

exports.getPO = async(req, res) => {
    try {
        receivePoDetails();

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