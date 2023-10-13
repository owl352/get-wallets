import { getWalletBalance } from "./get-wallet-balance.helper";
import { ProjectBalanceData } from "../@types";
import { readProjectWallets } from "./read-projects-wallets.helper";
import { writeProjects } from "./write-projects-wallet.helper";
import { Project } from "../@types";

export async function checkWalletsOnUpdates(
  pathToConfig: string = process.cwd() + "/node_modules/@owl352/get-wallets/projects.json",
  isFirst: boolean = true
): Promise<ProjectBalanceData[]> {
  let projects: Array<Project> = readProjectWallets(pathToConfig);

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
      await checkWalletsOnUpdates(pathToConfig, false);
    } else {
      for (let p = 0; p < projects.length; p++) {
        for (let w = 0; w < projects[p].wallets.length; w++) {
          await getWalletBalance(
            {
              project: projects[p].project_name,
              address: projects[p].wallets[w].address,
              balance: projects[p].wallets[w].balance,
            },
            (data: ProjectBalanceData) => {
              projects[p].wallets[w].balance = data.balance;
            }
          );
        }
      }
      writeProjects(projects, pathToConfig);
      return [];
    }
    return [];
  }

  let changes: Array<ProjectBalanceData> = [];
  for (let p = 0; p < projects.length; p++) {
    for (let w = 0; w < projects[p].wallets.length; w++) {
      await getWalletBalance(
        {
          project: projects[p].project_name,
          address: projects[p].wallets[w].address,
          balance: projects[p].wallets[w].balance,
        },
        (data: ProjectBalanceData) => {
          projects[p].wallets[w].balance = data.balance;
          if (data.balanceDelta != "0" && data.balanceDelta != undefined) {
            changes.push(data);
          }
        }
      );
    }
  }

  writeProjects(projects, pathToConfig);

  return changes;
}
