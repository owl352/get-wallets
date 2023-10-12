import { ApiPromise, WsProvider } from "@polkadot/api";
import { WalletInfoFirechain } from "../@types";
import { firechainEVMNet, firechainNativeNet } from "./constants.helper";

import Web3 from "web3";

export async function getFirechainWallet(
  wallet: string
): Promise<string> {
  if (wallet.includes("0x")) {
    const web3: Web3 = new Web3(firechainEVMNet);
    return (await web3.eth.getBalance(wallet)).toString();
  }
  const provider = new WsProvider(firechainNativeNet);
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });

  return parseInt(((await api.query.system.account(wallet)).toJSON() as WalletInfoFirechain).data.free,16).toString();
}
