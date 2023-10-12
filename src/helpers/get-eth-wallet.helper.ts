import Web3 from "web3";
import { ethNet } from "./constants.helper";

export async function getEthWallet(wallet: string): Promise<string> {
  const web3: Web3 = new Web3(ethNet);
  return (await web3.eth.getBalance(wallet)).toString();
}
