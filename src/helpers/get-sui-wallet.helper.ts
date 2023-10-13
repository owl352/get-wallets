import axios from "axios";
import { SuiWalletInfo } from "../@types";
import { Logger } from "./logger.helper";

export async function getSuiWallet(wallet: string): Promise<string> {
  try {
    let data = JSON.stringify({
      jsonrpc: "2.0",
      id: "1",
      method: "suix_getBalance",
      params: [wallet],
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://explorer-rpc.mainnet.sui.io",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const result: SuiWalletInfo = response.data.result;

    if (result != undefined) {
      return result.totalBalance.toString();
    } else {
      return "0";
    }
  } catch (error) {
    new Logger("sui").error("SUI NETWORK ERROR!");
    return "0";
  }
}
