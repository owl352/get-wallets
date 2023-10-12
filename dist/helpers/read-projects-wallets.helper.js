"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readProjectWallets = void 0;
const fs_1 = __importDefault(require("fs"));
function readProjectWallets(path) {
    if (fs_1.default.existsSync(path)) {
        return JSON.parse(fs_1.default.readFileSync(path).toString());
    }
    else {
        throw Error("project json dosen't exist in path: " + path);
    }
}
exports.readProjectWallets = readProjectWallets;
