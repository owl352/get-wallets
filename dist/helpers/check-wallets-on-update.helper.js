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
exports.checkWalletsOnUpdates = void 0;
const get_wallet_balance_helper_1 = require("./get-wallet-balance.helper");
const read_projects_wallets_helper_1 = require("./read-projects-wallets.helper");
const write_projects_wallet_helper_1 = require("./write-projects-wallet.helper");
function checkWalletsOnUpdates(pathToConfig = "./projects.json", isFirst = true) {
    return __awaiter(this, void 0, void 0, function* () {
        let projects = (0, read_projects_wallets_helper_1.readProjectWallets)(pathToConfig);
        let isEmpty = true;
        for (let p of projects) {
            for (let w of p.wallets) {
                if (w.balance != "0") {
                    isEmpty = false;
                    break;
                }
            }
        }
        if (isEmpty) {
            if (isFirst) {
                yield checkWalletsOnUpdates(pathToConfig, false);
            }
            else {
                for (let p = 0; p < projects.length; p++) {
                    for (let w = 0; w < projects[p].wallets.length; w++) {
                        yield (0, get_wallet_balance_helper_1.getWalletBalance)({
                            project: projects[p].project_name,
                            address: projects[p].wallets[w].address,
                            balance: projects[p].wallets[w].balance,
                        }, (data) => {
                            projects[p].wallets[w].balance = data.balance;
                        });
                    }
                }
                (0, write_projects_wallet_helper_1.writeProjects)(projects, pathToConfig);
                return [];
            }
            return [];
        }
        let changes = [];
        for (let p = 0; p < projects.length; p++) {
            for (let w = 0; w < projects[p].wallets.length; w++) {
                yield (0, get_wallet_balance_helper_1.getWalletBalance)({
                    project: projects[p].project_name,
                    address: projects[p].wallets[w].address,
                    balance: projects[p].wallets[w].balance,
                }, (data) => {
                    projects[p].wallets[w].balance = data.balance;
                    if (data.balanceDelta != "0" && data.balanceDelta != undefined) {
                        changes.push(data);
                    }
                });
            }
        }
        (0, write_projects_wallet_helper_1.writeProjects)(projects, pathToConfig);
        return changes;
    });
}
exports.checkWalletsOnUpdates = checkWalletsOnUpdates;
