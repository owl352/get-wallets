import { Logger } from "../../logger";
import { ProjectBalanceData } from "../@types";


const logs = new Logger("default balance callback");

export function getBalanceDefaultCallBack(
  data: ProjectBalanceData,
) {
  logs.log(Object.values(data).join(" | "));
}
