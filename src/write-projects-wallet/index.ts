import fs from 'fs';
import { Project } from '../read-project-wallets';

export function writeProjects(data:Array<Project>, path:string){
    fs.writeFileSync(path,JSON.stringify(data))
}