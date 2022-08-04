"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShortCutsTable_1 = __importDefault(require("./Table/ShortCutsTable"));
const data_1 = __importDefault(require("../../data/data"));
const defaultOptions = {
    rowColors: undefined,
    dividerColor: undefined,
    gridFontSize: undefined,
    titleFontSize: undefined,
};
/**
 *
 *
 * @export
 * @class DomHandler
 */
class DomHandler {
    constructor(root, shortcust, opts) {
        this.root = root;
        this.opts = opts || defaultOptions;
        this.shortcuts = shortcust;
    }
    applyCustomStyleOptions() {
        var _a;
        if (!this.opts)
            return false;
        let styleStr = "";
        if (this.opts.rowColors) {
            switch ((_a = this.opts.rowColors) === null || _a === void 0 ? void 0 : _a.length) {
                case 0:
                case 1:
                    // do noting
                    break;
                case 2: {
                    styleStr = `
            ${styleStr}
            tbody > tr:nth-child(odd) {
                background-color: ${this.opts.rowColors[0]};
            }
            tbody > tr:nth-child(even) {
                background-color: ${this.opts.rowColors[1]};
            }
            `;
                    break;
                }
                default:
                    break;
            }
        }
        if (this.opts.dividerColor) {
            styleStr = `
          ${styleStr}
          table > caption::after {
            background-color: ${this.opts.dividerColor}
          }
        `;
        }
        if (this.opts.gridFontSize) {
            styleStr = `
          ${styleStr}
          table:not(caption) {
            font-size:${this.opts.gridFontSize}
          }
      `;
        }
        if (this.opts.titleFontSize) {
            styleStr = `
        ${styleStr}
        table > caption {
          font-size: ${this.opts.titleFontSize}
        }
      `;
        }
        console.log(styleStr);
        const style = document.createElement("style");
        style.appendChild(document.createTextNode(styleStr));
        document.head.appendChild(style);
    }
    create() {
        let table = (0, ShortCutsTable_1.default)(data_1.default.Title, "Title");
        this.applyCustomStyleOptions();
        this.root.appendChild(table);
    }
}
exports.default = DomHandler;
