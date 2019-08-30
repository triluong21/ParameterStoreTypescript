"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandler = (event, context, callback) => __awaiter(this, void 0, void 0, function* () {
    // const response = await processParam(event.pathParameters.name);
    // console.log(response);
    // const stringResponse = JSON.stringify(response);
    const input = JSON.stringify(event);
    // return input;
    callback(null, event);
});
//# sourceMappingURL=handler.js.map