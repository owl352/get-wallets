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
exports.getFueletWallet = void 0;
const fuels_1 = require("fuels");
const constants_helper_1 = require("./constants.helper");
function getFueletWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield fuels_1.Provider.create(constants_helper_1.fueletNet);
        const w = fuels_1.Wallet.fromAddress(wallet, provider);
        return (yield w.getBalance()).valueOf();
    });
}
exports.getFueletWallet = getFueletWallet;
