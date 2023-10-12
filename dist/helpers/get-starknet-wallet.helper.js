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
exports.getStarknetWallet = void 0;
const starknet_1 = require("starknet");
const constants_helper_1 = require("./constants.helper");
function getStarknetWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new starknet_1.Provider({
            sequencer: { network: constants_helper_1.starknetNet },
        });
        const coin = new starknet_1.Contract(starknet_1.json.parse(constants_helper_1.erc20CoinAbi), constants_helper_1.starknetNetCoinAddr, provider);
        return (yield coin.balanceOf(wallet)).balance.toString();
    });
}
exports.getStarknetWallet = getStarknetWallet;
