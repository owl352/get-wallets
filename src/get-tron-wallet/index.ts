import { TatumSDK, Tron, Network } from "@tatumio/tatum";

export async function getTronWallet(wallet: string): Promise<any> {
  const tatum = await TatumSDK.init<Tron>({ network: Network.TRON });
  const w = await tatum.rpc.getAccount(wallet,{visible: true});
  await tatum.destroy();
  return w.balance.toString();
}
