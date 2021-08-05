const { item } = require("./item.schema");

module.exports = {
    itemValidation: async (req, res, next) => {
        const value = await item.validate(req.body);
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