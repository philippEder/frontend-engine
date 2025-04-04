export class Module  {

    name: String
    onClick: () => void

    constructor(name: String, onClick: () => void) {
        this.name = name
        this.onClick = onClick
    } 
}