import { Project } from "./@types";
import fs from "fs";
import { projectsPath } from "./helpers/constants.helper";
export * from "./@types";
export function readProjectWallets(): Array<Project> {
  if (fs.existsSync(projectsPath)) {
    return JSON.parse(fs.readFileSync(projectsPath).toString()) as Array<Project>;
  } else {
    throw Error("project json dosen't exist in path: " + projectsPath);
  }
}
