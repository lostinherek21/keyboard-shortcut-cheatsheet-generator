"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Widget() {
    function newNode(nodeType) {
        return document.createElement(nodeType);
    }
    function insertBefore(newNode, node) {
        return node.insertBefore(newNode, node);
    }
    function appendToLast(newNode, node) {
        return node.insertBefore(newNode, null);
    }
    function prepend(newNode, node) {
        return node.insertBefore(newNode, node.firstChild);
    }
    return {
        newNode,
        insertBefore,
        appendToLast,
        prepend
    };
}
exports.default = Widget();
