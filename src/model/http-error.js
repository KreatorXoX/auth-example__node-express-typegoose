"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); //Adds message property
        this.code = errorCode;
    }
}
exports.default = HttpError;
