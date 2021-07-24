import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

//Private
function _drawBackground() {
  document.getElementById("body").style.backgroundImage = `url(${ProxyState.image.imgUrl})`
  // console.log(ProxyState.image.url)
  document.getElementById("imagecredit").innerText = `credit: ${ProxyState.image.author}`
  // console.log(ProxyState.image)
}

//Public
export default class ImageController {
  constructor() {
    this.getBackground()

    ProxyState.on("image", _drawBackground);

  }

  async getBackground() {
    try {
      await imageService.getBackground()
    } catch (error) {
      console.error('problem getting background ' + error)
      document.getElementById("body").style.backgroundImage = `url("../assets/img/winxp.jpg")`
    }
  }
}
