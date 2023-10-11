import fs from 'fs';
import { ProjectBalanceData } from '../get-wallet-balance';
import { projectsPath } from '../read-project-wallets/helpers/constants.helper';
import { Project } from '../read-project-wallets';

export function writeProjects(data:Array<Project>){
    fs.writeFileSync(projectsPath,JSON.stringify(data))
}