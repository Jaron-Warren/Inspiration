import { ProxyState } from "../AppState.js";
import { sandBox } from "./AxiosService.js";

class ImageService {
  async getBackground() {
    let res = await sandBox.get('images')
    // console.log(res.data)
    ProxyState.image = res.data
  }

  getQuote() {
    ProxyState.quote = null
  }

}

export const imageService = new ImageService();

