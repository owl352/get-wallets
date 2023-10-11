import { Project } from "./@types";
import fs from "fs";
export * from "./@types";
export function readProjectWallets(path: string): Array<Project> {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path).toString()) as Array<Project>;
  } else {
    throw Error("project json dosen't exist in path: " + path);
  }
}
