const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    po_id: {
        type: String,
        required: true
    },
    buyer_name: {
        type: String,
        required: true
    },
    buyer_address: {
        type: String,
        required: true
    },
    shipping_address: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    approved_by: {
        type: String,
        required: true
    },
    item: {
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
    },
    quantity: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    po_status: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        required:- true
    }
});

module.exports = mongoose.model('purchaseOrder', purchaseSchema);