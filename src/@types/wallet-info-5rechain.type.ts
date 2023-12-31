export type WalletInfoFirechain = {
  nonce: number;
  consumers: number;
  providers: number;
  sufficients: number;
  data: {
    free: string;
    reserved: number;
    frozen: number;
    flags: string;
  };
};
