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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPolkadotWallet = void 0;
const api_1 = require("@polkadot/api");
const constants_helper_1 = require("./constants.helper");
const logger_helper_1 = require("./logger.helper");
function getPolkadotWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new api_1.WsProvider(constants_helper_1.polkadotNet);
            // Create an API instance for Polkadot
            const api = yield api_1.ApiPromise.create({ provider });
            return (yield api.query.system.account(wallet)).toJSON().data.free.toString();
        }
        catch (error) {
            new logger_helper_1.Logger("polkadot").error("POLKADOT NETWORK ERROR!");
            return "0";
        }
    });
}
exports.getPolkadotWallet = getPolkadotWallet;
