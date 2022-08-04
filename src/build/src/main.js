"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("normalize.css");
const data_1 = __importDefault(require("../data/data"));
const DomHandler_1 = __importDefault(require("./generator/DomHandler"));
function run() {
    if (!data_1.default)
        return;
    let domHandler = new DomHandler_1.default(document.getElementById("shortcuts"), data_1.default, undefined);
    domHandler.create();
}
run();
