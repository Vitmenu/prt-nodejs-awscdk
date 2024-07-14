# Basic Practice for your very first CDK JavaScript project

This repository is designed to help you get started with the AWS Cloud Development Kit (CDK) using JavaScript. It's a great starting point for anyone new to AWS CDK or those looking to practice their skills. The AWS CDK allows you to define your cloud infrastructure using familiar programming languages, making cloud applications easier to deploy and manage.

## Getting Started

To get started with learning AWS CDK in JavaScript

**check out those links**
- [How to Create an AWS Lambda Function with CDK (in Javascript)](https://www.youtube.com/watch?v=1YrmUzOjIqE)
- [Migrating from AWS CDK v1 to AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/migrating-v2.html)
- [Tutorial: Create your first AWS CDK app](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)
- [AWS CDK Toolkit](https://www.npmjs.com/package/aws-cdk)

## Useful commands

Here are some commands you'll find useful while working on this project:

- `npm run test`: Perform the Jest unit tests. This helps ensure your code behaves as expected before deploying it.
- `npx cdk deploy`: Deploy this stack to your default AWS account/region. This command takes the infrastructure defined in your CDK app and provisions it in AWS.
- `npx cdk diff`: Compare the deployed stack with the current state. This is useful for seeing what changes will be applied before actually deploying them.
- `npx cdk synth`: Emits the synthesized CloudFormation template. This command generates the AWS CloudFormation template for your CDK app, which is useful for debugging or understanding what AWS resources will be created.