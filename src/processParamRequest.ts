import * as awsParamStore from "aws-param-store";

export const processParam = (ParamName: string) => {
    const ssmPromise = awsParamStore.getParameter(ParamName);
    return ssmPromise;
};
