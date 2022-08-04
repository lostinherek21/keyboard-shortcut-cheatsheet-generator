"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yaml_1 = __importDefault(require("yaml"));
function ShortcutsParser() {
    let content = "";
    let type = "";
    function init(str) {
        if (!str) {
            return false;
        }
        content = str;
        return true;
    }
    function parse() {
        let result = undefined;
        if ((result = JSON.parse(content)) || (result = yaml_1.default.parse(content))) {
            return result;
        }
        else {
            throw Error("Invilid input file, unable to parse it");
        }
    }
    return {
        init, parse,
        type,
    };
}
exports.default = ShortcutsParser();
