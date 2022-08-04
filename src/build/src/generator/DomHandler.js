"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShortCutsTable_1 = __importDefault(require("./Table/ShortCutsTable"));
const data_1 = __importDefault(require("../../data/data"));
const defaultOptions = {
    rowColors: ["white", "gray"],
    dividerColor: "black",
    fontSize: "1rem"
};
class DomHandler {
    constructor(root, shortcust, opts) {
        this.root = root;
        this.opts = opts || defaultOptions;
        this.shortcuts = shortcust;
    }
    applyCustomOptions() {
        if (!this.opts)
            return false;
    }
    create() {
        let table = (0, ShortCutsTable_1.default)(data_1.default.Title, "Title");
        this.root.appendChild(table);
    }
}
exports.default = DomHandler;
