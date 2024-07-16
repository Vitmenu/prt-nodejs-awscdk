// The codes below will be uploaded to the Lambda function as it is.

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const bucketName = process.env.BUCKET;

exports.main = async function(event, context) {
    try {
        console.log("Entering Lambda!");
        const data = await S3.listObjectsV2({ Bucket: bucketName }).promise();
        console.log(data);
    } catch(err) {
        return {
            statusCode: 400,
            headers: {},
            body: JSON.stringify("Woopsies"),
        };
    };
};