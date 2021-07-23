import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

//Private
function _draw() {
  _drawBackground()
  _drawQuote()
}

async function _drawBackground() {
  try {
    await imageService.getBackground()
    document.getElementById("body").style.backgroundImage = `url(${ProxyState.image.imgUrl || "../assets/img/winxp.jpg"})`
    // console.log(ProxyState.image.url)
  } catch (error) {
    console.error('problem getting background ' + error)
  }
  // console.log(ProxyState.image)
}

function _drawQuote() {
  document.getElementById("quote").innerText = ProxyState.quote
}

//Public
export default class ImageController {
  constructor() {
    // ProxyState.on("image", _drawBackground);
    // ProxyState.on("quote", _drawQuote);
    _draw()
  }

}
