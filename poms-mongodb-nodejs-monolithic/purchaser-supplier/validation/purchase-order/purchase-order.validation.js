const { purchaseOrder, updatePoStatus } = require("./purchase-order.schema");

module.exports = {
    poValidation: async (req, res, next) => {
        const value = await purchaseOrder.validate(req.body);
        if(value.error) {
            res.status(400).json({
                success : 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },
    updatePoStatusValidation: async (req, res, next) => {
        const value = await updatePoStatus.validate(req.body);
        if(value.error) {
            res.status(400).json({
                success : 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    }

};