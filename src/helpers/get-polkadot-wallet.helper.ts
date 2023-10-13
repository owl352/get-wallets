import { ApiPromise, WsProvider } from "@polkadot/api";
import { WalletInfoPolkadot } from "../@types";
import { polkadotNet } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getPolkadotWallet(wallet: string): Promise<string> {
  try {
    const provider = new WsProvider(polkadotNet);
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    return (
      (await api.query.system.account(wallet)).toJSON() as WalletInfoPolkadot
    ).data.free.toString();
  } catch (error) {
    new Logger("polkadot").error("POLKADOT NETWORK ERROR!");
    return "0";
  }
}
