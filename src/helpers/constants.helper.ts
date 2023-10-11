import { constants } from "starknet";

export const ethNet: string =
  "https://prettiest-tiniest-panorama.quiknode.pro/f1bfdce8559cfd53a102183a4a551fec51826b78/";
//! public rpc dont use in production
export const keplerSeiREST: string =
  "https://rest.atlantic-2.seinetwork.io/bank/balances/";
export const polkadotNet: string = "wss://rpc.polkadot.io";
export const suiNet: string = "https://sui-mainnet.public.blastapi.io";
export const firechainNativeNet: string = "wss://wss-testnet.5ire.network/";
export const firechainEVMNet: string = "https://rpc-testnet.5ire.network/";
//! public rpc dont use in production
export const starknetNet = constants.NetworkName.SN_MAIN;
export const starknetNetCoinAddr: string =
  "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
export const erc20CoinAbi: string = `[
    {
        "inputs": [
            {
                "name": "account",
                "type": "felt"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "Uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]`;


export const fueletNet: string = 'https://beta-4.fuel.network/graphql';

//! from https://explorer.aptoslabs.com/
export const aptosExplorerGraphQl: string = 'https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql';