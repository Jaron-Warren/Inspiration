import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
// import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  ProxyState.listItems.forEach(i => template += i.Template)
  document.getElementById('listItems').innerHTML = template
}
export default class ListController {
  constructor() {
    ProxyState.on('listItems', _draw)
    // ProxyState.on('listItems', saveState)

    this.getListItems()
  }

  async getListItems() {
    try {
      await listService.getListItems()
    } catch (error) {
      console.log(' unable to retrieve your list items ' + error)
    }
  }

  addListItem() {
    event.preventDefault()
    let form = event.target
    let listItem = {
      description: form.rawListItem.value
    }
    listService.addListItem(listItem)
    form.reset()
  }
  removeListItem(id) {
    listService.removeListItem(id)
  }
  checkedListItem(id) {
    listService.checkedListItem(id)
    // _draw()
  }
}

