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
exports.getSEIWallet = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_helper_1 = require("./constants.helper");
function getSEIWallet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield (0, axios_1.default)({
            url: constants_helper_1.keplerSeiREST + wallet,
            responseType: "json",
        });
        for (let i of resp.data.result) {
            if (i.denom == "usei") {
                return i.amount;
            }
        }
        return "0";
    });
}
exports.getSEIWallet = getSEIWallet;
