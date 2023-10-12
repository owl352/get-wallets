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
exports.getFirechainWallet = void 0;
const api_1 = require("@polkadot/api");
const constants_helper_1 = require("./constants.helper");
const web3_1 = __importDefault(require("web3"));
function getFirechainWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        if (wallet.includes("0x")) {
            const web3 = new web3_1.default(constants_helper_1.firechainEVMNet);
            return (yield web3.eth.getBalance(wallet)).toString();
        }
        const provider = new api_1.WsProvider(constants_helper_1.firechainNativeNet);
        // Create an API instance for Polkadot
        const api = yield api_1.ApiPromise.create({ provider });
        return parseInt((yield api.query.system.account(wallet)).toJSON().data.free, 16).toString();
    });
}
exports.getFirechainWallet = getFirechainWallet;
