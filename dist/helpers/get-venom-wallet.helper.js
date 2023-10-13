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
exports.getVenomWallet = void 0;
const core_1 = require("@eversdk/core");
const lib_node_1 = require("@eversdk/lib-node");
const constants_helper_1 = require("./constants.helper");
const logger_helper_1 = require("./logger.helper");
function getVenomWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            core_1.TonClient.useBinaryLibrary(lib_node_1.libNode);
            const client = new core_1.TonClient({
                network: {
                    endpoints: [constants_helper_1.venomNet],
                },
            });
            const getInfoQuery = `query getBalance($address: String!) {
      blockchain {
      account(address: $address) {
              info {
              balance
              acc_type
      }}}}`;
            const resultOfQuery = yield client.net.query({
                query: getInfoQuery,
                variables: { address: wallet },
            });
            const nanotokens = parseInt(resultOfQuery.result.data.blockchain.account.info.balance, 16);
            client.close();
            return nanotokens.toString();
        }
        catch (error) {
            new logger_helper_1.Logger("venom").error("VENOM NETWORK ERRROR!");
            return "0";
        }
    });
}
exports.getVenomWallet = getVenomWallet;
