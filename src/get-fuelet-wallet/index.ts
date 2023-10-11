import { Wallet, Provider } from "fuels";
import { fueletNet } from "../helpers/constants.helper";

export async function getFueletWallet(wallet: string): Promise<string> {
  const provider = await Provider.create(fueletNet);
  const w = Wallet.fromAddress(wallet, provider);
  return (await w.getBalance()).valueOf();
}
