const AWS = require('aws-sdk');
const db = require("../models");

AWS.config.update({ region: 'REGION' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.receivePoDetails = function() {
    const params = {
        MaxNumberOfMessages: 10,
        QueueUrl: "https://sqs.us-east-2.amazonaws.com/022932606714/publish-po-sqs"
    };
    sqs.receiveMessage(params, function(err, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {

            const po = JSON.parse(data.Messages[0].Body);
            db.purchase_order.create(po);

            const deleteParams = {
                QueueUrl: "https://sqs.us-east-2.amazonaws.com/022932606714/publish-po-sqs",
                ReceiptHandle: data.Messages[0].ReceiptHandle
            };
            sqs.deleteMessage(deleteParams, function(err, data) {
                if (err) {
                    console.log("Delete Error", err);
                } else {
                    console.log("Message Deleted", data);
                }
            });
        }
    });
};