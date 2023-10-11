import { getEthWallet } from "../../get-eth-wallet";
import { getSEIWallet } from "../../get-kepler-sei-wallet";
import { getPolkadotWallet } from "../../get-polkadot-wallet";
import { getSuiWallet } from "../../get-sui-wallet";
import { getFirechainWallet } from "../../get-5rechain-wallet";
import { getVenomWallet } from "../../get-venom-wallet";
import { getStarknetWallet } from "../../get-starknet-wallet";
import { getFueletWallet } from "../../get-fuelet-wallet";
import { getAptosWallet } from "../../get-aptos-wallet";
import { getTronWallet } from "../../get-tron-wallet";

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
};
