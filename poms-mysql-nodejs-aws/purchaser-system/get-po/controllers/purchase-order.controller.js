const db = require("../models");
const { receivePoAcceptance } = require("../aws-sqs/receive-po-acceptance");

exports.getPO = async(req, res) => {
    try {

        receivePoAcceptance();

        const purchaseOrder = await db.purchase_order.findAll();
        res.status(200).json(purchaseOrder);
    } catch (err) {
        res.status(404).json(err);
    }
};