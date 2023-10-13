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
exports.getEthWallet = void 0;
const web3_1 = __importDefault(require("web3"));
const constants_helper_1 = require("./constants.helper");
const logger_helper_1 = require("./logger.helper");
function getEthWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const web3 = new web3_1.default(constants_helper_1.ethNet);
            return (yield web3.eth.getBalance(wallet)).toString();
        }
        catch (error) {
            new logger_helper_1.Logger("eth").error("ETH NETWORK ERROR!");
            return "0";
        }
    });
}
exports.getEthWallet = getEthWallet;
