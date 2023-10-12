import { constants } from "starknet";
import { getEthWallet } from "./get-eth-wallet.helper";
import { getSEIWallet } from "./get-kepler-sei-wallet.helper";
import { getPolkadotWallet } from "./get-polkadot-wallet.helper";
import { getSuiWallet } from "./get-sui-wallet.helper";
import { getFirechainWallet } from "./get-5rechain-wallet.helper";
import { getVenomWallet } from "./get-venom-wallet.helper";
import { getStarknetWallet } from "./get-starknet-wallet.helper";
import { getFueletWallet } from "./get-fuelet-wallet.helper";
import { getAptosWallet } from "./get-aptos-wallet.helper";
import { getTronWallet } from "./get-tron-wallet.helper";
import { getBinanceWallet } from "./get-binance-wallet.helper";

export const venomNet: string = "https://gql-testnet.venom.foundation/graphql";
export const bscNet: string = "https://bsc-dataseed1.binance.org/";
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

export const fueletNet: string = "https://beta-4.fuel.network/graphql";

//! from https://explorer.aptoslabs.com/
export const aptosExplorerGraphQl: string =
  "https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql";

export const projectNetworks = {
  Metamask: getEthWallet,
  Keplr: getSEIWallet,
  Polkadot: getPolkadotWallet,
  "SUI Wallet": getSuiWallet,
  "5irechain": getFirechainWallet,
  LEAP: getSEIWallet,
  VENOM: getVenomWallet,
  ArgentX: getStarknetWallet,
  Fuelet: getFueletWallet,
  MARTIAN: getAptosWallet,
  TRONLINK: getTronWallet,
  Braavos: getStarknetWallet,
  "TRUST WALLET": getBinanceWallet,
};
