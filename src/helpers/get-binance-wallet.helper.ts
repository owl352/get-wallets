import Web3 from "web3";
import { bscNet } from "./constants.helper";

export async function getBinanceWallet(wallet: string): Promise<string> {
  const web3: Web3 = new Web3(bscNet);
  return (await web3.eth.getBalance(wallet)).toString();
}
