import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
// import { saveState } from "../Utils/LocalStorage.js"
import { sandBox } from "./AxiosService.js";

class ListService {
  async addListItem(listItem) {
    console.log('adding list item')
    const res = await sandBox.post('Jaron/todos', listItem)
    console.log(res)
    // ProxyState.listItems = [...ProxyState.listItems, new ListItem(rawListItem)]
  }
  removeListItem(id) {
    if (window.confirm("Delete Item?")) {
      ProxyState.listItems = ProxyState.listItems.filter(listItem => listItem.id != id)
    }
  }

  checkedListItem(id) {
    ProxyState.listItems.forEach(li => {
      if (li.id === id) {
        if (li.checked === 'true') {
          li.checked = 'false'
          console.log(li.checked)
        } else {
          li.checked = 'true'
          console.log(li.checked)
        }
      }
      saveState()
    });
    // let listItem = ProxyState.listItems.filter(listItem => listItem.id === id)
    // if (listItem.checked === 'true') {
    //   listItem.checked = 'false'
    //   console.log(listItem.checked)
    // } else {
    //   listItem.checked = 'true'
    //   console.log(listItem.checked)
    // }
  }

}

export const listService = new ListService()