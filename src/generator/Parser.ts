import Yaml from "yaml"

export interface Schema {
  modifiers: Array<string>
  description: string
  key:string
}
export interface SCSchema {
    [index:string] : Array<Schema>
}
export type Shortcuts = Array<Schema>
type contentType = "json" | "yaml"

function ShortcutsParser() {
  let content = ""
  let type: contentType | "" = ""

  function init(str: string): boolean {
    if (!str) {
      return false
    }

    content = str
    return true
  }

  function parse(): Shortcuts | undefined {
    let result: Shortcuts | undefined = undefined

    if ((result = JSON.parse(content)) || (result = Yaml.parse(content))) {
      return result
    } else {
      throw Error("Invilid input file, unable to parse it");
    }

  }

  return {
    init,parse,
    type,
  };
}

export default ShortcutsParser();
