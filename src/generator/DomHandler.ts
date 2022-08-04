import tableOptions from "./optionType"
import { SCSchema } from "./Parser"
import createShortcutsTable from "./Table/ShortCutsTable"
import data from "../../data/data"

const defaultOptions:tableOptions = {
    rowColors: ["white","gray"],
    dividerColor: "black",
    fontSize: "1rem"
}

export default class DomHandler {
    root:HTMLDivElement
    opts:tableOptions
    shortcuts: SCSchema

    constructor(root:HTMLDivElement,shortcust:SCSchema, opts:tableOptions | undefined){
        this.root = root
        this.opts = opts || defaultOptions
        this.shortcuts = shortcust
    }

    private applyCustomOptions() {
        if(!this.opts) return false


    }

    public create() {
        let table = createShortcutsTable(data.Title,"Title")
        this.root.appendChild(table)
    }

}