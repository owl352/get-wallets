"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuiWallet = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_helper_1 = require("./logger.helper");
function getSuiWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = JSON.stringify({
                jsonrpc: "2.0",
                id: "1",
                method: "suix_getBalance",
                params: [wallet],
            });
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "https://explorer-rpc.mainnet.sui.io",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };
            const response = yield axios_1.default.request(config);
            const result = response.data.result;
            if (result != undefined) {
                return result.totalBalance.toString();
            }
            else {
                return "0";
            }
        }
        catch (error) {
            new logger_helper_1.Logger("sui").error("SUI NETWORK ERROR!");
            return "0";
        }
    });
}
exports.getSuiWallet = getSuiWallet;
