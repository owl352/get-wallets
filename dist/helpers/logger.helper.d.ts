import { ILogger } from "../@types";
import "colors";
export declare class Logger implements ILogger {
    private namespace;
    constructor(namespace?: string);
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
}
