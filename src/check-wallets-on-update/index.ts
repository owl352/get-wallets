import { ProjectBalanceData, getWalletBalance } from "../get-wallet-balance";
import { Project, readProjectWallets } from "../read-project-wallets";
import { writeProjects } from "../write-projects-wallet";

export async function checkWalletsOnUpdates(
  pathToConfig: string = './projects.json',
  isFirst: boolean = true,
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
      await checkWalletsOnUpdates(pathToConfig,false);
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
      writeProjects(projects,pathToConfig);
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

  writeProjects(projects,pathToConfig);

  return changes;
}
