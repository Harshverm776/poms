const AWS = require('aws-sdk');

AWS.config.update({ region: 'REGION' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.sendPoAcceptance = function(status) {
    const params = {
        DelaySeconds: 2,
        MessageBody: JSON.stringify(status),
        QueueUrl: "https://sqs.us-east-2.amazonaws.com/022932606714/publish-acceptance-sqs"
    };
    sqs.sendMessage(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
};