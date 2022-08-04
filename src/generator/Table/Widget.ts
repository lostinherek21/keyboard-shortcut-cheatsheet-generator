function Widget() {

  function newNode(nodeType: string): HTMLElement {
    return document.createElement(nodeType);
  }

  function insertBefore(newNode: HTMLElement, node: HTMLElement) {
    return node.insertBefore(newNode, node);
  }
  function appendToLast(newNode: HTMLElement, node: HTMLElement) {
    return node.insertBefore(newNode, null);
  }
  function prepend(newNode: HTMLElement,node:HTMLElement){
    return node.insertBefore(newNode, node.firstChild)
  }

  return {
    newNode,
    insertBefore,
    appendToLast,
    prepend
  };
}
export interface NodeManage {
    newNode(nodeType:string) : HTMLElement
}
export default Widget()
