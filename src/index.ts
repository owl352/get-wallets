import { checkWalletsOnUpdates } from "./check-wallets-on-update";

async function main() {
  checkWalletsOnUpdates('./projects.json').then(console.log);
}

main();
