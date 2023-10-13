import { TatumSDK, Tron, Network } from "@tatumio/tatum";
import { Logger } from "./logger.helper";

export async function getTronWallet(wallet: string): Promise<string> {
  try {
    const tatum = await TatumSDK.init<Tron>({ network: Network.TRON });
    const w = await tatum.rpc.getAccount(wallet, { visible: true });
    await tatum.destroy();
    return w.balance.toString();
  } catch (error) {
    new Logger("TRON").error("TRON NETWORK ERROR!");
    return "0";
  }
}
