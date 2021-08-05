const Item = require('../models/item.model');

exports.createItem = async(req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        unit_measurement: req.body.unit_measurement,
        unit_price: req.body.unit_price,
        vendor_name: req.body.vendor_name
    });

    try {
        const item1 = await item.save();
        res.status(201).json(item1);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getItems = async(req, res) => {
    try {
        const item = await Item.find();
        res.status(200).json(item);
    } catch (err) {
        res.status(404).json(err);
    }
};

