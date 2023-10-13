import axios from "axios";
import { keplerSeiREST } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getSEIWallet(wallet: string): Promise<string> {
  try {
    const resp = await axios({
      url: keplerSeiREST + wallet,
      responseType: "json",
    });
    for (let i of resp.data.result) {
      if (i.denom == "usei") {
        return i.amount;
      }
    }
    return "0";
  } catch (error) {
    new Logger('sei').error("SEI NETWORK ERROR!")
    return "0";
  }
}
