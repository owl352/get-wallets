import { ResultOfQuery, TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { venomNet } from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getVenomWallet(wallet: string): Promise<string> {
  try {
    TonClient.useBinaryLibrary(libNode);

    const client = new TonClient({
      network: {
        endpoints: [venomNet],
      },
    });
    const getInfoQuery = `query getBalance($address: String!) {
      blockchain {
      account(address: $address) {
              info {
              balance
              acc_type
      }}}}`;
    const resultOfQuery: ResultOfQuery = await client.net.query({
      query: getInfoQuery,
      variables: { address: wallet },
    });

    const nanotokens = parseInt(
      resultOfQuery.result.data.blockchain.account.info.balance,
      16
    );
    client.close();
    return nanotokens.toString();
  } catch (error) {
    new Logger("venom").error("VENOM NETWORK ERRROR!");
    return "0";
  }
}
