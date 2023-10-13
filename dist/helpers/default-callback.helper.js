"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceDefaultCallBack = void 0;
const logger_helper_1 = require("../helpers/logger.helper");
const logs = new logger_helper_1.Logger("default balance callback");
function getBalanceDefaultCallBack(data) {
    logs.log(Object.values(data).join(" | "));
}
exports.getBalanceDefaultCallBack = getBalanceDefaultCallBack;
