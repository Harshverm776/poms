const db = require("../models");
const { sendPoDetails } = require("../aws-sqs/send-po");

exports.updatePoStatus = async(req, res) => {
    try {
        const po = await db.purchase_order.update(req.body, {
            where: { id: req.params.id }
        });

        if (req.body.status == "Approved") {
            const po = await db.purchase_order.findByPk(req.params.id);
            sendPoDetails(po.dataValues);
        }

        if (po == 1)
            res.status(200).json({ success: po, message: "Updated Successfully" });
        else if (po == 0)
            res.status(200).json({ success: po, message: "Id doesn't exist" });
    } catch (err) {
        res.status(400).json(err);
    }
};