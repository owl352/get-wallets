import { Wallet, Provider } from "fuels";
import { fueletNet } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getFueletWallet(wallet: string): Promise<string> {
  try {
    const provider = await Provider.create(fueletNet);
    const w = Wallet.fromAddress(wallet, provider);
    return (await w.getBalance()).valueOf();
  } catch (error) {
    new Logger("FUEL").error("FUEL NETWORK ERROR!");
    return "0";
  }
}
