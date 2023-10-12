import { ApiPromise, WsProvider } from "@polkadot/api";
import { WalletInfoPolkadot } from "../@types";
import { polkadotNet } from "./constants.helper";

export async function getPolkadotWallet(wallet: string): Promise<string> {
  const provider = new WsProvider(polkadotNet);
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });

  return ((await api.query.system.account(wallet)).toJSON() as WalletInfoPolkadot).data.free.toString();
}
