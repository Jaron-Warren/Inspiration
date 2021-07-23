import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";
// import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  document.getElementById('lists').innerHTML = template
}
export default class ListController {
  constructor() {
    // ProxyState.on('listItems', _draw)
    // ProxyState.on('listItems', saveState)

    // loadState()
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
    _draw()
  }

}

