import { ProxyState } from "../AppState.js";

class ImageService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const imageService = new ImageService();

