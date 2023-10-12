import { ResultOfQuery, TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";

export async function getVenomWallet(wallet: string): Promise<string> {
  TonClient.useBinaryLibrary(libNode);

  const client = new TonClient({
    network: {
      endpoints: ["https://gql-testnet.venom.foundation/"],
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
  const accountInfo = resultOfQuery.result.data.blockchain.account.info;

  const nanotokens = parseInt(accountInfo.balance, 16);
  client.close();
  return nanotokens.toString();
}