export class TableSelection {
    static className = 'selected'
    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        this.group.push($el)
        $el.focus().addClassname(TableSelection.className)
        this.current = $el
    }

    clear() {
        this.group.forEach($el => $el.removeClassname(TableSelection.className))
        this.group = []
    }

    selectGroup($group = []) {
        this.clear()

        this.group = $group
        this.group.forEach($el => $el.addClassname(TableSelection.className))
    }
}
