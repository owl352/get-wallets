import Web3 from "web3";
import { ethNet } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getEthWallet(wallet: string): Promise<string> {
  try {
    const web3: Web3 = new Web3(ethNet);
    return (await web3.eth.getBalance(wallet)).toString();
  } catch (error) {
    new Logger("eth").error("ETH NETWORK ERROR!");
    return "0";
  }
}
