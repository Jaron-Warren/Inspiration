import { ProxyState } from "../AppState.js";
import ListItem from "../Models/ListItem.js";
// import { saveState } from "../Utils/LocalStorage.js"
import { sandBox } from "./AxiosService.js";

class ListService {
  async getListItems() {
    const res = await sandBox.get('Jaron/todos')
    // console.log(res.data)
    for (const i of res.data) {
      ProxyState.listItems.push(new ListItem(i))
    }
    ProxyState.listItems = ProxyState.listItems
    this.ListItemsAmount()
  }
  async addListItem(listItem) {
    // console.log('adding list item')
    const res = await sandBox.post('Jaron/todos', listItem)
    // console.log(res.data)
    ProxyState.listItems = [...ProxyState.listItems, new ListItem(res.data)]
    this.ListItemsAmount()
  }
  async removeListItem(id) {
    ProxyState.listItems = ProxyState.listItems.filter(listItem => listItem.id != id)
    this.ListItemsAmount()
    await sandBox.delete('Jaron/todos/' + id)
  }
  async checkedListItem(id) {
    try {
      for (const l in ProxyState.listItems) {
        if (ProxyState.listItems[l].id === id) {
          if (ProxyState.listItems[l].completed === true) {
            ProxyState.listItems[l].completed = false
            this.ListItemsAmount()
            // console.log(ProxyState.listItems[l].completed)
            let res = await sandBox.put('Jaron/todos/' + id, ProxyState.listItems[l])
            // console.log('updated item', res.data)
          } else {
            ProxyState.listItems[l].completed = true
            this.ListItemsAmount()
            // console.log(ProxyState.listItems[l].completed)
            let res = await sandBox.put('Jaron/todos/' + id, ProxyState.listItems[l])
            // console.log('updated item', res.data)
          }
        }
        // saveState()
      }
    } catch (error) {
      console.log('problem saving list item ' + error)
    }
  }
  ListItemsAmount() {
    let listItemsTotal = 0
    let listItemsCompleted = 0
    ProxyState.listItems.forEach(li => {
      listItemsTotal++
      if (li.completed === true) {
        listItemsCompleted++
      }
    })
    document.getElementById('completed').innerText = `${listItemsCompleted}/${listItemsTotal}`
  }
}
export const listService = new ListService()