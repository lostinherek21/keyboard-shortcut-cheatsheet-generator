import W from './Widget'
import type { Shortcuts as ShortcutsSchema } from '../Parser'

function createShortcutsTable(items:ShortcutsSchema,title:string) {

    function createTable() {
        return W.newNode('table')
    }
    function createTBody() {
        return W.newNode('tbody')
    }
    function newTextNode(text:string){
        return document.createTextNode(text)
    }

    let Table = createTable() as HTMLTableElement
    let TBody = createTBody() as HTMLTableSectionElement
    function initTable(table:HTMLTableElement) {
        let captionNode = document.createElement('caption')
        captionNode.textContent = title
        W.prepend(captionNode,table)
        W.appendToLast(TBody,table)
    }
    initTable(Table)

    for( let i = 0 ; i < items.length; i++) {
        let item = items[i]
        if(!item) {continue}

        TBody.insertRow(i)
        TBody.rows[i].insertCell(0)
        TBody.rows[i].cells[0].appendChild(
            newTextNode(`${item.modifiers.join(" ")} ${item.key}`))
        TBody.rows[i].insertCell(1)
        TBody.rows[i].cells[1].appendChild(
            newTextNode(item.description)
        )
    }

    return Table
}

export default createShortcutsTable