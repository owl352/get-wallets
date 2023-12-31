export * from "./helpers/check-wallets-on-update.helper";
export * from "./@types";
import { checkWalletsOnUpdates } from "./helpers/check-wallets-on-update.helper";

async function main() {
  checkWalletsOnUpdates("./projects.json").then(console.log);
}

if (require.main === module) {
  main();
}
