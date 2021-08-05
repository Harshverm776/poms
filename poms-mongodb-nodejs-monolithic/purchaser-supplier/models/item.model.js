const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    unit_measurement: {
        type: String,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    vendor_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);