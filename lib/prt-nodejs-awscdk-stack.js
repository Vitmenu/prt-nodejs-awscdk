const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const { PrtLambda }       = require('./prt_lambda');

class PrtNodejsAwscdkStack extends Stack {
	/**
	 *
	 * @param {Construct} scope
	 * @param {string} id
	 * @param {StackProps=} props
	 */
	constructor(scope, id, props) {
		super(scope, id, props);

		// The code that defines your stack goes here
		new PrtLambda(this, 'MyLambda');

		// example resource
		// const queue = new sqs.Queue(this, 'PrtNodejsAwscdkQueue', {
		//   visibilityTimeout: Duration.seconds(300)
		// });
	}
}

module.exports = { PrtNodejsAwscdkStack }
