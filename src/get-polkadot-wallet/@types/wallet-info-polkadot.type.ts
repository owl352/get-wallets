export type WalletInfoPolkadot = {
  nonce: number;
  consumers: number;
  providers: number;
  sufficients: number;
  data: {
    free: number;
    reserved: number;
    frozen: number;
    flags: string;
  };
};
