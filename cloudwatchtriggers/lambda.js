let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    console.log("Daaaefine authChallenge")



    kinesis.describeStream({
  StreamName: 'testcafe'
}).promise()
        .then(data => {
            // your logic goes here
            console.log(data)
        })
        .catch(err => {
            // error handling goes here
            console.log(err)
        });


    callback(null, 'Successfully executed');
}
