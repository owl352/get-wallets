import Web3 from "web3";
import { bscNet } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getBinanceWallet(wallet: string): Promise<string> {
  try {
    const web3: Web3 = new Web3(bscNet);
  return (await web3.eth.getBalance(wallet)).toString();
  } catch (error) {
    new Logger('binance').error('BINANCE NETWORK ERROR')
    return '0';
  }
}
