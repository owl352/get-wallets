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
exports.getAptosWallet = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_helper_1 = require("./constants.helper");
function getAptosWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            query: `query CoinsData($owner_address: String, $limit: Int, $offset: Int) {
      current_fungible_asset_balances(
        where: {owner_address: {_eq: $owner_address}}
        limit: $limit
        offset: $offset
      ) {
        amount
        asset_type
        metadata {
          name
          decimals
          symbol
          __typename
        }
        __typename
      }
    }`,
            variables: {
                owner_address: wallet,
            },
        });
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: constants_helper_1.aptosExplorerGraphQl,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        const response = yield axios_1.default.request(config);
        const result = response.data.data.current_fungible_asset_balances;
        if (result != undefined) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].asset_type == "0x1::aptos_coin::AptosCoin") {
                    return result[i].amount.toString();
                }
            }
            return "0";
        }
        else {
            return "0";
        }
    });
}
exports.getAptosWallet = getAptosWallet;
