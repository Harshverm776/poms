const { updatePoStatus } = require("./update-po-status.schema");

module.exports = {
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