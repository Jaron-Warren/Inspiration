import { ProxyState } from "../AppState.js";

class ImageService {
  getBackground() {
    ProxyState.image = null
  }

  getQuote() {
    ProxyState.quote = null
  }

}

export const imageService = new ImageService();

