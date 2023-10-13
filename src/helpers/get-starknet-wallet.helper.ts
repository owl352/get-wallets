import { Contract, Provider, json } from "starknet";
import {
  erc20CoinAbi,
  starknetNet,
  starknetNetCoinAddr,
} from "./constants.helper";
import { Logger } from "./logger.helper";

export async function getStarknetWallet(wallet: string): Promise<string> {
  try {
    const provider = new Provider({
      sequencer: { network: starknetNet },
    });
    const coin = new Contract(
      json.parse(erc20CoinAbi),
      starknetNetCoinAddr,
      provider
    );
    return (await coin.balanceOf(wallet)).balance.toString();
  } catch (error) {
    new Logger("starknet").error("STARKNET NETWORK ERROR!");
    return "0";
  }
}
