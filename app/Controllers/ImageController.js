import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

//Private
function _draw() {
  _drawBackground()
  _drawQuote()
}

function _drawBackground() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

function _drawQuote() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawBackground);
    ProxyState.on("quote", _drawQuote);
    _draw()
  }

}
