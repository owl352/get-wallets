"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectNetworks = exports.aptosExplorerGraphQl = exports.fueletNet = exports.erc20CoinAbi = exports.starknetNetCoinAddr = exports.starknetNet = exports.firechainEVMNet = exports.firechainNativeNet = exports.suiNet = exports.polkadotNet = exports.keplerSeiREST = exports.ethNet = exports.bscNet = exports.venomNet = void 0;
const starknet_1 = require("starknet");
const get_eth_wallet_helper_1 = require("./get-eth-wallet.helper");
const get_kepler_sei_wallet_helper_1 = require("./get-kepler-sei-wallet.helper");
const get_polkadot_wallet_helper_1 = require("./get-polkadot-wallet.helper");
const get_sui_wallet_helper_1 = require("./get-sui-wallet.helper");
const get_5rechain_wallet_helper_1 = require("./get-5rechain-wallet.helper");
const get_venom_wallet_helper_1 = require("./get-venom-wallet.helper");
const get_starknet_wallet_helper_1 = require("./get-starknet-wallet.helper");
const get_fuelet_wallet_helper_1 = require("./get-fuelet-wallet.helper");
const get_aptos_wallet_helper_1 = require("./get-aptos-wallet.helper");
const get_tron_wallet_helper_1 = require("./get-tron-wallet.helper");
const get_binance_wallet_helper_1 = require("./get-binance-wallet.helper");
exports.venomNet = "https://gql-testnet.venom.foundation/graphql";
exports.bscNet = "https://bsc-dataseed1.binance.org/";
exports.ethNet = "https://prettiest-tiniest-panorama.quiknode.pro/f1bfdce8559cfd53a102183a4a551fec51826b78/";
//! public rpc dont use in production
exports.keplerSeiREST = "https://rest.atlantic-2.seinetwork.io/bank/balances/";
exports.polkadotNet = "wss://rpc.polkadot.io";
exports.suiNet = "https://sui-mainnet.public.blastapi.io";
exports.firechainNativeNet = "wss://wss-testnet.5ire.network/";
exports.firechainEVMNet = "https://rpc-testnet.5ire.network/";
//! public rpc dont use in production
exports.starknetNet = starknet_1.constants.NetworkName.SN_GOERLI;
exports.starknetNetCoinAddr = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
exports.erc20CoinAbi = `[
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
exports.fueletNet = "https://beta-4.fuel.network/graphql";
//! from https://explorer.aptoslabs.com/
exports.aptosExplorerGraphQl = "https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql";
exports.projectNetworks = {
    Metamask: get_eth_wallet_helper_1.getEthWallet,
    Keplr: get_kepler_sei_wallet_helper_1.getSEIWallet,
    Polkadot: get_polkadot_wallet_helper_1.getPolkadotWallet,
    "SUI Wallet": get_sui_wallet_helper_1.getSuiWallet,
    "5irechain": get_5rechain_wallet_helper_1.getFirechainWallet,
    LEAP: get_kepler_sei_wallet_helper_1.getSEIWallet,
    VENOM: get_venom_wallet_helper_1.getVenomWallet,
    ArgentX: get_starknet_wallet_helper_1.getStarknetWallet,
    Fuelet: get_fuelet_wallet_helper_1.getFueletWallet,
    MARTIAN: get_aptos_wallet_helper_1.getAptosWallet,
    TRONLINK: get_tron_wallet_helper_1.getTronWallet,
    Braavos: get_starknet_wallet_helper_1.getStarknetWallet,
    "TRUST WALLET": get_binance_wallet_helper_1.getBinanceWallet,
};
