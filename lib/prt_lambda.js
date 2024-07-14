const {
    Construct,
} = require("constructs");
const {    
    aws_lambda: lambda,
    aws_s3: s3,
} = require("aws-cdk-lib");

class PrtLambda extends Construct {
    constructor(scope, id) {
        super(scope, id);
        
        const bucket = new s3.Bucket(this, "Store"); // note that it appends everything

        const handler = new lambda.Function(this, "Handler", {
            runtime: lambda.Runtime.NODEJS_20_X, // Define runtime
            code: lambda.Code.fromAsset("resources"), // "resources" is the folder you just created
            handler: "lambda.main", // "lambda" is your filename, and main is the main function of the file.
            environment: {
                BUCKET: bucket.bucketName,
            },
        });

        bucket.grantReadWrite(handler); // Give your lambda IAM permissions to access the lambda
    };
};

module.exports = { PrtLambda };