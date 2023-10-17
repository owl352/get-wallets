import { Wallet } from "./wallets.type";

export type Project = {
  project_name: string;
  wallets: Array<Wallet>;
  info: string;
};
