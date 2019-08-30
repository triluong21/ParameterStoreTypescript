import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { processParam } from "./processParamRequest";

export const secretHandler: Handler = async (event: APIGatewayEvent, context: Context, callback?: Callback) => {
  const secretReturn = await processParam(event.pathParameters.name);
  const response = {
      statusCode: 200,
      body: JSON.stringify(secretReturn),
      };
  return response;
  };
