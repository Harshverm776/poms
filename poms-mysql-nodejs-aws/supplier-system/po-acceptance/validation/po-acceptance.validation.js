const { poAcceptance } = require("./po-acceptance.schema");

module.exports = {
    poAcceptanceValidation: async(req, res, next) => {
        const value = await poAcceptance.validate(req.body);
        if (value.error) {
            res.status(400).json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    }

};