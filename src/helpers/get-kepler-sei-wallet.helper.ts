import axios from "axios";
import { keplerSeiREST } from "./constants.helper";
import { SeiBalance } from "../@types";

export async function getSEIWallet(wallet: string): Promise<string> {
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
}
