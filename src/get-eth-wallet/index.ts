import Web3 from "web3";
import { initWeb3 } from "./helpers/init-web3.helper";

export async function getEthWallet(wallet: string): Promise<string> {
  const web3: Web3 = initWeb3();
  return (await web3.eth.getBalance(wallet)).toString();
}
