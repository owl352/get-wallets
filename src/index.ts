import { checkWalletsOnUpdates } from "./check-wallets-on-update";

async function main() {
  checkWalletsOnUpdates().then(console.log);
}

main();
