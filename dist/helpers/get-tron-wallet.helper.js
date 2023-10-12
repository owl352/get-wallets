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
exports.getTronWallet = void 0;
const tatum_1 = require("@tatumio/tatum");
function getTronWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const tatum = yield tatum_1.TatumSDK.init({ network: tatum_1.Network.TRON });
        const w = yield tatum.rpc.getAccount(wallet, { visible: true });
        yield tatum.destroy();
        return w.balance.toString();
    });
}
exports.getTronWallet = getTronWallet;
