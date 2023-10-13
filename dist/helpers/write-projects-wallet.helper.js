"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeProjects = void 0;
const fs_1 = __importDefault(require("fs"));
function writeProjects(data, path) {
    fs_1.default.writeFileSync(path, JSON.stringify(data));
}
exports.writeProjects = writeProjects;
