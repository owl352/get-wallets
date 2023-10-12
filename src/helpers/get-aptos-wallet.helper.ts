import axios from "axios";
import { AptosWalletInfo } from "../@types";
import { aptosExplorerGraphQl } from "./constants.helper";

export async function getAptosWallet(wallet: string): Promise<string> {
  let data = JSON.stringify({
    query: `query CoinsData($owner_address: String, $limit: Int, $offset: Int) {
      current_fungible_asset_balances(
        where: {owner_address: {_eq: $owner_address}}
        limit: $limit
        offset: $offset
      ) {
        amount
        asset_type
        metadata {
          name
          decimals
          symbol
          __typename
        }
        __typename
      }
    }`,
    variables: {
      owner_address: wallet,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: aptosExplorerGraphQl,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios.request(config);
  const result: Array<AptosWalletInfo> = response.data.data.current_fungible_asset_balances;
  if (result != undefined) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].asset_type == "0x1::aptos_coin::AptosCoin") {
        return result[i].amount.toString();
      }
    }
    return "0";
  } else {
    return "0";
  }
}
