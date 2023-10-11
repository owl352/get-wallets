import { Contract, Provider, json } from "starknet";
import { erc20CoinAbi, starknetNet, starknetNetCoinAddr } from "../helpers/constants.helper";

export async function getStarknetWallet(wallet: string) {
  const provider = new Provider({
    sequencer: { network: starknetNet },
  });
  const coin = new Contract(
    json.parse(erc20CoinAbi),
    starknetNetCoinAddr,
    provider
  );
  return (await coin.balanceOf(wallet)).balance.toString();
}
