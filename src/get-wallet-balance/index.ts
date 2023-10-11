import { projectNetworks } from "./helpers/constants.helper";
import { ProjectBalanceData } from "./@types";
import { getBalanceDefaultCallBack } from "./helpers/default-callback.helper";
export * from "./@types";
export async function getWalletBalance(
  data: ProjectBalanceData,
  callback: Function = getBalanceDefaultCallBack
) {
  await (projectNetworks as { [name: string]: Function })
    [data.project](data.address)
    .then((v: string) => {
      const dataForCB: ProjectBalanceData = {
        balance: v,
        balanceDelta: (parseInt(v) - parseInt(data.balance)).toString(),
        address: data.address,
        project: data.project,
      };
      callback(dataForCB);
    });
}
