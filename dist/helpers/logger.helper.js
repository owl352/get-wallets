"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
require("colors");
const date = () => new Date().toISOString().yellow;
class Logger {
    constructor(namespace = "") {
        this.namespace = namespace;
    }
    info(message, ...optionalParams) {
        console.log(`${date()} ` +
            " [INFO]".bgWhite +
            " " +
            (this.namespace ? this.namespace + ": " : "").green, message, ...optionalParams);
    }
    log(message, ...optionalParams) {
        console.log(`${date()} ` +
            " [LOG] ".bgGreen +
            " " +
            (this.namespace ? this.namespace + ": " : "").green, message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        console.log(`${date()} ` +
            " [WARN]".bgYellow +
            " " +
            (this.namespace ? this.namespace + ": " : "").green, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        console.log(`${date()} ` +
            "[ERROR]".bgRed +
            " " +
            (this.namespace ? this.namespace + ": " : "").green, message, ...optionalParams);
    }
}
exports.Logger = Logger;
