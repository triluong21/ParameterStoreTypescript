**Serverless service for ParameterStore in Typescript**
Features: 
  - TWO ParameterStore/secretValue for type String and ListString (array)
  - ONE lambda which gets secret value using getParameter()


Run Service OFFLINE:
 - Run debug session: DEBUG API GATEWAY.
 - URL to use: http://localhost:3000/secrets/Confidential-001/true
              http://localhost:3000/secrets/Confidential-002/true

To deploy to AWS account:
  Run "serverless deploy --stage dev"

Deployed Service to AWS:
 -  https://xxxxxx.execute-api.us-east-2.amazonaws.com/dev/secrets/Confidential-001/true
 -  https://xxxxxx.execute-api.us-east-2.amazonaws.com/dev/secrets/Confidential-002/true


MORE INFORMATION CAN BE FOUND AT: https://www.npmjs.com/package/aws-param-store#parameterquerypath-p-