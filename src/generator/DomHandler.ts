import tableOptions from "./optionType";
import { SCSchema } from "./Parser";
import createShortcutsTable from "./Table/ShortCutsTable";
import data from "../../data/data";

const defaultOptions: tableOptions = {
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
export default class DomHandler {
  root: HTMLDivElement;
  opts: tableOptions;
  shortcuts: SCSchema;

  constructor(
    root: HTMLDivElement,
    shortcust: SCSchema,
    opts: tableOptions | undefined
  ) {
    this.root = root;
    this.opts = opts || defaultOptions;
    this.shortcuts = shortcust;
  }

  private applyCustomStyleOptions() {
    if (!this.opts) return false;

    let styleStr = "";
    if (this.opts.rowColors) {
      switch (this.opts.rowColors?.length) {
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
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(styleStr))
    document.head.appendChild(style);
  }

  public create() {
    let table = createShortcutsTable(data.Title, "Title");
    this.applyCustomStyleOptions();
    this.root.appendChild(table);
  }
}
