import fs from 'fs';
import { Project } from '../@types';

export function writeProjects(data:Array<Project>, path:string){
    fs.writeFileSync(path,JSON.stringify(data))
}