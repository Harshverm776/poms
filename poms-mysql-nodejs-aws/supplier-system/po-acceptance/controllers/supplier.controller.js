const db = require("../models");
const { sendPoAcceptance } = require("../aws-sqs/send-po-acceptance");

exports.poAcceptance = async(req, res) => {
    try {
        const po = await db.purchase_order.update(req.body, {
            where: { po_id: req.params.id }
        });

        const status = {
            id: req.params.id,
            status: req.body.status
        }
        sendPoAcceptance(status);

        if (po == 1)
            res.status(200).json({ success: po, message: "Updated Successfully" });
        else if (po == 0)
            res.status(200).json({ success: po, message: "Id doesn't exist" });
    } catch (err) {
        res.status(400).json(err);
    }
};