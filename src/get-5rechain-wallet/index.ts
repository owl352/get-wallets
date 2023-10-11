import { ApiPromise, WsProvider } from "@polkadot/api";
import { WalletInfoPolkadot } from "./@types";
import { firechainNativeNet } from "../helpers/constants.helper";
export * from "./@types";

import Web3 from "web3";
import { initWeb3 } from "./helpers/init-web3.helper";

export async function getFirechainWallet(
  wallet: string
): Promise<string> {
  if (wallet.includes("0x")) {
    const web3: Web3 = initWeb3();
    return (await web3.eth.getBalance(wallet)).toString();
  }
  const provider = new WsProvider(firechainNativeNet);
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });

  return parseInt(((await api.query.system.account(wallet)).toJSON() as WalletInfoPolkadot).data.free,16).toString();
}
