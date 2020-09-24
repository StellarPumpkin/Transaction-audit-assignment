"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const url_1 = __importDefault(require("url"));
const request_promise_1 = __importDefault(require("request-promise"));
const apiCall = function (date, from, to) {
    const requestUrl = url_1.default.format({
        protocol: "https",
        hostname: "api.frankfurter.app",
        pathname: "/" + date,
        query: {
            from: from,
            to: to
        }
    });
    return request_promise_1.default(requestUrl)
        .then(parsedBody => {
        return JSON.parse(parsedBody).rates[to];
    })
        .catch(err => {
        console.log(err);
        return null;
    });
};
module.exports = apiCall;
