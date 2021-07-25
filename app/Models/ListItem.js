import { generateId } from "../Utils/GenerateId.js"
export default class ListItem {
    constructor({ description, id = generateId(), completed = false }) {
        this.description = description
        this.id = id
        this.completed = completed
    }

    get Template() {
        if (this.completed === true) {
            return `
            <div class="col-8 text-left text-light ml-4"> <input type="checkbox" id="lineitem" onclick="app.listController.checkedListItem('${this.id}')" checked> ${this.description}
            </div>
            <button onclick="app.listController.removeListItem('${this.id}')" class="col-1 mdi mdi-delete-forever-outline text-right mr-3">
            </button>
        `
        } else {
            return `
            <div class="col-8 text-left text-light ml-4"> <input type="checkbox" id="lineitem" onclick="app.listController.checkedListItem('${this.id}')"> ${this.description}
            </div>
            <button onclick="app.listController.removeListItem('${this.id}')" class="col-1 mdi mdi-delete-forever-outline text-right mr-3">
            </button>
        `
        }
    }

}