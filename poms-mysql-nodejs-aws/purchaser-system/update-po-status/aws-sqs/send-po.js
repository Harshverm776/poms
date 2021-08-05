const AWS = require('aws-sdk');

AWS.config.update({ region: 'REGION' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.sendPoDetails = function(po) {
    const data = {
        po_id: po.id,
        buyer_name: po.buyer_name,
        buyer_address: po.buyer_address,
        shipping_address: po.shipping_address,
        created_by: po.created_by,
        updated_by: po.updated_by,
        status: po.status,
        item_name: po.item_name,
        item_description: po.item_description,
        item_unit_measurement: po.item_unit_measurement,
        item_unit_price: po.item_unit_price,
        vendor_name: po.vendor_name,
        quantity: po.quantity,
        total_amount: po.total_amount,
        created_on: po.created_on
    };
    const params = {
        DelaySeconds: 2,
        MessageBody: JSON.stringify(data),
        QueueUrl: "https://sqs.us-east-2.amazonaws.com/022932606714/publish-po-sqs"
    };
    sqs.sendMessage(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
};