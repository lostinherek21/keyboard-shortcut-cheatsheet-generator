"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Widget_1 = __importDefault(require("./Widget"));
function createShortcutsTable(items, title) {
    function createTable() {
        return Widget_1.default.newNode('table');
    }
    function createTBody() {
        return Widget_1.default.newNode('tbody');
    }
    function newTextNode(text) {
        return document.createTextNode(text);
    }
    let Table = createTable();
    let TBody = createTBody();
    function initTable(table) {
        let captionNode = document.createElement('caption');
        captionNode.textContent = title;
        Widget_1.default.prepend(captionNode, table);
        Widget_1.default.appendToLast(TBody, table);
    }
    initTable(Table);
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (!item) {
            continue;
        }
        TBody.insertRow(i);
        TBody.rows[i].insertCell(0);
        TBody.rows[i].cells[0].appendChild(newTextNode(`${item.modifiers.join(" ")} ${item.key}`));
        TBody.rows[i].insertCell(1);
        TBody.rows[i].cells[1].appendChild(newTextNode(item.description));
    }
    return Table;
}
exports.default = createShortcutsTable;
