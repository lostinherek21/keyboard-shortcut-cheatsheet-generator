import 'normalize.css'
import Content from '../data/data'
import DomHandler from './generator/DomHandler'

function run(){
    if(!Content) return

    let domHandler = new DomHandler(
        document.getElementById("shortcuts") as HTMLDivElement,
        Content,
        undefined)
    domHandler.create()
}

run()
