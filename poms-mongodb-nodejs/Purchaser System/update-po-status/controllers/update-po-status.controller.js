const PurchaseOrder = require('../models/purchase-order.model');

exports.updatePoStatus =  async(req, res) => {
    try {
        const po = await PurchaseOrder.findById(req.params.id);
        po.po_status = req.body.po_status;
        po.approved_by = req.body.approved_by;
        po.updated_on = new Date();
        const po1 = await po.save();
        res.status(200).json(po1);
    } catch (err) {
        res.status(400).json(err);
    }
};